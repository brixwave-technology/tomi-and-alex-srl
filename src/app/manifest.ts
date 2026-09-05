import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#0c0d0f",
    theme_color: "#0c0d0f",
    lang: "ro",
    icons: [
      { src: `${base}/icon.svg`, sizes: "any", type: "image/svg+xml" },
      { src: `${base}/apple-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  };
}
