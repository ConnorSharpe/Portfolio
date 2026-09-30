# Task
Content refresh: resume sync, Kitchen Keeper retrieval, AI dev workflow, site cleanup (no TASK file)

# Current Status
Complete and pushed to `main` (Vercel auto-deploys). AI chat widget (TASK-002) removed entirely.

# Files Modified
- `src/components/Projects.astro` — KK hybrid-retrieval note + pgvector tag; new "Governed AI Development Workflow" card; Fillory power-cycle recovery reworded; efficiency-guide block removed
- `src/components/Timeline.astro` — Fillory recovery bullet matches resume
- `src/components/Skills.astro` — categories mirror the resume's skills lines
- `src/components/About.astro` — 5+ years; "without guardrails" leftover rewritten
- `src/components/EngineeringApproach.astro` — nav menu load time 20s → 7s (matches screenshot, 6.69s)
- `src/components/Hero.astro` — profile photo now 512px WebP (19 KB, was 3.1 MB PNG)
- `src/layouts/Layout.astro` — title/description/JSON-LD "AI Engineer · Full-Stack Developer"; og:image width/height/alt
- `astro.config.mjs` — `site` = https://connor-sharpe-portfolio.vercel.app (was non-resolving connorsharpe.dev)
- `public/social-preview.png` — new 1200×630 link preview
- `public/resume/Sharpe_AI_Resume_2026.pdf` — updated resume
- Removed: `ChatWidget.astro`, `api/chat.ts`, `src/data/chat-context.ts`, `@google/generative-ai`, `public/efficiency-guide.md`, 71 unused images

# Decisions Made
- Chat widget removed, not fixed (gemini-2.0-flash shut down 2026-06-01; SDK end-of-life; context was placeholder)
- Title everywhere: "AI Engineer · Full-Stack Developer" (resume updated to match; Fillory job title stays "AI Software Engineer")
- Efficiency guide unpublished: v3 predates the TDD-hook / knowledge-graph workflow
- Site copy must match the resume; resume source lives in the parent folder (`../Sharpe_Connor_AI_Resume_2026.docx`)

# Remaining Work
- Optional: re-add `@astrojs/sitemap` (dependency still installed) and `robots.txt` now that the domain is correct
- Optional: refresh LinkedIn's cached preview via Post Inspector
- Optional: replace About's "3 AI frameworks" stat

# Verification Results
- `npm run build`: PASS
- Browser smoke test (verifier, local preview): hero, no chat widget, no console errors, skills, projects, all images, /social-preview.png, resume link: PASS

# Context Notes
- branch: main; worktree: N/A
- Vercel auto-deploys on push to main; GitHub Pages must stay unpublished
- SSH: personal account uses `git@github-personal:ConnorSharpe/...`
- Content-only site (no test suite); enforcement kit not installed
- context pressure: medium
