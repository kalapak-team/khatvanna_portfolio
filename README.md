# Khat Vanna — Portfolio

A personal portfolio presenting Khat Vanna's work, experience, skills, and background as a Computer Science student and full-stack developer.

The site is built as a responsive, single-page experience with motion-led storytelling and dedicated sections for projects, education, leadership, and contact.

## Features

- Responsive portfolio layout
- Animated page transitions and scroll effects
- Smooth scrolling, custom cursor, and scroll progress
- Sections for profile, experience, projects, skills, education, and leadership
- Contact details and social links

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19 and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) and [GSAP](https://gsap.com/) for animation
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [Lucide](https://lucide.dev/) icons

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Install and run

```bash
git clone <repository-url>
cd khatvanna_portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

To test a production build locally:

```bash
npm run build
npm run start
```

## Project structure

```text
src/
├── app/          # App Router entry point, layout, and global styles
├── components/   # Page sections and reusable UI components
├── data/         # Portfolio content, profile, and project data
├── lib/          # Shared utilities
└── types/        # Shared TypeScript types
public/           # Static assets, including portfolio images
```

## Updating portfolio content

Edit the data files in `src/data/` to update the profile, experience, projects, and skills. Replace or add static images in `public/images/`, keeping their paths in sync with the data that references them.
