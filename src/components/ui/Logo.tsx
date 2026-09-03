import Link from "next/link";
import { company } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" renders the rules and year in white for dark surfaces. */
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
};

const sizes = {
  sm: { word: "text-[15px] tracking-[0.32em]", year: "text-[8px]", rule: "h-[2px]", gap: "gap-[2px]", pad: "py-1.5" },
  md: { word: "text-lg tracking-[0.34em]", year: "text-[9px]", rule: "h-[2px]", gap: "gap-[3px]", pad: "py-2" },
  lg: { word: "text-3xl tracking-[0.36em]", year: "text-[11px]", rule: "h-[3px]", gap: "gap-1", pad: "py-3" },
} as const;

/**
 * Wordmark rebuilt from the client's logo: the name in red between two double
 * rules, with the founding year underneath. Replace with the supplied raster
 * or vector file once the client shares the original artwork.
 */
export function Logo({ tone = "dark", size = "md", className, asLink = true }: LogoProps) {
  const s = sizes[size];
  const rule = tone === "light" ? "bg-white" : "bg-ink";
  const year = tone === "light" ? "text-white/80" : "text-ink/80";

  const mark = (
    <span className={cn("inline-flex flex-col items-center", className)}>
      <span className={cn("flex w-full flex-col", s.gap)} aria-hidden>
        <span className={cn("w-full", s.rule, rule)} />
        <span className={cn("w-full", s.rule, rule)} />
      </span>
      <span
        className={cn(
          "font-display font-extrabold uppercase leading-none text-brand",
          s.word,
          s.pad,
          "pl-[0.34em]",
        )}
      >
        Tomi Alex
      </span>
      <span className={cn("flex w-full flex-col", s.gap)} aria-hidden>
        <span className={cn("w-full", s.rule, rule)} />
        <span className={cn("w-full", s.rule, rule)} />
      </span>
      <span
        className={cn(
          "mt-1.5 font-display font-bold uppercase leading-none tracking-[0.42em]",
          s.year,
          year,
          "pl-[0.42em]",
        )}
      >
        Est.<span className="text-brand">{company.established}</span>
      </span>
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link
      href="/"
      aria-label={`${company.name}, pagina principală`}
      className="pressable inline-flex rounded-sm"
    >
      {mark}
    </Link>
  );
}
