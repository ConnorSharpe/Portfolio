# Task
TASK-002: AI Chat Widget — Phase 2

# Current Status
Phase 2 implementation complete. Build passes clean. Awaiting: (1) Connor fills `src/data/chat-context.ts` with real content, (2) `GOOGLE_AI_API_KEY` provisioned in Vercel env vars. Then push to main → auto-deploy.

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

# Files Modified (Phase 2)
- `src/data/chat-context.ts` — new, scaffolded (Connor must fill in content)
- `src/components/ChatWidget.astro` — new, fully implemented
- `api/chat.ts` — new, Vercel Serverless Function
- `src/pages/index.astro` — import + `<ChatWidget />` added
- `package.json` — `@google/generative-ai` added

# Verification Results
- `npm run build`: PASS ✅
- Manual UI test: pending (requires Vercel env var)

# Remaining Work

**Phase 2 (blocked on Connor):**
- [ ] TODO: Fill in `src/data/chat-context.ts` with actual bio, skills, work history, projects
- [ ] TODO: Provision `GOOGLE_AI_API_KEY` in Vercel dashboard → Environment Variables
- Push to main → Vercel auto-deploys
- Run verification checklist from TASK-002.md

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
