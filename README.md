# Teracores Landing Page

A promotional landing page for **Teracores** — the integrated geothermal
numerical simulation platform for reservoir–wellbore modeling, simulation,
calibration, and visualization.

This is a **plain static site** (HTML + CSS + vanilla JS, no build step, no
framework) that lives at the **repository root** and deploys to **Vercel**.
Fonts are the self-hosted brand face **Fyodor** (`assets/fonts/`, OFL) plus
**IBM Plex Sans / Mono** from Google Fonts.

Highlights: an intro "bump" logo video that plays on load then collapses, a
scrubbable hero product video, an **EN / Bahasa Indonesia** language toggle, an
animated coupled wellbore–reservoir illustration, testimonials, and a consistent
dark↔light section rhythm. Motion respects `prefers-reduced-motion`.

> The old MkDocs technical documentation and the source art have been moved to
> [`archived/`](archived/) (not part of this deployment, and git-ignored).

## Preview locally

Any static file server works, from the repo root:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel          # first run: accept defaults (Framework: Other)
vercel --prod   # promote to production
```

### Option B — Git integration (recommended for updates)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In [vercel.com](https://vercel.com) → **Add New… → Project**, import the repo.
3. Settings:
   - **Root Directory:** `/` (the repo root)
   - **Framework Preset:** `Other`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** `.`
4. Deploy. Every push to the default branch redeploys automatically.

`vercel.json` already configures clean URLs and basic security headers;
`.vercelignore` keeps `archived/` out of the deployment. No further setup needed.

## Customizing

| What | Where |
|---|---|
| Contact email (CTA links) | `index.html` → search `mesias.canilandi@pertamina.com` |
| Colors / typography | `styles.css` → `:root` custom properties at the top |
| Copy / sections | `index.html` (each section is clearly commented) |
| Indonesian translations | `script.js` → the `I18N` dictionary |
| Logo | `assets/img/teracores_logo.png` (nav), `teracores_logogram.png` (footer / favicon) |
| Videos / posters | `assets/video/*` and `assets/img/*_poster.jpg` |

## Structure

```
.
├── index.html     # single page, anchored sections (EN default; ID via toggle)
├── styles.css     # all styling; brand tokens in :root at the top
├── script.js      # nav, scroll-reveal, hero video scrubber, EN/ID i18n, intro bump
├── assets/
│   ├── fonts/     # Fyodor — brand display font (self-hosted, OFL)
│   ├── img/       # posters, screenshots, logos, testimonial avatars
│   └── video/     # web-compressed clips (hero, demo, bump, testimonial)
├── vercel.json    # Vercel config (clean URLs, security headers)
├── .vercelignore  # excludes archived/ from the deploy
└── archived/      # NOT deployed: old MkDocs docs, CI workflows, build output, source art
```
