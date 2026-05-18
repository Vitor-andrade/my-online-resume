# AGENTS.md

Agent roster and orchestration guide for this repository.

`AGENTS.md` is the cross-tool standard for AI coding agents — Claude Code, Cursor, GitHub Copilot and others read it. It complements [`CLAUDE.md`](./CLAUDE.md) (the full operating manual) and [`BRIEFING.md`](./BRIEFING.md) (product context and decisions). This file answers one question: **which specialized agent handles which task.**

---

## 1. How to use this file

This repo bundles a library of **specialized agent personas** (`agents/*.agent.md`), **procedural instructions** (`instructions/*.instructions.md`) and **invokable skills** (`skills/*/SKILL.md`).

When a task matches a persona, **adopt that persona's guidance** by reading the corresponding file before acting. Personas are not optional flavor — they encode the standards this project is held to. For a multi-faceted task, chain agents (see §5).

Before any work: read `CLAUDE.md` for project rules and `BRIEFING.md` for context.

## 2. Agent roster

All files live in `agents/`. Invoke by reading the file and operating under its persona.

| Agent                                 | File                                         | Use it when…                                                                                                      |
| ------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Expert Next.js Developer**          | `expert-nextjs-developer.agent.md`           | Building routes, RSC/Server Actions, caching, metadata, Turbopack config — the framework backbone.                |
| **Expert React Frontend Engineer**    | `expert-react-frontend-engineer.agent.md`    | Authoring React 19.2 components, hooks, client boundaries, state, design-system primitives.                       |
| **Accessibility Specialist**          | `accessibility.agent.md`                     | Any UI work — semantic HTML, ARIA, keyboard nav, contrast, screen-reader behavior. WCAG 2.1 AA is mandatory here. |
| **Frontend Performance Investigator** | `frontend-performance-investigator.agent.md` | Core Web Vitals regressions, Lighthouse drops, layout shift, long tasks, bundle bloat.                            |
| **DevOps Expert**                     | `devops-expert.agent.md`                     | CI/CD pipelines, GitHub Actions, deployment strategy, observability, release workflow.                            |
| **Security Reviewer (OWASP)**         | `se-security-reviewer.agent.md`              | Reviewing the contact form, API routes, env handling, dependencies; pre-release security passes.                  |
| **Software Engineer Agent v1**        | `software-engineer-agent-v1.agent.md`        | Autonomous, end-to-end execution of a well-specified phase to production quality.                                 |
| **Critical Thinking**                 | `critical-thinking.agent.md`                 | Stuck on a problem and need the root cause surfaced through questioning rather than a quick fix.                  |
| **Devil's Advocate**                  | `devils-advocate.agent.md`                   | Pressure-testing an architectural or product decision before it is locked.                                        |

## 3. Phase-to-agent mapping

The build runs in 8 phases (`BRIEFING.md` §10). Recommended lead agents per phase:

| Phase                     | Lead agent(s)                                                | Support skill(s)                                             |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0 — Bootstrap             | DevOps Expert · Expert Next.js Developer                     | `create-implementation-plan`, `deploy-to-vercel`             |
| 1 — Design System         | Expert React Frontend Engineer · Accessibility Specialist    | `premium-frontend-ui`, `web-design-guidelines`               |
| 2 — Schemas & Content     | Expert Next.js Developer                                     | `create-implementation-plan`                                 |
| 3 — Landing page          | Expert React Frontend Engineer · Accessibility Specialist    | `premium-frontend-ui`, `web-design-reviewer`                 |
| 4 — Dedicated routes      | Expert Next.js Developer                                     | `cloud-design-patterns`                                      |
| 5 — i18n                  | Expert Next.js Developer                                     | —                                                            |
| 6 — Contact form & extras | Expert Next.js Developer · Security Reviewer                 | `security-review`                                            |
| 7 — Quality gates         | Frontend Performance Investigator · DevOps Expert            | `javascript-typescript-jest`                                 |
| 8 — Polish & launch       | Accessibility Specialist · Frontend Performance Investigator | `web-design-reviewer`, `deploy-to-vercel`, `security-review` |

## 4. Skills catalog

Skills live in `skills/<name>/SKILL.md`. Invoke the matching skill instead of improvising.

| Skill                        | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `create-implementation-plan` | Produce a deterministic, executable plan before starting a phase. |
| `create-readme`              | Generate or refresh `README.md`.                                  |
| `commit-message-storyteller` | Conventional Commit messages that explain the _why_.              |
| `premium-frontend-ui`        | Award-level UI craft — motion, typography, depth.                 |
| `web-design-guidelines`      | Review UI code against the Web Interface Guidelines.              |
| `web-design-reviewer`        | Visual inspection across viewports + source fixes.                |
| `javascript-typescript-jest` | Testing patterns for JS/TS.                                       |
| `security-review`            | AI-driven security scan (OWASP, secrets, dependencies).           |
| `cloud-design-patterns`      | Reference catalog of 42 distributed-system patterns.              |
| `deploy-to-vercel`           | Deploy to Vercel with the correct method auto-detected.           |
| `acquire-codebase-knowledge` | Map and document the codebase for onboarding.                     |
| `autoresearch`               | Autonomous iterative optimization loop against a metric.          |
| `ai-ready`                   | Generate AI-config scaffolding (AGENTS.md, CI, templates).        |

## 5. Orchestration rules

- **Plan before building.** Start every phase with the `create-implementation-plan` skill.
- **Accessibility and performance are gates, not reviewers.** The Accessibility Specialist and Performance Investigator are consulted _during_ UI phases, not only at the end.
- **Challenge before you lock.** Run the **Devil's Advocate** agent before committing to any architectural decision. Run **Critical Thinking** when a problem resists a straightforward fix.
- **Security before release.** The **Security Reviewer** + `security-review` skill run before any production deploy and whenever the contact form, API routes or dependencies change.
- **Instructions are binding.** When touching Next.js code, follow `instructions/nextjs*.instructions.md`. When touching `.github/workflows/`, follow `instructions/github-actions-ci-cd-best-practices.instructions.md`.
- **Stay in scope.** Agents implement the current phase only; new ideas become TODOs in `BRIEFING.md`.
- **No `Co-Authored-By` trailer.** Commit messages carry their content only; AI-assisted development is disclosed in `README.md`.

## 6. For other AI tools (Cursor, Copilot, etc.)

This file is your entry point. Then:

1. Read `CLAUDE.md` — golden rules, stack, conventions, Definition of Done.
2. Read `BRIEFING.md` — product context and decision history.
3. Apply the relevant `instructions/` standard for the area you are editing.
4. Adopt the matching agent persona from §2 for the task at hand.
