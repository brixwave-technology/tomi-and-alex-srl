import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/data/site";

type CTASectionProps = {
  title?: string;
  text?: string;
  label?: string;
};

/**
 * Typographic close: one statement, one action. Kept deliberately bare so it
 * reads as a decision point rather than another content block.
 */
export function CTASection({
  title = "Aveți un proiect de infrastructură sau construcții?",
  text = "Trimiteți-ne detaliile și revenim cu o ofertă adaptată lucrării, materialelor și termenelor dumneavoastră.",
  label = cta.primary.label,
}: CTASectionProps) {
  return (
    <section className="border-t border-ink/10 bg-chalk">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-8 block h-[3px] w-16 bg-brand" aria-hidden />
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-concrete">{text}</p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button href={cta.primary.href} variant="ink" size="lg" arrow>
              {label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
