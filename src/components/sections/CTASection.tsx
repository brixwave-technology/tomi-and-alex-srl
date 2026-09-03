import { Button } from "@/components/ui/Button";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/data/site";

type CTASectionProps = {
  title?: string;
  text?: string;
  label?: string;
};

/** Typographic close: one statement, the phone first, the form second. */
export function CTASection({
  title = "Aveți un proiect de infrastructură sau construcții?",
  text = "Sunați-ne și discutăm direct lucrarea, materialele și termenele. Revenim cu o ofertă concretă.",
  label = cta.primary.label,
}: CTASectionProps) {
  return (
    <section className="border-t border-chalk/10 bg-graphite">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal variant="line" className="rule-double w-20 text-brand" />
            <h2 className="display mt-8 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <PhoneCTA size="lg" showNumber />
            <Button href={cta.primary.href} variant="outline" size="lg" arrow>
              {label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
