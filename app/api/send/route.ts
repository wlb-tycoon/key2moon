import type { NextRequest, NextResponse } from "next/server";

import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, topic, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sunrise96208@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, topic, message }),
      text: "",
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}
