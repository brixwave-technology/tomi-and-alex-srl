import { sitePages } from "@/data/company";

/** Ruta unei pagini, cu slash final (export static). */
export function pageHref(slug: string) {
  return slug ? `/${slug}/` : "/";
}

export const nav = sitePages.map((p) => ({ ...p, href: pageHref(p.slug) }));

export function isActivePath(pathname: string, href: string) {
  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  return norm(pathname) === norm(href);
}
