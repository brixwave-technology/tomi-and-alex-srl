import Image from "next/image";
import { company } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";

/**
 * Logo-ul original Tomi Alex (wordmark roșu între două linii duble, EST. 2008,
 * încărcătorul frontal), afișat neschimbat pe o plăcuță albă, ca să rămână
 * lizibil pe fundalurile închise ale celor trei concepte.
 */
export function TomiAlexLogo({ className, height = 56, priority }: { className?: string; height?: number; priority?: boolean }) {
  const width = Math.round((height * logo.full.width) / logo.full.height);
  return (
    <span className={cn("inline-flex items-center rounded-[4px] bg-white px-2.5 py-1.5 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.7)]", className)} style={{ height: height + 12 }}>
      <Image src={logo.full.dark} alt={company.name} width={logo.full.width} height={logo.full.height} priority={priority} className="object-contain" style={{ height, width }} />
    </span>
  );
}
