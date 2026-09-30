# Deploying the docs to Cloudflare Pages

This repo has `.github/workflows/cloudflare-pages.yml`, which builds the
MkDocs site and deploys it to Cloudflare Pages on every push to `main` (or
manually via **Actions → Deploy docs to Cloudflare Pages → Run workflow**).

Unlike GitHub Pages, Cloudflare Pages' free tier works the same whether the
source repo is **public or private** — nothing to upgrade, nothing to make
public.

## 1. Create a free Cloudflare account

Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) if you don't
already have an account.

## 2. Note your Account ID

Cloudflare dashboard → pick any site/zone, or go to **Workers & Pages** →
the **Account ID** is shown in the right-hand sidebar. Copy it.

## 3. Create an API token

Dashboard → click your profile icon → **My Profile** → **API Tokens** →
**Create Token**:

- Use a custom token
- Permission: `Account` → `Cloudflare Pages` → `Edit`
- Account Resources: scope to your account
- Create, then copy the token (shown once)

## 4. Create the Pages project

The GitHub Action deploys *to* an existing Pages project — it does not create
one for you.

1. Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Project name: `teracoresdoc` (must match `projectName` in
   `.github/workflows/cloudflare-pages.yml`)
3. Skip/finish the initial upload with any placeholder — the workflow will
   overwrite it on the first real deploy

## 5. Add GitHub Actions secrets

In the GitHub repo: **Settings → Secrets and variables → Actions → New
repository secret**, add:

| Secret name             | Value                          |
|--------------------------|---------------------------------|
| `CLOUDFLARE_API_TOKEN`   | the token from step 3          |
| `CLOUDFLARE_ACCOUNT_ID`  | the account ID from step 2     |

## 6. Trigger a deploy

Push to `main`, or go to **Actions → Deploy docs to Cloudflare Pages → Run
workflow**. The job will:

1. Check out the repo
2. Install `requirements.txt` (`mkdocs`, `mkdocs-material`)
3. Run `mkdocs build` (outputs to `site/`)
4. Upload `site/` to the Cloudflare Pages project via `cloudflare/pages-action`

## 7. Visit the site

```
https://teracoresdoc.pages.dev
```

Each deploy is also given a unique preview URL, shown in the Action's logs
and in the Cloudflare dashboard.

## Optional: custom domain

Pages project → **Custom domains** → **Set up a custom domain** → follow the
DNS instructions. Free, and works with domains already on Cloudflare or
external DNS.

## Optional: keep the published site itself private

Making the *repo* private only hides the source. The deployed site is public
on the web by default (anyone with the `.pages.dev` URL, or custom domain,
can view it). To also gate the published docs behind a login:

Pages project → **Settings → Access policy** (Cloudflare Zero Trust /
Access) → free for up to 50 users → require login (email OTP, Google, GitHub,
etc.) before the site loads.

## Troubleshooting

- **Action fails at the `cloudflare/pages-action` step with "project not
  found":** create the Pages project first (step 4) — the action won't create
  it.
- **401/403 from Cloudflare:** the API token is missing the
  `Account > Cloudflare Pages > Edit` permission, or `CLOUDFLARE_ACCOUNT_ID`
  is wrong.
- **Build succeeds but site looks stale:** Cloudflare Pages caches
  aggressively at the edge; a fresh deploy should invalidate it, but hard
  refresh (Ctrl+Shift+R) if you still see old content.
