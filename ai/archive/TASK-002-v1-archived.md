# TASK-002: AI Chat Widget

# Goal
Add a floating AI chat widget to the portfolio that lets visitors ask questions about Connor and get answers powered by the Claude API via a Vercel Edge Function.

# Allowed Files
- `src/components/ChatWidget.astro` (new)
- `api/chat.ts` (new — Vercel Edge Function)
- `src/pages/index.astro` (mount widget only — minimal change)
- `astro.config.mjs` (only if Vercel adapter output config needs adjustment)

# Forbidden Files
- All existing components (Nav, Hero, About, EngineeringApproach, Skills, Timeline, Projects, Contact)
- `public/*`
- `tailwind.config.mjs`
- `src/styles/global.css`

# Constraints
- Model: `claude-haiku-4-5-20251001` (fast, low cost)
- Rate limit: 5 messages per session (client-side, sessionStorage counter)
- Streaming: optional — non-streaming is acceptable for v1
- API key: stored as Vercel environment variable `ANTHROPIC_API_KEY` — never in source
- No new npm dependencies unless strictly necessary
- Widget must not interfere with existing layout or scroll behavior
- Must be accessible: keyboard navigable, focus trap when open, aria labels

# System Prompt (to embed in api/chat.ts)
```
You are an AI assistant representing Connor Sharpe's portfolio. Answer questions about Connor's background, skills, and projects concisely and professionally.

Connor Sharpe is a full-stack software engineer with experience in AI systems, Python, TypeScript, React, and .NET. He has worked at:
- Fillory AI: AI-driven content platform, built agent pipelines, prompt engineering, Claude API integration
- Office Ally: healthcare software, .NET/C# backend, insurance eligibility systems
- Prosper IT Consulting: full-stack capstone projects (Django, React)

Keep answers to 2-3 sentences. If asked something outside Connor's professional background, politely redirect. Do not fabricate details not listed above.
```

# Acceptance Criteria
- [ ] Chat bubble visible in bottom-right corner on all screen sizes
- [ ] Clicking bubble opens chat panel with input field
- [ ] User can type a message and receive a Claude-generated response
- [ ] Rate limit: after 5 messages, input is disabled with a friendly message
- [ ] API key is not exposed to the client
- [ ] Build passes: `npm run build`
- [ ] No regressions in existing sections

# Verification Steps
1. `npm run build` — must pass clean
2. Run dev server: `npm run dev`
3. Open browser → confirm chat bubble renders bottom-right
4. Send a message → confirm response appears
5. Send 5 messages → confirm input disables on the 5th
6. Check Network tab → confirm `ANTHROPIC_API_KEY` is never in client response
7. Check mobile (< 768px) — widget must not overlap nav or content badly

# Dependency Chain

Editing:
- `src/components/ChatWidget.astro` (new)
- `api/chat.ts` (new)

Requires:
- `src/pages/index.astro` (mount point only)
- Vercel env var: `ANTHROPIC_API_KEY`

Irrelevant:
- All existing components
- `public/*`
- `tailwind.config.mjs`
