import Image from "next/image";
import { company } from "@/data/company";
import { logo } from "@/data/images";
import { cn } from "@/lib/cn";

/**
 * Logo-ul original Tomi Alex (wordmark roșu între două linii duble, EST. 2008,
 * încărcătorul frontal), afișat neschimbat. Se folosește doar pe fundal alb.
 */
export function TomiAlexLogo({ className, height = 56, priority }: { className?: string; height?: number; priority?: boolean }) {
  const width = Math.round((height * logo.full.width) / logo.full.height);
  return <Image src={logo.full.dark} alt={company.name} width={logo.full.width} height={logo.full.height} priority={priority} className={cn("object-contain", className)} style={{ height, width }} />;
}
