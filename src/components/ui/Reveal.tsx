"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  /** "fade" moves the block up into place; "clip" unmasks a photo from the bottom. */
  variant?: "fade" | "clip";
  id?: string;
};

/**
 * Marks its element as in view once, when 20% of it enters the viewport.
 * The transition itself lives in CSS (see globals.css) so it runs off the
 * main thread and respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "fade",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.inview = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.inview = "true";
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(variant === "clip" ? "reveal-clip" : "reveal", className)}
      style={style}
      data-inview="false"
    >
      {children}
    </Tag>
  );
}
