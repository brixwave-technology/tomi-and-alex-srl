"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { cn } from "@/lib/cn";
import { v2Nav } from "./nav";

export function V2Header() {
  const [open, setOpen] = useState(false);

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
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between p-4 sm:p-6">
        <a
          href="#top"
          className="v2-sticker pointer-events-auto anim-pop inline-flex -rotate-3 items-center gap-2 whitespace-nowrap rounded-xl bg-ink px-4 py-2.5 font-v2-display text-[15px] font-extrabold uppercase tracking-wider text-lime [--sticker-rotate:-3deg] [--pop-rotate:-3deg]"
          aria-label={`${company.name}, începutul paginii`}
        >
          {company.shortName}
          <span className="rounded-full bg-lime px-1.5 py-0.5 text-[9px] text-ink">est. {company.established}</span>
        </a>
        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href={`tel:${contact.phone}`}
            className="v2-sticker anim-pop hidden rotate-2 items-center gap-2 rounded-full bg-sun px-4 py-2.5 text-[14px] font-bold text-ink [--sticker-rotate:2deg] [--pop-rotate:2deg] [animation-delay:120ms] sm:inline-flex"
          >
            <Phone weight="fill" className="size-4" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="v2-sticker anim-pop inline-flex h-12 items-center gap-2 rounded-full bg-coral px-5 font-v2-display text-[14px] font-extrabold uppercase tracking-wider text-paper [--sticker-rotate:-2deg] [--pop-rotate:0deg] [animation-delay:240ms]"
            aria-expanded={open}
            aria-controls="v2-menu"
          >
            {open ? <X weight="bold" className="size-5" aria-hidden /> : "Meniu"}
          </button>
        </div>
      </header>

      <div
        id="v2-menu"
        className={cn(
          "fixed inset-0 z-40 grid grid-rows-[1fr_auto] bg-violet text-paper transition-[clip-path] duration-700 ease-out-expo",
          open ? "pointer-events-auto [clip-path:circle(150%_at_100%_0%)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0%)]",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col justify-center px-6 sm:px-14" aria-label="Navigare principală">
          {v2Nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="group flex items-baseline gap-4 border-b border-paper/20 py-3 font-v2-display text-3xl font-extrabold uppercase leading-none transition hover:text-lime sm:text-6xl lg:text-7xl"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <span className="font-v2-body text-sm font-bold text-lime">0{i + 1}</span>
              {item.label}
              <ArrowUpRight weight="bold" className="ml-auto size-8 -rotate-45 opacity-0 transition group-hover:rotate-0 group-hover:opacity-100" aria-hidden />
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 border-t border-paper/20 px-6 py-6 text-[14px] sm:flex-row sm:items-center sm:justify-between sm:px-14">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`tel:${contact.phone}`} tabIndex={open ? 0 : -1} className="font-bold hover:text-lime">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} tabIndex={open ? 0 : -1} className="font-bold hover:text-lime">
              {contact.email}
            </a>
          </div>
          <BackToIndexLink className="font-bold underline underline-offset-4 hover:text-lime">← Înapoi la Index</BackToIndexLink>
        </div>
      </div>
    </>
  );
}
