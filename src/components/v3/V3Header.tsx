"use client";

import { useEffect, useRef, useState } from "react";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-expo",
          scrolled ? "bg-ivory/85 py-3 backdrop-blur-md" : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 sm:px-10">
          <a href="#top" className="font-v3-display text-[22px] tracking-tight text-inkk" aria-label={`${company.name}, începutul paginii`}>
            Tomi <em className="v3-italic">Alex</em>
          </a>
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Navigare principală">
            {v3Nav.map((item) => (
              <a key={item.href} href={item.href} className="v3-link text-[11.5px] font-medium uppercase tracking-[0.22em] text-stone transition hover:text-inkk">
                {item.label}
              </a>
            ))}
            <a href={`tel:${contact.phone}`} className="v3-link text-[11.5px] font-medium uppercase tracking-[0.22em] text-inkk">
              {contact.phoneDisplay}
            </a>
          </nav>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-inkk lg:hidden"
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
          "fixed inset-0 z-40 flex flex-col justify-between bg-ivory px-6 pb-10 pt-28 transition-opacity duration-500 lg:hidden",
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
              className={cn("border-b border-hair py-5 font-v3-display text-4xl text-inkk transition-all duration-700 ease-out-expo", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="grid gap-3 text-[12px] uppercase tracking-[0.2em] text-stone">
          <a href={`tel:${contact.phone}`} tabIndex={open ? 0 : -1} className="text-inkk">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} tabIndex={open ? 0 : -1}>
            {contact.email}
          </a>
          <BackToIndexLink className="mt-4 text-bronze">← Înapoi la Index</BackToIndexLink>
        </div>
      </div>
    </>
  );
}
