import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { serverEnv } from "@/lib/env";

/** Verifies a Cloudflare Turnstile token. When Turnstile is not
 *  configured the check is skipped (returns true). */
async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  if (!serverEnv.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: serverEnv.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );
  const data = (await response.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_request" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 422 },
    );
  }

  const isHuman = await verifyTurnstile(parsed.data.turnstileToken);
  if (!isHuman) {
    return NextResponse.json(
      { ok: false, error: "turnstile" },
      { status: 403 },
    );
  }

  if (!serverEnv.RESEND_API_KEY || !serverEnv.CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(serverEnv.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Résumé Contact <onboarding@resend.dev>",
    to: serverEnv.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
