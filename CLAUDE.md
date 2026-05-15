# CLAUDE.md

Operating manual for Claude Code (and any AI assistant) working on this repository.
Read this file fully before making changes. For the agent roster and orchestration rules, see [`AGENTS.md`](./AGENTS.md). For the complete product context and decision history, see [`BRIEFING.md`](./BRIEFING.md).

---

## 1. What this project is

An **online professional résumé** for **Vitor Cavalcante**, a Senior Fullstack Engineer (6+ years). The site is both a CV consumed by recruiters in the US / Canada / Europe **and** a technical showcase — the codebase itself is evidence of seniority. Every technical decision must reinforce the résumé's narrative.

- **Reference template:** [developerFolio](https://github.com/developerfolio/developerFolio) — used for content structure only, not as a code base. See [`developerFolio.md`](./developerFolio.md).
- **Source of truth for scope & decisions:** [`BRIEFING.md`](./BRIEFING.md). If this file and the briefing disagree, the briefing wins — and you must reconcile them.

## 2. Golden rules (non-negotiable)

1. **Zero cost.** Only free or open-source tools and services. No paid hosting, domains, or APIs. AWS free tier is acceptable; anything that can incur a charge is not.
2. **English-first.** The product's primary language is English. PT-BR is the secondary locale. The i18n layer must accept `es` and `fr` later **without refactor** — never hard-code strings.
3. **Accessibility is a requirement, not a feature.** WCAG 2.1 AA is the floor. Keyboard, screen reader and contrast come before visual polish.
4. **Performance budget.** LCP ≤ 1.5s, CLS ≤ 0.1, first-load JS ≤ 100KB. A change that breaks the budget is a regression.
5. **Type-safe by construction.** TypeScript `strict`. No `any`. Zod is the single source of truth for schemas; TS types are inferred from Zod, never duplicated by hand.
6. **Token-driven styling.** Components never reference literal colors — only semantic CSS custom properties. See the Design System rules below.
7. **Mobile-first.** Always author from the smallest breakpoint up.
8. **Don't invent scope.** Implement what the current phase requires. New ideas go to the TODO section of `BRIEFING.md`, not into the code.

## 3. Tech stack (canonical)

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router · React Server Components · Cache Components · Turbopack) |
| UI runtime | React 19.2 |
| Language | TypeScript (strict) + Zod (schema-first) |
| Styling | Tailwind CSS v4 + `next-themes` |
| Component primitives | shadcn/ui (Radix + CVA) |
| Design system | CSS token layers + custom layout primitives + public `/design-system` page |
| i18n | `next-intl` — `en` (default) + `pt-BR`, structured for `es` / `fr` |
| Content | Typed `content/*.ts` files validated by Zod at build time |
| Animation | Framer Motion + View Transitions API (honoring `prefers-reduced-motion`) |
| Contact form | Resend + Cloudflare Turnstile + Zod (shared client/server schema) |
| PDF | `window.print()` + `@media print` CSS; static PDF in `public/` |
| Testing | Vitest + Testing Library + Playwright + Lighthouse CI + axe-core |
| CI/CD | GitHub Actions + Husky + lint-staged + commitlint + Renovate + CodeRabbit |
| Hosting | Vercel Hobby (free) |
| Analytics / Errors | Vercel Analytics + PostHog (free tier) · Sentry (free tier) |

> **Versioning note:** the files in `instructions/` target Next.js 16.x and React 19.2. Follow them. A breaking change in Next 16 — `params` and `searchParams` are now async and must be `await`ed — applies throughout.

## 4. Project structure (target)

```
app/[locale]/        Routes — landing, achievements/[slug], cv, design-system
app/api/             Route handlers (contact)
app/og/              Dynamic OG image
components/ui/        shadcn primitives
components/layout/    Layout primitives (Stack, Cluster, Container, Grid)
components/sections/  Page sections (Hero, Skills, Experience, ...)
components/composed/  Domain compositions (ExperienceCard, AchievementCard, Metric, ...)
content/             Typed content + Zod schemas (single source of truth)
messages/            i18n JSON (en.json, pt-BR.json)
lib/                 github.ts, env.ts, posthog.ts, sentry.ts
tests/               unit/ (Vitest) + e2e/ (Playwright)
.github/workflows/   ci.yml, deploy.yml, codeql.yml
```

Use Next.js route groups, private folders (`_name`) and colocation. RSC by default; add `"use client"` only at the smallest possible boundary.

## 5. Coding conventions

