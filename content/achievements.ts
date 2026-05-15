import { achievementSchema } from "./schema";

export const achievements = [
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
].map((entry) => achievementSchema.parse(entry));
