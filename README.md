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
