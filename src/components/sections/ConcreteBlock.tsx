import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { concreteApplications } from "@/data/products";
import { images } from "@/data/images";

/**
 * Full-bleed photographic block for the concrete plant. The dark overlay
 * carries the statement and the list of applications; nothing is boxed.
 */
export function ConcreteBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.beton.pouring.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="container-site relative py-28 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Beton pentru construcții care rezistă.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Stație de betoane proprie. Producem orice clasă de beton cerută de proiect, livrată
              la timp pe șantier.
            </p>
            <div className="mt-10">
              <Button href="/beton/" variant="paper" arrow>
                Despre stația de betoane
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <p className="font-display text-sm font-semibold text-white/50">Aplicații</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8">
              {concreteApplications.map((app) => (
                <li
                  key={app.title}
                  className="border-t border-white/15 py-4 font-display text-lg font-semibold tracking-tight"
                >
                  {app.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
