import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { aggregates } from "@/data/products";
import { images } from "@/data/images";

const description =
  "Nisip, balast, sort 4–8 și sort 8–16 din balastiera Tomi Alex SRL, pentru betoane, drumuri, platforme și umpluturi. Sunați pentru preț și livrare.";

export const metadata: Metadata = {
  title: "Agregate: nisip, balast, sort 4–8, sort 8–16",
  description,
  alternates: { canonical: "/agregate/" },
  openGraph: { title: "Agregate pentru proiecte solide", description, url: "/agregate/", },
};

export default function AggregatesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Agregate", path: "/agregate/" }]} />
      <PageHero
        title="Agregate pentru proiecte solide."
        lead="Nisip, balast și sorturi din balastiera proprie, pentru betoane, drumuri, platforme și umpluturi."
        image={images.agregate.cover}
        crumbs={[{ label: "Agregate" }]}
      />

      <section className="bg-asphalt">
        <div className="container-site py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl">Catalog de agregate</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
              Fiecare produs are rezervate câmpuri pentru granulometrie, utilizare, disponibilitate și fișă
              tehnică. Se completează pe măsură ce datele sunt confirmate.
            </p>
          </Reveal>

          <ol className="mt-16 flex flex-col">
            {aggregates.map((product, n) => (
              <Reveal
                as="li"
                key={product.slug}
                id={product.slug}
                className="scroll-mt-28 grid gap-8 border-t border-chalk/15 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: product.image.position }}
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 lg:pl-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-bold text-brand tabular-nums">0{n + 1}</span>
                    <h3 className="display text-3xl sm:text-4xl">{product.name}</h3>
                  </div>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-ash">{product.summary}</p>

                  <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-semibold text-concrete">Granulometrie</dt>
                      <dd className="mt-1 text-lg font-semibold text-chalk">
                        {product.granulometry ?? <Placeholder>De confirmat</Placeholder>}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-concrete">Disponibilitate</dt>
                      <dd className="mt-1 text-lg font-semibold text-chalk">
                        {product.availability ?? <Placeholder>De confirmat</Placeholder>}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-concrete">Utilizare</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-chalk/85">
                        {product.usage?.length ? product.usage.join(", ") : <Placeholder>De confirmat</Placeholder>}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-concrete">Documentație tehnică</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-chalk/85">
                        {product.datasheetUrl ? (
                          <a href={product.datasheetUrl} className="link-line font-semibold">Descarcă fișa tehnică</a>
                        ) : (
                          <Placeholder>Fișă tehnică de adăugat</Placeholder>
                        )}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <PhoneCTA size="md" variant="outline" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Aveți nevoie de agregate pentru o lucrare?"
        text="Spuneți-ne sortul, cantitatea și locația livrării. Revenim cu preț și termen."
        label="Solicită ofertă"
      />
    </>
  );
}
