# Briefing do Projeto — CV Online de Vitor Cavalcante

> **Propósito deste documento:** servir como single source of truth de tudo o que foi alinhado na fase de discovery. Se uma sessão de trabalho for perdida, este arquivo permite retomar de onde paramos sem reiniciar a conversa. Atualizar conforme decisões evoluírem.
>
> **Status:** Fase 3 (Landing page) concluída · Próximo: Fase 4 (Rotas dedicadas).
> **Última atualização:** 2026-05-15.

---

## 1. Objetivo do projeto

Construir um **currículo profissional online** para um Senior Fullstack Engineer com 6+ anos de experiência, que sirva simultaneamente como:

1. **CV público** consumível por recrutadores em US/Canadá/Europa.
2. **Vitrine técnica** — o próprio código e a stack são prova de competência.
3. **Hub central** linkado no GitHub, LinkedIn e CV em PDF.

**Restrição-chave de produto:** o site precisa "provar" o que está escrito nele. Cada decisão técnica deve reforçar a narrativa do CV (Next.js no site = Next.js no currículo).

**Inspiração:** o repositório [developerFolio](https://github.com/developerfolio/developerFolio) — usado **apenas como referência de estrutura de conteúdo**. Documentação detalhada do molde está em `developerFolio.md` (mesma pasta).

---

## 2. Perfil profissional do usuário (Vitor Cavalcante)

- **Cargo-alvo:** Senior Fullstack Engineer / Senior Software Engineer.
- **Experiência:** 6+ anos.
- **Localização:** Brasília, Brasil.
- **Formação:** Engenharia de Computação (UniCEUB) + Pós em Cibersegurança (UniCEUB).
- **Certificações:** Secure Developer Professional (CECyber). AWS AI Practitioner e AWS Developer Associate planejados.

### Stack profissional declarada

| Camada          | Tecnologias                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Frontend/Mobile | React, **Next.js**, React Native (Expo), TypeScript, Tailwind, **shadcn/ui**, **TanStack Query**, **Zustand**, **Zod**, i18n |
| Backend         | **Node.js**, **NestJS**, Python (Django), Go, REST, WebSockets, Drizzle ORM, JWT/OAuth, Swagger                              |
| Bancos          | **PostgreSQL**, Redis, MongoDB, MySQL                                                                                        |
| Cloud/DevOps    | **AWS** (Lambda, EC2, RDS, S3, CloudWatch, Route53, CloudFront), Docker, Terraform, GitHub Actions, GitLab CI, Doppler       |
| DevSecOps       | OWASP Top 10, SAST/SCA/DAST, Fortify, Veracode, SonarQube                                                                    |
| Práticas        | Clean Architecture, SOLID, DDD, Microsserviços, Agile/Scrum                                                                  |

### Cases de impacto (vão para o CV online)

- **Internacionalização** de plataforma com 1M+ usuários → −30% tickets, expansão EU/US.
- **Tech Lead recovery** — salvou contrato de R$600K, destravou +R$120K de investimento (Finatec).
- **Bug crítico de pagamento** — 5 min → 10 s, recuperou R$50K+ em discrepâncias (Fridom).
- **Hardening OWASP** em ~300 apps de saúde/finanças via Fortify + automações Python (Evernow).
- **Refator monolito → microsserviços** entregue 20% adiantado, +40% engajamento, +4% conversão (Click Planos).
- **Plataforma real-time React Native** com 100K+ usuários, WebSockets, pagamentos, geolocalização, QR (Fridom).

### Empregos relevantes

| Empresa          | Período             | Função                    |
| ---------------- | ------------------- | ------------------------- |
| **Click Planos** | Jul 2025 → presente | Senior Fullstack Engineer |
| **Evernow**      | Set 2022 → presente | Senior DevSecOps Analyst  |
| **Fridom**       | Jan 2020 → Jan 2025 | Senior Fullstack Engineer |
| **Fest**         | Nov 2023 → Nov 2024 | Fullstack Engineer        |

### Idiomas

- Inglês C1 · Português nativo · Espanhol B1 · Francês A1.

### Identidade visual existente (GitHub README)

- Tema **"GitHub-green dark"** — paleta `#0a0a0f` (quase-preto) + `#39d353` (verde GitHub) + `#0a3d1c` (verde escuro).
- Capsule-render banners, badges shields.io, typing SVG.
- Visual técnico/maximalista. **Decisão:** manter e refinar (não redesenhar).

### Links públicos

- GitHub: [github.com/Vitor-andrade](https://github.com/Vitor-andrade)
- LinkedIn: [linkedin.com/in/vitor-andrade-cavalcante](https://www.linkedin.com/in/vitor-andrade-cavalcante)
- Email pessoal: vitor.andradecavalcante@gmail.com
- Email profissional: dev@clickplanos.com.br

---

## 3. Restrições e requisitos não-funcionais

### Restrições duras (não-negociáveis)

- **Custo total: R$ 0/mês.** Apenas ferramentas/serviços free ou open-source. Free tier de AWS aceitável; pago em qualquer fornecedor **não é aceito**.
- **Sem domínio próprio.** Usar subdomínio Vercel free (`vitorcavalcante.vercel.app` ou similar). Domínio próprio fica para o futuro quando houver orçamento.
- **Idioma principal: inglês.** PT-BR como secundário. Estrutura de tradução pronta para receber `es` e `fr` no futuro **sem refactor**.
- **100% responsivo** (mobile-first).
- **Design moderno** — meio termo entre "minimalista clean" e "expressivo". Referência mental: Linear + Resend + Vercel. Sem parallax pesado, sem cursor effects.

### Requisitos funcionais principais

- Landing page single-page com seções (ordem inspirada em developerFolio): Hero/Summary, Skills, Work Experiences, Education, Key Achievements, Projects, Certifications, Contact.
- **Rota dedicada por Key Achievement** (`/achievements/[slug]`) com detalhamento técnico do case.
- **Projects** linkam para o repositório GitHub correspondente quando público; cards informativos sem link quando privado.
- **Seção dedicada a IA/Agents/LLMs** com destaque visual (subseção dentro de Skills + idealmente pelo menos um projeto/achievement demonstrando IA aplicada).
- **Form de contato** funcional com envio de email + anti-spam.
- **Social links** no Contact: LinkedIn, Gmail, GitHub, GitLab.
- **Botão "Download CV"** — abre PDF estático em nova aba.
- **Botão "Generate PDF"** — gera PDF da página atual (via print CSS + window.print) sincronizado com o conteúdo.
- **Switch de idioma** (EN ↔ PT-BR) visível no header.
- **Toggle de tema** dark/light.
- **Tools de IA destacadas no desenvolvimento** — Claude + Cursor mencionados no README e no footer ("Built with Claude + Cursor"). CodeRabbit no review de PRs.

---

## 4. Stack final consolidado

```
Framework         Next.js 16 (App Router · RSC · Cache Components · Turbopack)
UI runtime        React 19.2
Linguagem         TypeScript strict + Zod (schema-first)
Design System     Tokens CSS (primitive → semantic) + CVA + shadcn/ui
                  + Layout primitives custom (Stack/Cluster/Container/Grid)
                  + Página pública /design-system (substitui Storybook)
Styling           Tailwind CSS v4 + next-themes (SSR-safe)
Identidade        "GitHub-green dark" refinada — #0a0a0f / #39d353 / #0a3d1c
i18n              next-intl — EN (default) + pt-BR · estrutura pronta es/fr
Conteúdo          TypeScript content files em content/* validados por Zod no build
Animação          Framer Motion + View Transitions API · prefers-reduced-motion
Form contato      Resend (free tier) + Cloudflare Turnstile + Zod (client+server)
PDF               window.print() + @media print CSS  +  PDF estático em /public
Testes            Vitest + Testing Library + Playwright + Lighthouse CI + axe-core
CI/CD             GitHub Actions + Husky + lint-staged + commitlint + Renovate
                  + CodeRabbit (review free tier)
Hospedagem        Vercel Hobby (free) — vitorcavalcante.vercel.app
Analytics         Vercel Analytics (free) + PostHog (free tier — 1M events/mês)
Error tracking    Sentry (free tier — 5k errors/mês)
IA no dev         Claude (Anthropic) + Cursor — divulgados no README e site
Custo mensal      R$ 0  ✅
```

### Stack decidido vs alternativas descartadas

| Decisão    | Escolhido                | Descartado                 | Razão                                                                 |
| ---------- | ------------------------ | -------------------------- | --------------------------------------------------------------------- |
| Framework  | **Next.js 16**           | React + Vite SPA           | SSR/SEO, file routing, i18n nativo, OG dinâmica, ISR para GitHub data |
| Framework  | **Next.js 16**           | Astro / Remix              | Alinhar com stack profissional do Vitor (Next.js é seu nº 1)          |
| UI library | **shadcn/ui**            | MUI                        | Bundle menor, estética moderna, controle total do código (não é lib)  |
| Conteúdo   | **TS files + Zod**       | MDX / CMS                  | Conteúdo estável e finito, usuário tech-savvy, validação no build     |
| Hospedagem | **Vercel Hobby**         | AWS Amplify / GitHub Pages | Free tier mais robusto p/ Next, sem fricção, edge functions           |
| Anti-spam  | **Cloudflare Turnstile** | reCAPTCHA                  | Privacy-friendly, free ilimitado                                      |
| Email      | **Resend**               | SendGrid / Mailgun         | Free tier 3k/mês > suficiente                                         |
| Errors     | **Sentry free**          | LogRocket / Datadog        | Free tier 5k errors/mês > suficiente                                  |

---

## 5. Arquitetura — estrutura de pastas planejada

```
app/
  [locale]/                          # en (default), pt-BR (+ es, fr no futuro)
    page.tsx                         # Landing single-page
    achievements/
      [slug]/page.tsx                # Page dedicada por achievement
    cv/page.tsx                      # Versão print-friendly (window.print)
    design-system/page.tsx           # Showcase do DS (substitui Storybook)
    layout.tsx                       # Layout com providers (theme, i18n, posthog)
  api/
    contact/route.ts                 # Form handler (Resend + Turnstile + Zod)
  og/route.tsx                       # OG image dinâmica (next/og)
  sitemap.ts
  robots.ts

components/
  ui/                                # shadcn primitives (Button, Card, Input, ...)
  layout/                            # Stack, Cluster, Container, Grid
  sections/                          # Hero, Skills, Experience, Achievements, ...
  composed/                          # ExperienceCard, AchievementCard, ProjectCard, Metric, Timeline

content/
  schema.ts                          # Zod schemas (single source of truth)
  profile.ts                         # nome, headline, contatos, social links
  skills.ts                          # categorias + tech (com destaque IA/LLMs)
  experience.ts                      # array tipado de empregos
  education.ts
  achievements.ts                    # cases com slug → /achievements/[slug]
  projects.ts                        # featured projects com links GitHub
  certifications.ts

messages/
  en.json                            # default
  pt-BR.json
  # es.json, fr.json — adicionados no futuro sem refactor

lib/
  github.ts                          # GitHub API client (RSC + revalidate)
  env.ts                             # process.env tipado via Zod
  posthog.ts                         # client init
  sentry.ts

public/
  Vitor_Cavalcante_FullStack_Eng.pdf # CV oficial (download)
  favicons/...

tests/
  unit/                              # Vitest
  e2e/                               # Playwright

.github/
  workflows/
    ci.yml                           # lint + typecheck + unit + build + e2e + lighthouse
    deploy.yml                       # Vercel deploy on main
    codeql.yml
  PULL_REQUEST_TEMPLATE.md
  CODEOWNERS

DESIGN_SYSTEM.md                     # Princípios + tokens documentados
README.md                            # com badges, stack, "Built with Claude + Cursor"
```

---

## 6. Design System — princípios e camadas

5 princípios escritos (vão para `DESIGN_SYSTEM.md` e para `/design-system` page):

1. **Token-driven** — componentes não conhecem cores literais, só semânticas.
2. **Composition over configuration** — primitivas pequenas que combinam.
3. **Accessibility-first** — keyboard, screen reader, contraste antes do visual.
4. **Mobile-first responsive** — sempre menor → maior.
5. **Performance budget** — LCP ≤ 1.5s, JS first-load ≤ 100KB.

5 camadas a implementar:

| Camada                  | Implementação                                                                 |
| ----------------------- | ----------------------------------------------------------------------------- |
| 1. Tokens               | CSS custom properties em duas camadas (primitive → semantic)                  |
| 2. Layout primitives    | Stack, Cluster, Container, Grid (~50 linhas cada)                             |
| 3. Component primitives | shadcn/ui (Radix + CVA + Tailwind)                                            |
| 4. Composition          | ExperienceCard, AchievementCard, ProjectCard, Metric, Timeline, SectionHeader |
| 5. Showcase             | Página pública `/design-system` (auto-documentada a partir dos tokens)        |

A11y embutido: focus rings tokenizados, contraste AA validado por axe no CI, `prefers-reduced-motion` respeitado, keyboard nav completa, ARIA correto.

---

## 7. Decisões pendentes / TODOs deferidos

| Item                                          | Status           | Razão de adiamento                                                  |
| --------------------------------------------- | ---------------- | ------------------------------------------------------------------- |
| **AI Assistant chatbot** no site (Claude API) | TODO arquitetado | Consome créditos pagos; arquitetura prepara plug-in futuro          |
| **Storybook + Chromatic**                     | TODO documentado | Overkill para o tamanho do projeto; `/design-system` cobre showcase |
| **Domínio próprio** (`.dev`)                  | TODO futuro      | Sem orçamento agora; subdomínio Vercel atende                       |
| **Idiomas `es` e `fr`**                       | Estrutura pronta | Adicionar arquivo JSON quando necessário                            |
| **URL do GitLab**                             | Aguardando user  | Contact pede LinkedIn/Gmail/GitHub/GitLab; falta a URL do GitLab    |

---

## 8. CI/CD — pipeline planejado

### Local (pre-commit)

- **Husky + lint-staged**: Prettier + ESLint + `tsc --noEmit` nos arquivos staged.
- **commitlint** — Conventional Commits obrigatório.

### Pull Request (GitHub Actions)

- `lint` (ESLint flat config)
- `typecheck` (`tsc --noEmit`)
- `unit` (Vitest com coverage ≥ 80%)
- `build` (`next build`)
- `e2e` (Playwright — Chromium + WebKit + mobile viewport)
- `perf` (Lighthouse CI com budget — performance ≥ 95)
- `a11y` (axe-core integrado no Playwright)
- `security` (npm audit + CodeQL free)
- `preview deploy` (Vercel automático)
- `CodeRabbit` (review automatizado free tier)

### Main branch

- Tudo acima + production deploy (Vercel) + Sentry release tag + sitemap ping.

### Bot/automação

- **Renovate** (ou Dependabot) — PRs automáticos de atualização de deps.

---

## 9. Testes — filosofia explícita

| Camada            | Ferramenta               | Cobertura                                                                                     |
| ----------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| Unit              | Vitest + Testing Library | Utils, hooks, schemas Zod, geradores PDF                                                      |
| Component         | Testing Library          | Render + a11y de cada componente UI                                                           |
| E2E               | Playwright               | Form de contato, toggle tema, troca de idioma, navegação `/achievements/[slug]`, download PDF |
| Performance       | Lighthouse CI            | LCP, CLS, performance score                                                                   |
| A11y              | axe-core                 | WCAG 2.1 AA em todas as rotas                                                                 |
| Visual regression | (deferred — Chromatic)   | TODO                                                                                          |

**TDD onde faz sentido:**

- ✅ Funções puras (PDF generator, formatadores, validadores Zod).
- ⚖️ Test-after em componentes visuais.
- ❌ Animações e layout Tailwind puro.

Filosofia documentada no `README.md` — material para entrevista técnica.

---

## 10. Plano de implementação (próximo passo)

A implementação será dividida em **8 fases atômicas** com critérios de aceite por fase:

| Fase                                  | Escopo                                                                                                                                              |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fase 0 — Bootstrap**                | Next 16 + TS strict + Tailwind v4 + shadcn + ESLint/Prettier/Husky + CI base + repo público no GitHub                                               |
| **Fase 1 — Design System**            | Tokens (primitive + semantic), Layout primitives, theme provider, página `/design-system` inicial                                                   |
| **Fase 2 — Schemas & Conteúdo**       | Zod schemas + content files (`profile`, `skills`, `experience`, `achievements`, `projects`, `education`, `certifications`) com dados reais do Vitor |
| **Fase 3 — Landing single-page**      | Hero → Skills (com destaque IA) → Experience → Education → Achievements → Projects → Certifications → Contact                                       |
| **Fase 4 — Rotas dedicadas**          | `/achievements/[slug]` + `/cv` (print) + integração GitHub data (RSC + ISR)                                                                         |
| **Fase 5 — i18n**                     | next-intl, EN + pt-BR, switch no header, `hreflang`                                                                                                 |
| **Fase 6 — Form de contato + extras** | API route + Resend + Turnstile + Zod, PostHog, Sentry, OG dinâmica                                                                                  |
| **Fase 7 — Quality gates**            | Vitest suite, Playwright E2E, Lighthouse CI, axe, performance tuning                                                                                |
| **Fase 8 — Polish & lançamento**      | Animações finais, SEO, sitemap, deploy Vercel, divulgação                                                                                           |

Cada fase com critérios de aceite e checkpoint para revisão.

---

## 11. Histórico de decisões importantes

| Data       | Decisão                                                                          | Razão                                                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-05-13 | Documentar developerFolio como referência                                        | Molde de conteúdo, não base de código                                                                                                                           |
| 2026-05-13 | Next.js > React puro                                                             | SSR/SEO, alinhamento com stack do Vitor                                                                                                                         |
| 2026-05-13 | shadcn/ui > MUI                                                                  | Bundle, estética, controle de código                                                                                                                            |
| 2026-05-13 | TS content files > MDX/CMS                                                       | Conteúdo estável, validação Zod no build                                                                                                                        |
| 2026-05-13 | Vercel Hobby > AWS Amplify                                                       | DX e free tier mais robusto para Next.js                                                                                                                        |
| 2026-05-14 | Single-page híbrido com `/achievements/[slug]`                                   | Escaneabilidade + profundidade por case                                                                                                                         |
| 2026-05-14 | EN principal, PT-BR secundário, estrutura pronta es/fr                           | Mercado-alvo USA/Canada/Europe                                                                                                                                  |
| 2026-05-14 | Página gera PDF (print CSS) + PDF estático separado                              | Atende uso casual + ATS                                                                                                                                         |
| 2026-05-14 | Animações em meio-termo (Linear/Resend)                                          | Equilíbrio entre clean e expressivo                                                                                                                             |
| 2026-05-14 | Manter identidade "GitHub-green dark"                                            | Marca já estabelecida no README                                                                                                                                 |
| 2026-05-14 | AI Assistant → TODO arquitetado                                                  | Sem orçamento para API paga agora                                                                                                                               |
| 2026-05-14 | PostHog free tier dentro                                                         | Experiência prévia + Click Planos                                                                                                                               |
| 2026-05-14 | Subdomínio Vercel free                                                           | Sem custos                                                                                                                                                      |
| 2026-05-15 | Storybook + Chromatic → TODO                                                     | Overkill; substituído por página `/design-system`                                                                                                               |
| 2026-05-15 | Design System em 5 camadas (tokens → showcase)                                   | Diferencial para vagas internacionais                                                                                                                           |
| 2026-05-15 | Criados CLAUDE.md, AGENTS.md, README.md                                          | Regras de IA + apresentação pública do projeto                                                                                                                  |
| 2026-05-15 | Stack Next.js 15 → Next.js 16 / React 19.2                                       | Alinhar com arquivos em `instructions/`; `params`/`searchParams` agora async                                                                                    |
| 2026-05-15 | Gerenciador de pacotes: pnpm                                                     | Mais rápido/disk-efficient; padrão moderno                                                                                                                      |
| 2026-05-15 | Fase 0 concluída — scaffold, tooling, CI, shadcn                                 | Bootstrap completo; typecheck/lint/build verdes                                                                                                                 |
| 2026-05-15 | Fase 1 concluída — token layers, layout primitives, theming, `/design-system`    | Design System base pronto; rota `/design-system` no root (migra p/ `[locale]` na Fase 5)                                                                        |
| 2026-05-15 | Fase 2 concluída — schemas Zod + content files com dados reais do CV             | Conteúdo tipado e auto-validado; CV PDF em `public/`; conteúdo English-only por ora                                                                             |
| 2026-05-15 | Fase 3 concluída — landing page com 8 seções, header/footer, composed components | `lucide-react` removeu ícones de marca → `@icons-pack/react-simple-icons` + LinkedIn inline; AchievementCard linka p/ `/achievements/[slug]` (criado na Fase 4) |

---

## 12. Glossário rápido

- **RSC** — React Server Components. Renderizam no servidor; ideal para fetch com token secreto.
- **ISR** — Incremental Static Regeneration. Cache do Next.js que revalida em background.
- **CVA** — class-variance-authority, lib para definir variantes tipadas de classes Tailwind.
- **Token primitive vs semantic** — primitive (`--green-500`) é a cor crua; semantic (`--color-accent`) é uso intencional. Componentes consomem só semânticos.
- **`/design-system`** — rota pública neste projeto que documenta tokens, primitivas e componentes. Substitui Storybook.

---

_Este arquivo é o ponto de retomada em caso de perda de contexto. Quando uma decisão grande mudar, atualizar a seção 4 (stack), a seção 11 (histórico) e a seção 7 (TODOs)._
