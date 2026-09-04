"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { contact, company } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";
import { v1Nav } from "./nav";

export function V1Header() {
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
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open ? "border-steel-400/20 bg-navy-950/95 backdrop-blur" : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label={`${company.name}, începutul paginii`}>
            <Image src={logo.wordmark.light} alt={company.name} width={logo.wordmark.width} height={logo.wordmark.height} className="h-8 w-auto" priority />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigare principală">
            {v1Nav.map((item) => (
              <a key={item.href} href={item.href} className="text-[13.5px] font-semibold text-steel-200 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 text-[14px] font-bold text-white">
              <Phone weight="fill" className="size-4 text-brand" aria-hidden />
              {contact.phoneDisplay}
            </a>
            <a href="#contact" className="inline-flex h-10 items-center rounded-[2px] bg-brand px-4 text-[13.5px] font-bold text-white transition hover:bg-brand-soft">
              Cere o ofertă
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-11 items-center justify-center rounded-[2px] border border-steel-400/30 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="v1-menu"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
          >
            {open ? <X weight="bold" className="size-5" aria-hidden /> : <List weight="bold" className="size-5" aria-hidden />}
          </button>
        </div>
        {open && (
          <div id="v1-menu" className="border-t border-steel-400/20 bg-navy-950 px-5 pb-8 pt-4 lg:hidden">
            <nav className="grid" aria-label="Navigare mobilă">
              {v1Nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-steel-400/15 py-4 text-lg font-semibold text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <a href={`tel:${contact.phone}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-steel-400/40 text-[15px] font-bold text-white">
                <Phone weight="fill" className="size-4 text-brand" aria-hidden />
                {contact.phoneDisplay}
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex h-12 items-center justify-center rounded-[2px] bg-brand text-[15px] font-bold text-white">
                Cere o ofertă
              </a>
              <BackToIndexLink className="mt-2 text-center text-[13px] font-semibold text-steel-400 underline-offset-4 hover:underline" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
