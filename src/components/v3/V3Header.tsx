"use client";

import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { cn } from "@/lib/cn";
import { isActivePath, navFor } from "@/lib/routes";

const nav = navFor("v3");

export function V3Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Închide meniul la schimbarea paginii (ajustare de stare în timpul randării, fără efect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinel} className="absolute top-0 h-px w-full" aria-hidden />
      <header className={cn("sticky top-0 z-50 border-b border-anthracite-950/10 bg-white text-anthracite-950 transition-shadow duration-700 ease-out-expo", (scrolled || open) && "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]")}>
        <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 sm:px-10">
          <Link href="/v3/" className="flex shrink-0 items-center" aria-label={`${company.name}, pagina principală`}>
            <TomiAlexLogo height={50} priority />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigare principală">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("v3-link text-[11.5px] font-medium uppercase tracking-[0.22em] transition", active ? "text-brand after:scale-x-100" : "text-granite-500 hover:text-anthracite-950")}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-6 xl:flex">
            <a href={`tel:${contact.phone}`} className="text-[13px] font-medium tracking-wide text-anthracite-950">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex h-10 items-center border border-brand px-5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-white">
              Scrieți-ne
            </a>
          </div>
          <button type="button" onClick={() => setOpen((o) => !o)} className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-anthracite-950 lg:hidden" aria-expanded={open} aria-controls="v3-menu">
            {open ? "Închide" : "Meniu"}
          </button>
        </div>
      </header>
      <div id="v3-menu" className={cn("v3-granite fixed inset-0 z-40 flex flex-col justify-between px-6 pb-44 pt-28 transition-opacity duration-500 lg:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")} aria-hidden={!open}>
        <nav className="grid" aria-label="Navigare mobilă">
          {nav.map((item, i) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} aria-current={active ? "page" : undefined} className={cn("border-b border-brand/20 py-5 font-v3-display text-3xl font-semibold tracking-tight transition-all duration-700 ease-out-expo", active ? "text-brand-soft" : "text-limestone", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}>
                {item.label}
                <span className="block font-v3-body text-[13px] font-normal text-granite-300">{item.description}</span>
              </Link>
            );
          })}
        </nav>
        <div className="grid gap-3 text-[12px] uppercase tracking-[0.2em] text-granite-300">
          <a href={`tel:${contact.phone}`} tabIndex={open ? 0 : -1} className="inline-flex h-14 items-center justify-center bg-brand text-[12px] font-medium uppercase tracking-[0.22em] text-white">
            Sună acum: {contact.phoneDisplay}
          </a>
          <BackToIndexLink className="mt-2 text-center text-brand-soft">← Înapoi la Index</BackToIndexLink>
        </div>
      </div>
    </>
  );
}