- **Components:** `PascalCase` files and exports. One component per file. Props interfaces named `<Component>Props`.
- **Server vs client:** default to Server Components. A client component must justify its existence (interactivity, browser API, hooks). Never `next/dynamic` with `{ ssr: false }` inside a Server Component — extract a client component instead.
- **Variants:** define component variants with CVA. Typos in variant props must fail typecheck.
- **Design System tokens:** two layers — *primitive* tokens (`--gh-green-500`) are never used directly; *semantic* tokens (`--color-accent`, `--color-surface`) are what components consume. Theming = swapping the semantic layer.
- **i18n:** every user-facing string lives in `messages/*.json` and is read via `next-intl`. No literals in JSX.
- **Content:** edits to résumé data happen in `content/*.ts`, validated by the Zod schemas in `content/schema.ts`. A bad shape must fail `build`.
- **Env vars:** accessed only through the typed/validated `lib/env.ts` (Zod). Never read `process.env` directly in components.
- **Imports:** absolute imports via the `@/` alias.
- **Comments:** write them only when the *why* is non-obvious. No narration of *what*.

## 6. Commands

> The project is pre-Phase 0 — `package.json` does not exist yet. These are the scripts to scaffold and then use.

```bash
npm run dev         # Next dev server (Turbopack)
npm run build       # Production build — also runs Zod content validation
npm run lint        # ESLint (flat config)
npm run typecheck   # tsc --noEmit
npm run test        # Vitest unit/component tests
npm run test:e2e    # Playwright end-to-end
npm run format      # Prettier
```

## 7. Definition of Done (per change)

A change is complete only when **all** of the following hold:

- [ ] `typecheck`, `lint`, `test` and `build` pass locally.
- [ ] New logic has tests (TDD for pure functions; test-after for visual components).
- [ ] Accessibility verified — keyboard reachable, contrast AA, ARIA correct, `prefers-reduced-motion` respected.
- [ ] Responsive at 375 / 768 / 1280 / 1920px.
- [ ] No literal strings (i18n) and no literal colors (tokens).
- [ ] Performance budget intact.
- [ ] Commit follows Conventional Commits.

## 8. The AI resource library

This repo ships a curated library of AI personas, procedural instructions and skills. **Use them — don't reinvent their guidance.**

### `instructions/` — procedural guidelines (always-on rules)
- `nextjs.instructions.md` — Next.js 16 best practices. **Authoritative** for routing, caching, RSC boundaries.
- `nextjs-tailwind.instructions.md` — Next.js + Tailwind + TypeScript patterns.
- `github-actions-ci-cd-best-practices.instructions.md` — **Authoritative** for everything under `.github/workflows/`.

Treat these as binding standards whenever you touch the matching area.

### `skills/` — invokable operations
Invoke the relevant skill instead of improvising. Most relevant to this project:
- `create-implementation-plan` — before starting a phase, produce the plan.
- `create-readme` — README generation/refresh.
- `commit-message-storyteller` — write Conventional Commit messages that explain the *why*.
- `premium-frontend-ui` / `web-design-guidelines` / `web-design-reviewer` — UI craft and visual review.
- `javascript-typescript-jest` — testing patterns.
- `security-review` — security scan before each release.
- `deploy-to-vercel` — deployment.
- `cloud-design-patterns` — architecture reference.
- `acquire-codebase-knowledge` — onboarding/documentation.

### `agents/` — specialized personas
See [`AGENTS.md`](./AGENTS.md) for the full roster and which agent to invoke for which task/phase.

## 9. Workflow expectations

1. **Plan first.** At the start of a phase (see `BRIEFING.md` §10), run the `create-implementation-plan` skill.
2. **Small, reviewable commits.** Conventional Commits. Use the `commit-message-storyteller` skill.
3. **Branch per phase/feature.** PRs run the full CI matrix; CodeRabbit reviews automatically.
4. **Challenge big decisions.** Before locking an architectural choice, run the `devils-advocate` agent (see `AGENTS.md`).
5. **Update the briefing.** When a decision changes, update `BRIEFING.md` §4, §7 and §11.
6. **AI co-authorship is disclosed.** Commits authored with Claude carry the `Co-Authored-By: Claude` trailer. Development with Claude + Cursor is stated in `README.md`.

## 10. What NOT to do

- Do not add paid services, paid hosting or paid domains.
- Do not copy code from developerFolio (React 16 / CRA / SCSS) — only its content structure.
- Do not hard-code strings or colors.
- Do not introduce `any`, disable `strict`, or skip `prefers-reduced-motion`.
- Do not expand scope mid-phase — log ideas as TODOs in `BRIEFING.md`.
- Do not skip hooks (`--no-verify`) or weaken CI to make a check pass.
- Do not commit secrets — env vars belong in Vercel/Doppler, validated via `lib/env.ts`.
