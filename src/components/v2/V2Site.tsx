import Image from "next/image";
import { ArrowRight, ArrowUpRight, Certificate, Clock, Envelope, MapPin, Phone, ShieldCheck, Truck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { V2Header } from "./V2Header";
import { V2ContactForm } from "./V2ContactForm";
import { V2QuickOrder } from "./V2QuickOrder";
import { CapacityTile, VolumeBars } from "./V2Charts";
import { v2Nav } from "./nav";
import {
  aggregates,
  annualVolumes,
  capacities,
  company,
  concreteClasses,
  contact,
  directions,
  faq,
  infrastructureServices,
  legal,
  milestones,
  prefabProducts,
  process,
  social,
  testimonials,
} from "@/data/company";
import { images, logo } from "@/data/images";
import { brixwave } from "@/data/brixwave";
import { cn } from "@/lib/cn";

function Wrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1400px] px-4 sm:px-8", className)}>{children}</div>;
}

function Kicker({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={cn("inline-flex items-center gap-3 font-v2-display text-[15px] font-bold uppercase tracking-wider", dark ? "text-concrete-300" : "text-concrete-500")}>
      <span className="h-4 w-1.5 bg-brand" aria-hidden />
      {children}
    </p>
  );
}

function Hazard({ className }: { className?: string }) {
  return <div className={cn("v2-hazard h-3 w-full", className)} aria-hidden />;
}

