import type { MetadataRoute } from "next";
import { seo, sitePages } from "@/data/company";
import { designs } from "@/data/designs";
import { pageHref } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${seo.siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...designs.flatMap((d) =>
      sitePages.map((p) => ({
        url: `${seo.siteUrl}${pageHref(d.id, p.slug)}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: p.slug ? 0.8 : 0.9,
      })),
    ),
  ];
}
