# Portfolio

Personal portfolio site for Carlos Sierra, built with Next.js App Router, React 19, TypeScript, and Tailwind CSS 4.

## Routes

- `/`: portfolio homepage with featured work, strengths, experience snapshot, and CTA sections
- `/cv`: recruiter-facing CV page
- `/projects/[slug]`: project case-study pages generated from structured data

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Project Structure

```text
src/
  app/
    page.tsx                 Home route
    cv/page.tsx              CV route
    projects/[slug]/page.tsx Project detail route
    layout.tsx               Shared shell and metadata
    globals.css              Global styles
  components/
    button.tsx               Shared button primitive
    container.tsx            Shared page-width wrapper
    parallax-media.tsx       Scroll-based media treatment
    project-card.tsx         Featured project cards
    project-visuals.tsx      Shared project media rendering
    site-footer.tsx          Global footer
    site-header.tsx          Global header
    tag.tsx                  Shared tag primitive
    home.tsx                 Homepage sections
    cv.tsx                   CV sections
    project.tsx              Project detail sections
  data/
    site.ts                  Site copy and navigation
    cv.ts                    CV content
    projects.ts              Project metadata and media references
  lib/
    utils.ts                 Small shared helpers

public/
  projects/                  Optimized runtime project images

_assets/
  Source PNG captures kept alongside the repo
```

## Development

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Useful scripts:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Content Editing

Most site content is data-driven:

- Update `src/data/site.ts` for global copy, navigation, about text, and CTA content
- Update `src/data/cv.ts` for CV content
- Update `src/data/projects.ts` to add or edit case studies

To add a project:

1. Add the project entry in `src/data/projects.ts`
2. Add optimized images under `public/projects/<slug>/`
3. Mark the project `featured: true` if it should appear on the homepage

## Asset Notes

- `public/projects/` contains the optimized images actually served by the site
- `_assets/` contains larger source PNG files and is not referenced by the runtime app

## Maintenance Notes

- `.next/`, `node_modules/`, `.DS_Store`, and `*.tsbuildinfo` are local/generated artifacts and should stay out of version control
- This repo uses the App Router and project pages are statically generated via `generateStaticParams`
