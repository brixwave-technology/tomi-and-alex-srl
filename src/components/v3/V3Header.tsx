"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";
import { v3Nav } from "./nav";

export function V3Header() {
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-out-expo",
          scrolled || open ? "border-bronze/20 bg-anthracite-950/90 py-3 backdrop-blur-md" : "border-transparent bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 sm:px-10">
          <a href="#top" aria-label={`${company.name}, începutul paginii`}>
            <Image src={logo.wordmark.light} alt={company.name} width={logo.wordmark.width} height={logo.wordmark.height} className="h-7 w-auto" priority />
          </a>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigare principală">
            {v3Nav.map((item) => (
              <a key={item.href} href={item.href} className="v3-link text-[11.5px] font-medium uppercase tracking-[0.22em] text-granite-300 transition hover:text-limestone">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-6 lg:flex">
            <a href={`tel:${contact.phone}`} className="text-[13px] font-medium tracking-wide text-limestone">
              {contact.phoneDisplay}
            </a>
            <a href="#contact" className="inline-flex h-10 items-center border border-bronze px-5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-bronze-light transition hover:bg-bronze hover:text-anthracite-950">
              Solicitați o ofertă
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone lg:hidden"
            aria-expanded={open}
            aria-controls="v3-menu"
          >
            {open ? "Închide" : "Meniu"}
          </button>
        </div>
      </header>

      <div
        id="v3-menu"
        className={cn(
          "v3-granite fixed inset-0 z-40 flex flex-col justify-between px-6 pb-10 pt-28 transition-opacity duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="grid" aria-label="Navigare mobilă">
          {v3Nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={cn("border-b border-bronze/20 py-5 font-v3-display text-3xl font-semibold tracking-tight text-limestone transition-all duration-700 ease-out-expo", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-3 text-[12px] uppercase tracking-[0.2em] text-granite-300">
          <a href={`tel:${contact.phone}`} tabIndex={open ? 0 : -1} className="text-limestone">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} tabIndex={open ? 0 : -1}>
            {contact.email}
          </a>
          <BackToIndexLink className="mt-4 text-bronze-light">← Înapoi la Index</BackToIndexLink>
        </div>
      </div>
    </>
  );
}
