import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { prefabProducts } from "@/data/products";
import { images } from "@/data/images";

const description =
  "Elemente prefabricate din beton produse de Tomi Alex SRL pentru lucrări de infrastructură și construcții. Sunați pentru dimensiuni, cantități și termene.";

export const metadata: Metadata = {
  title: "Prefabricate din beton",
  description,
  alternates: { canonical: "/prefabricate/" },
  openGraph: { title: "Prefabricate din beton", description, url: "/prefabricate/" },
};

export default function PrefabPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Prefabricate", path: "/prefabricate/" }]} />
      <PageHero
        title="Prefabricate din beton."
        lead="Soluții prefabricate pentru proiecte eficiente și durabile."
        image={images.prefabricate.forms}
        crumbs={[{ label: "Prefabricate" }]}
      />

      <section className="bg-asphalt">
        <div className="container-site py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="display text-3xl sm:text-4xl">Produse</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
              Cinci produse prefabricate, cu spații rezervate pentru denumire, dimensiuni, utilizare și
              fotografii. Datele se completează pe măsură ce sunt confirmate.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-px bg-chalk/10 sm:grid-cols-2 lg:grid-cols-3">
            {prefabProducts.map((product, n) => (
              <Reveal as="li" key={product.slug} id={product.slug} delay={n * 60} className="scroll-mt-28 flex flex-col bg-asphalt p-5 sm:p-6">
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                  {product.image ? (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="hatched absolute inset-0 flex items-end p-4 text-[13px] text-concrete">
                      Fotografie de completat
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-xs font-bold text-brand tabular-nums">0{n + 1}</span>
                  <h3 className="display text-2xl">{product.name}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ash">{product.summary}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-chalk/10 pt-5">
                  <div>
                    <dt className="text-[12px] font-semibold text-concrete">Dimensiuni</dt>
                    <dd className="mt-1 text-[14px]">{product.dimensions ?? <Placeholder>De confirmat</Placeholder>}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold text-concrete">Utilizare</dt>
                    <dd className="mt-1 text-[14px]">{product.usage ?? <Placeholder>De confirmat</Placeholder>}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
            <Reveal as="li" delay={320} className="flex flex-col justify-between bg-brand p-6 text-white sm:p-8">
              <p className="text-sm font-semibold text-white/70">Comenzi</p>
              <div>
                <p className="display text-2xl">Elemente la dimensiunile proiectului dumneavoastră.</p>
                <div className="mt-6">
                  <PhoneCTA size="md" variant="chalk" />
                </div>
              </div>
            </Reveal>
          </ol>
        </div>
      </section>

      <CTASection
        title="Aveți nevoie de prefabricate pentru o lucrare?"
        text="Spuneți-ne tipul de element, cantitatea și termenul. Revenim cu ofertă și program de livrare."
        label="Solicită ofertă"
      />
    </>
  );
}
