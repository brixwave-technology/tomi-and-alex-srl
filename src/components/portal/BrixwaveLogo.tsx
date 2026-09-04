import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** "mark" doar simbolul, "full" simbol și wordmark. */
  variant?: "mark" | "full";
  /** Culoarea wordmark-ului „Brix”; „wave” rămâne albastru. */
  tone?: "light" | "dark";
  title?: string;
};

/**
 * Logo BRIXWAVE: cub izometric în contur hexagonal, trasat în gradient
 * alb → albastru regal, urmat de wordmark-ul „Brix” (alb) + „wave” (albastru).
 */
export function BrixwaveLogo({ className, variant = "full", tone = "light", title = "Brixwave" }: Props) {
  const ink = tone === "light" ? "#FFFFFF" : "#0B0F1A";
  const id = `bw-${variant}-${tone}`;
  const stroke = `url(#${id})`;
  return (
    <svg className={cn("block", className)} viewBox={variant === "full" ? "0 0 344 72" : "0 0 72 72"} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <defs>
        <linearGradient id={id} x1="12" y1="8" x2="60" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F4F7FF" />
          <stop offset="0.45" stopColor="#8FA5F2" />
          <stop offset="1" stopColor="#3B5BDB" />
        </linearGradient>
      </defs>
      {/* Contur hexagonal */}
      <path d="M36 5 L63 20.5 V51.5 L36 67 L9 51.5 V20.5 Z" stroke={stroke} strokeWidth="2.6" strokeLinejoin="round" />
      {/* Muchiile cubului */}
      <path d="M36 67 V36 M36 36 L9 20.5 M36 36 L63 20.5" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cubul interior, pentru adâncime */}
      <path d="M36 21 L49 28.5 V44 L36 51.5 L23 44 V28.5 Z M36 51.5 V36.5 M36 36.5 L23 28.5 M36 36.5 L49 28.5" stroke={stroke} strokeWidth="1.6" strokeOpacity="0.85" strokeLinejoin="round" />
      {variant === "full" && (
        <text x="88" y="49" fontFamily="var(--font-manrope), 'Manrope', 'Poppins', system-ui, sans-serif" fontWeight="800" fontSize="38" letterSpacing="-0.5">
          <tspan fill={ink}>Brix</tspan>
          <tspan fill="#3B5BDB">wave</tspan>
        </text>
      )}
    </svg>
  );
}
