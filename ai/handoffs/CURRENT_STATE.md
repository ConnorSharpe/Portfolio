# Task
Portfolio Phase 1 — shipped to GitHub, ready for smoke test and Vercel deploy

# Current Status
Phase 1 is LIVE on GitHub (`main`, 3 commits ahead of where we started). The old Bootstrap 3 / jQuery site has been fully replaced with an Astro 4 + Tailwind 3 project. All legacy files deleted. Repo pushed to `ConnorSharpe/Portfolio` via corrected SSH config (personal key `github_personal` on alias `github-personal`). Site is not yet deployed — next step is Vercel connection and smoke test via `astro preview` locally.

# What Was Accomplished This Session
1. Scaffolded Astro 4 + Tailwind 3 project on feature branch `task/001-phase1-build`
2. Built all 7 sections: Hero, About, Engineering Approach, Skills, Experience Timeline, Projects (4 case studies), Contact
3. Published Efficiency Guide to `public/efficiency-guide.md` — linked from Fillory AI project card
4. Copied all Prosper IT screenshots to `public/images/`
5. `npm run build` verified clean (4.3KB JS / 16KB CSS)
6. Squash-merged to main, deleted worktree and feature branch
7. Deleted 34 legacy files: `index.html`, `css/`, `js/`, `fonts/`, `webfonts/`
8. Fixed SSH multi-account conflict: added `~/.ssh/github_personal` key + `github-personal` host alias in `~/.ssh/config`
9. Pushed to `git@github-personal:ConnorSharpe/Portfolio.git` ✅

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
    Contact.astro
  layouts/Layout.astro
  pages/index.astro
  styles/global.css
public/
  images/           ← all Prosper IT screenshots + profile pic
  resume/           ← EMPTY — resume PDF not yet copied here
  efficiency-guide.md
astro.config.mjs
tailwind.config.mjs
package.json
```

# Two Required Steps Before Full Launch

1. **Resume PDF** — copy `Sharpe_AI_Resume_2026.pdf` to `public/resume/` and push:
   ```powershell
   copy "C:\Users\conno\OneDrive\Desktop\2026 Job Search\Sharpe_AI_Resume_2026.pdf" "C:\Users\conno\source\repos\Portfolio\public\resume\Sharpe_AI_Resume_2026.pdf"
   git -C "C:/Users/conno/source/repos/Portfolio" add public/resume/
   git -C "C:/Users/conno/source/repos/Portfolio" commit -m "add resume PDF"
   git -C "C:/Users/conno/source/repos/Portfolio" push
   ```

2. **Formspree ID** — sign up at formspree.io, create a form → `connor.sharpe92@gmail.com`, copy the form ID, replace `YOUR_FORM_ID` in `src/components/Contact.astro` line 3:
   ```
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

# Smoke Test (Run Locally Before Vercel)

```powershell
# From the Portfolio directory
cd "C:/Users/conno/source/repos/Portfolio"
npm run build
npm run preview
# Opens at http://localhost:4321 — keep it running while you test
```

**Smoke test checklist:**
- [ ] Page loads without console errors (open DevTools → Console)
- [ ] Profile photo renders in Hero
- [ ] All 6 nav links scroll to the correct section
- [ ] Hamburger menu opens/closes on mobile (resize window to < 768px)
- [ ] Resume button: correct download behavior (will 404 until PDF is added)
- [ ] All 4 project cards expand and collapse cleanly via click
- [ ] Efficiency Guide link opens `/efficiency-guide.md` in a new tab
- [ ] Architecture diagram renders in Fillory AI project card (3 boxes with arrows)
- [ ] Contact form: fill all fields and submit — should show success message (needs Formspree ID first) or graceful error
- [ ] Engineering Approach: 6 principle cards visible
- [ ] Skills: all 6 categories with correct color coding (blue / coral for AI & Security)
- [ ] Timeline: 3 job entries (Fillory AI / Office Ally / Prosper IT) with tech pills
- [ ] Mobile layout: no content overlap, single-column stacking, photo above text in Hero
- [ ] Keyboard nav: Tab through the page — every interactive element gets a visible focus ring
- [ ] No `.show-on-mobile` / `.hide-on-mobile` classes anywhere (they're gone, just confirming)

**Quick console check:**
```js
// Paste in DevTools console to confirm no duplicate content blocks exist
document.querySelectorAll('[class*="show-on"]').length  // should be 0
document.querySelectorAll('[class*="hide-on"]').length  // should be 0
```

# Vercel Deploy (After Smoke Test Passes)

1. Go to vercel.com → Add New Project → Import Git Repository
2. Select `ConnorSharpe/Portfolio`
3. Vercel auto-detects Astro — default settings are correct:
   - Build command: `astro build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy
5. Once live, update `site` in `astro.config.mjs` to your Vercel URL (or custom domain)
6. Re-add `@astrojs/sitemap` to `astro.config.mjs` integrations after domain is set

# Remaining Work

**Phase 2 (evaluate after site is live and performing):**
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
- `public/resume/` is empty — resume download button 404s until PDF is added
- `social-preview.png` does not exist — OG/Twitter card image will 404 when URL is shared until Phase 3
- Formspree ID is a placeholder — contact form will fail submission until configured
- `Portfolio_Profile_Pic.png` is 3MB uncompressed — fine for launch, worth compressing before Phase 3

# Context Notes
- branch: main
- worktree: N/A (cleaned up)
- SSH: personal account uses `git@github-personal:ConnorSharpe/...` — remember this for any new ConnorSharpe repos
- context pressure: low
