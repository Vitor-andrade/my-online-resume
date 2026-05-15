import type { Locale } from "@/i18n/routing";
import { type Achievement, achievementSchema } from "./schema";

const achievementSets = {
  en: [
    {
      slug: "global-platform-internationalization",
      title: "Global Platform Internationalization",
      organization: "Fridom",
      period: "2023 – 2024",
      summary:
        "Led the internationalization and full-system refactor of a platform with 1M+ users, restructuring 2 mobile apps, 3 Node.js APIs and a dashboard to support 4 languages via a dynamic, real-time translation management system.",
      impact:
        "Reduced support tickets by 30% and unlocked expansion into Europe and the US, generating a new revenue stream.",
      metrics: [
        { value: "1M+", label: "users served" },
        { value: "−30%", label: "support tickets" },
        { value: "4", label: "languages" },
        { value: "EU + US", label: "markets unlocked" },
      ],
      tech: ["React Native", "React.js", "Node.js", "PostgreSQL", "i18n"],
    },
    {
      slug: "cloud-native-architecture",
      title: "Cloud-Native Application Architecture",
      organization: "Meu Benefício",
      period: "2025",
      summary:
        "Designed and implemented a cloud-native architecture from scratch for a government benefits platform, focused on containerization, environment isolation, scalable deployment and CI/CD-driven release workflows.",
      impact:
        "Delivered production-ready infrastructure with automated deployments and consistent environment management across stages.",
      metrics: [
        { value: "100%", label: "automated deployments" },
        { value: "0", label: "manual release steps" },
      ],
      tech: ["Node.js", "PostgreSQL", "Docker", "AWS EC2", "GitLab CI/CD"],
    },
    {
      slug: "high-risk-project-recovery",
      title: "High-Risk Project Recovery",
      organization: "Finatec",
      period: "2023 – 2024",
      summary:
        "Acted as Technical Lead to recover a critical agricultural research platform, restructuring delivery workflows, aligning business requirements with engineering execution and restoring client trust.",
      impact:
        "Prevented a R$600K contract loss and unlocked R$120K in additional investment through improved delivery.",
      metrics: [
        { value: "R$600K", label: "contract loss prevented" },
        { value: "+R$120K", label: "new investment unlocked" },
      ],
      tech: ["Python", "Django", "Agile", "Jira"],
    },
  ],
  "pt-BR": [
    {
      slug: "global-platform-internationalization",
      title: "Internacionalização de Plataforma Global",
      organization: "Fridom",
      period: "2023 – 2024",
      summary:
        "Liderou a internacionalização e a refatoração completa de uma plataforma com mais de 1 milhão de usuários, reestruturando 2 apps mobile, 3 APIs Node.js e um dashboard para suportar 4 idiomas por meio de um sistema dinâmico de gestão de traduções em tempo real.",
      impact:
        "Reduziu os chamados de suporte em 30% e destravou a expansão para a Europa e os Estados Unidos, gerando uma nova fonte de receita.",
      metrics: [
        { value: "1M+", label: "usuários atendidos" },
        { value: "−30%", label: "chamados de suporte" },
        { value: "4", label: "idiomas" },
        { value: "UE + EUA", label: "mercados destravados" },
      ],
      tech: ["React Native", "React.js", "Node.js", "PostgreSQL", "i18n"],
    },
    {
      slug: "cloud-native-architecture",
      title: "Arquitetura de Aplicação Cloud-Native",
      organization: "Meu Benefício",
      period: "2025",
      summary:
        "Projetou e implementou uma arquitetura cloud-native do zero para uma plataforma governamental de benefícios, com foco em containerização, isolamento de ambientes, deploy escalável e fluxos de release orientados por CI/CD.",
      impact:
        "Entregou infraestrutura pronta para produção com deploys automatizados e gestão consistente de ambientes entre os estágios.",
      metrics: [
        { value: "100%", label: "deploys automatizados" },
        { value: "0", label: "passos manuais de release" },
      ],
      tech: ["Node.js", "PostgreSQL", "Docker", "AWS EC2", "GitLab CI/CD"],
    },
    {
      slug: "high-risk-project-recovery",
      title: "Recuperação de Projeto de Alto Risco",
      organization: "Finatec",
      period: "2023 – 2024",
      summary:
        "Atuou como Líder Técnico na recuperação de uma plataforma crítica de pesquisa agrícola, reestruturando os fluxos de entrega, alinhando os requisitos de negócio à execução de engenharia e restaurando a confiança do cliente.",
      impact:
        "Evitou a perda de um contrato de R$600 mil e destravou R$120 mil em investimento adicional por meio de uma entrega aprimorada.",
      metrics: [
        { value: "R$600K", label: "perda de contrato evitada" },
        { value: "+R$120K", label: "novo investimento destravado" },
      ],
      tech: ["Python", "Django", "Agile", "Jira"],
    },
  ],
} satisfies Record<Locale, unknown[]>;

const achievementsByLocale = {
  en: achievementSets.en.map((entry) => achievementSchema.parse(entry)),
  "pt-BR": achievementSets["pt-BR"].map((entry) =>
    achievementSchema.parse(entry),
  ),
} satisfies Record<Locale, Achievement[]>;

export function getAchievements(locale: Locale): Achievement[] {
  return achievementsByLocale[locale];
}

/** Looks up an achievement by slug for a locale, or undefined. */
export function getAchievementBySlug(
  locale: Locale,
  slug: string,
): Achievement | undefined {
  return achievementsByLocale[locale].find(
    (achievement) => achievement.slug === slug,
  );
}

/** Slugs are locale-invariant — used by generateStaticParams. */
export const achievementSlugs = achievementsByLocale.en.map(
  (achievement) => achievement.slug,
);
