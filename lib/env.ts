import { z } from "zod";

/**
 * Environment access, validated with Zod. Every variable is optional:
 * the build never fails on a missing key. Features that need a key
 * (contact email, anti-spam, analytics) check at runtime and degrade
 * gracefully when it is absent. See env.example.
 */

const serverEnv = z
  .object({
    RESEND_API_KEY: z.string().optional(),
    CONTACT_TO_EMAIL: z.email().optional(),
    TURNSTILE_SECRET_KEY: z.string().optional(),
  })
  .parse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  });

const clientEnv = z
  .object({
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
    NEXT_PUBLIC_SITE_URL: z.url().optional(),
  })
  .parse({
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  });

export { clientEnv, serverEnv };
