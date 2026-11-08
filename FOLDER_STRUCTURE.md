# Folder structure

```
jahnavi-portfolio/
├── public/                      Static files. Put resume.pdf here.
├── src/
│   ├── app/
│   │   ├── layout.tsx           Fonts, page title, and the <html> shell
│   │   ├── page.tsx             The one page: puts every component in order
│   │   ├── globals.css          Colors (main color on one line), fade-in effects
│   │   └── icon.svg             Browser tab icon
│   ├── components/
│   │   ├── Header.tsx           1. Name and links: Work, Experience, Contact
│   │   ├── Intro.tsx            2. Name, one sentence, current role
│   │   ├── Project.tsx          3. One project (used five times)
│   │   ├── ShippedList.tsx      4. Other shipped products, one line each
│   │   ├── Timeline.tsx         5. Jobs, newest first
│   │   ├── Education.tsx        6. Degree, college, CGPA, LeetCode
│   │   ├── Contact.tsx          7. Email, LinkedIn, GitHub, Resume
│   │   ├── Footer.tsx           8. Name, location, year
│   │   └── ui/                  Small reusable pieces
│   │       ├── Section.tsx      Section wrapper with its title and rule
│   │       ├── Reveal.tsx       Fades a block in once when it scrolls into view
│   │       └── TextLink.tsx     Underlined link in the main color
│   ├── data/
│   │   └── portfolio.ts         All the content of the site
│   └── types/
│       └── portfolio.ts         TypeScript types for that content
├── FOLDER_STRUCTURE.md          This file
├── README.md                    How to run and edit
├── package.json                 Scripts and dependencies
├── next.config.ts               Next.js settings
├── tsconfig.json                TypeScript settings
├── eslint.config.mjs            Lint rules
└── .gitignore
```

## How the page fits together

`page.tsx` reads `data/portfolio.ts` and passes each part to its component. Components only display what they are given, so changing content never means editing a component.

- `Section` gives Work, Experience, and Contact the same title style and spacing.
- `Reveal` is the only client component. Everything else renders as static HTML.
- `Project` and `Timeline` read like rows in a document: a number or date on the left, the details on the right.
