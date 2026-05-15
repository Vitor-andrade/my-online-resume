import { describe, expect, it } from "vitest";
import { achievementSchema, experienceSchema } from "@/content/schema";
import { contactSchema } from "@/lib/contact-schema";

describe("experienceSchema", () => {
  const valid = {
    company: "Acme",
    role: "Engineer",
    location: "Remote",
    start: "2024-01",
    end: null,
    highlights: ["Did a thing"],
    stack: ["TypeScript"],
  };

  it("accepts a well-formed entry", () => {
    expect(experienceSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a malformed start date", () => {
    expect(
      experienceSchema.safeParse({ ...valid, start: "2024-13" }).success,
    ).toBe(false);
  });

  it("rejects an empty highlights list", () => {
    expect(
      experienceSchema.safeParse({ ...valid, highlights: [] }).success,
    ).toBe(false);
  });
});

describe("achievementSchema", () => {
  const valid = {
    slug: "my-case-study",
    title: "A Case Study",
    organization: "Acme",
    period: "2024",
    summary: "Summary",
    impact: "Impact",
    tech: ["Next.js"],
  };

  it("defaults metrics to an empty array", () => {
    const parsed = achievementSchema.parse(valid);
    expect(parsed.metrics).toEqual([]);
  });

  it("rejects a non-kebab-case slug", () => {
    expect(
      achievementSchema.safeParse({ ...valid, slug: "Not A Slug" }).success,
    ).toBe(false);
  });
});

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    expect(
      contactSchema.safeParse({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Hello, I'd like to talk about a role.",
      }).success,
    ).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(
      contactSchema.safeParse({
        name: "Jane Doe",
        email: "not-an-email",
        message: "Hello, I'd like to talk about a role.",
      }).success,
    ).toBe(false);
  });

  it("rejects a too-short message", () => {
    expect(
      contactSchema.safeParse({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "hi",
      }).success,
    ).toBe(false);
  });
});
