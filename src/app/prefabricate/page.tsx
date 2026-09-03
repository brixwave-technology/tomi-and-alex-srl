import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { prefabProducts } from "@/data/products";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Prefabricate din beton",
  description:
    "Elemente prefabricate din beton produse de Tomi Alex SRL pentru lucrări de infrastructură și construcții.",
  alternates: { canonical: "/prefabricate/" },
};

export default function PrefabPage() {
  return (
    <>
      <PageHero
        title="Prefabricate din beton."
        lead="Soluții prefabricate pentru proiecte eficiente și durabile."
        image={images.prefabricate.forms}
        crumbs={[{ label: "Prefabricate" }]}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Produse
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-concrete">
              Cinci produse prefabricate, cu spații rezervate pentru denumire, dimensiuni, utilizare și
              fotografii. Datele se completează pe măsură ce sunt confirmate.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-px bg-ash sm:grid-cols-2 lg:grid-cols-3">
            {prefabProducts.map((product, i) => (
              <Reveal
                as="li"
                key={product.slug}
                id={product.slug}
                delay={i * 60}
                className="scroll-mt-28 flex flex-col bg-paper p-5 sm:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-chalk">
                  {product.image ? (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-end p-4 text-[13px] text-concrete"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, transparent 0 14px, rgb(14 14 16 / 0.05) 14px 15px)",
                      }}
                    >
                      Fotografie de completat
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-xs font-bold text-brand tabular-nums">0{i + 1}</span>
                  <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em]">{product.name}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-concrete">{product.summary}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5">
                  <div>
                    <dt className="font-display text-[12px] font-semibold text-concrete">Dimensiuni</dt>
                    <dd className="mt-1 text-[14px]">
                      {product.dimensions ?? <Placeholder>De confirmat</Placeholder>}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[12px] font-semibold text-concrete">Utilizare</dt>
                    <dd className="mt-1 text-[14px]">
                      {product.usage ?? <Placeholder>De confirmat</Placeholder>}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            ))}
            <Reveal as="li" delay={320} className="flex flex-col justify-between bg-ink p-6 text-white sm:p-8">
              <p className="font-display text-sm font-semibold text-white/50">Comenzi</p>
              <div>
                <p className="font-display text-2xl font-extrabold leading-tight tracking-[-0.02em]">
                  Elemente la dimensiunile proiectului dumneavoastră.
                </p>
                <div className="mt-6">
                  <Button href="/contact/" variant="paper" arrow>
                    Solicită ofertă
                  </Button>
                </div>
              </div>
            </Reveal>
          </ol>
        </div>
      </section>

      <CTASection
        title="Aveți nevoie de prefabricate pentru o lucrare?"
        text="Trimiteți-ne tipul de element, cantitatea și termenul. Revenim cu ofertă și program de livrare."
        label="Solicită ofertă"
      />
    </>
  );
}
