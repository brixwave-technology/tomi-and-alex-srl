import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { infrastructureGroups } from "@/data/services";
import { images } from "@/data/images";

/**
 * Dark editorial block: sticky headline and photo on the left, services
 * grouped by phase on the right so seven items read as three decisions.
 */
export function InfrastructureBlock() {
  return (
    <section className="bg-charcoal text-white">
      <div className="container-site py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="mb-8 block h-[3px] w-16 bg-brand" aria-hidden />
                <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
                  De la teren pregătit la infrastructură finalizată.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
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
              <Reveal key={group.title} delay={gi * 90} className="border-t border-white/15 py-8 first:pt-0 first:border-t-0 lg:py-10">
                <p className="font-display text-sm font-semibold text-brand">{group.title}</p>
                <ul className="mt-5 flex flex-col gap-6">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-display text-2xl font-extrabold tracking-[-0.02em]">{item.title}</p>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-white/65">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal className="pt-4">
              <Button href="/infrastructura/" variant="paper" arrow>
                Lucrări de infrastructură
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
