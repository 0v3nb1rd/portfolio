import clsx from "clsx";
import type { Metadata } from "next";

import { fontMono, fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";
import { Providers } from "./providers";

// check if preview deployment (not production)
const isVercelPreview = process.env.VERCEL_ENV !== "production";

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
  robots: isVercelPreview
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
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(fontSans.variable, fontMono.variable, "relative antialiased")}>
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
