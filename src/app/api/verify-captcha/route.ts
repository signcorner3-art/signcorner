// app/api/verify-captcha/route.ts  (Next.js App Router)
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ success: false, error: "token_missing" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY not set on server");
      return NextResponse.json({ success: false, error: "server_config" }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    });

    const data = await verifyRes.json();

    console.log("reCAPTCHA verify response:", data);

    // data.success is boolean; you can also check score if using v3
    if (!data.success) {
      return NextResponse.json({ success: false, error: "invalid_token", details: data }, { status: 200 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("verify-captcha error:", err);
    return NextResponse.json({ success: false, error: "internal_error" }, { status: 500 });
  }
}
