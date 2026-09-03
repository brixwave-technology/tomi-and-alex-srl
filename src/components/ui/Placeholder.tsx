import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Discreet slot for information the client has not supplied yet.
 * Renders as a quiet label so the layout is complete during review and the
 * missing data is obvious to whoever fills it in.
 */
export function Placeholder({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-dashed px-2 py-0.5 text-[13px]",
        tone === "light" ? "border-white/25 text-white/45" : "border-ink/25 text-concrete",
        className,
      )}
      title="Informație de completat"
    >
      {children}
      <span className="sr-only"> (de completat)</span>
    </span>
  );
}
