"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  /** Întârziere (ms) pentru efecte în cascadă. */
  delay?: number;
  /** "fade" urcă în poziție, "clip" demască o imagine, "line" trasează o linie, "blur" vine din ceață, "scale" crește. */
  variant?: "fade" | "clip" | "line" | "blur" | "scale" | "slide";
  id?: string;
  style?: CSSProperties;
};

const variantClass = {
  fade: "reveal",
  clip: "reveal-clip",
  line: "reveal-line",
  blur: "reveal-blur",
  scale: "reveal-scale",
  slide: "reveal-slide",
};

/**
 * Marchează elementul ca fiind vizibil o singură dată. Tranziția este în CSS,
 * ca să ruleze în afara firului principal și să respecte prefers-reduced-motion.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, variant = "fade", id, style }: RevealProps) {
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const merged = { ...(style ?? {}), ...(delay ? { "--reveal-delay": `${delay}ms` } : {}) } as CSSProperties;

  return (
    <Tag ref={ref} id={id} className={cn(variantClass[variant], className)} style={merged} data-inview="false">
      {children}
    </Tag>
  );
}
