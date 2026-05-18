import type { Locale } from "@/i18n/routing";
import { type Achievement, achievementSchema } from "./schema";

// Locale-invariant data — galleries and tech stacks are the same in
// every language.
const FINATEC_TECH = [
  "Python",
  "Django",
  "PostgreSQL",
  "RabbitMQ",
  "Redis",
  "OpenLayers",
  "AWS",
  "Vercel",
  "Jira",
  "Agile",
  "Scrum",
];

const LAVO_TECH = [
  "React Native",
  "Expo",
  "React.js",
  "Node.js",
  "WebSockets",
  "PostgreSQL",
  "AWS",
  "i18n",
  "Jira",
  "Agile",
  "Scrum",
];

const FEST_TECH = [
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GitLab CI/CD",
  "WebSockets",
  "OAuth",
  "JWT",
  "Asaas",
  "Stripe",
  "Jira",
  "Agile",
  "Scrum",
];

const FINATEC_GALLERY = [
  "/Finatec/contracts_asset.JPG",
  "/Finatec/contract_details_asset.JPG",
  "/Finatec/property_asset.JPG",
  "/Finatec/map_asset.jpg",
  "/Finatec/documents_asset.JPG",
];

const LAVO_GALLERY = [
  "/Lavo/services_asset.jpg",
  "/Lavo/services_bundle_asset.jpg",
  "/Lavo/service_map_selection_asset.jpg",
  "/Lavo/map_route_asset.jpg",
  "/Lavo/lavo_service_route_asset.jpg",
  "/Lavo/services_scheduled_asset.jpg",
  "/Lavo/europe_service_scheduled_asset.jpg",
  "/Lavo/qr_code_asset.jpg",
  "/Lavo/wallet_asset.jpg",
  "/Lavo/wallet_fund_added_asset.jpg",
  "/Lavo/lavo_period_earnings_asset.jpg",
  "/Lavo/lavo_services_asset.jpg",
];

const FEST_WEB_GALLERY = [
  "/Fest/Web/home_asset.JPG",
  "/Fest/Web/tickets_asset.JPG",
  "/Fest/Web/pix_payment_asset.JPG",
  "/Fest/Web/analytics_asset.JPG",
  "/Fest/Web/mobile_cover_asset.JPG",
];

const FEST_APP_GALLERY = [
  "/Fest/App/show_page_asset.JPG",
  "/Fest/App/map_asset.JPG",
  "/Fest/App/map3_asset.JPG",
  "/Fest/App/ticket_selection_quantity_asset.JPG",
  "/Fest/App/ticket_bought_asset.JPG",
  "/Fest/App/user_ticket_asset.JPG",
  "/Fest/App/product_buy_asset.JPG",
  "/Fest/App/product_selection_quantity_asset.JPG",
  "/Fest/App/product_qrcode_asset.JPG",
  "/Fest/App/person_order_asset.JPG",
  "/Fest/App/chat_asset.JPG",
  "/Fest/App/push_notification_asset.JPG",
  "/Fest/App/profile_asset.JPG",
  "/Fest/App/company_asset.JPG",
];

