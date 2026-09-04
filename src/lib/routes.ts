import type { DesignId } from "@/data/designs";
import { sitePages } from "@/data/company";

/** Ruta unei pagini în interiorul unui concept, cu slash final (export static). */
export function pageHref(design: DesignId, slug: string) {
  return slug ? `/${design}/${slug}/` : `/${design}/`;
}

export function navFor(design: DesignId) {
  return sitePages.map((p) => ({ ...p, href: pageHref(design, p.slug) }));
}

export function isActivePath(pathname: string, href: string) {
  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  return norm(pathname) === norm(href);
}
