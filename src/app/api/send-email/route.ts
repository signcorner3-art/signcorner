import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import os from "os";
import path from "path";
import Busboy from "busboy";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // Parse multipart form data (files + fields)
    const { fields, filePath, fileName, mimeType } = await parseForm(req);

    const {
      name = "",
      email = "",
      phone = "",
      source = "",
      description = "",
      service = "",
      message = "",
    } = fields;

    // ✅ Email credentials from .env.local
    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT) || 465;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!host || !user || !pass) {
      console.error("❌ Missing email config");
      return NextResponse.json({ success: false, error: "Missing email config" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const attachments: any[] = [];
    if (filePath && fs.existsSync(filePath)) {
      attachments.push({
        filename: fileName,
        path: filePath,
        contentType: mimeType,
      });
    }

    const mailOptions = {
      from: `"SignCorner Contact Form" <${user}>`,
      to: [user],
      subject: `Info - New Contact Form Submission: ${name || "No name"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Source: ${source}
Description: ${description}
Service: ${service}
Message: ${message}
`,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    // Cleanup temporary file
    if (filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

// ---- helper function to parse multipart form using Busboy ----
function parseForm(req: Request): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const bb = Busboy({ headers: Object.fromEntries(req.headers) });
    const fields: Record<string, string> = {};
    let filePath: string | null = null;
    let fileName: string | null = null;
    let mimeType: string | null = null;

    bb.on("field", (name, value) => {
      fields[name] = value;
    });

    bb.on("file", (name, file, info) => {
      fileName = info.filename;
      mimeType = info.mimeType;
      const tmpDir = os.tmpdir();
      filePath = path.join(tmpDir, `${Date.now()}-${fileName}`);
      const stream = fs.createWriteStream(filePath);
      file.pipe(stream);
    });

    bb.on("close", () => {
      resolve({ fields, filePath, fileName, mimeType });
    });

    bb.on("error", (err) => reject(err));

    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    bb.end(buffer);
  });
}
