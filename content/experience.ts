import type { Locale } from "@/i18n/routing";
import { type Experience, experienceSchema } from "./schema";

const experiences = {
  en: [
    {
      company: "Click Planos",
      role: "Senior Fullstack Engineer",
      location: "Brasília, Brazil",
      start: "2025-07",
      end: null,
      highlights: [
        "Decoupled a monolithic Next.js application into a scalable frontend (Next.js) and backend (NestJS); delivered 20% ahead of a 40-day deadline, boosting user interactions 40% and conversion 4% on a platform handling thousands of daily registrations.",
        "Architected cloud-native backend services with Redis caching, PostgreSQL persistence and Drizzle ORM on AWS (S3, EC2, RDS, Lambda), applying performance tuning to sustain higher traffic volumes.",
        "Shipped third-party integrations with D4Sign, HubSpot, Pipedrive and PostHog for contract signing, CRM automation and product observability via RESTful APIs, eliminating manual operational effort.",
        "Accelerated delivery speed 30% and reduced production issues 20% by implementing CI/CD with GitHub Actions, Doppler-managed secrets and AI-assisted workflows (CodeRabbit, Cursor, Claude).",
      ],
      stack: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "TanStack Query",
        "Zod",
        "Zustand",
        "Drizzle ORM",
        "PostgreSQL",
        "Redis",
        "AWS",
        "PostHog",
      ],
    },
    {
      company: "Evernow",
      role: "Senior DevSecOps Analyst",
      location: "São Paulo, Brazil",
      start: "2022-09",
      end: null,
      highlights: [
        "Architected secure CI/CD pipelines for healthcare and financial platforms serving millions of users, integrating SAST, SCA and DAST tooling (Fortify, Veracode, SonarQube) with GitHub Actions and AWS CloudWatch; cut first-response SLA from 3 days to 24 hours and ticket volume 30% through Python-based automation.",
        "Led code-level remediation of SQL Injection vulnerabilities across ~300 applications, building Python integrations with Fortify APIs to deliver OWASP Top 10–compliant code at scale.",
      ],
      stack: [
        "Python",
        "GitHub Actions",
        "AWS CloudWatch",
        "Fortify",
        "Veracode",
        "SonarQube",
      ],
    },
    {
      company: "Fridom",
      role: "Senior Fullstack Engineer",
      location: "Brasília, Brazil",
      start: "2020-01",
      end: "2025-01",
      highlights: [
        "Engineered a real-time mobile platform for event discovery and transactions with geolocation, WebSocket-based payments, QR code validation, JWT and role-based access control, serving hundreds of thousands of users.",
        "Diagnosed and resolved a critical payment bug via log tracing in AWS EC2 (PM2), reducing API response time from 5 minutes to 10 seconds and recovering over R$50K in financial discrepancies.",
        "Enhanced API security by redesigning endpoints and migrating from Node.js to NestJS, mitigating large-scale DDoS and brute-force attacks and reducing response time by 12%.",
      ],
      stack: [
        "React Native",
        "Expo",
        "Node.js",
        "NestJS",
        "WebSockets",
        "PostgreSQL",
        "AWS EC2",
        "Zoop",
      ],
    },
    {
      company: "Fest Intermediação e Tecnologia",
      role: "Fullstack Engineer",
      location: "Brasília, Brazil",
      start: "2023-11",
      end: "2024-11",
      highlights: [
        "Developed a real-time ticketing dashboard with Next.js and WebSockets, delivering live transaction updates, financial analytics and QR code generation; supported thousands of weekly transactions.",
        "Migrated the backend from Node.js to NestJS with Swagger-documented APIs, improving response time 4% and establishing a standardized, microservices-ready endpoint architecture.",
        "Implemented payment infrastructure from scratch by integrating Asaas APIs, enabling secure, real-time transactions aligned with business growth.",
      ],
      stack: [
        "Next.js",
        "React",
        "Node.js",
        "NestJS",
        "WebSockets",
        "PostgreSQL",
        "Asaas API",
      ],
    },
  ],
  "pt-BR": [
    {
      company: "Click Planos",
      role: "Engenheiro Fullstack Sênior",
      location: "Brasília, Brasil",
      start: "2025-07",
      end: null,
      highlights: [
        "Desacoplou uma aplicação Next.js monolítica em um frontend escalável (Next.js) e um backend (NestJS); entregou 20% antes de um prazo de 40 dias, elevando as interações dos usuários em 40% e a conversão em 4% numa plataforma com milhares de cadastros diários.",
        "Arquitetou serviços de backend cloud-native com cache em Redis, persistência em PostgreSQL e Drizzle ORM na AWS (S3, EC2, RDS, Lambda), aplicando tuning de performance para sustentar volumes maiores de tráfego.",
        "Entregou integrações com terceiros — D4Sign, HubSpot, Pipedrive e PostHog — para assinatura de contratos, automação de CRM e observabilidade de produto via APIs RESTful, eliminando esforço operacional manual.",
        "Acelerou a velocidade de entrega em 30% e reduziu incidentes em produção em 20% implementando CI/CD com GitHub Actions, segredos gerenciados pelo Doppler e fluxos assistidos por IA (CodeRabbit, Cursor, Claude).",
      ],
      stack: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "TanStack Query",
        "Zod",
        "Zustand",
        "Drizzle ORM",
        "PostgreSQL",
        "Redis",
        "AWS",
        "PostHog",
      ],
    },
    {
      company: "Evernow",
      role: "Analista DevSecOps Sênior",
      location: "São Paulo, Brasil",
      start: "2022-09",
      end: null,
      highlights: [
        "Arquitetou pipelines de CI/CD seguros para plataformas de saúde e financeiras que atendem milhões de usuários, integrando ferramentas SAST, SCA e DAST (Fortify, Veracode, SonarQube) com GitHub Actions e AWS CloudWatch; reduziu o SLA de primeira resposta de 3 dias para 24 horas e o volume de chamados em 30% por meio de automação em Python.",
        "Liderou a remediação, em nível de código, de vulnerabilidades de SQL Injection em cerca de 300 aplicações, construindo integrações em Python com as APIs do Fortify para entregar código em conformidade com o OWASP Top 10 em escala.",
      ],
      stack: [
        "Python",
        "GitHub Actions",
        "AWS CloudWatch",
        "Fortify",
        "Veracode",
        "SonarQube",
      ],
    },
    {
      company: "Fridom",
      role: "Engenheiro Fullstack Sênior",
      location: "Brasília, Brasil",
      start: "2020-01",
      end: "2025-01",
      highlights: [
        "Desenvolveu uma plataforma mobile em tempo real para descoberta de eventos e transações, com geolocalização, pagamentos via WebSocket, validação por QR code, JWT e controle de acesso por perfil, atendendo centenas de milhares de usuários.",
        "Diagnosticou e resolveu um bug crítico de pagamento via rastreamento de logs na AWS EC2 (PM2), reduzindo o tempo de resposta da API de 5 minutos para 10 segundos e recuperando mais de R$50 mil em divergências financeiras.",
        "Reforçou a segurança da API redesenhando endpoints e migrando de Node.js para NestJS, mitigando ataques de DDoS e força bruta em larga escala e reduzindo o tempo de resposta em 12%.",
      ],
      stack: [
        "React Native",
        "Expo",
        "Node.js",
        "NestJS",
        "WebSockets",
        "PostgreSQL",
        "AWS EC2",
        "Zoop",
      ],
    },
    {
      company: "Fest Intermediação e Tecnologia",
      role: "Engenheiro Fullstack",
      location: "Brasília, Brasil",
      start: "2023-11",
      end: "2024-11",
      highlights: [
        "Desenvolveu um dashboard de bilheteria em tempo real com Next.js e WebSockets, entregando atualizações de transações ao vivo, análises financeiras e geração de QR code; suportou milhares de transações semanais.",
        "Migrou o backend de Node.js para NestJS com APIs documentadas via Swagger, melhorando o tempo de resposta em 4% e estabelecendo uma arquitetura de endpoints padronizada e pronta para microsserviços.",
        "Implementou a infraestrutura de pagamentos do zero integrando as APIs da Asaas, viabilizando transações seguras e em tempo real alinhadas ao crescimento do negócio.",
      ],
      stack: [
        "Next.js",
        "React",
        "Node.js",
        "NestJS",
        "WebSockets",
        "PostgreSQL",
        "Asaas API",
      ],
    },
  ],
} satisfies Record<Locale, unknown[]>;

const experienceByLocale = {
  en: experiences.en.map((entry) => experienceSchema.parse(entry)),
  "pt-BR": experiences["pt-BR"].map((entry) => experienceSchema.parse(entry)),
} satisfies Record<Locale, Experience[]>;

export function getExperience(locale: Locale): Experience[] {
  return experienceByLocale[locale];
}