const achievementSets = {
  en: [
    {
      slug: "high-risk-project-recovery",
      title: "High-Risk Project Recovery",
      organization: "Finatec",
      period: "2023 – 2024",
      cover: "/Finatec/cover.png",
      summary:
        "Acted as Technical Lead to recover a critical agricultural-research platform — a legacy Django system for environmental preservation — restructuring delivery, aligning business with engineering and restoring client trust.",
      impact:
        "Prevented a R$600K contract loss and unlocked R$120K in additional investment through improved delivery.",
      metrics: [
        { value: "R$600K", label: "contract loss prevented" },
        { value: "+R$120K", label: "additional investment unlocked" },
      ],
      tech: FINATEC_TECH,
      chapters: [
        {
          highlights: [
            "Ran design and architecture sessions with the client to understand the problem and their needs.",
            "Acted as Technical Lead to recover the critical agricultural-research platform, restructuring delivery workflows and aligning business requirements with engineering execution.",
            "Modernized a legacy Django administrative panel and implemented new system features.",
            "Built a geolocation-based system for environmental-area registration using polygon mapping.",
            "Integrated OpenLayers for interactive polygon drawing and spatial-data management.",
            "Implemented complex area-based calculation logic to determine environmental-preservation incentives.",
            "Designed multi-role access control, including auditor-level validation and financial oversight.",
            "Used PostgreSQL and Redis for data persistence and performance optimization.",
            "Enabled financial tracking and management of conservation-incentive payments.",
          ],
          outcomes: [
            "Prevented a R$600K contract loss and unlocked R$120K in additional investment through improved delivery.",
            "Digitized environmental-area validation and monitoring workflows.",
            "Improved the accuracy and transparency of incentive-calculation processes.",
            "Enhanced administrative efficiency for environmental-compliance auditing.",
          ],
          gallery: FINATEC_GALLERY,
        },
      ],
    },
    {
      slug: "global-platform-internationalization",
      title: "Global Platform Internationalization",
      organization: "Lavô",
      period: "2023 – 2024",
      cover: "/Lavo/cover.jpg",
      summary:
        "Led the internationalization and large-scale refactor of a platform serving 1M+ users — restructuring 2 mobile apps, 3 Node.js APIs and an admin dashboard to support 4 languages.",
      impact:
        "Reduced support tickets by 30% and unlocked expansion into Europe and the US, generating a new revenue stream.",
      metrics: [
        { value: "1M+", label: "users served" },
        { value: "−30%", label: "support tickets" },
        { value: "4", label: "languages" },
        { value: "EU + US", label: "markets unlocked" },
      ],
      tech: LAVO_TECH,
      chapters: [
        {
          highlights: [
            "Led the internationalization and large-scale refactor of a platform serving 1M+ users — restructuring 2 React Native (Expo) apps, 3 Node.js APIs and an admin dashboard to support 4 languages (PT-BR/PT, EN, ES, FR).",
            "Designed and built a dynamic, real-time translation-management system that let the client register and update translation strings directly, removing manual translation effort.",
            "Connected a client app and a service-provider app in real time over WebSockets — each app keeping its own layout and design while communicating live.",
            "Diagnosed and resolved a critical financial bug in a high-traffic payment system, tracing an infinite loop through logs on AWS EC2 (PM2) and cutting API response time from 5 minutes to 10 seconds.",
          ],
          outcomes: [
            "Reduced support tickets by 30% and unlocked expansion into Europe and the US, generating a new revenue stream.",
            "Recovered over R$50K by correcting payment inconsistencies and improved the payment system's reliability.",
            "Improved the user experience by automating the registration and updating of translation strings.",
          ],
          gallery: LAVO_GALLERY,
        },
      ],
    },
    {
      slug: "cloud-native-architecture",
      title: "Cloud-Native Application Architecture",
      organization: "Fest",
      period: "2023 – 2024",
      cover: "/Fest/App/cover.JPG",
      summary:
        "Delivered a cloud-native event platform — a ticketing web dashboard and a social mobile app forming one product — on a containerized, CI/CD-driven architecture with automated deploys.",
      impact:
        "Shipped an end-to-end ticketing, venue-commerce and financial-management product across web and mobile.",
      metrics: [
        { value: "2", label: "platforms — web + app" },
        { value: "3", label: "user roles" },
      ],
      tech: FEST_TECH,
      chapters: [
        {
          title: "Web Platform",
          summary:
            "Modernized and finalized a legacy event-ticketing platform — a complete digital solution for ticket sales, event management and financial tracking.",
          highlights: [
            "Refactored and enhanced a legacy Next.js dashboard integrated with a Node.js backend.",
            "Implemented browser geolocation to surface nearby events dynamically.",
            "Built a secure ticket-purchasing flow with Asaas payment-gateway integration.",
            "Implemented JWT authentication with multi-role access (Customer and Event Producer).",
            "Built a QR Code ticket generation and validation system.",
            "Developed automated cancellation rules and payment-handling logic.",
            "Created a Producer Dashboard for event management, financial reporting, sales metrics and payout configuration.",
            "Implemented financial-transfer workflows with producer bank-account registration.",
          ],
          outcomes: [
            "Delivered an end-to-end ticketing and financial-management solution.",
            "Improved producer autonomy through real-time metrics and operational control.",
            "Enhanced the customer purchase experience with a secure, streamlined checkout.",
          ],
          gallery: FEST_WEB_GALLERY,
        },
        {
          title: "Mobile App",
          summary:
            "A mobile-first event-discovery and social-engagement app built with React Native (Expo), combining ticketing, venue commerce and real-time social interaction.",
          highlights: [
            "Built location-based event and venue discovery within a 50 km radius, on a map-based interface.",
            "Implemented social features: user profiles, real-time chat over WebSockets, a friend system and Tinder-style matching.",
            "Built in-app ticket purchasing and venue product ordering (food & beverages).",
            "Integrated Stripe payments through an internal Node.js middleware.",
            "Implemented QR Code validation with webhook-based payment confirmation and PostgreSQL inventory management.",
            "Developed multi-role access (Client, Producer, Venue Owner) with event and menu management.",
            "Created a Producer Dashboard for event creation, product management and financial analytics.",
            "Architected scalable cloud infrastructure on AWS.",
          ],
          outcomes: [
            "Unified ticketing, venue commerce and social networking into a single mobile ecosystem.",
            "Enabled real-time engagement between event attendees.",
            "Gave producers operational and financial control tools.",
          ],
          gallery: FEST_APP_GALLERY,
        },
      ],
    },
  ],
  "pt-BR": [
    {
      slug: "high-risk-project-recovery",
      title: "Recuperação de Projeto de Alto Risco",
      organization: "Finatec",
      period: "2023 – 2024",
      cover: "/Finatec/cover.png",
      summary:
        "Atuou como Líder Técnico na recuperação de uma plataforma crítica de pesquisa agrícola — um sistema legado em Django para preservação ambiental — reestruturando a entrega, alinhando negócio e engenharia e restaurando a confiança do cliente.",
      impact:
        "Evitou a perda de um contrato de R$600 mil e liberou R$120 mil em investimento adicional por meio de uma entrega aprimorada.",
      metrics: [
        { value: "R$600K", label: "perda de contrato evitada" },
        { value: "+R$120K", label: "investimento adicional liberado" },
      ],
      tech: FINATEC_TECH,
      chapters: [
        {
          highlights: [
            "Conduziu sessões de design e arquitetura com o cliente para entender o problema e as necessidades.",
            "Atuou como Líder Técnico na recuperação da plataforma crítica de pesquisa agrícola, reestruturando os fluxos de entrega e alinhando os requisitos de negócio à execução de engenharia.",
            "Modernizou um painel administrativo legado em Django e implementou novas funcionalidades do sistema.",
            "Construiu um sistema baseado em geolocalização para o cadastro de áreas ambientais usando mapeamento por polígonos.",
            "Integrou o OpenLayers para o desenho interativo de polígonos e a gestão de dados espaciais.",
            "Implementou a lógica de cálculo por área para determinar os incentivos de preservação ambiental.",
            "Projetou o controle de acesso multi-perfil, incluindo validação em nível de auditor e supervisão financeira.",
            "Utilizou PostgreSQL e Redis para persistência de dados e otimização de performance.",
            "Viabilizou o rastreamento e a gestão financeira dos pagamentos de incentivos de conservação.",
          ],
          outcomes: [
            "Evitou a perda de um contrato de R$600 mil e liberou R$120 mil em investimento adicional por meio de uma entrega aprimorada.",
            "Digitalizou os fluxos de validação e monitoramento de áreas ambientais.",
            "Melhorou a precisão e a transparência dos processos de cálculo de incentivos.",
            "Aumentou a eficiência administrativa da auditoria de conformidade ambiental.",
          ],
          gallery: FINATEC_GALLERY,
        },
      ],
    },
    {
      slug: "global-platform-internationalization",
      title: "Internacionalização de Plataforma Global",
      organization: "Lavô",
      period: "2023 – 2024",
      cover: "/Lavo/cover.jpg",
      summary:
        "Liderou a internacionalização e a refatoração em larga escala de uma plataforma com mais de 1 milhão de usuários — reestruturando 2 apps mobile, 3 APIs Node.js e um dashboard administrativo para suportar 4 idiomas.",
      impact:
        "Reduziu os chamados de suporte em 30% e destravou a expansão para a Europa e os Estados Unidos, gerando uma nova fonte de receita.",
      metrics: [
        { value: "1M+", label: "usuários atendidos" },
        { value: "−30%", label: "chamados de suporte" },
        { value: "4", label: "idiomas" },
        { value: "UE + EUA", label: "mercados destravados" },
      ],
      tech: LAVO_TECH,
      chapters: [
        {
          highlights: [
            "Liderou a internacionalização e a refatoração em larga escala de uma plataforma com mais de 1 milhão de usuários — reestruturando 2 apps React Native (Expo), 3 APIs Node.js e um dashboard administrativo para suportar 4 idiomas (PT-BR/PT, EN, ES, FR).",
            "Projetou e construiu um sistema dinâmico de gestão de traduções em tempo real, que permitiu ao próprio cliente cadastrar e atualizar as strings de tradução, eliminando o trabalho manual de tradução.",
            "Interligou em tempo real um app do cliente e um app do prestador de serviço via WebSockets — cada um com seu próprio layout e design, comunicando-se ao vivo.",
            "Diagnosticou e resolveu um bug financeiro crítico num sistema de pagamentos de alto tráfego, identificando um loop infinito via rastreamento de logs na AWS EC2 (PM2) e reduzindo o tempo de resposta da API de 5 minutos para 10 segundos.",
          ],
          outcomes: [
            "Reduziu os chamados de suporte em 30% e destravou a expansão para a Europa e os Estados Unidos, gerando uma nova fonte de receita.",
            "Recuperou mais de R$50 mil corrigindo inconsistências de pagamento e melhorou a confiabilidade do sistema de pagamentos.",
            "Melhorou a experiência do usuário ao automatizar o cadastro e a atualização das strings de tradução.",
          ],
          gallery: LAVO_GALLERY,
        },
      ],
    },
    {
      slug: "cloud-native-architecture",
      title: "Arquitetura de Aplicação Cloud-Native",
      organization: "Fest",
      period: "2023 – 2024",
      cover: "/Fest/Web/cover.JPG",
      summary:
        "Entregou uma plataforma de eventos cloud-native — um dashboard web de bilheteria e um app mobile social formando um único produto — sobre uma arquitetura containerizada e orientada a CI/CD, com deploys automatizados.",
      impact:
        "Entregou um produto completo de bilheteria, comércio em estabelecimentos e gestão financeira, na web e no mobile.",
      metrics: [
        { value: "2", label: "plataformas — web + app" },
        { value: "3", label: "perfis de usuário" },
      ],
      tech: FEST_TECH,
      chapters: [
        {
          title: "Plataforma Web",
          summary:
            "Modernizou e finalizou uma plataforma legada de bilheteria de eventos — uma solução digital completa para venda de ingressos, gestão de eventos e controle financeiro.",
          highlights: [
            "Refatorou e aprimorou um dashboard Next.js legado integrado a um backend Node.js.",
            "Implementou geolocalização pelo navegador para exibir eventos próximos dinamicamente.",
            "Construiu um fluxo seguro de compra de ingressos com integração ao gateway de pagamento Asaas.",
            "Implementou autenticação JWT com acesso multi-perfil (Cliente e Produtor de Eventos).",
            "Construiu um sistema de geração e validação de ingressos por QR Code.",
            "Desenvolveu regras automatizadas de cancelamento e lógica de tratamento de pagamentos.",
            "Criou um Dashboard do Produtor para gestão de eventos, relatórios financeiros, métricas de vendas e configuração de repasses.",
            "Implementou fluxos de transferência financeira com cadastro de conta bancária dos produtores.",
          ],
          outcomes: [
            "Entregou uma solução completa de bilheteria e gestão financeira, de ponta a ponta.",
            "Aumentou a autonomia dos produtores com métricas em tempo real e controle operacional.",
            "Aprimorou a experiência de compra do cliente com um checkout seguro e simplificado.",
          ],
          gallery: FEST_WEB_GALLERY,
        },
        {
          title: "Aplicativo Mobile",
          summary:
            "Um app mobile-first de descoberta de eventos e engajamento social construído com React Native (Expo), combinando bilheteria, comércio em estabelecimentos e interação social em tempo real.",
          highlights: [
            "Construiu a descoberta de eventos e estabelecimentos por geolocalização num raio de 50 km, em uma interface baseada em mapa.",
            "Implementou recursos sociais: perfis de usuário, chat em tempo real via WebSockets, sistema de amigos e match no estilo Tinder.",
            "Construiu a compra de ingressos no app e o pedido de produtos dos estabelecimentos (comidas e bebidas).",
            "Integrou pagamentos via Stripe por meio de um middleware interno em Node.js.",
            "Implementou validação por QR Code com confirmação de pagamento via webhook e gestão de estoque em PostgreSQL.",
            "Desenvolveu acesso multi-perfil (Cliente, Produtor, Dono de Estabelecimento) com gestão de eventos e cardápios.",
            "Criou um Dashboard do Produtor para criação de eventos, gestão de produtos e análises financeiras.",
            "Arquitetou uma infraestrutura cloud escalável na AWS.",
          ],
          outcomes: [
            "Unificou bilheteria, comércio em estabelecimentos e rede social num único ecossistema mobile.",
            "Viabilizou o engajamento em tempo real entre os participantes dos eventos.",
            "Deu aos produtores ferramentas de controle operacional e financeiro.",
          ],
          gallery: FEST_APP_GALLERY,
        },
      ],
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
