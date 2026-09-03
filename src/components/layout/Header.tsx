"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { company, cta, primaryNav } from "@/data/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  return norm(pathname) === norm(href);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A sentinel strip at the top of the document drives the solid header state
  // without a scroll listener: once it has fully scrolled out, the header fills.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lock scroll, trap escape, move focus while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  const solid = scrolled || open;

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="pointer-events-none absolute top-0 left-0 h-24 w-px" />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out-strong",
          solid
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between lg:h-20">
          <Logo tone="light" size="sm" />

          <nav aria-label="Navigare principală" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "link-line font-display text-[15px] font-medium tracking-tight text-white/85 transition-colors duration-200 hover:text-white",
                        active && "text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href={cta.primary.href} variant="brand" size="md">
              {cta.primary.label}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="pressable -mr-2 inline-flex size-11 items-center justify-center rounded-sm text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" weight="bold" /> : <List className="size-6" weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Meniu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink pt-[72px] text-white transition-[opacity,visibility] duration-300 ease-out-strong lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Navigare mobilă" className="container-site flex flex-1 flex-col justify-between py-8">
          <ul className="flex flex-col">
            {primaryNav.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className={cn(
                    "border-b border-white/10 transition-[opacity,transform] duration-500 ease-out-strong motion-reduce:transition-none",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                >
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? 0 : -1}
                    onClick={close}
                    className={cn(
                      "flex items-center justify-between py-5 font-display text-3xl font-semibold tracking-tight",
                      active ? "text-white" : "text-white/75",
                    )}
                  >
                    {item.label}
                    {active && <span className="size-2 rounded-none bg-brand" aria-hidden />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              "flex flex-col gap-6 transition-[opacity,transform] duration-500 ease-out-strong motion-reduce:transition-none",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
          >
            <Button href={cta.primary.href} variant="brand" size="lg" className="w-full" tabIndex={open ? 0 : -1} onClick={close}>
              {cta.primary.label}
            </Button>
            <p className="font-display text-sm text-white/50">{company.tagline}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
