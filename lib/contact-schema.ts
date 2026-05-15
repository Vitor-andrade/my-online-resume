import { z } from "zod";

/** Shared contact-form schema — validates on the client and again in
 *  the API route, so there is a single source of truth. */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  message: z.string().trim().min(10).max(2000),
  /** Cloudflare Turnstile token; absent when Turnstile is not configured. */
  turnstileToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
