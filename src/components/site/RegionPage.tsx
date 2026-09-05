import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CaretRight, Clock, MapPin, Phone, Truck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { JsonLdScript, orgId } from "@/components/seo/JsonLd";
import { contact, directions } from "@/data/company";
import { images } from "@/data/images";
import { siteUrl } from "@/data/seo";
import { regions, type Region } from "@/data/regions";
import { pageHref } from "@/lib/routes";

const productLinks = [
  { label: "Agregate", href: pageHref("agregate") },
  { label: "Stație betoane", href: pageHref("beton") },
  { label: "Prefabricate", href: pageHref("prefabricate") },
];

function Crumbs({ current }: { current?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-5 pt-5 text-[13px] text-steel-400 sm:px-8">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-white">
            Acasă
          </Link>
        </li>
        <li aria-hidden>
          <CaretRight weight="bold" className="size-3" />
        </li>
        <li className={current ? "" : "font-semibold text-steel-200"}>
          <Link href="/zone/" className="hover:text-white">
            Zone deservite
          </Link>
        </li>
        {current && (
          <>
            <li aria-hidden>
              <CaretRight weight="bold" className="size-3" />
            </li>
            <li aria-current="page" className="font-semibold text-steel-200">
              {current}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

/** Index: cele patru județe. */
export function RegionsIndex() {
  return (
    <>
      <JsonLdScript data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Zone deservite", item: `${siteUrl}/zone/` }] }} />
      <Crumbs />
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
        <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl [animation-delay:150ms]">Zone deservite în Nord-Vestul României</h1>
        <p className="anim-rise mt-5 max-w-2xl text-[16.5px] leading-relaxed text-steel-200 [animation-delay:300ms]">
          Din Turulung, județul Satu Mare, livrăm agregate, beton și prefabricate și executăm lucrări de infrastructură în patru județe. Alegeți județul pentru orașe, timpi de livrare și produsele cele mai solicitate în zonă.
        </p>
        <div className="mt-10 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2 xl:grid-cols-4">
          {regions.map((r) => (
            <Link key={r.slug} href={`/zone/${r.slug}/`} className="group flex flex-col bg-graphite-950 p-6 transition hover:bg-graphite-900">
              <MapPin weight="fill" className="size-6 text-brand" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold text-white">Județul {r.county}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{r.cities.map((c) => c.name).join(" · ")}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-brand-soft">
                Vezi detalii
                <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

/** Pagina unui județ. */
export function RegionPage({ region }: { region: Region }) {
  const url = `${siteUrl}/zone/${region.slug}/`;
  return (
    <>
      <JsonLdScript data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Zone deservite", item: `${siteUrl}/zone/` }, { "@type": "ListItem", position: 3, name: `Județul ${region.county}`, item: url }] }} />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Agregate, beton, prefabricate și lucrări de infrastructură în județul ${region.county}`,
          serviceType: "Materiale de construcții și lucrări de infrastructură",
          provider: { "@id": orgId },
          areaServed: { "@type": "AdministrativeArea", name: `Județul ${region.county}`, containedInPlace: { "@type": "Country", name: "România" } },
          url,
          description: region.description,
        }}
      />
      {region.faq.length > 0 && <JsonLdScript data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: region.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />}
      <Crumbs current={`Județul ${region.county}`} />

      <section className="relative isolate overflow-hidden border-b border-steel-400/20">
        <div className="absolute inset-0 -z-10">
          <Image src={images.trucks.haul.src} alt={images.trucks.haul.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,15,0.98)_0%,rgba(12,13,15,0.85)_55%,rgba(12,13,15,0.6)_100%)]" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
            <p className="anim-rise mt-5 text-[13px] font-bold uppercase tracking-[0.22em] text-steel-200 [animation-delay:100ms]">Zone deservite · Nord-Vestul României</p>
            <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl lg:text-6xl [animation-delay:200ms]">{region.h1}</h1>
            <p className="anim-rise mt-6 max-w-2xl text-[16.5px] leading-relaxed text-steel-200 [animation-delay:350ms]">{region.intro}</p>
            <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:500ms]">
              <a href={`tel:${contact.phone}`} className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft">
                <Phone weight="fill" className="size-4" aria-hidden />
                Sună: {contact.phoneDisplay}
              </a>
              <Link href={pageHref("contact")} className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-steel-400/50 px-7 text-[15px] font-bold text-white transition hover:bg-white/5">
                Date de contact
                <ArrowRight weight="bold" className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <aside className="anim-rise self-end lg:col-span-4 [animation-delay:450ms]">
            <div className="border border-steel-400/25 bg-graphite-900/85 p-6 backdrop-blur">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Produse și servicii</p>
              <ul className="mt-3 divide-y divide-steel-400/20">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group flex items-center justify-between py-3 text-[16px] font-bold text-white">
                      {l.label}
                      <ArrowRight weight="bold" className="size-4 text-brand transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
              <Truck weight="fill" className="size-4" aria-hidden />
              Orașe și timpi de livrare
            </p>
            <h2 className="v1-display mt-4 text-3xl text-white sm:text-4xl">De la Turulung, în județul {region.county}.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-steel-400">{region.logistics}</p>
            <p className="mt-3 text-[13px] text-steel-400">Distanțele și timpii sunt orientativi, pe drumurile naționale, pentru un vehicul greu.</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <table className="w-full border-collapse text-left text-[14.5px]">
              <thead>
                <tr className="border-b-2 border-brand text-[12px] font-bold uppercase tracking-[0.14em] text-steel-200">
                  <th className="py-3 pr-4">Localitate</th>
                  <th className="py-3 pr-4">Distanță</th>
                  <th className="py-3">Timp estimat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-400/20">
                {region.cities.map((c) => (
                  <tr key={c.name}>
                    <td className="py-3.5 pr-4 font-bold text-white">{c.name}</td>
                    <td className="py-3.5 pr-4 font-mono text-[13px] text-steel-200">{c.km === 0 ? "sediu" : `~${c.km} km`}</td>
                    <td className="py-3.5 font-mono text-[13px] text-steel-400">{c.minutes === 0 ? "ridicare directă" : `~${c.minutes} min`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-steel-400/20 bg-graphite-900 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Ce livrăm cel mai des în {region.county}</p>
          </Reveal>
          <ul className="mt-6 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2">
            {region.focus.map((f, i) => (
              <Reveal as="li" key={f} delay={i * 70} className="flex gap-4 bg-graphite-950 p-6 text-[15.5px] text-white">
                <span className="font-mono text-[13px] text-brand">0{i + 1}</span>
                {f}
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 grid gap-px border border-steel-400/20 bg-steel-400/20 md:grid-cols-3">
            {directions.slice(0, 3).map((d, i) => (
              <Reveal key={d.slug} delay={i * 80} className="group bg-graphite-950">
                <Link href={pageHref(d.slug)} className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white">{d.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{d.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {region.faq.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Întrebări frecvente · {region.county}</p>
            </Reveal>
            <div className="mt-6 divide-y divide-steel-400/20 border-y border-steel-400/20">
              {region.faq.map((f) => (
                <Reveal as="details" key={f.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold text-white [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center border border-steel-400/40 text-steel-200 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl pr-10 text-[14.5px] leading-relaxed text-steel-400">{f.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-steel-400/20 bg-graphite-900 py-14">
        <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="v1-display text-3xl text-white">Comandați pentru județul {region.county}.</h2>
            <p className="mt-2 flex items-center gap-2 text-[14.5px] text-steel-400">
              <Clock weight="fill" className="size-4 text-brand" aria-hidden />
              {contact.hoursSummary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${contact.phone}`} className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft">
              <Phone weight="fill" className="size-4" aria-hidden />
              {contact.phoneDisplay}
            </a>
            {regions.filter((r) => r.slug !== region.slug).map((r) => (
              <Link key={r.slug} href={`/zone/${r.slug}/`} className="inline-flex h-13 items-center rounded-[2px] border border-steel-400/50 px-5 text-[14px] font-bold text-white transition hover:bg-white/5">
                {r.county}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
