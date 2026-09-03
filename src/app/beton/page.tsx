import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { concreteApplications, concreteClasses } from "@/data/products";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Stație de betoane",
  description:
    "Beton produs în stația proprie Tomi Alex SRL, în orice clasă cerută de proiect, pentru infrastructură, fundații, platforme, drumuri și construcții.",
  alternates: { canonical: "/beton/" },
};

export default function ConcretePage() {
  return (
    <>
      <PageHero
        title="Beton pentru construcții care rezistă."
        lead="Stație de betoane proprie. Orice clasă de beton, la cerințele proiectului."
        image={images.beton.pouring}
        crumbs={[{ label: "Stație betoane" }]}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                Clase de beton
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-concrete">
                Producem orice clasă de beton cerută de proiect. Lista claselor disponibile și
                condițiile de livrare vor fi publicate aici pe măsură ce sunt confirmate.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              {concreteClasses.length > 0 ? (
                <ul className="grid gap-px bg-ash sm:grid-cols-2">
                  {concreteClasses.map((c) => (
                    <li key={c.name} className="bg-paper p-6">
                      <p className="font-display text-2xl font-extrabold tracking-[-0.02em]">{c.name}</p>
                      {c.exposure && <p className="mt-1 text-sm text-concrete">{c.exposure}</p>}
                      {c.description && <p className="mt-3 text-[15px] leading-relaxed text-concrete">{c.description}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <div
                  className="flex min-h-[260px] flex-col justify-between border border-dashed border-ink/25 p-6 sm:p-8"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0 14px, rgb(14 14 16 / 0.04) 14px 15px)",
                  }}
                >
                  <p className="font-display text-sm font-semibold text-concrete">Listă în pregătire</p>
                  <p className="max-w-sm font-display text-2xl font-bold leading-snug tracking-tight">
                    Clasele de beton disponibile vor apărea aici, cu descriere și clasă de expunere.
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="container-site py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Unde ajunge betonul nostru
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-chalk sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src={images.beton.finishing.src}
                alt={images.beton.finishing.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            {concreteApplications.slice(0, 4).map((app, i) => (
              <Reveal key={app.title} delay={80 + i * 60} className="flex min-h-[180px] flex-col justify-between border border-ink/15 p-5">
                <span className="font-display text-xs font-bold text-brand tabular-nums">0{i + 1}</span>
                <span>
                  <span className="block font-display text-xl font-extrabold tracking-[-0.02em]">{app.title}</span>
                  <span className="mt-1.5 block text-[14px] leading-relaxed text-concrete">{app.description}</span>
                </span>
              </Reveal>
            ))}
            <Reveal delay={320} className="relative aspect-[4/3] overflow-hidden bg-chalk lg:col-span-2 lg:aspect-auto lg:min-h-[200px]">
              <Image
                src={images.beton.rebar.src}
                alt={images.beton.rebar.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            {concreteApplications.slice(4).map((app, i) => (
              <Reveal key={app.title} delay={360 + i * 60} className="flex min-h-[180px] flex-col justify-between border border-ink/15 p-5">
                <span className="font-display text-xs font-bold text-brand tabular-nums">0{i + 5}</span>
                <span>
                  <span className="block font-display text-xl font-extrabold tracking-[-0.02em]">{app.title}</span>
                  <span className="mt-1.5 block text-[14px] leading-relaxed text-concrete">{app.description}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Aveți nevoie de beton pe șantier?"
        text="Transmiteți clasa, cantitatea și programul de turnare. Confirmăm disponibilitatea și prețul."
        label="Solicită o ofertă pentru beton"
      />
    </>
  );
}