export function V2Site() {
  return (
    <div id="top" className="relative bg-concrete-50 text-asphalt-950">
      <V2Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden bg-asphalt-950 pt-[112px] text-white">
        <div className="absolute inset-0 -z-10">
          <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-45" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,0.96)_0%,rgba(11,11,12,0.8)_50%,rgba(11,11,12,0.5)_100%)]" />
        </div>
        <Wrap className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="anim-rise inline-flex items-center gap-3 bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider">
              Infrastructură · Agregate · Beton · Prefabricate
            </p>
            <h1 className="v2-display mt-8 font-v2-display text-[4rem] sm:text-[6rem] lg:text-[7.5rem]">
              {company.taglineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span className={cn("anim-letter-up block", i === 1 && "text-brand")} style={{ animationDelay: `${150 + i * 110}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p className="anim-rise mt-8 max-w-xl text-[18px] leading-relaxed text-concrete-200 [animation-delay:600ms]">
              {company.claim} {company.heroSubtitle}
            </p>
            <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:750ms]">
              <a href={`tel:${contact.phone}`} className="inline-flex h-16 items-center justify-center gap-3 bg-brand px-8 font-v2-display text-2xl font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft">
                <Phone weight="fill" className="size-6" aria-hidden />
                {contact.phoneDisplay}
              </a>
              <a href="#materiale" className="inline-flex h-16 items-center justify-center gap-3 border-2 border-white px-8 font-v2-display text-2xl font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-asphalt-950">
                Vezi materialele
                <ArrowRight weight="bold" className="size-5" aria-hidden />
              </a>
            </div>
            <ul className="anim-rise mt-12 grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] font-medium text-concrete-200 sm:grid-cols-3 [animation-delay:900ms]">
              {["Din 2008", "Balastieră, stație, prefabricate proprii", "18 autobasculante proprii", "ISO 9001 · 14001 · 45001", "Certificat de calitate la fiecare transport", "Livrare de luni până sâmbătă"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <ShieldCheck weight="fill" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div id="comanda" className="anim-rise scroll-mt-32 self-end lg:col-span-5 [animation-delay:500ms]">
            <V2QuickOrder />
          </div>
        </Wrap>
        <Hazard />
      </section>

      {/* ---------------- CIFRE ---------------- */}
      <section className="bg-asphalt-900 text-white" aria-label="Cifre cheie">
        <Wrap className="grid grid-cols-2 gap-px bg-concrete-700 lg:grid-cols-4">
          {company.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-asphalt-900 px-6 py-8">
              <p className="v2-display font-v2-display text-6xl text-white">{s.value}</p>
              <p className="mt-2 font-v2-display text-[15px] font-bold uppercase tracking-wider text-brand-soft">{s.label}</p>
              <p className="mt-1 text-[13.5px] text-concrete-300">{s.note}</p>
            </Reveal>
          ))}
        </Wrap>
      </section>

      {/* ---------------- MATERIALE ---------------- */}
      <section id="materiale" className="scroll-mt-28 py-20 lg:py-28">
        <Wrap>
          <Reveal className="flex flex-col gap-6 border-b-4 border-asphalt-950 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker>Materiale de construcții</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl lg:text-7xl">Agregate, beton, prefabricate.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-concrete-500">Produse în unitățile proprii, verificate în laborator, livrate cu flota noastră. Prețuri ferme, cantități de la o autobasculantă la volume de șantier.</p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {directions.slice(0, 3).map((d, i) => (
              <Reveal key={d.slug} delay={i * 90} className="group flex flex-col border-2 border-asphalt-950 bg-white">
                <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-asphalt-950">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-0 top-4 bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider text-white">{d.kicker}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="v2-display font-v2-display text-4xl">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-concrete-500">{d.description}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-1.5 text-[14px] font-medium">
                    {d.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="size-1.5 bg-brand" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#comanda" className="mt-6 inline-flex h-13 items-center justify-center gap-2 bg-asphalt-950 font-v2-display text-[18px] font-bold uppercase tracking-wide text-white transition group-hover:bg-brand">
                    Comandați {d.title.toLowerCase()}
                    <ArrowRight weight="bold" className="size-5" aria-hidden />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Fișe tehnice */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal className="border-2 border-asphalt-950 bg-white">
              <div className="flex items-center justify-between border-b-2 border-asphalt-950 bg-asphalt-950 px-5 py-3 text-white">
                <h3 className="v2-display font-v2-display text-2xl">Agregate</h3>
                <span className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-brand-soft">Fișă tehnică</span>
              </div>
              <table className="w-full border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b-2 border-concrete-100 font-v2-display text-[13.5px] font-bold uppercase tracking-wider text-concrete-500">
                    <th className="px-5 py-3">Produs</th>
                    <th className="px-2 py-3">Granulometrie</th>
                    <th className="hidden px-2 py-3 sm:table-cell">Utilizări</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-concrete-100">
                  {aggregates.map((a) => (
                    <tr key={a.name} className="align-top">
                      <td className="px-5 py-3.5 font-v2-display text-lg font-bold">{a.name}</td>
                      <td className="px-2 py-3.5 font-semibold text-brand">{a.granulometry}</td>
                      <td className="hidden px-2 py-3.5 text-concrete-500 sm:table-cell">{a.usage.join(" · ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={100} className="border-2 border-asphalt-950 bg-white">
              <div className="flex items-center justify-between border-b-2 border-asphalt-950 bg-asphalt-950 px-5 py-3 text-white">
                <h3 className="v2-display font-v2-display text-2xl">Clase de beton</h3>
                <span className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-brand-soft">SR EN 206</span>
              </div>
              <table className="w-full border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b-2 border-concrete-100 font-v2-display text-[13.5px] font-bold uppercase tracking-wider text-concrete-500">
                    <th className="px-5 py-3">Clasă</th>
                    <th className="px-2 py-3">Utilizare</th>
                    <th className="hidden px-2 py-3 sm:table-cell">Expunere</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-concrete-100">
                  {concreteClasses.map((c) => (
                    <tr key={c.name} className="align-top">
                      <td className="px-5 py-3 font-v2-display text-lg font-bold">{c.name}</td>
                      <td className="px-2 py-3 text-concrete-500">{c.usage}</td>
                      <td className="hidden px-2 py-3 font-semibold text-brand sm:table-cell">{c.exposure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="v2-display font-v2-display text-4xl">Prefabricate din beton</h3>
              <p className="max-w-lg text-[15px] text-concrete-500">Beton vibrat din stația proprie, tipare metalice, stoc permanent pentru dimensiunile uzuale, producție pe comandă după proiect.</p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {prefabProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 60} className="flex flex-col border-2 border-asphalt-950 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-asphalt-950">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="v2-display font-v2-display text-xl">{p.name}</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-concrete-500">{p.summary}</p>
                    <p className="mt-3 text-[13px] font-bold text-brand">{p.dimensions}</p>
                    <p className="mt-0.5 text-[12.5px] text-concrete-500">{p.usage}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---------------- LUCRĂRI ---------------- */}
      <section id="lucrari" className="scroll-mt-28 bg-asphalt-950 py-20 text-white lg:py-28">
        <Hazard className="-mt-20 mb-16 lg:-mt-28" />
        <Wrap>
          <Reveal className="flex flex-col gap-6 border-b-4 border-brand pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker dark>Lucrări de infrastructură și construcții</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl lg:text-7xl">Executăm cu echipe și utilaje proprii.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-concrete-300">{directions[3].description}</p>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-concrete-700 md:grid-cols-2 xl:grid-cols-3">
            {infrastructureServices.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60} className="group relative flex flex-col bg-asphalt-950 p-7 transition hover:bg-asphalt-800">
                <span className="v2-display font-v2-display text-6xl text-concrete-700 transition group-hover:text-brand">{s.index}</span>
                <h3 className="v2-display mt-4 font-v2-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-concrete-300">{s.description}</p>
                <ul className="mt-5 grid gap-1.5 border-t border-concrete-700 pt-4 text-[14px] text-concrete-200">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 bg-brand" aria-hidden />
                      {inc}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 grid gap-6 border-2 border-concrete-700 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <Certificate weight="fill" className="size-12 text-brand" aria-hidden />
            <div>
              <p className="v2-display font-v2-display text-2xl">Certificări și documentație de calitate</p>
              <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[14.5px] text-concrete-300">
                {company.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="inline-flex h-13 items-center justify-center border-2 border-white px-6 font-v2-display text-[18px] font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-asphalt-950">
              Solicitați documentele
            </a>
          </Reveal>
        </Wrap>
      </section>

      {/* ---------------- COMPANIA ---------------- */}
      <section id="compania" className="scroll-mt-28 bg-concrete-100 py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Despre noi</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Materiale și execuție din aceeași sursă.</h2>
              <p className="mt-6 text-[17px] leading-relaxed">{company.description}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-concrete-500">{company.descriptionSecondary}</p>
            </Reveal>
            <Reveal variant="clip" delay={200} className="mt-10 border-2 border-asphalt-950">
              <Image src={images.company.src} alt={images.company.alt} width={images.company.width} height={images.company.height} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-6">
              {company.story.map((p, i) => (
                <Reveal key={p.slice(0, 20)} delay={i * 90}>
                  <p className="text-[16px] leading-relaxed text-concrete-500">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300} className="mt-8 border-l-8 border-brand bg-white p-6">
              <p className="v2-display font-v2-display text-2xl leading-snug sm:text-3xl">{company.mission}</p>
            </Reveal>
            <div className="mt-10 grid gap-px bg-asphalt-950 sm:grid-cols-2">
              {company.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-white p-6">
                  <p className="font-v2-display text-2xl font-bold text-brand">0{i + 1}</p>
                  <h3 className="v2-display mt-2 font-v2-display text-2xl">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-concrete-500">{v.description}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="mt-10 border-2 border-asphalt-950 bg-white">
              <div className="border-b-2 border-asphalt-950 bg-asphalt-950 px-5 py-3 text-white">
                <h3 className="v2-display font-v2-display text-2xl">Repere</h3>
              </div>
              <ol className="grid divide-y divide-concrete-100 sm:grid-cols-2 sm:divide-y-0">
                {milestones.map((m) => (
                  <li key={m.year} className="grid grid-cols-[64px_1fr] gap-3 px-5 py-3.5 sm:border-b sm:border-concrete-100">
                    <span className="font-v2-display text-xl font-bold text-brand">{m.year}</span>
                    <div>
                      <p className="text-[14.5px] font-bold">{m.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-concrete-500">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Wrap>
      </section>

      {/* ---------------- CAPACITĂȚI ---------------- */}
      <section id="capacitati" className="scroll-mt-28 bg-asphalt-950 py-20 text-white lg:py-28">
        <Wrap>
          <Reveal className="flex flex-col gap-6 border-b-4 border-brand pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker dark>Capacități de producție și flotă</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl lg:text-7xl">Dimensionați pentru șantiere mari.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-concrete-300">Unități de producție, flotă și volume livrate, monitorizate zilnic în dispecerat.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capacities.map((c, i) => (
              <CapacityTile key={c.label} item={c} index={i} />
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <VolumeBars data={annualVolumes} title="Volum anual livrat" unit="mii tone agregate și beton" />
            </div>
            <Reveal delay={120} className="relative min-h-[320px] overflow-hidden border-2 border-concrete-700 lg:col-span-7">
              <Image src={images.trucks.quarry.src} alt={images.trucks.quarry.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,11,12,0.92))]" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-concrete-700 sm:grid-cols-3">
                {[
                  { icon: Truck, label: "Autobasculante 24–40 t", value: "18" },
                  { icon: Truck, label: "Autobetoniere 8–10 mc", value: "6" },
                  { icon: Truck, label: "Pompe de beton 28–36 m", value: "2" },
                ].map((f) => (
                  <div key={f.label} className="bg-asphalt-950/90 p-5">
                    <f.icon weight="fill" className="size-5 text-brand" aria-hidden />
                    <p className="v2-display mt-2 font-v2-display text-4xl">{f.value}</p>
                    <p className="mt-1 text-[13px] text-concrete-300">{f.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Wrap>
      </section>

      {/* ---------------- CUM COMANDAȚI ---------------- */}
      <section id="cum-comandati" className="scroll-mt-28 py-20 lg:py-28">
        <Wrap>
          <Reveal className="border-b-4 border-asphalt-950 pb-8">
            <Kicker>Cum comandați</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl lg:text-7xl">Patru pași. Un singur responsabil.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-asphalt-950 md:grid-cols-2 xl:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative bg-white p-7">
                <span className="v2-display inline-flex size-16 items-center justify-center bg-brand font-v2-display text-3xl text-white">{s.index}</span>
                <h3 className="v2-display mt-6 font-v2-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-concrete-500">{s.description}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Kicker>Referințe</Kicker>
              </Reveal>
              <div className="mt-6 grid gap-px bg-asphalt-950 md:grid-cols-3">
                {testimonials.map((t, i) => (
                  <Reveal key={t.author} delay={i * 80} className="bg-white p-6">
                    <p className="text-[15px] leading-relaxed">„{t.quote}”</p>
                    <p className="mt-5 font-v2-display text-[15px] font-bold uppercase tracking-wider text-brand">{t.author}</p>
                    <p className="text-[13px] text-concrete-500">{t.role}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <Kicker>Întrebări frecvente</Kicker>
              </Reveal>
              <div className="mt-6 divide-y-2 divide-concrete-100 border-y-2 border-concrete-100">
                {faq.map((f, i) => (
                  <Reveal as="details" key={f.question} delay={i * 50} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-v2-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                      {f.question}
                      <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center bg-asphalt-950 text-white transition group-open:rotate-45 group-open:bg-brand">+</span>
                    </summary>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-concrete-500">{f.answer}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="scroll-mt-28 bg-concrete-100 py-20 lg:py-28">
        <Hazard className="-mt-20 mb-16 lg:-mt-28" />
        <Wrap className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Contact</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Sunați. Comandați. Livrăm.</h2>
              <a href={`tel:${contact.phone}`} className="v2-display mt-6 block font-v2-display text-5xl text-brand sm:text-6xl">
                {contact.phoneDisplay}
              </a>
              <p className="mt-2 text-[15px] text-concrete-500">{contact.hoursSummary}</p>
            </Reveal>
            <Reveal delay={100} className="mt-8 grid gap-px bg-asphalt-950">
              {[
                { icon: Phone, label: "Telefon secundar", lines: [contact.phoneSecondaryDisplay], href: `tel:${contact.phoneSecondary}` },
                { icon: Envelope, label: "E-mail", lines: [contact.email, contact.emailOffers], href: `mailto:${contact.email}` },
                { icon: MapPin, label: "Sediu, balastieră, stație de betoane", lines: [contact.addressLine], href: contact.location.mapsUrl },
                { icon: Clock, label: "Program", lines: [...contact.hours.map((h) => `${h.days}: ${h.hours}`), contact.dispatchNote] },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-white p-5">
                  <item.icon weight="fill" className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <p className="font-v2-display text-[13.5px] font-bold uppercase tracking-wider text-concrete-500">{item.label}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="mt-1 text-[15px] font-medium">
                        {item.href ? (
                          <a href={item.href} className="hover:text-brand" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                            {l}
                          </a>
                        ) : (
                          l
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={150} className="mt-6 aspect-[16/9] overflow-hidden border-2 border-asphalt-950">
              <iframe title="Harta cu locația Tomi Alex SRL" src={contact.location.embedUrl} className="size-full grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-7">
            <V2ContactForm />
          </Reveal>
        </Wrap>
      </section>

      {/* ---------------- DECIZIE (portal) ---------------- */}
      <section className="bg-asphalt-950 py-14 text-white" aria-label="Alegerea acestui design">
        <Wrap>
          <Reveal className="flex flex-col items-start justify-between gap-8 border-l-8 border-brand bg-asphalt-900 p-8 lg:flex-row lg:items-center">
            <div>
              <Kicker dark>Design V2 · Industrial Authority &amp; Trust</Kicker>
              <h2 className="v2-display mt-3 font-v2-display text-4xl">Corespunde această direcție companiei dumneavoastră?</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-concrete-300">Confirmați varianta preferată sau reveniți la Index pentru a compara cu Design V1 și Design V3. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ChooseDesignButton className="inline-flex h-14 items-center justify-center bg-brand px-8 font-v2-display text-xl font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft data-[chosen]:bg-emerald-500" />
              <BackToIndexLink className="inline-flex h-14 items-center justify-center border-2 border-white px-8 font-v2-display text-xl font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-asphalt-950" />
            </div>
          </Reveal>
        </Wrap>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t-4 border-brand bg-asphalt-950 pb-32 pt-14 text-white">
        <Wrap className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src={logo.full.light} alt={company.name} width={logo.full.width} height={logo.full.height} className="h-20 w-auto" />
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-concrete-300">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-v2-display text-[16px] font-bold uppercase tracking-wider text-white hover:text-brand-soft">
              Facebook
              <ArrowUpRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Navigare</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
              {v2Nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Contact</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
              <li>
                <a href={`tel:${contact.phone}`} className="font-bold text-white hover:text-brand-soft">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneSecondary}`} className="hover:text-white">
                  {contact.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>{contact.addressLine}</li>
              <li>{contact.hoursSummary}</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Date juridice</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>Nr. Reg. Com. {legal.regCom}</li>
              <li>{legal.capital}</li>
              <li>Zonă de livrare: {company.serviceAreas.join(", ")}</li>
            </ul>
          </div>
        </Wrap>
        <Wrap className="mt-12 flex flex-col gap-2 border-t border-concrete-700 pt-6 text-[13px] text-concrete-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.
          </p>
          <p>Website realizat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.</p>
        </Wrap>
      </footer>
    </div>
  );
}
