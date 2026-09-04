import Image from "next/image";
import { brixwave } from "@/data/brixwave";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** "mark" doar simbolul, "full" simbol și wordmark. */
  variant?: "mark" | "full";
  /** Dimensiunea simbolului în pixeli (lățime = înălțime). */
  size?: number;
  /** Culoarea wordmark-ului „Brix”; „wave” rămâne albastru. */
  tone?: "light" | "dark";
  /** Învelit într-un link către site-ul Brixwave (implicit da). */
  linked?: boolean;
  /** Plăcuță albă rotunjită sub simbol, pentru fundaluri închise (implicit da). */
  plate?: boolean;
  priority?: boolean;
};

/**
 * Logo BRIXWAVE: simbolul original (cubul cu undă) și wordmark-ul
 * „Brix” + „wave”. Orice instanță duce la brixwave.com.
 */
export function BrixwaveLogo({ className, variant = "full", size = 36, tone = "light", linked = true, plate = true, priority }: Props) {
  const inner = Math.round(size * (plate ? 0.74 : 1));
  const mark = <Image src={brixwave.mark} alt={variant === "mark" ? brixwave.fullName : ""} width={inner} height={inner} priority={priority} className="shrink-0 object-contain" style={{ width: inner, height: inner }} />;
  const content = (
    <>
      {plate ? (
        <span className="inline-flex shrink-0 items-center justify-center rounded-[24%] bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]" style={{ width: size, height: size }} aria-hidden={variant === "full"}>
          {mark}
        </span>
      ) : (
        mark
      )}
      {variant === "full" && (
        <span className={cn("font-portal font-extrabold tracking-tight", tone === "light" ? "text-white" : "text-portal-950")} style={{ fontSize: Math.round(size * 0.72), lineHeight: 1 }}>
          Brix<span className="text-[#3B5BDB]">wave</span>
        </span>
      )}
    </>
  );
  const classes = cn("inline-flex items-center gap-2.5", className);
  if (!linked) return <span className={classes}>{content}</span>;
  return (
    <a href={brixwave.url} target="_blank" rel="noreferrer" className={cn(classes, "transition-opacity hover:opacity-85")} aria-label={`${brixwave.fullName}, ${brixwave.urlLabel} (se deschide într-o filă nouă)`}>
      {content}
    </a>
  );
}

/** Mențiune textuală „BRIXWAVE” legată de site-ul agenției. */
export function BrixwaveLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={brixwave.url} target="_blank" rel="noreferrer" className={cn("font-semibold underline decoration-current/40 underline-offset-4 transition hover:decoration-current", className)}>
      {children ?? brixwave.name}
    </a>
  );
}
