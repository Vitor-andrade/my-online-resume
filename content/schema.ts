import { z } from "zod";

/**
 * Zod schemas for all résumé content — the single source of truth.
 * Content files parse themselves against these at module load, so a
 * malformed entry fails the build. TS types are inferred from here,
 * never hand-duplicated (CLAUDE.md §5).
 */

/** Calendar month, e.g. "2025-07". */
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Expected YYYY-MM");

/** URL-safe slug used for dedicated achievement routes. */
const slug = z.string().regex(/^[a-z0-9-]+$/, "Expected a kebab-case slug");

export const socialLinkSchema = z.object({
  platform: z.enum(["linkedin", "github", "gitlab", "email"]),
  label: z.string().min(1),
  url: z.string().min(1),
});

export const languageSchema = z.object({
  name: z.string().min(1),
  level: z.string().min(1),
});

export const profileSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  headline: z.string().min(1),
  location: z.string().min(1),
  email: z.email(),
  phone: z.string().min(1),
  summary: z.array(z.string().min(1)).min(1),
  socials: z.array(socialLinkSchema).min(1),
  languages: z.array(languageSchema).min(1),
  resumePdf: z.string().startsWith("/"),
});

export const skillCategorySchema = z.object({
  name: z.string().min(1),
  featured: z.boolean().default(false),
  skills: z.array(z.string().min(1)).min(1),
});

export const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  location: z.string().min(1),
  start: yearMonth,
  /** null marks an ongoing role ("Present"). */
  end: yearMonth.nullable(),
  highlights: z.array(z.string().min(1)).min(1),
  stack: z.array(z.string().min(1)),
});

export const educationSchema = z.object({
  institution: z.string().min(1),
  degree: z.string().min(1),
  field: z.string().min(1).optional(),
  start: yearMonth,
  end: yearMonth.nullable(),
});

export const metricSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

export const achievementSchema = z.object({
  slug,
  title: z.string().min(1),
  organization: z.string().min(1),
  period: z.string().min(1),
  summary: z.string().min(1),
  impact: z.string().min(1),
  metrics: z.array(metricSchema).default([]),
  tech: z.array(z.string().min(1)).min(1),
});

export const projectSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  /** null when the repository is private and cannot be linked. */
  githubUrl: z.url().nullable(),
  stack: z.array(z.string().min(1)).min(1),
  year: z.number().int().optional(),
});

export const certificationSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  year: z.number().int(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Metric = z.infer<typeof metricSchema>;
export type Achievement = z.infer<typeof achievementSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certification = z.infer<typeof certificationSchema>;
