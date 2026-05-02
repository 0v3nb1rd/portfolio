# Portfolio v2

A personal portfolio site built with **Next.js**. Project and news content is managed in **Sanity**, and the contact form sends email via **Resend**. The UI uses **React**, **TypeScript**, **Tailwind CSS**, and **Radix**-based components.

## Features

- Home, About, Projects, and News pages
- Embedded Sanity Studio for content editing (`/studio`)
- Contact form with server-side email delivery
- Light / dark theme

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
