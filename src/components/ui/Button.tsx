import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

type Variant = "brand" | "ink" | "paper" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const base =
  "pressable group/btn inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-sm font-display font-semibold tracking-tight select-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  brand: "bg-brand text-white hover:bg-brand-deep",
  ink: "bg-ink text-white hover:bg-graphite",
  paper: "bg-paper text-ink hover:bg-white",
  "outline-light":
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  "outline-dark":
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function Arrow() {
  return (
    <ArrowRight
      weight="bold"
      className="size-4 shrink-0 transition-transform duration-300 ease-out-strong group-hover/btn:translate-x-1"
      aria-hidden
    />
  );
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, variant = "brand", size = "md", arrow = false, className, children, ...rest } = props;
    return (
      <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  const { href: _href, variant = "brand", size = "md", arrow = false, className, children, ...rest } = props;
  void _href;
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
