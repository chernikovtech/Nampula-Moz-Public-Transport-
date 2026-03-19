# Maputo Transit UX Concepts

Interactive pitch site presenting 3 mobile ticketing and bus navigation UX concepts for Mozambique's Maputo metropolitan area — by Yango Tech Smart City.

**Brand:** Yango Tech design system (monochrome + red accent, Yango Headline/Group Text fonts)

## Local Dev

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Routes

| Path | Content |
|------|---------|
| `/` | Full report — market context, all 3 concepts, comparison matrix, recommendation |
| `/concept-1` | Famba Digital — interactive phone mockup (cash-bridge concept) |
| `/concept-2` | Mover — interactive phone mockup (mobile money native concept) |
| `/concept-3` | Xitimela — interactive phone mockup (community intelligence concept) |

## Deploy

**Target:** Railway + Cloudflare (`maputo-transit.chernikov.tech`)

1. Push to GitHub
2. In Railway: New Project → Deploy from GitHub → select repo
3. Railway auto-detects Vite build. Config in `railway.json`.
4. Generate Railway domain in Settings → Domains
5. In Cloudflare: add CNAME `maputo-transit` → `[your-app].up.railway.app` (proxied)
6. In Railway: add custom domain `maputo-transit.chernikov.tech`
7. Confirm live at `https://maputo-transit.chernikov.tech`

## Stack

- Vite + React + Tailwind CSS
- react-router-dom for client-side routing
- No backend, no database — static pitch site
