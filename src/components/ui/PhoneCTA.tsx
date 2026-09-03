import { Phone } from "@phosphor-icons/react/dist/ssr";
import { contact, cta } from "@/data/site";
import { cn } from "@/lib/cn";

type Props = {
  size?: "md" | "lg" | "xl";
  variant?: "brand" | "chalk" | "outline";
  className?: string;
  /** Show the number itself instead of the generic label. */
  showNumber?: boolean;
};

const sizes = {
  md: "h-12 px-5 text-[15px] gap-2.5",
  lg: "h-14 px-7 text-base gap-3",
  xl: "h-16 px-8 text-lg gap-3",
};

const variants = {
  brand: "bg-brand text-white hover:bg-brand-deep",
  chalk: "bg-chalk text-asphalt hover:bg-white",
  outline: "border border-chalk/30 text-chalk hover:border-chalk hover:bg-chalk/10",
};

/**
 * The site's primary action. Renders a live tel: link once the client
 * supplies the number; until then a clearly marked placeholder that keeps
 * the layout honest.
 */
export function PhoneCTA({ size = "lg", variant = "brand", className, showNumber = false }: Props) {
  const classes = cn(
    "pressable inline-flex items-center justify-center whitespace-nowrap rounded-sm font-semibold tracking-tight",
    sizes[size],
    variants[variant],
    className,
  );
  const label = showNumber && contact.phoneDisplay ? contact.phoneDisplay : cta.call.label;

  if (contact.phone) {
    return (
      <a href={`tel:${contact.phone}`} className={classes}>
        <Phone weight="fill" className="size-5 shrink-0" aria-hidden />
        {label}
      </a>
    );
  }

  return (
    <span
      className={cn(classes, "cursor-default border border-dashed border-chalk/40 bg-transparent text-chalk/70 hover:bg-transparent")}
      title="Numărul de telefon urmează să fie completat"
      aria-label="Sună acum. Numărul de telefon urmează să fie completat."
    >
      <Phone weight="fill" className="size-5 shrink-0" aria-hidden />
      {cta.call.label}
      <span className="ml-1 text-[11px] font-medium text-chalk/45">nr. de completat</span>
    </span>
  );
}

/** Large, typographic rendering of the number for hero and contact surfaces. */
export function PhoneNumber({ className }: { className?: string }) {
  if (contact.phone && contact.phoneDisplay) {
    return (
      <a
        href={`tel:${contact.phone}`}
        className={cn("display link-line inline-block text-chalk tabular-nums", className)}
      >
        {contact.phoneDisplay}
      </a>
    );
  }
  return (
    <span
      className={cn("display inline-block border border-dashed border-chalk/35 px-3 py-1 text-chalk/55", className)}
      title="Numărul de telefon urmează să fie completat"
    >
      07xx xxx xxx
      <span className="sr-only"> (număr de completat)</span>
    </span>
  );
}
