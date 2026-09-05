import type { MetadataRoute } from "next";
import { seo, sitePages } from "@/data/company";
import { pageHref } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return sitePages.map((p) => ({
    url: `${seo.siteUrl}${pageHref(p.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.slug ? 0.8 : 1,
  }));
}
