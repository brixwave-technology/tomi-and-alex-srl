import { existsSync } from "node:fs";
import { join } from "node:path";
import { withBase } from "@/data/images";

/**
 * Logo-ul original Brixwave, dacă a fost adăugat în repo. Verificarea se face
 * la build (export static), pe server; până la adăugarea fișierelor, Index-ul
 * folosește replica SVG.
 *
 *   public/images/brixwave-logo.png   simbol + wordmark (header, footer)
 *   public/images/brixwave-mark.png   doar simbolul (central, bară, dialog)
 *
 * Sunt acceptate și .svg / .webp, cu același nume de bază.
 */
export type BrandAssets = { logo: string | null; mark: string | null };

function find(base: string): string | null {
  for (const ext of ["svg", "png", "webp"]) {
    const file = `${base}.${ext}`;
    if (existsSync(join(process.cwd(), "public", "images", file))) return withBase(`/images/${file}`);
  }
  return null;
}

export function getBrixwaveAssets(): BrandAssets {
  return { logo: find("brixwave-logo"), mark: find("brixwave-mark") };
}
