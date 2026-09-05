import { brixwave } from "@/data/brixwave";
import { cn } from "@/lib/cn";

/** Mențiune „BRIXWAVE” legată de site-ul agenției. */
export function BrixwaveLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={brixwave.url} target="_blank" rel="noreferrer" className={cn("font-semibold underline decoration-current/40 underline-offset-4 transition hover:decoration-current", className)}>
      {children ?? brixwave.name}
    </a>
  );
}
