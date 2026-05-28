# Task
Portfolio Phase 1 build — Astro + Tailwind site, all sections, build verified

# Current Status
Phase 1 implementation COMPLETE. Astro + Tailwind site built and verified (`npm run build` passes cleanly). All 7 sections implemented with spec-accurate content, accessible markup, and zero-duplicate-HTML responsive layout. Worktree is `C:/Users/conno/source/repos/portfolio-build` on branch `task/001-phase1-build`. Ready to merge to main after two manual content steps (resume PDF + Formspree ID).

# Files Modified
New Astro project scaffolded in worktree. New files:
- `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `.gitignore`
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/components/Nav.astro`
- `src/components/Hero.astro`
- `src/components/About.astro`
- `src/components/EngineeringApproach.astro`
- `src/components/Skills.astro`
- `src/components/Timeline.astro`
- `src/components/Projects.astro`
- `src/components/Contact.astro`
- `public/efficiency-guide.md`
- `public/images/` (all Prosper IT screenshots + profile pic)
- `public/resume/` (directory created; PDF is a manual copy step)
- `ai/handoffs/CURRENT_STATE.md` (this file)

# Files Required Next (Phase 2 — AI Demo)
- `src/components/ChatWidget.astro` (new)
- `src/pages/api/chat.ts` (Vercel Edge Function, new)
- `.env` with `ANTHROPIC_API_KEY`

# Files Already Reviewed
- `index.html` — audited, lines 187–377 used as source for Prosper IT case studies (reformatted, not reused verbatim)
- `PORTFOLIO_REVAMP_SPEC.md` — v1.4, all content implemented

# Dependency Chain

Editing: all new files in `src/` and `public/`

Requires from Connor (two remain manual):
- Resume PDF: `Sharpe_AI_Resume_2026.pdf` → `public/resume/` ⚠️ MANUAL COPY
- Formspree ID: replace `YOUR_FORM_ID` in `src/components/Contact.astro` line 3 ⚠️

Irrelevant:
- `.git/`
- `README.md`
- `PORTFOLIO_REVAMP_SPEC.md`

Old files to delete AFTER merge:
- `index.html`, `css/`, `js/`, `fonts/`, `webfonts/`

# Architecture Notes

Stack: Astro 4 + Tailwind 3. Static output. Vercel-ready.

Bundle size:
- JS: 4.3KB raw / 1.93KB gzip
- CSS: 16KB

JS usage (minimal):
- Nav: IntersectionObserver (active section) + hamburger toggle (aria-expanded)
- Timeline: scroll fade-in (prefers-reduced-motion safe)
- Contact: async Formspree submit with success/error feedback

Zero extra JS: project card expand/collapse uses `<details>/<summary>` (semantic, accessible)

Accessibility:
- lang="en", aria-labels on icon links, alt on all images
- :focus-visible ring, prefers-reduced-motion respected
- h1 → h2 → h3 heading hierarchy

Efficiency Guide: published at `/efficiency-guide.md`, linked from Fillory AI project card

Sitemap: disabled temporarily (re-add @astrojs/sitemap after live domain is set)

# Decisions Made
- Astro 4 + Tailwind 3 (proven stable over Astro 5 + Tailwind 4)
- Analytics: default import from `@vercel/analytics/astro` (named export not available in installed version)
- `DarkMode_C#.PNG` removed from `public/images/` — `#` in filename breaks Astro static file handling; file was unused
- Sitemap integration disabled (version incompatibility; domain not live yet)
- Timeline: vertical layout (dot + card) instead of alternating — cleaner on mobile
- Engineering Approach: 6 principles active, 2 commented out for Connor to review

# Remaining Work

**Before merge:**
1. ⚠️ Copy `Sharpe_AI_Resume_2026.pdf` → `public/resume/Sharpe_AI_Resume_2026.pdf`
2. ⚠️ Sign up at formspree.io, create form, replace `YOUR_FORM_ID` in `Contact.astro:3`
3. Review Engineering Approach principles — trim to 4–6 in your voice

**After merge:**
4. Delete old files: `index.html`, `css/`, `js/`, `fonts/`, `webfonts/`
5. Connect repo to Vercel (auto-detects Astro via package.json)
6. Set live domain → update `site` in `astro.config.mjs` → re-add sitemap integration
7. Lighthouse audit (target: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90)
8. Test contact form end-to-end

**Phase 2 (after site is live):**
- AI chat widget: ChatWidget component + Vercel Edge Function + Claude API
- Rate limit: 5 messages/session

**Phase 3 (polish):**
- Social preview image (1200×630) → `public/social-preview.png`
- Light mode toggle
- Scroll entrance animations (more components)
- robots.txt, sitemap.xml, image compression

# Known Risks / Open Questions
- No `social-preview.png` yet — OG/Twitter cards reference it; broken unfurl image until created
- Old files remain in repo until post-merge cleanup (don't affect Astro build)
- Vercel domain: confirm redirect setup before deploy
- Formspree free tier: 50 submissions/month — upgrade if needed

# Verification Results
- npm install: PASS
- npm run build: PASS (1 page, 975ms, no errors)
- Sections: hero ✓, about ✓, approach ✓, skills ✓, experience ✓, projects ✓, contact ✓
- JS: 4.3KB ✓
- No IE8 polyfills ✓
- No Bootstrap ✓
- No duplicate HTML blocks ✓
- aria-labels on icon links ✓
- alt text on all images ✓
- prefers-reduced-motion respected ✓

# Recommended Next Action
Complete the two manual steps (resume PDF copy + Formspree ID), then run the PowerShell Merge Block below from main.

# Forbidden Exploration
- `css/bootstrap*.css` — do not port
- `js/bootstrap.min.js` — do not port
- `index.html` modal content — already reformatted into components, do not re-source

# Context Notes
- branch: task/001-phase1-build
- worktree: C:/Users/conno/source/repos/portfolio-build
- context pressure: low (session completing cleanly)
- token usage concerns: none

# PowerShell Merge Block

Run these commands from main. Do not switch branches.

```powershell
# 1. Stage and commit inside the worktree (without leaving main)
git -C "C:/Users/conno/source/repos/portfolio-build" add .
git -C "C:/Users/conno/source/repos/portfolio-build" commit -m "TASK-001: build Phase 1 portfolio — Astro + Tailwind, all sections, verified build"

# 2. Squash-merge the feature branch into main
git merge --squash task/001-phase1-build
git commit -m "TASK-001: build Phase 1 portfolio — Astro + Tailwind, all sections, verified build"

# 3. Clean up — remove worktree and delete feature branch
git worktree remove "C:/Users/conno/source/repos/portfolio-build" --force
git branch -D task/001-phase1-build
```
