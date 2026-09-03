import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Discreet slot for information the client has not supplied yet.
 * Renders as a quiet dashed label so the layout is complete during review
 * and the missing data is obvious to whoever fills it in.
 */
export function Placeholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-dashed border-chalk/30 px-2 py-0.5 text-[13px] text-chalk/55",
        className,
      )}
      title="Informație de completat"
    >
      {children}
      <span className="sr-only"> (de completat)</span>
    </span>
  );
}
