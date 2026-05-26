# Task
Portfolio site full revamp — spec complete, ready to build

# Current Status
Specification is finalized (v1.4). All P0 content questions have been answered by Connor. The existing site is a Bootstrap 3 / jQuery 1.12.4 static page frozen in 2021 that only shows Prosper IT work. The new site will be built from scratch using Astro + Tailwind CSS and will represent Connor's full career including Fillory AI and Office Ally. No implementation has begun — this handoff marks the transition from spec to build.

# Files Modified
- `PORTFOLIO_REVAMP_SPEC.md` — created this session, v1.4 final, full build specification
- `ai/handoffs/CURRENT_STATE.md` — this file

# Files Required Next
- `PORTFOLIO_REVAMP_SPEC.md` — primary build document, read this first
- `images/fulls/*` — all existing Prosper IT screenshots, reused in new site
- `images/fulls/Portfolio_Profile_Pic.png` — confirmed profile photo to use
- `C:\Users\conno\OneDrive\Desktop\2026 Job Search\Sharpe_AI_Resume_2026.pdf` — resume to copy into repo as downloadable asset
- `C:\Users\conno\Downloads\Sharpe_AI_Dev_Agent_Efficiency_Guide.md` — to be published as a standalone linked document from the Fillory AI project card

# Files Already Reviewed
- `index.html` — full audit complete, 625 lines, Bootstrap 3, IE8 polyfills, duplicate mobile HTML blocks (`#profile-small` / `#profile-big`), 12-line card-height equalizer JS. Replace entirely.
- `css/portfolio.css` — replace entirely
- `css/bootstrap.min.css` / `css/all.css` — delete, replaced by Tailwind
- `C:\Users\conno\OneDrive\Desktop\2026 Job Search\Sharpe_AI_Resume_2026.pdf` — confirmed as authoritative resume
- `C:\Users\conno\OneDrive\Desktop\2026 Job Search\Sharpe_Resume_2026.docx` — older generalist version, do not use

# Dependency Chain

Editing:
- `index.html` (replace entirely with Astro project output)
- `css/portfolio.css` (replace entirely)

Requires from Connor (all confirmed):
- Profile photo: `images/fulls/Portfolio_Profile_Pic.png` ✅
- Resume PDF: `Sharpe_AI_Resume_2026.pdf` ✅ (copy to `public/resume/`)
- Efficiency Guide: publish as-is, no redactions needed ✅
- Contact form email: `connor.sharpe92@gmail.com` ✅
- Fillory AI architecture: Portland Protocol + TypeScript agent runtime ✅
- Engineering constraints: 3 confirmed stories ✅

Irrelevant (do not touch):
- `.git/` — no changes
- `js/bootstrap.min.js` — will be deleted, not ported
- `fonts/` — replaced by Google Fonts (Inter, JetBrains Mono)
- `README.md` — leave as-is

# Architecture Notes

**Stack:** Astro + Tailwind CSS. Static output. Deploy to Vercel (migrate from GitHub Pages).

**Site structure:** Single-page with anchor nav.
Sections in order: Hero → About → Engineering Approach → Skills → Experience Timeline → Projects → Contact

**Project cards (4):**
1. Fillory AI — Portland Protocol / AI platform (architecture diagram + 3 constraint stories)
2. Office Ally — Angular platform reliability & security
3. Prosper IT — Course Nav Menu (retain existing content, reformat)
4. Prosper IT — Progress Bars (secondary, shorter card)

**Efficiency Guide:** Publish as a linked markdown or PDF document. Reference from Fillory AI project card and from the AI/Agents skills section. This is the primary credibility artifact for the AI work.

**AI Demo:** Phase 2 only. Do not build in Phase 1. Evaluate need after Phase 1 is live.

**Analytics:** Vercel Analytics (zero-config on Vercel). No session replay, no fingerprinting.

**Contact form:** Formspree or Netlify Forms pointing to `connor.sharpe92@gmail.com`.

# Decisions Made
- Stack: Astro + Tailwind (not Next.js, not Bootstrap)
- Hosting: Vercel (migrate from GitHub Pages)
- Layout: Single-page scrolling, no routing
- AI demo deferred to Phase 2
- Efficiency Guide: publish as-is, no redactions
- Profile photo: existing `Portfolio_Profile_Pic.png`
- Resume: `Sharpe_AI_Resume_2026.pdf`
- Dark mode first; light mode toggle is Phase 3 polish
- No CMS, no auth, no progressive Bootstrap migration
- Hero title: "AI Engineer · Full-Stack Developer"
- Engineering Approach section: 7 draft principles (Connor to trim to 4–6 in his voice)

