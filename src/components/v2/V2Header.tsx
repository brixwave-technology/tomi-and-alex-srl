"use client";

import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Clock, Envelope, List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { cn } from "@/lib/cn";
import { isActivePath, navFor } from "@/lib/routes";

const nav = navFor("v2");

/** Header industrial: bară utilitară roșie, apoi bara neagră cu logo, cele cinci pagini și butonul de comandă. */
export function V2Header() {
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
      <header className="sticky top-0 z-50">
        <div className={cn("bg-brand text-white transition-all duration-300", scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100")}>
          <div className="mx-auto flex h-9 w-full max-w-[1400px] items-center justify-between px-4 text-[12.5px] font-semibold sm:px-8">
            <div className="flex items-center gap-6">
              <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2">
                <Phone weight="fill" className="size-3.5" aria-hidden />
                {contact.phoneDisplay}
              </a>
              <span className="hidden items-center gap-2 sm:inline-flex">
                <Clock weight="fill" className="size-3.5" aria-hidden />
                {contact.hoursSummary}
              </span>
            </div>
            <a href={`mailto:${contact.emailOffers}`} className="hidden items-center gap-2 md:inline-flex">
              <Envelope weight="fill" className="size-3.5" aria-hidden />
              {contact.emailOffers}
            </a>
          </div>
        </div>
        <div className="border-b-4 border-brand bg-asphalt-950">
          <div className="mx-auto flex h-[84px] w-full max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-8">
            <Link href="/v2/" className="flex shrink-0 items-center" aria-label={`${company.name}, pagina principală`}>
              <TomiAlexLogo height={50} priority />
            </Link>
            <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigare principală">
              {nav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("border-b-4 px-3.5 py-2 font-v2-display text-[17px] font-bold uppercase tracking-wide transition", active ? "border-brand text-white" : "border-transparent text-concrete-200 hover:text-white")}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a href={`tel:${contact.phone}`} className="inline-flex h-12 items-center gap-2 border-2 border-concrete-500 px-5 font-v2-display text-[17px] font-bold uppercase tracking-wide text-white transition hover:border-white">
                <Phone weight="fill" className="size-4 text-brand" aria-hidden />
                {contact.phoneDisplay}
              </a>
              <Link href="/v2/contact/" className="inline-flex h-12 items-center bg-brand px-6 font-v2-display text-[17px] font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft">
                Cere ofertă
              </Link>
            </div>
            <button type="button" onClick={() => setOpen((o) => !o)} className="inline-flex size-12 items-center justify-center border-2 border-concrete-500 text-white xl:hidden" aria-expanded={open} aria-controls="v2-menu" aria-label={open ? "Închide meniul" : "Deschide meniul"}>
              {open ? <X weight="bold" className="size-5" aria-hidden /> : <List weight="bold" className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
        <div id="v2-menu" className={cn("border-b-4 border-brand bg-asphalt-950 px-4 pb-8 pt-2 xl:hidden", open ? "block" : "hidden")}>
          <nav className="grid" aria-label="Navigare mobilă">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("border-b border-concrete-700 py-4 font-v2-display text-2xl font-bold uppercase", active ? "text-brand-soft" : "text-white")}>
                  {item.label}
                  <span className="block font-v2 text-[13px] font-normal normal-case text-concrete-300">{item.description}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 grid gap-3">
            <a href={`tel:${contact.phone}`} className="inline-flex h-14 items-center justify-center gap-2 bg-brand font-v2-display text-xl font-bold uppercase text-white">
              <Phone weight="fill" className="size-5" aria-hidden />
              Sună acum: {contact.phoneDisplay}
            </a>
            <BackToIndexLink className="text-center text-[13px] text-concrete-300 underline-offset-4 hover:underline" />
          </div>
        </div>
      </header>
    </>
  );
}
