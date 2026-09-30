# Deploying the docs to GitHub Pages

This repo already has `.github/workflows/gh-pages.yml`, which builds the MkDocs
site and pushes it to the `gh-pages` branch on every push to `main`. Following
these steps makes that build actually visible as a live website.

> **Note:** GitHub Pages only serves sites for free on **public** repositories.
> If this repo is private, you'd need GitHub Pro/Team/Enterprise, or you'd have
> to make the repo public. If you want to keep the repo private, use
> [Cloudflare Pages](deploy-cloudflare-pages.md) instead.

## 1. Make sure the repo is public (or on a paid plan)

Settings → General → Danger Zone → **Change visibility** → Public.
Skip this if the repo is already public or you're on a plan that supports
private Pages sites.

## 2. Let the workflow build the `gh-pages` branch

Push a commit to `main` (or re-run the workflow manually from the **Actions**
tab). `.github/workflows/gh-pages.yml` will:

1. Check out the repo
2. Install `requirements.txt` (`mkdocs`, `mkdocs-material`)
3. Run `mkdocs gh-deploy --force`, which builds the site and force-pushes the
   result to the `gh-pages` branch

The first successful run creates the `gh-pages` branch if it doesn't exist yet.

## 3. Point GitHub Pages at the `gh-pages` branch

Settings → **Pages** → *Build and deployment*:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`
- Save

GitHub usually pre-selects this automatically once it detects the `gh-pages`
branch, but check it the first time.

## 4. Visit the site

The site is published at:

```
https://gems-s223.github.io/teracoresdoc/
```

(Optional) Set `site_url: https://gems-s223.github.io/teracoresdoc/` in
`mkdocs.yml` so generated links, sitemap, and search are correct.

## Optional: custom domain

1. Settings → Pages → **Custom domain** → enter your domain.
2. Add the DNS record GitHub shows you (a `CNAME` record pointing at
   `gems-s223.github.io`, or `A`/`AAAA` records for an apex domain).
3. GitHub commits a `CNAME` file to the `gh-pages` branch automatically — note
   that `mkdocs gh-deploy --force` on the next deploy will overwrite that
   branch, so keep the custom domain set in the repo settings (it persists)
   or add a `CNAME` file under `docs/` so MkDocs regenerates it every build.

## Troubleshooting

- **404 / blank page:** confirm the **Source** branch in Settings → Pages is
  `gh-pages`, not `main`.
- **Workflow fails on `mkdocs gh-deploy`:** check the Action's `permissions:`
  block has `contents: write` (already set in this repo's workflow).
- **Repo is private and Pages won't enable:** see the note at the top — either
  upgrade the plan, make the repo public, or switch to
  [Cloudflare Pages](deploy-cloudflare-pages.md).
