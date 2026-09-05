import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { serviceRegion } from "@/data/seo";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

/** Zonele deservite: județele și orașele principale din Nord-Vest, cu text natural pentru SEO local. */
export function ServiceArea({ what = "materiale și lucrări" }: { what?: string }) {
  return (
    <section className="border-t border-steel-400/20 bg-graphite-900 py-16 lg:py-20" aria-labelledby="zone-title">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
            <MapPin weight="fill" className="size-4" aria-hidden />
            Zone deservite
          </p>
          <h2 id="zone-title" className="v1-display mt-4 text-3xl text-white sm:text-4xl">
            Livrăm {what} în tot Nord-Vestul României.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-steel-200">
            Sediul, balastiera și stația de betoane sunt în {contact.address.locality}, județul Satu Mare, la mai puțin de o oră de Satu Mare, Baia Mare și Carei. Flota proprie de autobasculante și autobetoniere acoperă zilnic județele Satu Mare, Maramureș, Bihor și Sălaj; pentru lucrări de infrastructură ne deplasăm oriunde în regiune.
          </p>
        </Reveal>
        <div className={cn("mt-8 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2 lg:grid-cols-4")}>
          {serviceRegion.counties.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} className="bg-graphite-950 p-6">
              <h3 className="text-lg font-bold text-white">Județul {c.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{c.cities.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
