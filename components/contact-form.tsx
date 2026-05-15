"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/contact-schema";

// Public site key — inlined at build; absent means Turnstile is off.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "submitting" | "success" | "error";

const ERROR_KEYS: Record<string, string> = {
  turnstile: "errorTurnstile",
  not_configured: "errorNotConfigured",
  validation: "errorValidation",
};

/** Accessible contact form — validates with the shared Zod schema and
 *  posts to /api/contact. */
export function ContactForm() {
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const parsed = contactSchema.safeParse({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      turnstileToken,
    });

    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(t("errorValidation"));
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (result.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      setStatus("error");
      setErrorMessage(t(ERROR_KEYS[result.error ?? ""] ?? "errorGeneric"));
    } catch {
      setStatus("error");
      setErrorMessage(t("errorGeneric"));
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="border-brand/40 bg-accent text-accent-foreground rounded-lg border p-4 text-sm"
      >
        {t("success")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack gap="md" className="max-w-xl">
        <Stack gap="xs">
          <Label htmlFor="contact-name">{t("name")}</Label>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("namePlaceholder")}
          />
        </Stack>
        <Stack gap="xs">
          <Label htmlFor="contact-email">{t("email")}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
          />
        </Stack>
        <Stack gap="xs">
          <Label htmlFor="contact-message">{t("message")}</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder={t("messagePlaceholder")}
          />
        </Stack>

        {TURNSTILE_SITE_KEY ? (
          <Turnstile
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            options={{ theme: "auto" }}
          />
        ) : null}

        {status === "error" ? (
          <p role="alert" className="text-destructive text-sm">
            {errorMessage}
          </p>
        ) : null}

        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? t("sending") : t("send")}
        </Button>
      </Stack>
    </form>
  );
}
