import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { infrastructureGroups } from "@/data/services";
import { images } from "@/data/images";

/** Sticky headline and photo on the left, services grouped by phase on the right. */
export function InfrastructureBlock() {
  return (
    <section className="bg-asphalt">
      <div className="container-site py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="line" className="rule-double w-20 text-brand" />
              <Reveal delay={80}>
                <h2 className="display mt-8 text-4xl sm:text-5xl lg:text-[3.6rem]">
                  De la teren pregătit la infrastructură finalizată.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">
                  Rețele de apă și canalizare, terasamente, drumuri și poduri, executate cu utilaje și
                  echipe proprii.
                </p>
              </Reveal>
              <Reveal variant="clip" delay={150} className="relative mt-10 aspect-[16/10] overflow-hidden bg-graphite">
                <Image
                  src={images.infrastructura.bridge.src}
                  alt={images.infrastructura.bridge.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            {infrastructureGroups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 90} className="border-t border-chalk/15 py-8 first:border-t-0 first:pt-0 lg:py-10">
                <p className="text-sm font-semibold text-brand">{group.title}</p>
                <ul className="mt-5 flex flex-col gap-6">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <p className="display text-2xl text-chalk">{item.title}</p>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ash">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal className="pt-4">
              <Button href="/infrastructura/" variant="chalk" arrow>
                Lucrări de infrastructură
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
