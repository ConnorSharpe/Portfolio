# Task
Portfolio Phase 2 — AI Chat Widget

# Current Status
Phase 1 fully complete and verified. Contact form (Formspree `xojbgqbv`) confirmed working 2026-06-01. Site live on Vercel. Phase 2 task file created: `ai/tasks/TASK-002.md`. No work started on Phase 2 yet.

# What Was Accomplished (Phase 1)
1. Built full portfolio site: Astro + Tailwind, all sections
2. Deployed to Vercel — auto-deploys on push to `main`
3. Disabled GitHub Pages to stop Jekyll failures
4. Resume PDF live at `/resume/Sharpe_AI_Resume_2026.pdf`
5. Smoke tested — all items passed ✅
6. Contact form wired to Formspree `xojbgqbv` — email delivery confirmed ✅

# Files in Repo (main)
```
src/
  components/
    Nav.astro
    Hero.astro
    About.astro
    EngineeringApproach.astro
    Skills.astro
    Timeline.astro
    Projects.astro
    Contact.astro          ← Formspree xojbgqbv, working
  layouts/Layout.astro
  pages/index.astro
  styles/global.css
public/
  images/
  resume/
    Sharpe_AI_Resume_2026.pdf
  efficiency-guide.md
astro.config.mjs
tailwind.config.mjs
package.json
```

# Next Task — Phase 2: AI Chat Widget
See `ai/tasks/TASK-002.md` for full spec.

# Remaining Work

**Phase 2 (active):**
- AI chat widget — see TASK-002.md

**Phase 3 (polish):**
- Social preview image (1200×630) → `public/social-preview.png`
- Light mode toggle
- Re-enable sitemap with live domain
- `robots.txt`
- Image compression (profile pic is 3MB)

# Known Issues / Open Items
- `social-preview.png` missing — OG/Twitter card will 404 when URL is shared (Phase 3)
- `Portfolio_Profile_Pic.png` is 3MB uncompressed — optimize in Phase 3

# Context Notes
- branch: main
- worktree: N/A
- Vercel: connected to `ConnorSharpe/Portfolio`, auto-deploys on push to main
- GitHub Pages: unpublished — do not re-enable
- SSH: personal account uses `git@github-personal:ConnorSharpe/...`
- context pressure: low
