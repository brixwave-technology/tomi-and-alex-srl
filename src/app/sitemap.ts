import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/agregate/", priority: 0.9 },
  { path: "/beton/", priority: 0.9 },
  { path: "/prefabricate/", priority: 0.8 },
  { path: "/infrastructura/", priority: 0.9 },
  { path: "/contact/", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
