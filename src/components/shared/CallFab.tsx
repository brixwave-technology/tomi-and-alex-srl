import { Phone } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

/**
 * Buton plutitor „Sună”, vizibil doar pe mobil și tabletă. Este un link
 * tel:, deci apelul pornește instant, fără pași intermediari.
 */
export function CallFab({ className, labelClassName }: { className?: string; labelClassName?: string }) {
  return (
    <a
      href={`tel:${contact.phone}`}
      className={cn(
        "fixed bottom-[76px] right-3 z-[95] inline-flex h-14 items-center gap-2.5 rounded-full pl-4 pr-5 text-[15px] font-bold shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] transition active:scale-95 lg:hidden",
        className,
      )}
      aria-label={`Sunați acum la ${contact.phoneDisplay}`}
    >
      <span className="relative flex size-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-current opacity-30 animate-pulse-ring" aria-hidden />
        <Phone weight="fill" className="relative size-5" aria-hidden />
      </span>
      <span className={cn("leading-none", labelClassName)}>
        <span className="block text-[11px] font-semibold uppercase tracking-wider opacity-80">Sună acum</span>
        <span className="block">{contact.phoneDisplay}</span>
      </span>
    </a>
  );
}
