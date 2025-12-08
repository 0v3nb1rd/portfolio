import clsx from "clsx";
import type { Metadata } from "next";

import { inter, manrope } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";
import { Providers } from "./providers";

// Block indexing for:
// 1. Vercel auto-generated domains (*.vercel.app) - even if production
// 2. Preview/development deployments
const isVercelAutoDomain = process.env.VERCEL_URL?.includes("vercel.app");
const isVercelPreview = process.env.VERCEL_ENV !== "production";
const shouldBlockIndexing = isVercelAutoDomain || isVercelPreview;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  // if preview deployment - block indexing
  robots: shouldBlockIndexing
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={clsx(inter.variable, manrope.variable)}>
      <body className="relative antialiased">
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: siteConfig.defaultTheme,
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          {children}
          <SanityLive />
        </Providers>
      </body>
    </html>
  );
}
