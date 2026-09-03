import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { concreteApplications, concreteClasses } from "@/data/products";
import { images } from "@/data/images";

const description =
  "Beton produs în stația proprie Tomi Alex SRL, în orice clasă cerută de proiect, pentru infrastructură, fundații, platforme, drumuri și construcții. Sunați pentru disponibilitate.";

export const metadata: Metadata = {
  title: "Stație de betoane: beton de orice clasă",
  description,
  alternates: { canonical: "/beton/" },
  openGraph: { title: "Beton pentru construcții care rezistă", description, url: "/beton/" },
};

export default function ConcretePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Stație betoane", path: "/beton/" }]} />
      <PageHero
        title="Beton pentru construcții care rezistă."
        lead="Stație de betoane proprie. Orice clasă de beton, la cerințele proiectului."
        image={images.beton.pouring}
        crumbs={[{ label: "Stație betoane" }]}
      />

      <section className="bg-asphalt">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="display text-3xl sm:text-4xl">Clase de beton</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ash">
                Producem orice clasă de beton cerută de proiect. Lista claselor disponibile și condițiile
                de livrare vor fi publicate aici pe măsură ce sunt confirmate.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              {concreteClasses.length > 0 ? (
                <ul className="grid gap-px bg-chalk/10 sm:grid-cols-2">
                  {concreteClasses.map((c) => (
                    <li key={c.name} className="bg-asphalt p-6">
                      <p className="display text-2xl">{c.name}</p>
                      {c.exposure && <p className="mt-1 text-sm text-concrete">{c.exposure}</p>}
                      {c.description && <p className="mt-3 text-[15px] leading-relaxed text-ash">{c.description}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="hatched flex min-h-[260px] flex-col justify-between border border-dashed border-chalk/25 p-6 sm:p-8">
                  <p className="text-sm font-semibold text-concrete">Listă în pregătire</p>
                  <p className="display max-w-sm text-2xl text-chalk">
                    Clasele de beton disponibile vor apărea aici, cu descriere și clasă de expunere.
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-chalk/10 bg-graphite">
        <div className="container-site py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="display text-3xl sm:text-4xl">Unde ajunge betonul nostru</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <Reveal className="relative aspect-[4/3] overflow-hidden bg-slate sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src={images.beton.finishing.src}
                alt={images.beton.finishing.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            {concreteApplications.slice(0, 4).map((app, n) => (
              <Reveal key={app.title} delay={80 + n * 60} className="flex min-h-[180px] flex-col justify-between border border-chalk/15 p-5">
                <span className="text-xs font-bold text-brand tabular-nums">0{n + 1}</span>
                <span>
                  <span className="display block text-xl text-chalk">{app.title}</span>
                  <span className="mt-1.5 block text-[14px] leading-relaxed text-ash">{app.description}</span>
                </span>
              </Reveal>
            ))}
            <Reveal delay={320} className="relative aspect-[4/3] overflow-hidden bg-slate lg:col-span-2 lg:aspect-auto lg:min-h-[200px]">
              <Image
                src={images.beton.rebar.src}
                alt={images.beton.rebar.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            {concreteApplications.slice(4).map((app, n) => (
              <Reveal key={app.title} delay={360 + n * 60} className="flex min-h-[180px] flex-col justify-between border border-chalk/15 p-5">
                <span className="text-xs font-bold text-brand tabular-nums">0{n + 5}</span>
                <span>
                  <span className="display block text-xl text-chalk">{app.title}</span>
                  <span className="mt-1.5 block text-[14px] leading-relaxed text-ash">{app.description}</span>
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
