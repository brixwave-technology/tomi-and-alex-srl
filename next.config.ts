import type { NextConfig } from "next";

// Static export for GitHub Pages, servit pe domeniul propriu tomialex.ro, din rădăcină.
// NEXT_PUBLIC_BASE_PATH rămâne gol; se setează doar dacă site-ul ajunge din nou
// sub un subdirector (de exemplu la o previzualizare pe <user>.github.io/<repo>/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
