import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** "mark" doar simbolul, "full" simbol și wordmark. */
  variant?: "mark" | "full";
  /** Culoarea de bază; simbolul folosește currentColor plus un gradient propriu. */
  tone?: "light" | "dark";
  title?: string;
};

/**
 * Logo BRIXWAVE: un bloc („brix”) tăiat de o undă („wave”), în gradient
 * cyan–violet, urmat de wordmark-ul cu litere late.
 */
export function BrixwaveLogo({ className, variant = "full", tone = "light", title = "BRIXWAVE" }: Props) {
  const ink = tone === "light" ? "#FFFFFF" : "#0B0D12";
  const gradientId = `bw-grad-${variant}-${tone}`;
  return (
    <svg
      className={cn("block", className)}
      viewBox={variant === "full" ? "0 0 372 64" : "0 0 64 64"}
      role="img"
      aria-label={title}
      fill="none"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="0.55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#C026D3" />
        </linearGradient>
      </defs>
      {/* Blocul */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
      {/* Unda care taie blocul */}
      <path
        d="M4 38 C 14 26, 22 26, 32 38 S 50 50, 60 38 L 60 46 C 50 58, 42 58, 32 46 S 14 34, 4 46 Z"
        fill={ink}
        fillOpacity="0.92"
      />
      <path
        d="M4 24 C 14 12, 22 12, 32 24 S 50 36, 60 24"
        stroke={ink}
        strokeOpacity="0.55"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {variant === "full" && (
        <text
          x="80"
          y="45"
          fill={ink}
          fontFamily="var(--font-manrope), 'Manrope', 'Inter', system-ui, sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="6"
        >
          BRIXWAVE
        </text>
      )}
    </svg>
  );
}
