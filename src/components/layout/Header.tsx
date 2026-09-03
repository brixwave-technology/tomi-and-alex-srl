"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, MapPin, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/Logo";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { company, contact, primaryNav } from "@/data/site";
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
  // without a scroll listener.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Lock scroll, close on Escape, manage focus while the drawer is open.
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
      <div ref={sentinelRef} aria-hidden className="pointer-events-none absolute left-0 top-0 h-24 w-px" />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ease-out-strong",
          solid ? "bg-asphalt/88 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Logo variant="wordmark" tone="light" className="h-9 sm:h-10 lg:h-11" priority />

          <nav aria-label="Navigare principală" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "link-line text-[15px] font-medium tracking-tight text-chalk/80 transition-colors duration-200 hover:text-chalk",
                        active && "text-chalk",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={contact.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line hidden items-center gap-1.5 text-[14px] font-medium text-chalk/75 transition-colors hover:text-chalk 2xl:inline-flex"
            >
              <MapPin weight="fill" className="size-4 text-brand" aria-hidden />
              {contact.locality ?? "Vezi locația"}
            </a>
            <PhoneCTA size="md" showNumber />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="pressable -mr-2 inline-flex size-11 items-center justify-center rounded-sm text-chalk xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" weight="bold" /> : <List className="size-6" weight="bold" />}
          </button>
        </div>
        <div
          className={cn(
            "rule-double text-chalk/15 transition-opacity duration-300",
            solid ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />
      </header>

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Meniu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-asphalt pt-[72px] text-chalk transition-[opacity,visibility] duration-300 ease-out-strong xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Navigare mobilă" className="container-site flex flex-1 flex-col justify-between overflow-y-auto py-8">
          <ul className="flex flex-col">
            {primaryNav.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className={cn(
                    "border-b border-chalk/10 transition-[opacity,transform] duration-500 ease-out-strong motion-reduce:transition-none",
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
                      "display flex items-center justify-between py-4 text-[2rem] sm:text-4xl",
                      active ? "text-chalk" : "text-chalk/70",
                    )}
                  >
                    {item.label}
                    {active && <span className="size-2.5 bg-brand" aria-hidden />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              "mt-8 flex flex-col gap-4 transition-[opacity,transform] duration-500 ease-out-strong motion-reduce:transition-none",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: open ? "340ms" : "0ms" }}
          >
            <PhoneCTA size="lg" className="w-full" showNumber />
            <a
              href={contact.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable inline-flex h-14 w-full items-center justify-center gap-2 rounded-sm border border-chalk/25 font-semibold"
              tabIndex={open ? 0 : -1}
            >
              <MapPin weight="fill" className="size-5 text-brand" aria-hidden />
              Navighează la noi
            </a>
            <p className="text-sm text-chalk/50">{company.tagline}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
