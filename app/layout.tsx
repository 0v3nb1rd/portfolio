import clsx from "clsx";
import type { Metadata } from "next";
import { Suspense } from "react";

import Header from "@/components/header";
import { BgScreenSVG } from "@/components/icons";
import { fontMono, fontSans, geistMono, geistSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

import "./globals.css";
import Loading from "./loading";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
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
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          <Suspense fallback={<Loading />}>
            <Header />
            {children}

            <div className="fixed top-1/2 left-1/2 z-[-1] size-full -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-60">
              <BgScreenSVG className="size-full" />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
