# CLAUDE.md — Maputo Transit UX Concepts

## What This Is
Interactive pitch site showcasing 3 mobile ticketing and bus navigation UX concepts for Mozambique's Maputo metropolitan area. Built for Yango Tech's Smart City division to present to Nampula municipality, AMT (Maputo Metropolitan Transport Agency), and World Bank stakeholders. The site includes a Yango-branded report page with market context, comparison matrix, and phased rollout plan, plus 3 fully interactive React phone mockups (Famba Digital, Mover, Xitimela) demonstrating 5+ screens each with navigation between route discovery, live tracking, ticket purchase, active ticket QR, and trip history.

## Brand & Design System
- **Brand:** Yango Tech
- **Design spec:** Monochrome + #FF1A1A accent. Yango Headline (900 weight, uppercase) for headings. Yango Group Text for body. Dark hero (#000), light body (#F5F5F5). No box-shadows, no gradients on surfaces. Generous border-radius (1.875rem cards, 2rem pills).
- **Style file:** `src/styles/brand.css` — all @font-face declarations and CSS variables. Do not override these elsewhere.
- **Phone mockups use their own inline color systems** (orange for Famba, teal for Mover, indigo for Xitimela) — these are intentionally distinct from the Yango brand to represent each concept's identity.

## Tech Stack
| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | Vite + React | Client-side routing via react-router-dom |
| Styling | Tailwind CSS + inline styles | Brand CSS in src/styles/brand.css, mockups use inline for self-containment |
| Backend | None | Static frontend only |
| Database | None | No persistent state |
| Hosting | Railway | Auto-deploys from `main` branch |
| DNS | Cloudflare | CNAME → Railway public domain |

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

No env vars required for local dev. The app is entirely static.

## Key Files

| File / Folder | Purpose |
|---------------|---------|
| `server.js` | Production Express server with SPA fallback — serves dist/ with index.html catch-all |
| `src/App.jsx` | Root component with React Router — nav bar, route definitions, demo wrapper layout |
| `src/components/ReportPage.jsx` | Main report landing page with all written content, comparison matrix, recommendation |
| `src/components/FambaDigital.jsx` | Concept 1 interactive phone mockup — cash-bridge, conductor-assisted, USSD fallback |
| `src/components/Mover.jsx` | Concept 2 interactive phone mockup — mobile money native, multimodal journey planner |
| `src/components/Xitimela.jsx` | Concept 3 interactive phone mockup — community-powered, crowdsourced intelligence |
| `src/styles/brand.css` | Yango Tech font-face declarations + CSS variables |
| `railway.json` | Railway build + start config |
| `.env.example` | Environment variables documentation |

## Deployment

- **Platform:** Railway (GitHub auto-deploy on push to `main`)
- **Live URL:** `https://maputo-transit.chernikov.tech`
- **Railway project:** maputo-transit-ux
- **Cloudflare zone:** chernikov.tech

To deploy: push to `main`. Railway builds and deploys automatically.

For first-time setup, see `README.md` → Deploy section.

## Conventions

- All new components go in `src/components/`, named in PascalCase
- Phone mockup components are self-contained — all styles inline, no external CSS dependencies
- Use CSS variables from `brand.css` for the report page — never hardcode Yango hex colors in ReportPage
- Each phone mockup is 390×844px fixed dimensions with internal navigation state
- Commits: imperative present tense — "Add filter logic" not "Added filter logic"

## Do Not

- Do not modify the phone mockup color palettes to match Yango red — each concept has its own deliberate identity color (orange, teal, indigo)
- Do not add a backend or database — this is a static pitch site, all data is hardcoded for demo purposes
- Do not use localStorage or sessionStorage in mockups — state is ephemeral per session
- Do not import Tailwind classes inside phone mockup components — they use inline styles for portability
- Do not modify `railway.json` build commands without testing `npm run build && npm run preview` locally first

## Owner Context
- **Owner:** Evgeny Chernikov
- **Company:** Yango Tech
- **Contact:** eechernikov@yango.com

<!-- REVIEW: confirm the 3 context questions were answered:
  1. Use-case description specific enough? ✅ — pitch site for Maputo transit UX concepts
  2. Conventions captured? ✅ — PascalCase, inline styles for mockups, brand.css for report
  3. "Do Not" list has project-specific rules? ✅ — 5 specific rules covering color identity, static nature, no localStorage
-->
