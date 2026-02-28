# annabellekaenchanh.com

Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Statically exported and deployed to GitHub Pages.

> **Note:** This site is deployed at `https://akaenchanh.github.io/portfolio/`

## Development

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Build static export to ./out
npm run lint    # Run ESLint
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

**First-time setup:** In your GitHub repo settings, go to **Pages** and set the source to **GitHub Actions**.

## Customization

Edit the data files in `src/data/` to update your content:

- `experience.ts` — work history
- `skills.ts` — tech skills by category
- `social.ts` — contact / social links
