import {
  SiClaude,
  SiCursor,
  SiDocker,
  SiExpo,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiJira,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSonarqubeserver,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiZod,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

/**
 * Brand icons keyed by skill label. Most tech names are identical
 * across locales; the few that differ and have an icon list both
 * spellings. Skills without a brand mark (concepts, methodologies)
 * are simply absent.
 */
const SKILL_ICONS: Record<string, IconComponent> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Go: SiGo,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  Expo: SiExpo,
  "Tailwind CSS": SiTailwindcss,
  "TanStack Query": SiReactquery,
  Zod: SiZod,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithubactions,
  "GitLab CI": SiGitlab,
  Swagger: SiSwagger,
  JWT: SiJsonwebtokens,
  Jira: SiJira,
  SonarQube: SiSonarqubeserver,
  Claude: SiClaude,
  Cursor: SiCursor,
  "Google Gemini API": SiGooglegemini,
  "API do Google Gemini": SiGooglegemini,
};

/** Returns the brand icon for a skill label, or undefined. */
export function getSkillIcon(skill: string): IconComponent | undefined {
  return SKILL_ICONS[skill];
}
