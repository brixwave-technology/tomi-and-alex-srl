"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { contact, cta } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * Mobile-only bar pinned to the bottom of the viewport: call and directions.
 * It appears once the hero has scrolled past so it never competes with the
 * hero's own call card.
 */
export function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const callClasses =
    "pressable flex h-14 flex-1 items-center justify-center gap-2.5 rounded-sm font-semibold tracking-tight";

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="pointer-events-none absolute left-0 top-0 h-[85vh] w-px" />
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-chalk/10 bg-asphalt/90 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-md transition-transform duration-400 ease-out-strong lg:hidden motion-reduce:transition-none",
          visible ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!visible}
      >
        <div className="flex gap-3">
          {contact.phone ? (
            <a href={`tel:${contact.phone}`} className={cn(callClasses, "bg-brand text-white")} tabIndex={visible ? 0 : -1}>
              <Phone weight="fill" className="size-5" aria-hidden />
              {cta.call.label}
            </a>
          ) : (
            <span className={cn(callClasses, "border border-dashed border-chalk/35 text-chalk/70")}>
              <Phone weight="fill" className="size-5" aria-hidden />
              {cta.call.label}
            </span>
          )}
          <a
            href={contact.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(callClasses, "border border-chalk/25 text-chalk")}
            tabIndex={visible ? 0 : -1}
          >
            <MapPin weight="fill" className="size-5 text-brand" aria-hidden />
            Navighează
          </a>
        </div>
      </div>
    </>
  );
}
