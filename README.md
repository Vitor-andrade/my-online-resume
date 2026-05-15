# Vitor Cavalcante — Online Résumé

> A professional online résumé for a Senior Fullstack Engineer — built so the codebase itself is part of the résumé.

![Next.js](https://img.shields.io/badge/Next.js-16-0a0a0f?style=for-the-badge&logo=nextdotjs&logoColor=39d353)
![React](https://img.shields.io/badge/React-19.2-0a0a0f?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-0a0a0f?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-0a0a0f?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![License](https://img.shields.io/badge/License-MIT-0a0a0f?style=for-the-badge&logoColor=39d353)
![Cost](https://img.shields.io/badge/Infra_cost-%240%2Fmonth-0a0a0f?style=for-the-badge&logoColor=39d353)

---

## Overview

This repository hosts the source of an **online professional résumé** for **Vitor Cavalcante**, a Senior Fullstack Engineer with 6+ years of experience. It is deliberately more than a CV page: it is a **technical showcase**. The intent is that a recruiter or engineering lead can read the résumé _and_ inspect the repository, and both tell the same story — modern, scalable, accessible, secure engineering.

The content structure is inspired by the [developerFolio](https://github.com/developerfolio/developerFolio) template, but **none of its code is reused**. developerFolio is a React 16 / Create React App project; this project is a clean, ground-up build on a current stack.

**Audience:** recruiters and engineering teams in the US, Canada and Europe. The product's primary language is English, with Brazilian Portuguese as a second locale and the translation layer structured to add Spanish and French later.

> [!NOTE]
> Product scope, decisions and the build history live in [`BRIEFING.md`](./BRIEFING.md). AI operating rules live in [`CLAUDE.md`](./CLAUDE.md) and [`AGENTS.md`](./AGENTS.md).

## What the site includes

- A single-page landing: Hero / Summary, Skills (with a dedicated **AI / LLMs / Agents** focus), Work Experience, Education, Key Achievements, Projects, Certifications, Contact.
- A **dedicated route per key achievement** (`/achievements/[slug]`) with the technical depth of each case study.
- **Projects** linking to their public GitHub repositories.
- A **functional contact form** with email delivery and spam protection.
- **PDF support** — download the static CV, or generate a print-optimized PDF of the live page.
- **Internationalization** — English (default) and Brazilian Portuguese, with a structure ready for Spanish and French.
- **Light / dark theme** built on a token-driven design system.
- A public **`/design-system`** page documenting the design tokens, primitives and components.

## Technology stack — and why

Every choice below is justified twice: it has to be the right engineering decision **and** it has to reinforce what the résumé claims.

| Area                   | Technology                                                          | Why this choice                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**          | Next.js 16 (App Router, RSC, Cache Components, Turbopack)           | Server-side rendering for SEO (recruiters share the link), file-based routing for per-achievement pages, native i18n routing, dynamic Open Graph images, and ISR to keep GitHub data fresh without rebuilds. It is also the candidate's primary professional stack — the site proves ownership of it. |
| **UI runtime**         | React 19.2                                                          | Server Components, the Actions API and modern hooks (`use`, `useActionState`, `useOptimistic`) enable a fast, lean client.                                                                                                                                                                            |
| **Language**           | TypeScript (strict) + Zod                                           | Type safety end to end. Zod is the single source of truth: schemas validate content files at build time, the contact form on both client and server, environment variables, and external API responses. Types are inferred from Zod, never hand-duplicated.                                           |
| **Styling**            | Tailwind CSS v4 + `next-themes`                                     | Fast, consistent, utility-driven styling; `next-themes` gives SSR-safe light/dark with no flash of unstyled content.                                                                                                                                                                                  |
| **Components**         | shadcn/ui (Radix + CVA)                                             | Not a dependency but owned, copy-in components — small bundle, full control, accessible by default via Radix, and the modern aesthetic used by Linear, Vercel and Resend. Chosen over Material UI to keep the bundle small and the look distinctive rather than "Material-generic".                   |
| **Design system**      | CSS token layers + layout primitives + public `/design-system` page | A two-tier token model (primitive → semantic) makes theming a one-file change. Layout primitives (`Stack`, `Cluster`, `Container`, `Grid`) keep markup semantic. Design-system maturity is a strong signal for senior international roles.                                                            |
| **i18n**               | `next-intl`                                                         | English-first with a JSON-per-locale structure; adding Spanish or French is a new file, not a refactor. Internationalization is also one of the candidate's headline career achievements.                                                                                                             |
| **Content**            | Typed `content/*.ts` files validated by Zod                         | Résumé data lives in version-controlled, type-checked files. A malformed entry fails the build before it can reach production.                                                                                                                                                                        |
| **Animation**          | Framer Motion + View Transitions API                                | Tasteful, restrained motion — scroll-reveals, hover lifts, smooth route transitions — always honoring `prefers-reduced-motion`.                                                                                                                                                                       |
| **Contact form**       | Resend + Cloudflare Turnstile                                       | Free-tier transactional email and privacy-friendly, unlimited, free bot protection.                                                                                                                                                                                                                   |
| **PDF**                | `@media print` CSS + `window.print()` + static PDF                  | The live page generates its own print-optimized PDF; a polished static PDF remains available for ATS workflows.                                                                                                                                                                                       |
| **Testing**            | Vitest, Testing Library, Playwright, Lighthouse CI, axe-core        | Unit, component, end-to-end, performance-budget and accessibility checks. TDD for pure functions; test-after for visual components.                                                                                                                                                                   |
| **CI/CD**              | GitHub Actions + Husky + commitlint + Renovate + CodeRabbit         | Pre-commit hooks, a full PR matrix (lint, typecheck, unit, build, e2e, Lighthouse, CodeQL), automated dependency PRs and AI-assisted code review.                                                                                                                                                     |
| **Hosting**            | Vercel (Hobby)                                                      | Native Next.js SSR/ISR/Edge, per-PR preview deploys, free for personal use.                                                                                                                                                                                                                           |
| **Analytics / Errors** | Vercel Analytics + PostHog + Sentry                                 | Core Web Vitals, product analytics and error tracking — all on free tiers.                                                                                                                                                                                                                            |

**Hard constraint:** the entire project — hosting, domain, services — runs at **zero monthly cost**.

## AI-assisted engineering

This project is built with AI as a deliberate, disclosed part of the workflow — not a hidden shortcut. The approach is itself part of the showcase.

### Tools

- **Claude (Anthropic)** — architecture discussion, implementation, documentation and code review. Commits produced with Claude carry a `Co-Authored-By: Claude` trailer.
- **Cursor** — AI-native editor used for day-to-day development.
- **CodeRabbit** — automated AI review on every pull request.

### Prompt & context engineering

Rather than ad-hoc prompting, this repository treats AI configuration as **versioned engineering artifacts**:

- **[`CLAUDE.md`](./CLAUDE.md)** — the operating manual: golden rules, canonical stack, conventions, commands and the Definition of Done that every AI assistant must follow.
- **[`AGENTS.md`](./AGENTS.md)** — the cross-tool agent roster: which specialized persona handles which task, and how agents are chained.
- **[`BRIEFING.md`](./BRIEFING.md)** — the product source of truth: scope, decisions, rationale and the phased build plan. It exists so context survives across sessions.
- **`agents/`** — nine specialized agent personas (Next.js, React, Accessibility, Performance, DevOps, Security, autonomous engineering, plus Critical-Thinking and Devil's-Advocate reasoning personas).
- **`instructions/`** — binding procedural standards for Next.js, Tailwind and GitHub Actions.
- **`skills/`** — invokable operations: implementation planning, README generation, commit storytelling, security review, UI craft, design review, testing and deployment.

The principle: **the AI is steered by reviewed, version-controlled context**, so its output is consistent, auditable and aligned with the project's standards — the same way a strong engineering team is steered by good documentation.

## Architecture at a glance

```
app/[locale]/        Routes — landing, achievements/[slug], cv, design-system
app/api/contact      Contact form handler (Resend + Turnstile + Zod)
app/og               Dynamic Open Graph image generation
components/ui         shadcn primitives
components/layout     Layout primitives (Stack, Cluster, Container, Grid)
components/sections   Page sections (Hero, Skills, Experience, ...)
components/composed   Domain compositions (ExperienceCard, AchievementCard, ...)
content/             Typed résumé content + Zod schemas (single source of truth)
messages/            i18n locale files (en, pt-BR)
lib/                 GitHub client, typed env, analytics, error tracking
tests/               Vitest (unit) + Playwright (e2e)
```

GitHub data (repositories, stats) is fetched in React Server Components with incremental revalidation — always fresh, cached at the edge, and the API token never reaches the browser.

## Engineering principles

1. **Token-driven** — components consume semantic tokens, never literal colors.
2. **Composition over configuration** — small primitives that combine, not large prop surfaces.
3. **Accessibility-first** — keyboard, screen reader and contrast before visual polish; WCAG 2.1 AA is the floor.
4. **Mobile-first responsive** — authored smallest breakpoint up.
5. **Performance budget** — LCP ≤ 1.5s, CLS ≤ 0.1, first-load JS ≤ 100KB.

## Getting started

This project uses **pnpm**.

```bash
pnpm install       # install dependencies
pnpm dev           # start the dev server (Turbopack)
pnpm build         # production build — also validates content via Zod
pnpm lint          # ESLint
pnpm typecheck     # tsc --noEmit
pnpm test          # Vitest unit/component tests
pnpm test:e2e      # Playwright end-to-end tests
```

Optional service keys (contact form, analytics) are documented in [`env.example`](./env.example); the site builds and runs without them.

## Build history

The site was built in eight phases (full detail in [`BRIEFING.md`](./BRIEFING.md) §10):

- ✅ **Phase 0** — Bootstrap (Next.js, TypeScript, Tailwind, shadcn, tooling, CI)
- ✅ **Phase 1** — Design system (tokens, layout primitives, `/design-system` page)
- ✅ **Phase 2** — Zod schemas & typed content
- ✅ **Phase 3** — Landing page
- ✅ **Phase 4** — Dedicated routes & GitHub integration
- ✅ **Phase 5** — Internationalization (EN + PT-BR)
- ✅ **Phase 6** — Contact form, analytics, dynamic OG
- ✅ **Phase 7** — Quality gates (Vitest, Playwright, axe, Lighthouse CI)
- ✅ **Phase 8** — Polish & launch (animations, SEO, deploy)

**Deferred (TODO):** in-site AI assistant chatbot · Storybook + Chromatic · custom domain · Spanish & French locales · dedicated error tracking (Sentry).

## Contact

**Vitor Cavalcante** — Senior Fullstack Engineer

- LinkedIn — [linkedin.com/in/vitor-andrade-cavalcante](https://www.linkedin.com/in/vitor-andrade-cavalcante)
- GitHub — [github.com/Vitor-andrade](https://github.com/Vitor-andrade)
- Email — vitor.andradecavalcante@gmail.com

---

<sub>Built with intention · Secure by design · Crafted with Claude + Cursor</sub>
