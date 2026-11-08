# Jahnavi Sigatapu — Portfolio

A one-page personal portfolio: work, experience, education, and contact. Frontend only, built with Next.js, TypeScript, React, and Tailwind CSS. The page is prerendered at build time. There is no database, API, or login.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4317.

For a production build:

```bash
npm run build
npm run start
```

## Where to change things

| What | File |
| --- | --- |
| All text: projects, jobs, education, links | `src/data/portfolio.ts` |
| Main color (one line) | `--accent` at the top of `src/app/globals.css` |
| Fonts and page title | `src/app/layout.tsx` |
| Page order | `src/app/page.tsx` |

- **Project links.** Each project has an empty `links` list. Add real URLs only, for example `{ label: "Play Store", href: "https://play.google.com/..." }`. A project with no links shows none.
- **Resume.** Put the PDF at `public/resume.pdf`. The Resume link in Contact appears automatically on the next build.

See `FOLDER_STRUCTURE.md` for what each file does.
