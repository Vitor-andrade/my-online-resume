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
      "Senior Fullstack Engineer with 6+ years of experience building scalable, cloud-native web and mobile platforms with a microservices architecture in React, Next.js, React Native, Node.js, NestJS, TypeScript and AWS.",
      "Led the internationalization of a platform serving over 1 million users, reducing support tickets by 30% and enabling market expansion into Europe and the US.",
      "Delivered full-stack refactors 20% ahead of schedule with targeted performance tuning, boosting user engagement 40% and conversions by 4%.",
      "Skilled in CI/CD automation, observability and secure-by-design practices, accelerating delivery speed by 30% and reducing production issues by 20%.",
    ],
    socials: SOCIALS,
    languages: [
      { name: "English", level: "C1 — Advanced" },
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
      "Engenheiro Fullstack Sênior com mais de 6 anos de experiência construindo plataformas web e mobile escaláveis e cloud-native com arquitetura de microsserviços em React, Next.js, React Native, Node.js, NestJS, TypeScript e AWS.",
      "Liderou a internacionalização de uma plataforma com mais de 1 milhão de usuários, reduzindo chamados de suporte em 30% e viabilizando a expansão para a Europa e os Estados Unidos.",
      "Entregou refatorações full-stack 20% antes do prazo com tuning de performance direcionado, elevando o engajamento dos usuários em 40% e as conversões em 4%.",
      "Especializado em automação de CI/CD, observabilidade e práticas secure-by-design, acelerando a velocidade de entrega em 30% e reduzindo incidentes em produção em 20%.",
    ],
    socials: SOCIALS,
    languages: [
      { name: "Inglês", level: "C1 — Avançado" },
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
