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

            <BgScreenSVG className="fixed inset-0 z-[-1] flex h-[1200px] w-[1200px]" />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
