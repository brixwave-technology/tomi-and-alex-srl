import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/site";
import { images } from "@/data/images";

/**
 * Company statement as an editorial spread: headline column on the left, a
 * tall photograph on the right, the supporting paragraph tucked under it.
 */
export function Intro() {
  return (
    <section className="bg-asphalt">
      <div className="container-site py-24 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal variant="line" className="rule-double w-20 text-brand" />
            <Reveal delay={80}>
              <h2 className="display mt-8 text-4xl sm:text-5xl lg:text-[3.6rem]">
                Construim infrastructura care pune lucrurile în mișcare.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ash">
                {company.shortName} SRL oferă soluții complete pentru lucrări de infrastructură și
                construcții, de la pregătirea și amenajarea terenului până la execuția lucrărilor și
                furnizarea materialelor necesare.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal variant="clip" className="relative aspect-[4/3] overflow-hidden bg-graphite lg:aspect-[5/4]">
              <Image
                src={images.company.src}
                alt={images.company.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={200} className="mt-8 grid gap-6 sm:grid-cols-12">
              <p className="text-xl font-semibold leading-snug tracking-tight text-chalk sm:col-span-7">
                {company.claim}
              </p>
              <p className="text-[15px] leading-relaxed text-concrete sm:col-span-5">
                {company.descriptionSecondary}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
