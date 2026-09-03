import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { infrastructureGroups } from "@/data/services";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Infrastructură și construcții",
  description:
    "Pregătirea și amenajarea terenului, rețele de alimentare cu apă și canalizare, construcția și modernizarea drumurilor și podurilor, lucrări de construcții.",
  alternates: { canonical: "/infrastructura/" },
};

const groupImages = [
  images.earthworks,
  images.infrastructura.excavatorPipes,
  images.infrastructura.asphalt,
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        title="De la teren pregătit la infrastructură finalizată."
        lead="Terasamente, rețele de apă și canalizare, drumuri, poduri și lucrări de construcții, executate cap-coadă."
        image={images.infrastructura.bridgeCrane}
        crumbs={[{ label: "Infrastructură" }]}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          {infrastructureGroups.map((group, gi) => (
            <div
              key={group.title}
              className="grid gap-10 border-t border-ink/15 py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              <Reveal className="lg:col-span-5">
                <p className="font-display text-sm font-semibold text-brand">{group.title}</p>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-chalk">
                  <Image
                    src={groupImages[gi].src}
                    alt={groupImages[gi].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <ul className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:pt-10">
                {group.items.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 80}>
                    <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">{item.title}</h2>
                    <p className="mt-3 max-w-lg text-lg leading-relaxed text-concrete">{item.description}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Aveți un proiect de infrastructură?"
        text="Descrieți lucrarea și locația. Analizăm proiectul și revenim cu o ofertă de execuție."
      />
    </>
  );
}
