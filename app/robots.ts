import type { MetadataRoute } from "next/types";

import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Check if it's a Vercel auto-generated domain (*.vercel.app)
  const isVercelAutoDomain = process.env.VERCEL_URL?.includes("vercel.app");
  const isProduction = process.env.VERCEL_ENV === "production";

  // Block indexing for:
  // 1. Vercel auto-generated domains (*.vercel.app) - even if production (to avoid duplicate content)
  // 2. Preview deployments
  // 3. Development deployments
  // 4. Local development (when VERCEL_ENV is not set)
  const shouldBlockIndexing = isVercelAutoDomain || !isProduction;

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
