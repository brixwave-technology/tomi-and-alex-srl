"use client";

import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { contact, company } from "@/data/company";
import { cn } from "@/lib/cn";
import { isActivePath, nav } from "@/lib/routes";

export function Header() {
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
      <header className={cn("sticky top-0 z-50 border-b border-graphite-950/10 bg-white text-graphite-950 transition-shadow duration-300", (scrolled || open) && "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)]")}>
        <div className="mx-auto flex h-[84px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${company.name}, pagina principală`}>
            <TomiAlexLogo height={50} priority />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigare principală">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("rounded-[2px] px-3.5 py-2 text-[14px] font-semibold transition", active ? "bg-graphite-950 text-white" : "text-graphite-700 hover:bg-graphite-950/5 hover:text-graphite-950")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${contact.phone}`} className="inline-flex h-11 items-center gap-2 rounded-[2px] border border-graphite-950/25 px-4 text-[14px] font-bold text-graphite-950 transition hover:border-graphite-950">
              <Phone weight="fill" className="size-4 text-brand" aria-hidden />
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex h-11 items-center rounded-[2px] bg-brand px-5 text-[14px] font-bold text-white transition hover:bg-brand-soft">
              Scrieți-ne
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-12 items-center justify-center rounded-[2px] border border-graphite-950/25 text-graphite-950 lg:hidden"
            aria-expanded={open}
            aria-controls="meniu-mobil"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
          >
            {open ? <X weight="bold" className="size-5" aria-hidden /> : <List weight="bold" className="size-5" aria-hidden />}
          </button>
        </div>
        <div id="meniu-mobil" className={cn("border-t border-graphite-950/10 bg-white px-5 pb-8 pt-2 lg:hidden", open ? "block" : "hidden")}>
          <nav className="grid" aria-label="Navigare mobilă">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("border-b border-steel-400/15 py-4 text-lg font-semibold", active ? "text-brand-soft" : "text-white")}>
                  {item.label}
                  <span className="block text-[13px] font-medium text-steel-400">{item.description}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 grid gap-3">
            <a href={`tel:${contact.phone}`} className="inline-flex h-13 items-center justify-center gap-2 rounded-[2px] bg-brand text-[16px] font-bold text-white">
              <Phone weight="fill" className="size-5" aria-hidden />
              Sună acum: {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
