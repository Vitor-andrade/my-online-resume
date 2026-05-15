import type { Locale } from "@/i18n/routing";
import { type Project, projectSchema } from "./schema";

/**
 * Curated, featured projects. The landing page's Projects section is
 * augmented with pinned GitHub repositories via the GitHub API in
 * lib/github.ts.
 */
const projectSets = {
  en: [
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
  ],
  "pt-BR": [
    {
      name: "Currículo Online",
      description:
        "Este site — um currículo e vitrine técnica em Next.js 16, construído com um design system orientado a tokens, i18n e um fluxo de trabalho assistido por IA.",
      githubUrl: "https://github.com/Vitor-andrade/my-online-resume",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
      year: 2026,
    },
    {
      name: "Perfil do GitHub",
      description:
        "Um README de perfil do GitHub cuidadosamente elaborado, apresentando impacto de engenharia selecionado, a stack e estatísticas de atividade ao vivo.",
      githubUrl: "https://github.com/Vitor-andrade/Vitor-andrade",
      stack: ["Markdown", "GitHub Actions"],
    },
  ],
} satisfies Record<Locale, unknown[]>;

const projectsByLocale = {
  en: projectSets.en.map((entry) => projectSchema.parse(entry)),
  "pt-BR": projectSets["pt-BR"].map((entry) => projectSchema.parse(entry)),
} satisfies Record<Locale, Project[]>;

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}
