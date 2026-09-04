import type { MetadataRoute } from "next";
import { seo } from "@/data/company";

export const dynamic = "force-static";

/** Portalul este o prezentare privată pentru client: nu se indexează. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
