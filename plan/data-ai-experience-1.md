---
goal: Refresh bilingual career content and downloadable CV with recent AI engineering work
version: 1
date_created: 2026-11-10
last_updated: 2026-11-10
owner: Vitor Cavalcante
status: In progress
tags: [content, career, i18n]
---

# Introduction

![Status: In progress](https://img.shields.io/badge/status-In_progress-yellow)

Update the existing Vercel résumé using the career material approved in this conversation.

## 1. Requirements & Constraints

- **REQ-001**: Add micro1 experience from July 2026 and close Click Planos/Evernow in July 2026 in both locales.
- **REQ-002**: Lead with Senior Software Engineer while retaining fullstack strengths and adding AI engineering evidence.
- **REQ-003**: Add an anonymized AI case study, new skills, and the supplied Software Engineer PDF.
- **SEC-001**: Do not disclose new client or product names; retain authorized commercial figures and qualify approximate improvements.
- **CON-001**: Preserve existing design, schemas, dependencies, and Vercel project identity.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Synchronize content, metadata, and static assets.

| Task     | Description                                                                                                        | Completed | Date       |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --------- | ---------- |
| TASK-001 | Update profile.ts, experience.ts, skills.ts, achievements.ts, messages/\*.json and OG title with bilingual content | ✅        | 2026-11-10 |
| TASK-002 | Replace public CV, update hero/contact anchors to download it and add a generic SVG achievement cover              | ✅        | 2026-11-10 |
| TASK-003 | Update BRIEFING.md with the content decision and CV path                                                           | ✅        | 2026-11-10 |

### Implementation Phase 2

- GOAL-002: Verify and prepare the Vercel update.

| Task     | Description                                                                                            | Completed | Date       |
| -------- | ------------------------------------------------------------------------------------------------------ | --------- | ---------- |
| TASK-004 | Run Prettier, typecheck, lint, existing unit tests and production build                                | ✅        | 2026-11-10 |
| TASK-005 | Check EN/PT-BR landing, AI case study and PDF responses locally; inspect browser layout when available | ✅        | 2026-11-10 |
| TASK-006 | Prepare commit and follow the linked Vercel deployment workflow                                        |           |            |

## 3. Alternatives

- **ALT-001**: Rebuild or move hosting: rejected because the current site already renders typed bilingual content.

## 4. Dependencies

- **DEP-001**: Existing installed pnpm dependencies and supplied Downloads/Vitor_Cavalcante_Software_Eng.pdf.

## 5. Files

- **FILE-001**: content/{profile,experience,skills,achievements}.ts and messages/{en,pt-BR}.json.
- **FILE-002**: components/sections/{hero,contact}.tsx, app/[locale]/opengraph-image.tsx and public CV/cover assets.
- **FILE-003**: BRIEFING.md and this implementation plan.

## 6. Testing

- **TEST-001**: Existing schema/unit suite, TypeScript, ESLint and production build.
- **TEST-002**: Both locales include the role, commercial impact, AI skills and new achievement route; download response matches supplied PDF.

## 7. Risks & Assumptions

- **RISK-001**: Local default build cannot fetch Google Fonts and local server binding is denied; offline webpack compilation and generated HTML checks passed. Browser layout/performance checks remain unverified.
- **RISK-002**: Deployment requires working Vercel/GitHub connectivity and authorization per the repository's deployment skill.
- **ASSUMPTION-001**: Keep micro1 Present as recorded in the supplied PDF and LinkedIn; no new end date was provided.
- **ASSUMPTION-002**: Keep official historical fullstack job titles while changing current profile positioning to Software Engineer.

## 8. Related Specifications / Further Reading

- [Project briefing](../BRIEFING.md)
- [Repository instructions](../AGENTS.md)