# Remaining Work

**Phase 1 — Core build (do this):**
1. Scaffold Astro + Tailwind project, configure Vercel deployment
2. Copy `images/fulls/*` and `Portfolio_Profile_Pic.png` into `public/`
3. Copy `Sharpe_AI_Resume_2026.pdf` into `public/resume/`
4. Publish `Sharpe_AI_Dev_Agent_Efficiency_Guide.md` as linked document
5. Build design tokens (colors, typography per spec Section: Design System)
6. Build Nav (sticky, smooth scroll, active section highlighting)
7. Build Hero section
8. Build About section (use draft copy in spec, Connor to refine)
9. Build Engineering Approach section (7 draft principles, Connor to trim/rewrite in voice)
10. Build Skills section (pill grid, categorized)
11. Build Experience Timeline (3 entries per spec)
12. Build 4 Project case studies (problem/approach/architecture/result structure)
    - Fillory AI: use Portland Protocol details + 3 constraint stories from spec
    - Office Ally: use ownership-language bullets from spec
    - Prosper IT Nav Menu: reformat existing modal content from `index.html` lines 187–281
    - Prosper IT Progress Bars: condense existing modal content
13. Build Contact section (Formspree form → connor.sharpe92@gmail.com)
14. Add Vercel Analytics
15. Add SEO: canonical, OpenGraph, Twitter cards, sitemap.xml, robots.txt, JSON-LD
16. Lighthouse audit: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
17. QA: keyboard nav, focus states, prefers-reduced-motion, mobile breakpoints

**Phase 2 — AI demo (evaluate after Phase 1 ships):**
- Constrained chat widget: "Explore the architecture decisions behind my projects"
- Vercel Edge Function, Claude API, system prompt from resume + project summaries
- Rate limit: 5 messages per session

**Phase 3 — Polish:**
- Light mode toggle
- Scroll entrance animations
- Social preview image (1200×630px)
- Performance: image compression, font subsetting

**P1 content items (can draft during build, Connor to approve):**
- Bio copy: draft in spec Section 3, Connor to refine in his voice
- Engineering Approach principles: 7 drafts in spec Section 5, trim to 4–6
- Office Ally metrics: if Connor can recall any numbers (conversion delta, team size, deploy frequency), add to case study

# Known Risks / Open Questions
- Connor's current live domain/URL unknown — confirm before Vercel deploy to set up redirect correctly
- Office Ally metrics not confirmed — case study can ship without them but impact callouts will be text-only
- Engineering Approach principles at 7 — slightly over the 4–6 target; Connor should trim in his own voice before launch
- Fillory AI architecture section has placeholders for Connor to verify/expand (Portland Protocol review gate mechanics, webhook failure recovery path)

# Verification Results
- Spec reviewed: 3 rounds by ChatGPT architect, 4 rounds by Claude codebase audit
- All P0 content questions: CONFIRMED
- Existing codebase: fully audited

# Recommended Next Action
**Scaffold the Astro + Tailwind project in a new branch or worktree.** Read `PORTFOLIO_REVAMP_SPEC.md` in full before writing a single line of code — the spec contains all section content, copy drafts, design tokens, and implementation notes. Start with Phase 1 steps 1–4 (scaffold + asset migration) to verify the deployment pipeline works before building UI components.

Do NOT begin implementation without reading the spec. The spec contains confirmed content (resume bullets, constraint stories, Engineering Approach principles) that should not be regenerated or paraphrased — use it directly.

# Forbidden Exploration
- `css/bootstrap*.css` — do not port, delete
- `js/bootstrap.min.js` — do not port, delete
- `fonts/glyphicons-*` — delete, not needed
- `index.html` existing modal content (except Prosper IT case studies lines 187–281 and 284–377) — do not reuse

# Context Notes
- branch: main (no worktree used this session — spec work only, no code written)
- worktree: N/A
- context pressure: low (fresh session recommended for build phase)
- token usage concerns: none — this handoff is the context reset point

# PowerShell Merge Block
N/A — no worktree was used this session. The spec files were committed directly to main. When the build agent creates a feature branch/worktree for Phase 1 implementation, they should generate a new merge block at session end per the AI Development Agent Efficiency Guide.
