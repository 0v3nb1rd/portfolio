# Portfolio v2

## Description

Personal portfolio built with **Next.js** and **Sanity** as a headless CMS. The focus is **dynamic content** (CMS + external APIs), a **component-based** UI shared across routes, and a **responsive** layout from mobile through desktop.

The site combines the **View Transitions API** (Next.js experimental flag + React `<ViewTransition>`) with **Motion** for polished route and UI animation. Static and dynamic sections use **optimized images**, sensible caching, and server-first data loading where it fits.

**Live site:** [ovbi.dev](https://ovbi.dev)

## Tech stack

| Area        | Choices                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| Framework   | **Next.js** (App Router), **React**                                                                            |
| Language    | **TypeScript**                                                                                                 |
| CMS         | **Sanity** (`next-sanity`, embedded Studio at `/studio`, GROQ queries, schema-driven types via `pnpm typegen`) |
| Styling     | **Tailwind CSS** (+ global design tokens in `app/globals.css` — **no CSS Modules**)                            |
| UI & a11y   | **Radix** primitives, custom components under `components/ui/`                                                 |
| Motion      | **Motion** library, browser **View Transitions API** ([`next.config.ts`](next.config.ts))                      |
| Forms & API | Server Actions, **Zod** validation, **Resend** for email                                                       |
| Tooling     | **pnpm**, ESLint, Prettier, Husky                                                                              |

## Features

- **Dynamic content** — Projects from **Sanity** (structured schemas + GROQ); **News** from the **Dev.to** API with ISR-friendly revalidation
- **View Transitions API** — `experimental.viewTransition` in [`next.config.ts`](next.config.ts); `<ViewTransition>` in [`components/page-motion.tsx`](components/page-motion.tsx), `(www)` layouts, and the contact flow
- **Sanity Studio** in-app at `/studio` for editors
- **Reusable React components** — shared UI, header, project/news cards, forms
- **Responsive layout** — mobile-first grids and navigation
- **Images & performance** — `next/image` with configured remote patterns (Sanity CDN, Cloudinary, etc.)
- **Contact form** — server-side delivery via Resend, honeypot + validation
- **Light / dark theme** — `next-themes`, configurable default via env

## Key technical decisions

- **Sanity as a headless CMS** — content and presentation stay separate; editors use Studio without touching application code
- **Server-first data fetching** — CMS and API reads run on the server (App Router / RSC-style flows) for performance, SEO-friendly HTML, and simpler caching
- **Schema-driven typing** — Sanity **`typegen`** (see `pnpm typegen` / `prebuild`) keeps GROQ results aligned with TypeScript definitions from the schema
- **Server Actions + Zod** — the contact flow validates input on the server and keeps secrets (e.g. Resend) off the client

## What I learned

- Working with a **headless CMS** (Sanity) and keeping content out of the codebase
- **Structuring schemas** and **querying** with GROQ, plus generated TypeScript types from the schema
- Building **reusable, composable UI** with consistent patterns (Radix + Tailwind)
- Managing **dynamic data** on the server (CMS, third-party APIs) and feeding it into the App Router
- Coordinating **navigation-friendly animations** with the View Transitions API alongside component-level motion

## Prerequisites

- **Node.js** `v22.21.1` (see `.nvmrc`; use `nvm use` if you use nvm)
- **pnpm** (this repo uses `pnpm-lock.yaml`)

## Install and run locally

1. **Clone the repository** and open the project folder.

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment variables**

   Copy `.env.example` to `.env.local` and set the values:

   | Variable                        | Purpose                                   |
   | ------------------------------- | ----------------------------------------- |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID                         |
   | `NEXT_PUBLIC_SANITY_DATASET`    | Sanity dataset name                       |
   | `RESEND_API_KEY`                | API key for outbound email (contact form) |
   | `NEXT_PUBLIC_DEFAULT_THEME`     | Default UI theme (e.g. `light` or `dark`) |

   Optional variables are documented in [`.env.example`](.env.example).

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000). The app runs Sanity type generation before dev/build via `predev` / `prebuild`; a valid Sanity configuration is required for those steps to succeed.

## Scripts

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `pnpm dev`    | Development server                    |
| `pnpm build`  | Production build                      |
| `pnpm start`  | Run production server (after `build`) |
| `pnpm lint`   | ESLint                                |
| `pnpm format` | Prettier                              |

## Deploy

Deploy like any Next.js app (for example on [Vercel](https://vercel.com)). Set the same environment variables in your hosting provider’s dashboard.
