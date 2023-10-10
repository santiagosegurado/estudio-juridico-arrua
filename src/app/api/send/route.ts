import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_aBujecCu_NBkjgNovyMk9r8yApxTCdxuv");

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  try {

    const data = await resend.emails.send({
      from: "Estudio Arrua <noreply@estudioarruayasoc.com>",
      to: ["santisegurado1@gmail.com"],
      subject,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }),
      text: "Estudio Arrua",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
