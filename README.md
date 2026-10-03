# Teracores Landing Page

A promotional landing page for **Teracores Desktop** — the visual pre- and
post-processor for geothermal reservoir simulation.

This is a plain static site (HTML + CSS + JS, no build step, no external
images or CDNs), so it deploys anywhere. It is intentionally separate from the
technical documentation in [`../docs`](../docs) (built by MkDocs into
[`../site`](../site)).

## Preview locally

Any static file server works, e.g. from this folder:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
cd landing
vercel          # first run: accept defaults (Framework: Other)
vercel --prod   # promote to production
```

### Option B — Git integration (recommended for updates)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In [vercel.com](https://vercel.com) → **Add New… → Project**, import the repo.
3. Set the settings:
   - **Root Directory:** `landing`
   - **Framework Preset:** `Other`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** `.` (the root of `landing/`)
4. Deploy. Every push to the default branch redeploys automatically.

`vercel.json` in this folder already configures clean URLs and basic security
headers — no further setup is needed.

## Customizing

| What | Where |
|---|---|
| Demo contact email | `index.html` → search `info@teracores.example` |
| Colors / typography | `styles.css` → `:root` variables at the top |
| Copy / sections | `index.html` (each section is clearly commented) |
| Logo | `index.html` → the inline SVG in `.nav__brand` |

## Structure

```
landing/
├── index.html    # the page (single page, anchored sections)
├── styles.css    # all styling, CSS custom properties at the top
├── script.js     # mobile nav + scroll-reveal (no dependencies)
├── vercel.json   # Vercel config (clean URLs, security headers)
└── README.md     # this file
```
