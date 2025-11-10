import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, source, description, service, message, fileName } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"SignCorner Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // you receive it yourself
      subject: `New Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Source: ${source}
Description: ${description}
Service: ${service}
Message: ${message}
File: ${fileName || "No file uploaded"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}