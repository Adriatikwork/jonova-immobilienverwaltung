# JONOVA Immobilienverwaltung

Static Next.js landing page prototype (DE | EN). Deploys to **GitHub Pages**.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build (static export)

```bash
pnpm build
```

Output lands in `out/`.

## GitHub Pages setup

1. Create a **public** GitHub repo named exactly: `jonova-immobilienverwaltung`
2. Prefer account **Adriatikwork** (clean `*.github.io` URLs — not Fahrschule custom domain)
3. Push this folder to `main`
4. Repo → **Settings → Pages** → Source: **GitHub Actions**
5. Live URL:
   `https://adriatikwork.github.io/jonova-immobilienverwaltung/`

## Docker (optional — local only)

```bash
pnpm docker:dev    # hot reload on :8915
pnpm docker:prod   # static serve on :8914
pnpm docker:stop
```

## SEO (github.io → custom domain later)

Already wired (Fahrschule-level, without a registered domain yet):

- Full metadata (title template, description, keywords, OG, Twitter, robots)
- JSON-LD: LocalBusiness + ProfessionalService, WebSite, 4× Service (no FAQ/hreflang until real)
- `sitemap.ts` + `robots.txt` + `manifest.json`
- `og-image.jpg` (1200×630), apple-touch icon, favicon
- Canonical only (DE|EN is a client toggle on one URL — no fake hreflang)
- Country-level geo (`CH`) until client provides exact address / coordinates
- Phone hidden until set in `lib/site.ts` (`CONTACT.phoneE164`)
- 404 is `noindex`

**When the domain is ready**, edit:

1. `lib/site.ts` → `SITE_URL = https://www.your-domain.ch`
2. `public/robots.txt` → update Sitemap URL
3. `next.config.mjs` → clear `basePath` / `assetPrefix` for domain root
4. Optional: `public/CNAME`, GA4, Search Console verification
