import { skillCategorySchema } from "./schema";

export const skills = [
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
  {
    name: "Languages",
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
].map((category) => skillCategorySchema.parse(category));
