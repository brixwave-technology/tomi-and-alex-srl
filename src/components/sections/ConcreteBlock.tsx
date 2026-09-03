import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { concreteApplications } from "@/data/products";
import { images } from "@/data/images";

/** Full-bleed photographic block for the concrete plant. */
export function ConcreteBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-asphalt text-chalk">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.beton.pouring.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/85 to-asphalt/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt/85 via-transparent to-asphalt/40" />
      </div>

      <div className="container-site relative py-28 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">Beton pentru construcții care rezistă.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-chalk/80">
              Stație de betoane proprie. Producem orice clasă de beton cerută de proiect, livrată la
              timp pe șantier.
            </p>
            <div className="mt-10">
              <Button href="/beton/" variant="chalk" arrow>
                Despre stația de betoane
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm font-semibold text-chalk/55">Unde ajunge betonul nostru</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8">
              {concreteApplications.map((app) => (
                <li key={app.title} className="border-t border-chalk/20 py-4 text-lg font-semibold tracking-tight">
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
