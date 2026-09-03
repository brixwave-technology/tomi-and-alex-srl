import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "wordmark" is the rules + name band for tight spaces; "full" includes the wheel loader. */
  variant?: "wordmark" | "full";
  tone?: "light" | "dark";
  className?: string;
  asLink?: boolean;
  priority?: boolean;
};

/** The client's logo: red wordmark between double rules, est. 2008, wheel loader behind. */
export function Logo({ variant = "wordmark", tone = "light", className, asLink = true, priority = false }: LogoProps) {
  const src = variant === "full" ? logo.full[tone] : logo.wordmark[tone];
  const size = variant === "full" ? logo.full : logo.wordmark;
  const img = (
    <Image
      src={src}
      alt={company.name}
      width={size.width}
      height={size.height}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
  if (!asLink) return img;
  return (
    <Link href="/" aria-label={`${company.name}, pagina principală`} className="pressable inline-flex rounded-sm">
      {img}
    </Link>
  );
}
