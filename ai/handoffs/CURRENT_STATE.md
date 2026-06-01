# Task
Portfolio Phase 1 — LIVE on Vercel, contact form fix is next

# Current Status
Site is fully deployed and smoke tested. Vercel is connected to `main` and auto-deploys on every push. GitHub Pages has been unpublished to stop Jekyll build failures. Resume PDF is live. All smoke test items passed. Only remaining pre-launch blocker is the Formspree contact form ID.

# What Was Accomplished This Session
1. Copied `Sharpe_AI_Resume_2026.pdf` → `public/resume/` — committed and pushed to `main`
2. Disabled GitHub Pages (unpublished) to stop Jekyll build failures
3. Deployed to Vercel — connected to `ConnorSharpe/Portfolio` main branch, auto-deploy enabled
4. Smoke tested on live Vercel URL — all items passed ✅

# Smoke Test Results (PASSED 2026-06-01)
- ✅ Page loads without console errors
- ✅ Profile photo renders in Hero
- ✅ All 6 nav links scroll to correct sections
- ✅ Hamburger menu opens/closes on mobile (< 768px)
- ✅ Resume button downloads `Sharpe_AI_Resume_2026.pdf`
- ✅ All 4 project cards expand and collapse on click
- ✅ Efficiency Guide link opens `/efficiency-guide.md` in new tab
- ✅ Architecture diagram renders in Fillory AI card
- ✅ Engineering Approach — 6 principle cards visible
- ✅ Skills — 6 categories, blue/coral color coding correct
- ✅ Timeline — 3 entries: Fillory AI / Office Ally / Prosper IT with tech pills
- ✅ Mobile layout — no overlap, single-column stacking
- ✅ Keyboard nav — focus rings on all interactive elements
- ✅ No legacy show-on/hide-on classes present

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
    Contact.astro          ← FORMSPREE_ENDPOINT placeholder needs real ID
  layouts/Layout.astro
  pages/index.astro
  styles/global.css
public/
  images/                  ← all Prosper IT screenshots + profile pic
  resume/
    Sharpe_AI_Resume_2026.pdf  ✅
  efficiency-guide.md
astro.config.mjs
tailwind.config.mjs
package.json
```

# Next Task — Fix Contact Form (Formspree)

**File:** `src/components/Contact.astro`
**Line:** 3
**Change:** Replace `YOUR_FORM_ID` with real Formspree form ID

```
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

**Steps for next agent:**
1. Sign up / log in at formspree.io
2. Create a new form → set email to `connor.sharpe92@gmail.com`
3. Copy the form ID (looks like `xpwzabcd`)
4. Edit `src/components/Contact.astro` line 3 — replace `YOUR_FORM_ID`
5. Build locally to verify: `npm run build`
6. Commit and push to main — Vercel auto-deploys
7. Test the live contact form end-to-end (fill + submit → check email arrives)

**Allowed files:**
- `src/components/Contact.astro`

**Forbidden files:**
- All other components
- `public/*`
- `astro.config.mjs`

# Remaining Work

**Phase 2 (after contact form is live):**
- AI chat widget: `src/components/ChatWidget.astro` + Vercel Edge Function + Claude API
- System prompt: resume + project summaries + behavioral constraints
- Rate limit: 5 messages/session

**Phase 3 (polish):**
- Social preview image (1200×630) → `public/social-preview.png`
- Light mode toggle
- Re-enable sitemap with live domain
- `robots.txt`
- Image compression (profile pic is 3MB — worth optimizing)

# Known Issues / Open Items
- Formspree ID is a placeholder — contact form will fail submission until configured (NEXT TASK)
- `social-preview.png` does not exist — OG/Twitter card will 404 when URL is shared (Phase 3)
- `Portfolio_Profile_Pic.png` is 3MB uncompressed — fine for now, optimize in Phase 3

# Context Notes
- branch: main
- worktree: N/A
- Vercel: connected to `ConnorSharpe/Portfolio`, auto-deploys on push to main
- GitHub Pages: unpublished — do not re-enable
- SSH: personal account uses `git@github-personal:ConnorSharpe/...`
- context pressure: low
