import { headers } from "next/headers";

/**
 * Get geo location based on IP address
 * Works with Vercel headers (production) or ipapi.co API (fallback)
 * Returns "Local/Development" for local development
 */
export async function getGeoLocation(): Promise<string> {
  try {
    const headersList = await headers();

    // First check Vercel headers (if on Vercel)
    const vercelCountry = headersList.get("x-vercel-ip-country");
    const vercelCity = headersList.get("x-vercel-ip-city");
    const vercelRegion = headersList.get("x-vercel-ip-country-region");

    if (vercelCountry) {
      const parts = [];
      if (vercelCity) parts.push(vercelCity);
      if (vercelRegion) parts.push(vercelRegion);
      if (vercelCountry) parts.push(vercelCountry);
      return parts.length > 0 ? parts.join(", ") : vercelCountry;
    }

    // If not on Vercel, get IP and use API
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      headersList.get("cf-connecting-ip") ||
      null;

    // Local development
    if (!ip || ip === "::1" || ip.startsWith("127.") || ip === "localhost") {
      return "Local/Development";
    }

    // ipapi.co for geo location (free up to 1000 requests/day)
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: {
          "User-Agent": "portfolio-contact-form",
        },
      });

      if (!response.ok) {
        return "Unknown";
      }

      const data = await response.json();

      if (data.error) {
        return "Unknown";
      }

      const parts = [];
      if (data.city) parts.push(data.city);
      if (data.region) parts.push(data.region);
      if (data.country_name) parts.push(data.country_name);

      return parts.length > 0 ? parts.join(", ") : "Unknown";
    } catch (apiError) {
      console.error("GeoLocation API error:", apiError);
      return "Unknown";
    }
  } catch (error) {
    console.error("GeoLocation error:", error);
    return "Unknown";
  }
}
