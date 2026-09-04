"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { BackToIndexLink } from "@/components/portal/DesignShell";
import { company, contact } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";
import { v2Nav } from "./nav";

/**
 * Navigarea V2: rail vertical fix pe desktop (ca într-un centru de comandă),
 * bară superioară compactă cu meniu pe mobil. Secțiunea activă este urmărită
 * cu IntersectionObserver.
 */
export function V2Header() {
  const [active, setActive] = useState(v2Nav[0].href);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = v2Nav.map((n) => document.getElementById(n.href.slice(1))).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
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
      {/* Rail lateral, desktop */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[232px] flex-col border-r border-white/10 bg-carbon-950 lg:flex" aria-label="Navigare principală">
        <a href="#top" className="flex h-[72px] items-center border-b border-white/10 px-6" aria-label={`${company.name}, începutul paginii`}>
          <Image src={logo.wordmark.light} alt={company.name} width={logo.wordmark.width} height={logo.wordmark.height} className="h-7 w-auto" priority />
        </a>
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          <p className="px-3 font-v2-mono text-[10px] uppercase tracking-[0.24em] text-steel-500">Secțiuni</p>
          <ul className="mt-3 grid gap-0.5">
            {v2Nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 border-l-2 px-3 py-2.5 text-[13.5px] font-medium transition-colors",
                      isActive ? "border-electric bg-white/[0.04] text-white" : "border-transparent text-steel-300 hover:bg-white/[0.03] hover:text-white",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className={cn("font-v2-mono text-[11px]", isActive ? "text-electric" : "text-steel-500")}>{item.code}</span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-white/10 p-5">
          <p className="font-v2-mono text-[10px] uppercase tracking-[0.24em] text-steel-500">Dispecerat</p>
          <a href={`tel:${contact.phone}`} className="mt-2 flex items-center gap-2 text-[15px] font-semibold text-white hover:text-electric-soft">
            <Phone weight="fill" className="size-4 text-electric" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <p className="mt-1 text-[12px] text-steel-500">{contact.hoursSummary}</p>
          <a href="#contact" className="mt-4 flex h-11 items-center justify-center bg-electric text-[13px] font-semibold text-white transition hover:bg-electric-soft">
            Solicitați o ofertă
          </a>
          <BackToIndexLink className="mt-3 block text-center text-[12px] text-steel-500 underline-offset-4 hover:text-white hover:underline" />
        </div>
      </aside>

      {/* Bară superioară, mobil și tabletă */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-carbon-950/95 px-4 backdrop-blur lg:hidden">
        <a href="#top" aria-label={`${company.name}, începutul paginii`}>
          <Image src={logo.wordmark.light} alt={company.name} width={logo.wordmark.width} height={logo.wordmark.height} className="h-6 w-auto" priority />
        </a>
        <div className="flex items-center gap-2">
          <a href={`tel:${contact.phone}`} className="inline-flex size-10 items-center justify-center border border-white/15 text-white" aria-label={`Sunați la ${contact.phoneDisplay}`}>
            <Phone weight="fill" className="size-4 text-electric" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="v2-menu"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
          >
            {open ? <X weight="bold" className="size-5" aria-hidden /> : <List weight="bold" className="size-5" aria-hidden />}
          </button>
        </div>
      </header>
      <div
        id="v2-menu"
        className={cn("fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-carbon-950 px-4 pb-8 pt-4 transition-opacity duration-300 lg:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")}
        aria-hidden={!open}
      >
        <nav className="grid" aria-label="Navigare mobilă">
          {v2Nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex items-center gap-4 border-b border-white/10 py-4 text-[17px] font-medium text-white">
              <span className="font-v2-mono text-[12px] text-electric">{item.code}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto grid gap-3">
          <a href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex h-12 items-center justify-center bg-electric text-[14px] font-semibold text-white">
            Solicitați o ofertă
          </a>
          <BackToIndexLink className="text-center text-[13px] text-steel-300 underline-offset-4 hover:underline" />
        </div>
      </div>
    </>
  );
}
