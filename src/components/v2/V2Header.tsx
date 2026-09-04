"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Clock, Envelope, List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";
import { v2Nav } from "./nav";

/**
 * Header industrial: bară utilitară roșie (telefon, program, e-mail), apoi
 * bara neagră cu logo, navigare și un buton masiv de comandă.
 */
export function V2Header() {
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
      <header className="fixed inset-x-0 top-0 z-50">
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
          <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8">
            <a href="#top" className="flex items-center" aria-label={`${company.name}, începutul paginii`}>
              <Image src={logo.wordmark.light} alt={company.name} width={logo.wordmark.width} height={logo.wordmark.height} className="h-8 w-auto" priority />
            </a>
            <nav className="hidden items-center gap-7 xl:flex" aria-label="Navigare principală">
              {v2Nav.map((item) => (
                <a key={item.href} href={item.href} className="font-v2-display text-[16px] font-semibold uppercase tracking-wide text-concrete-200 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a href={`tel:${contact.phone}`} className="inline-flex h-12 items-center gap-2 border-2 border-concrete-500 px-5 font-v2-display text-[17px] font-bold uppercase tracking-wide text-white transition hover:border-white">
                <Phone weight="fill" className="size-4 text-brand" aria-hidden />
                {contact.phoneDisplay}
              </a>
              <a href="#comanda" className="inline-flex h-12 items-center bg-brand px-6 font-v2-display text-[17px] font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft">
                Comandați materiale
              </a>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex size-12 items-center justify-center border-2 border-concrete-500 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="v2-menu"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
            >
              {open ? <X weight="bold" className="size-5" aria-hidden /> : <List weight="bold" className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="v2-menu"
        className={cn("fixed inset-0 z-40 flex flex-col bg-asphalt-950 px-4 pb-8 pt-32 transition-opacity duration-300 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}
        aria-hidden={!open}
      >
        <nav className="grid" aria-label="Navigare mobilă">
          {v2Nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="border-b border-concrete-700 py-4 font-v2-display text-3xl font-bold uppercase text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto grid gap-3">
          <a href={`tel:${contact.phone}`} tabIndex={open ? 0 : -1} className="inline-flex h-14 items-center justify-center gap-2 border-2 border-concrete-500 font-v2-display text-xl font-bold uppercase text-white">
            <Phone weight="fill" className="size-5 text-brand" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <a href="#comanda" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="inline-flex h-14 items-center justify-center bg-brand font-v2-display text-xl font-bold uppercase text-white">
            Comandați materiale
          </a>
          <BackToIndexLink className="text-center text-[13px] text-concrete-300 underline-offset-4 hover:underline" />
        </div>
      </div>
    </>
  );
}
