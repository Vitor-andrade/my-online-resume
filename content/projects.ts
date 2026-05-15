import { projectSchema } from "./schema";

/**
 * Curated, featured projects. The landing page's Projects section is
 * augmented with pinned GitHub repositories via the GitHub API in
 * Phase 4 (BRIEFING.md §10).
 */
export const projects = [
  {
    name: "Online Résumé",
    description:
      "This site — a Next.js 16 résumé and technical showcase built with a token-driven design system, i18n and an AI-assisted workflow.",
    githubUrl: "https://github.com/Vitor-andrade/my-online-resume",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    year: 2026,
  },
  {
    name: "GitHub Profile",
    description:
      "A crafted GitHub profile README presenting selected engineering impact, the tech stack and live activity stats.",
    githubUrl: "https://github.com/Vitor-andrade/Vitor-andrade",
    stack: ["Markdown", "GitHub Actions"],
  },
].map((entry) => projectSchema.parse(entry));
