# Curriculum Vitae (Next.js)

Web version of [Le Duc Tien's CV](https://letien91.github.io/curriculum_vitae/), migrated from Flutter Web to Next.js.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Local build (root path):

```bash
npm run build
```

GitHub Pages build (same URL as the Flutter version):

```bash
GITHUB_PAGES=true npm run build
```

Static files are generated in `out/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Enable **GitHub Pages** with source **GitHub Actions**.
3. Push to `main` or `master` — the workflow deploys automatically.

The site will be available at `https://<username>.github.io/curriculum_vitae/`.

## Project structure

- `src/data/cv.ts` — CV content (edit here to update text)
- `public/images/` — screenshots and assets migrated from Flutter build
- `src/components/` — UI components

## Migrate from Flutter repo

Content and images were extracted from [letien91/curriculum_vitae](https://github.com/letien91/curriculum_vitae) (Flutter web build output).
