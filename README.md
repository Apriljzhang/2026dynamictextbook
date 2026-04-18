# Education reform demo · Dynamic textbook

English UI. Next.js (App Router) prototype: dashboard, knowledge graph, living textbook (Industrial Economics IV aligned with the Yu & Xu lecture notes PDF), and an AI review simulation.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No `basePath` is used locally.

## Deploy on GitHub Pages (GitHub only)

The site is a **static export** (`next.config.ts` uses `output: "export"`). The workflow [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) builds with:

`NEXT_PUBLIC_BASE_PATH=/<repository-name>`

so asset URLs match `https://<user>.github.io/<repository-name>/`.

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Allow the workflow to run on `main`. After the first successful run, the site URL will be shown on the workflow run and under Pages settings.

If you rename the repository, the base path changes—re-run the workflow (it reads `github.event.repository.name`).

### Manual build (check before CI)

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

Static files are written to `out/`.

## Routes

| Path | Page |
|------|------|
| `/` | Dashboard |
| `/knowledge-graph/` | Knowledge graph |
| `/textbook-demo/` | Living textbook |
| `/ai-review/` | AI review |

## Stack

Next.js, Tailwind CSS, Framer Motion, `react-force-graph-2d`.
