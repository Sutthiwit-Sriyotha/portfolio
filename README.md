# Sutthiwit Sriyotha — Premium 3D Portfolio

Next.js 16 static-export portfolio built with App Router, React/TypeScript, Tailwind CSS 4, GSAP + ScrollTrigger, Motion, and CSS perspective.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For production:

```bash
npm run lint
npm run build
```

Build output is `out/` and supports GitHub Pages. When deploying to `https://username.github.io/portfolio/`, build with `NEXT_PUBLIC_BASE_PATH=/portfolio`.

## Data and images

Edit `src/data/projects.ts` to modify projects, roles, verified contributions, tools, screenshots, labels or case-study sections. Replace assets in `public/projects/<slug>/` and update image paths in that data file. There is no need to edit animation components.

All currently supplied generated 3D-look graphics are **concept visuals** rather than real project screenshots or actual 3D meshes. JOINS+ and UP-PSF reports may contain screenshots; those can be inserted after approving publication. The Ticket System project has intentionally unverified role and tech details.

## Features

- Responsive editorial homepage and accessible navigation
- ScrollTrigger rise, blur, parallax, card float and timeline motion
- CSS perspective depth + pointer-driven card tilt
- Real working layered project gallery with scrim, close, Escape, arrow-key navigation and lightbox
- Static `projects/[slug]` detail routes and typed project data
- Reduced-motion support
- WebP generated visuals and lazy-loaded images
- Designed for static hosting on GitHub Pages

## Deployment

A GitHub Actions workflow is provided at `.github/workflows/nextjs-pages.yml`. Set **Settings → Pages → Source: GitHub Actions** once, then push to `main` to deploy. The workflow deploys the Next.js `out/` artifact.