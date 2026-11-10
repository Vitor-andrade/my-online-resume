import type { Locale } from "@/i18n/routing";
import { type Profile, profileSchema } from "./schema";

const SOCIALS = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vitor-andrade-cavalcante/",
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/Vitor-andrade",
  },
  {
    platform: "gitlab",
    label: "GitLab",
    url: "https://gitlab.com/Vitor-andrade",
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:vitor.andradecavalcante@gmail.com",
  },
];

const profiles = {
  en: profileSchema.parse({
    name: "Vitor Cavalcante",
    role: "Senior Software Engineer",
    roles: [
      "Senior Software Engineer",
      "React Specialist",
      "React Native Specialist",
      "Node.js Specialist",
      "Senior DevSecOps Engineer",
      "Fullstack Developer",
      "AI Specialist",
      "AI Engineer",
    ],
    headline:
      "Senior Software Engineer building scalable web, mobile and AI-powered platforms.",
    location: "Brasília, Brazil",
    email: "vitor.andradecavalcante@gmail.com",
    phone: "+55 61 99975-7431",
    summary: [
      "Senior Software Engineer with 6+ years designing and scaling cloud-native web and mobile solutions using React, Next.js, React Native, Node.js, NestJS, TypeScript and AWS.",
      "Brings hands-on AI engineering experience integrating conversational agents, RAG workflows, model evaluations and MCP-based automation. Owned end-to-end delivery of an AI-powered platform in an international team, supporting its first ~US$700K enterprise agreement.",
      "Previously led internationalization of a platform serving 1M+ users, reducing support tickets by 30% and enabling expansion into Europe and the US. Combines fullstack ownership with CI/CD automation, observability and secure development practices.",
    ],
    socials: SOCIALS,
    languages: [
      {
        name: "English",
        level: "C1 — Advanced",
        credentialUrl: "/IELTS_ACADEMIC.pdf",
      },
      { name: "Portuguese", level: "Native" },
      { name: "Spanish", level: "B1 — Intermediate" },
      { name: "French", level: "A1 — Beginner" },
    ],
    resumePdf: "/Vitor_Cavalcante_Software_Eng.pdf",
  }),
  "pt-BR": profileSchema.parse({
    name: "Vitor Cavalcante",
    role: "Engenheiro de Software Sênior",
    roles: [
      "Engenheiro de Software Sênior",
      "Especialista em React",
      "Especialista em React Native",
      "Especialista em Node.js",
      "Engenheiro DevSecOps Sênior",
      "Desenvolvedor Fullstack",
      "Especialista em IA",
      "Engenheiro de IA",
    ],
    headline:
      "Engenheiro de Software Sênior construindo plataformas web, mobile e soluções com IA escaláveis.",
    location: "Brasília, Brasil",
    email: "vitor.andradecavalcante@gmail.com",
    phone: "+55 61 99975-7431",
    summary: [
      "Engenheiro de Software Sênior com mais de 6 anos projetando e escalando soluções web e mobile cloud-native com React, Next.js, React Native, Node.js, NestJS, TypeScript e AWS.",
      "Experiência prática em engenharia de IA, integrando agentes conversacionais, fluxos RAG, avaliação de modelos e automação via MCP. Responsável pela entrega de ponta a ponta de uma plataforma com IA em uma equipe internacional, apoiando seu primeiro contrato empresarial de aproximadamente US$700 mil.",
      "Liderou a internacionalização de uma plataforma com mais de 1 milhão de usuários, reduzindo chamados de suporte em 30% e viabilizando expansão para Europa e Estados Unidos. Combina atuação fullstack com automação de CI/CD, observabilidade e desenvolvimento seguro.",
    ],
    socials: SOCIALS,
    languages: [
      {
        name: "Inglês",
        level: "C1 — Avançado",
        credentialUrl: "/IELTS_ACADEMIC.pdf",
      },
      { name: "Português", level: "Nativo" },
      { name: "Espanhol", level: "B1 — Intermediário" },
      { name: "Francês", level: "A1 — Básico" },
    ],
    resumePdf: "/Vitor_Cavalcante_Software_Eng.pdf",
  }),
} satisfies Record<Locale, Profile>;

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}
