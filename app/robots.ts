import { headers } from "next/headers";
import type { MetadataRoute } from "next/types";

import { siteConfig } from "@/config/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const isProduction = process.env.VERCEL_ENV === "production";
  const customDomain = siteConfig.url.replace(/^https?:\/\//, "");

  // Get the actual host from request headers
  const headersList = await headers();
  const host = headersList.get("host") || headersList.get("x-forwarded-host") || "";

  // Check if current request is on custom domain
  const isCustomDomain = host.includes(customDomain) && !host.includes("vercel.app");
  const isVercelAutoDomain = host.includes("vercel.app");

  // Block indexing for:
  // 1. Vercel auto-generated domains (*.vercel.app) - even if production (to avoid duplicate content)
  // 2. Preview deployments
  // 3. Development deployments
  // 4. Local development (when VERCEL_ENV is not set)
  // Only allow indexing on production with custom domain
  const shouldBlockIndexing = isVercelAutoDomain || !isProduction || !isCustomDomain;

  if (shouldBlockIndexing) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  // Only allow indexing for production on custom domain
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url.replace(/^https?:\/\//, ""),
  };
}
