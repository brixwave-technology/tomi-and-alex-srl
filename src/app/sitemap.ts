import type { MetadataRoute } from "next";
import { seo, sitePages } from "@/data/company";
import { guides } from "@/data/guides";
import { regions } from "@/data/regions";
import { pageHref } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...sitePages.map((p) => ({ url: `${seo.siteUrl}${pageHref(p.slug)}`, lastModified: now, changeFrequency: "monthly" as const, priority: p.slug ? 0.8 : 1 })),
    { url: `${seo.siteUrl}/zone/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...regions.map((r) => ({ url: `${seo.siteUrl}/zone/${r.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${seo.siteUrl}/ghiduri/`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 },
    ...guides.map((g) => ({ url: `${seo.siteUrl}/ghiduri/${g.slug}/`, lastModified: new Date(g.updated), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
