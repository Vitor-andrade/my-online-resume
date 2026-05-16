import type { Locale } from "@/i18n/routing";
import { type SkillCategory, skillCategorySchema } from "./schema";

const skillSets = {
  en: [
    {
      name: "AI & LLM Engineering",
      featured: true,
      skills: [
        "OpenAI API",
        "Google Gemini API",
        "Conversational AI & chatbots",
        "LLM API integration",
        "AI-assisted development",
        "Claude",
        "Cursor",
        "CodeRabbit",
        "Prompt & context engineering",
      ],
    },
    { name: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Go"] },
    {
      name: "Frontend & Mobile",
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Zod",
        "i18n",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "REST APIs",
        "WebSockets",
        "Drizzle ORM",
        "Swagger",
        "JWT",
        "OAuth",
      ],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "Redis", "MySQL", "MongoDB"],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        "AWS (Lambda, S3, EC2, RDS, CloudWatch)",
        "Docker",
        "Terraform",
        "CI/CD",
        "GitHub Actions",
        "GitLab CI",
      ],
    },
    {
      name: "Architecture",
      skills: [
        "Clean Architecture",
        "SOLID",
        "DDD",
        "TDD",
        "Microservices",
        "API Design",
        "Real-time Systems",
        "System Refactoring",
      ],
    },
    {
      name: "Security & Quality",
      skills: [
        "OWASP Top 10",
        "SAST / SCA / DAST",
        "Secure-by-design",
        "Unit Testing",
        "Fortify",
        "Veracode",
        "SonarQube",
      ],
    },
    {
      name: "Methodologies",
      skills: ["Agile", "Scrum", "Kanban", "Jira"],
    },
  ],
  "pt-BR": [
    {
      name: "Engenharia de IA & LLMs",
      featured: true,
      skills: [
        "API da OpenAI",
        "API do Google Gemini",
        "IA conversacional & chatbots",
        "Integração com APIs de LLM",
        "Desenvolvimento assistido por IA",
        "Claude",
        "Cursor",
        "CodeRabbit",
        "Engenharia de prompt & contexto",
      ],
    },
    {
      name: "Linguagens",
      skills: ["TypeScript", "JavaScript", "Python", "Go"],
    },
    {
      name: "Frontend & Mobile",
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Zod",
        "i18n",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "APIs REST",
        "WebSockets",
        "Drizzle ORM",
        "Swagger",
        "JWT",
        "OAuth",
      ],
    },
    {
      name: "Bancos de Dados",
      skills: ["PostgreSQL", "Redis", "MySQL", "MongoDB"],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        "AWS (Lambda, S3, EC2, RDS, CloudWatch)",
        "Docker",
        "Terraform",
        "CI/CD",
        "GitHub Actions",
        "GitLab CI",
      ],
    },
    {
      name: "Arquitetura",
      skills: [
        "Clean Architecture",
        "SOLID",
        "DDD",
        "TDD",
        "Microsserviços",
        "Design de APIs",
        "Sistemas em Tempo Real",
        "Refatoração de Sistemas",
      ],
    },
    {
      name: "Segurança & Qualidade",
      skills: [
        "OWASP Top 10",
        "SAST / SCA / DAST",
        "Secure-by-design",
        "Testes Unitários",
        "Fortify",
        "Veracode",
        "SonarQube",
      ],
    },
    {
      name: "Metodologias",
      skills: ["Agile", "Scrum", "Kanban", "Jira"],
    },
  ],
} satisfies Record<Locale, unknown[]>;

const skillsByLocale = {
  en: skillSets.en.map((category) => skillCategorySchema.parse(category)),
  "pt-BR": skillSets["pt-BR"].map((category) =>
    skillCategorySchema.parse(category),
  ),
} satisfies Record<Locale, SkillCategory[]>;

export function getSkills(locale: Locale): SkillCategory[] {
  return skillsByLocale[locale];
}
