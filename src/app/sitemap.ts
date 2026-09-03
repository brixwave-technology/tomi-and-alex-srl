import type { MetadataRoute } from "next";
import { seo } from "@/data/company";
import { designs } from "@/data/designs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${seo.siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...designs.map((d) => ({
      url: `${seo.siteUrl}${d.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
