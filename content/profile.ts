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
    role: "Senior Fullstack Engineer",
    headline:
      "Senior Fullstack Engineer building scalable, cloud-native web and mobile platforms.",
    location: "Brasília, Brazil",
    email: "vitor.andradecavalcante@gmail.com",
    phone: "+55 61 99975-7431",
    summary: [
      "Senior Fullstack Engineer with 6+ years of experience building scalable, cloud-native web and mobile platforms along with microservices architecture in React, Next.js, React Native, Node.js, NestJS, TypeScript and AWS.",
      "Led the internationalization of a platform serving over 1 million users, reducing support tickets by 30% and enabling market expansion into Europe and the US.",
      "Delivered full-stack refactors 20% ahead of schedule with targeted performance tuning, boosting user engagement 40% and conversions by 4%.",
      "Led the recovery of critical projects, preventing a R$600K contract loss and unlocking R$120K in additional investment through improved delivery quality.",
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
    resumePdf: "/Vitor_Cavalcante_FullStack_Eng.pdf",
  }),
  "pt-BR": profileSchema.parse({
    name: "Vitor Cavalcante",
    role: "Engenheiro Fullstack Sênior",
    headline:
      "Engenheiro Fullstack Sênior construindo plataformas web e mobile escaláveis e cloud-native.",
    location: "Brasília, Brasil",
    email: "vitor.andradecavalcante@gmail.com",
    phone: "+55 61 99975-7431",
    summary: [
      "Engenheiro Fullstack Sênior com mais de 6 anos de experiência construindo plataformas web e mobile escaláveis e cloud-native junto com arquiteturas de microsserviços em React, Next.js, React Native, Node.js, NestJS, TypeScript e AWS.",
      "Liderou a internacionalização de uma plataforma com mais de 1 milhão de usuários, reduzindo chamados de suporte em 30% e viabilizando a expansão para a Europa e os Estados Unidos.",
      "Entregou refatorações full-stack 20% antes do prazo com tuning de performance direcionado, elevando o engajamento dos usuários em 40% e as conversões em 4%.",
      "Liderou a recuperação de projetos críticos, evitando a perda de um contrato de R$600 mil e acrescentando R$120 mil em investimento adicional por meio de uma entrega de qualidade.",
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
    resumePdf: "/Vitor_Cavalcante_FullStack_Eng.pdf",
  }),
} satisfies Record<Locale, Profile>;

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}
