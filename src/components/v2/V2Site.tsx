import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, Envelope, MapPin, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { V2Header } from "./V2Header";
import { V2ContactForm } from "./V2ContactForm";
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
import { images } from "@/data/images";
import { brixwave } from "@/data/brixwave";
import { cn } from "@/lib/cn";

function SectionHead({ code, title, lead, children }: { code: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <Reveal className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 font-v2-mono text-[11px] uppercase tracking-[0.26em] text-electric">
          <span>{code}</span>
          <span className="h-px w-10 bg-electric/60" aria-hidden />
          {title}
        </p>
        {lead && <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">{lead}</h2>}
      </div>
      {children && <div className="max-w-md text-[15px] leading-relaxed text-steel-300">{children}</div>}
    </Reveal>
  );
}

function Mono({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("font-v2-mono text-[11px] uppercase tracking-[0.2em] text-steel-500", className)}>{children}</span>;
}

export function V2Site() {
  return (
    <div id="top" className="relative bg-carbon-900 text-silver">
      <V2Header />

      <div className="pt-16 lg:pl-[232px] lg:pt-0">
        {/* ---------------- STATUS BAR ---------------- */}
        <div className="hidden h-[72px] items-center justify-between border-b border-white/10 bg-carbon-950/80 px-10 backdrop-blur lg:flex">
          <div className="flex items-center gap-8">
            <Mono>
              Tomi Alex SRL <span className="text-steel-300">/</span> Prezentare corporativă
            </Mono>
            <Mono className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-electric animate-pulse-ring" />
                <span className="relative size-2 rounded-full bg-electric" />
              </span>
              Dispecerat activ · {contact.hoursSummary}
            </Mono>
          </div>
          <div className="flex items-center gap-6">
            <Mono>Zonă operațională: {company.serviceAreas.join(" · ")}</Mono>
            <a href="#contact" className="inline-flex h-10 items-center gap-2 border border-electric px-4 text-[13px] font-semibold text-white transition hover:bg-electric">
              Solicitați o ofertă
              <ArrowRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* ---------------- HERO ---------------- */}
        <section id="prezentare" className="relative scroll-mt-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 v2-scan opacity-60" aria-hidden />
          <div className="relative grid gap-0 lg:grid-cols-12">
            <div className="px-5 py-16 sm:px-10 lg:col-span-7 lg:py-24">
              <p className="anim-rise font-v2-mono text-[11px] uppercase tracking-[0.26em] text-electric">
                01 — Infrastructură · Agregate · Beton · Prefabricate
              </p>
              <h1 className="mt-8 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
                {company.taglineLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <span className="anim-letter-up block" style={{ animationDelay: `${150 + i * 110}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
              <p className="anim-rise mt-8 max-w-xl text-[17px] leading-relaxed text-steel-300 [animation-delay:600ms]">
                {company.claim} {company.heroSubtitle}
              </p>
              <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:750ms]">
                <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 bg-electric px-7 text-[14px] font-semibold text-white transition hover:bg-electric-soft">
                  Solicitați o ofertă
                  <ArrowRight weight="bold" className="size-4" aria-hidden />
                </a>
                <a href="#operatiuni" className="inline-flex h-12 items-center justify-center border border-white/20 px-7 text-[14px] font-semibold text-white transition hover:bg-white/5">
                  Capacități operaționale
                </a>
              </div>
              <dl className="anim-rise mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4 [animation-delay:900ms]">
                {company.stats.map((s) => (
                  <div key={s.label} className="bg-carbon-900 p-4">
                    <dt className="font-v2-mono text-[10px] uppercase tracking-[0.2em] text-steel-500">{s.label}</dt>
                    <dd className="mt-2 text-2xl font-semibold text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative min-h-[360px] border-t border-white/10 lg:col-span-5 lg:border-l lg:border-t-0">
              <Image src={images.trucks.haul.src} alt={images.trucks.haul.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="anim-settle object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,19,0.1),rgba(15,17,19,0.85))]" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-carbon-950/80 backdrop-blur">
                <div className="p-5">
                  <Mono>Flotă proprie</Mono>
                  <p className="mt-1 text-xl font-semibold text-white">18 autobasculante</p>
                </div>
                <div className="p-5">
                  <Mono>Utilaje</Mono>
                  <p className="mt-1 text-xl font-semibold text-white">30+ unități</p>
                </div>
              </div>
              <span className="absolute left-5 top-5 border border-electric/60 bg-carbon-950/70 px-2.5 py-1 font-v2-mono text-[10px] uppercase tracking-[0.2em] text-electric-soft">
                Livrare programată GPS
              </span>
            </div>
          </div>
          <div className="v2-flow h-px w-full" aria-hidden />
        </section>

        {/* ---------------- COMPANIA ---------------- */}
        <section id="compania" className="scroll-mt-16 px-5 py-20 sm:px-10 lg:py-28">
          <SectionHead code="02" title="Compania" lead="Materiale și execuție integrate, sub o singură responsabilitate contractuală.">
            {company.descriptionSecondary}
          </SectionHead>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-[17px] leading-relaxed text-white">{company.description}</p>
              </Reveal>
              <div className="mt-8 grid gap-6">
                {company.story.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={i * 90} className="text-[15.5px] leading-relaxed text-steel-300">
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300} className="v2-corners mt-10 border border-white/10 bg-carbon-800 p-6">
                <Mono>Misiune</Mono>
                <p className="mt-3 text-lg font-medium leading-snug text-white">{company.mission}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal variant="clip" className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image src={images.company.src} alt={images.company.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </Reveal>
              <Reveal delay={150} className="mt-6 border border-white/10">
                <div className="border-b border-white/10 px-5 py-3">
                  <Mono>Cronologie</Mono>
                </div>
                <ol className="divide-y divide-white/10">
                  {milestones.map((m) => (
                    <li key={m.year} className="grid grid-cols-[64px_1fr] gap-4 px-5 py-3.5">
                      <span className="font-v2-mono text-[12px] text-electric-soft">{m.year}</span>
                      <div>
                        <p className="text-[14px] font-semibold text-white">{m.title}</p>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-steel-500">{m.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-carbon-900 p-6">
                <Mono className="text-electric">0{i + 1}</Mono>
                <h3 className="mt-4 text-[17px] font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-steel-300">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- OPERAȚIUNI ---------------- */}
        <section id="operatiuni" className="scroll-mt-16 border-y border-white/10 bg-carbon-950 px-5 py-20 sm:px-10 lg:py-28">
          <SectionHead code="03" title="Operațiuni și capacități" lead="Capacități de producție și logistică dimensionate pentru proiecte mari de infrastructură.">
            Datele de mai jos sintetizează unitățile de producție, flota și volumele livrate. Fiecare indicator este monitorizat zilnic în dispecerat.
          </SectionHead>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capacities.map((c, i) => (
              <CapacityTile key={c.label} item={c} index={i} />
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <VolumeBars data={annualVolumes} title="Volum anual livrat" unit="mii tone agregate și beton" />
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120} className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                {directions.map((d) => (
                  <a key={d.slug} href="#materiale" className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-carbon-900">
                    <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(9,10,12,0.9))]" />
                    <div className="relative p-5">
                      <Mono className="text-electric-soft">
                        {d.index} · {d.kicker}
                      </Mono>
                      <h3 className="mt-2 text-xl font-semibold text-white">{d.title}</h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-steel-300">{d.summary}</p>
                    </div>
                  </a>
                ))}
              </Reveal>
            </div>
          </div>

          {/* Servicii de infrastructură */}
          <div className="mt-20">
            <SectionHead code="03.1" title="Lucrări de infrastructură" lead="Șase linii de execuție, contractate integral sau ca subantreprenor specializat." />
            <div className="mt-10 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
              {infrastructureServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 60} className="group flex flex-col bg-carbon-950 p-6 transition hover:bg-carbon-800">
                  <div className="flex items-center justify-between">
                    <Mono className="text-electric">{s.index}</Mono>
                    <ArrowUpRight weight="bold" className="size-4 text-steel-500 transition group-hover:text-electric" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold leading-snug text-white">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-steel-300">{s.description}</p>
                  <ul className="mt-5 grid gap-1.5 border-t border-white/10 pt-4 text-[13px] text-steel-300">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 bg-electric" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- MATERIALE ---------------- */}
        <section id="materiale" className="scroll-mt-16 px-5 py-20 sm:px-10 lg:py-28">
          <SectionHead code="04" title="Materiale" lead="Fișe tehnice: agregate, clase de beton și prefabricate din unitățile proprii.">
            Toate materialele sunt însoțite de certificate de calitate și buletine de laborator. Livrarea se programează centralizat, de luni până sâmbătă.
          </SectionHead>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Mono className="text-electric">04.1</Mono>
              <h3 className="mt-3 text-2xl font-semibold text-white">Agregate din balastieră</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-steel-300">Sortate și spălate în stație proprie, verificate granulometric în laborator, livrate cu flota proprie.</p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-white/10">
                <Image src={images.agregate.aerial.src} alt={images.agregate.aerial.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100} className="overflow-x-auto lg:col-span-8">
              <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
                <thead>
                  <tr className="border-y border-white/15 font-v2-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-300">
                    <th className="py-3 pr-4 font-normal">Produs</th>
                    <th className="py-3 pr-4 font-normal">Granulometrie</th>
                    <th className="py-3 pr-4 font-normal">Descriere</th>
                    <th className="py-3 font-normal">Utilizări</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {aggregates.map((a) => (
                    <tr key={a.name} className="align-top transition hover:bg-white/[0.03]">
                      <td className="py-4 pr-4 font-semibold text-white">{a.name}</td>
                      <td className="py-4 pr-4 font-v2-mono text-[12.5px] text-electric-soft">{a.granulometry}</td>
                      <td className="py-4 pr-4 text-steel-300">{a.summary}</td>
                      <td className="py-4 text-steel-300">{a.usage.join(" · ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Mono className="text-electric">04.2</Mono>
              <h3 className="mt-3 text-2xl font-semibold text-white">Clase de beton</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-steel-300">Rețete certificate conform SR EN 206 și NE 012, produse în stație automatizată, cu buletin de laborator la fiecare transport.</p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-white/10">
                <Image src={images.beton.rebar.src} alt={images.beton.rebar.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100} className="overflow-x-auto lg:col-span-8">
              <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
                <thead>
                  <tr className="border-y border-white/15 font-v2-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-300">
                    <th className="py-3 pr-4 font-normal">Clasă</th>
                    <th className="py-3 pr-4 font-normal">Utilizare recomandată</th>
                    <th className="py-3 font-normal">Clase de expunere</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {concreteClasses.map((c) => (
                    <tr key={c.name} className="align-top transition hover:bg-white/[0.03]">
                      <td className="py-4 pr-4 font-v2-mono text-[13px] font-medium text-white">{c.name}</td>
                      <td className="py-4 pr-4 text-steel-300">{c.usage}</td>
                      <td className="py-4 font-v2-mono text-[12.5px] text-electric-soft">{c.exposure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <Reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Mono className="text-electric">04.3</Mono>
                <h3 className="mt-3 text-2xl font-semibold text-white">Prefabricate din beton</h3>
              </div>
              <p className="max-w-lg text-[14.5px] leading-relaxed text-steel-300">Produse în tipare metalice cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale, producție pe comandă după proiect.</p>
            </Reveal>
            <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
              {prefabProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 60} className="flex flex-col bg-carbon-900">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-[15.5px] font-semibold text-white">{p.name}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-steel-300">{p.summary}</p>
                    <p className="mt-3 font-v2-mono text-[11.5px] text-electric-soft">{p.dimensions}</p>
                    <p className="mt-1 text-[12.5px] text-steel-500">{p.usage}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FLUX ---------------- */}
        <section id="flux" className="scroll-mt-16 border-y border-white/10 bg-carbon-950 px-5 py-20 sm:px-10 lg:py-28">
          <SectionHead code="05" title="Flux de execuție" lead="Un flux continuu, de la solicitare la recepție, coordonat de același responsabil.">
            Fiecare etapă are un livrabil și un termen. Beneficiarul primește situații de lucrări, buletine de laborator și rapoarte de progres.
          </SectionHead>
          <ol className="relative mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="relative bg-carbon-950 p-6">
                <div className="flex items-center justify-between">
                  <Mono className="text-electric">Etapa {s.index}</Mono>
                  {i < process.length - 1 && <ArrowRight weight="bold" className="size-4 text-steel-500" aria-hidden />}
                </div>
                <h3 className="mt-6 text-[19px] font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-steel-300">{s.description}</p>
                <div className="mt-6 h-px w-full bg-carbon-600">
                  <span className="block h-full bg-electric" style={{ width: `${((i + 1) / process.length) * 100}%` }} aria-hidden />
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <Reveal className="v2-corners border border-white/10 bg-carbon-800 p-6 lg:col-span-4">
              <div className="flex items-center gap-3">
                <ShieldCheck weight="fill" className="size-6 text-electric" aria-hidden />
                <Mono>Certificări</Mono>
              </div>
              <ul className="mt-5 grid gap-3 text-[14px] text-steel-300">
                {company.certifications.map((c) => (
                  <li key={c} className="border-b border-white/10 pb-3 last:border-0">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3 lg:col-span-8">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 90} className="bg-carbon-950 p-6">
                  <Mono>Referință 0{i + 1}</Mono>
                  <p className="mt-4 text-[15px] leading-relaxed text-white">„{t.quote}”</p>
                  <p className="mt-5 text-[13px] font-semibold text-steel-300">{t.author}</p>
                  <p className="text-[12.5px] text-steel-500">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Mono className="text-electric">05.1</Mono>
              <h3 className="mt-3 text-2xl font-semibold text-white">Întrebări frecvente</h3>
            </Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-8">
              {faq.map((f, i) => (
                <Reveal as="details" key={f.question} delay={i * 50} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15.5px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center border border-white/20 font-v2-mono text-[12px] text-steel-300 transition group-open:rotate-45 group-open:border-electric group-open:text-electric">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-steel-300">{f.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="scroll-mt-16 px-5 py-20 sm:px-10 lg:py-28">
          <SectionHead code="06" title="Contact" lead="Solicitați o ofertă sau programați o livrare.">
            Pentru materiale răspundem în aceeași zi lucrătoare. Pentru lucrări de execuție, oferta este transmisă în maximum 5 zile lucrătoare de la vizita în teren.
          </SectionHead>
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal className="grid gap-px border border-white/10 bg-white/10">
                {[
                  { icon: Phone, label: "Dispecerat și ofertare", lines: [contact.phoneDisplay, contact.phoneSecondaryDisplay], href: `tel:${contact.phone}` },
                  { icon: Envelope, label: "E-mail", lines: [contact.email, contact.emailOffers], href: `mailto:${contact.email}` },
                  { icon: MapPin, label: "Sediu și unități de producție", lines: [contact.addressLine], href: contact.location.mapsUrl },
                  { icon: Clock, label: "Program", lines: [...contact.hours.map((h) => `${h.days}: ${h.hours}`), contact.dispatchNote] },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 bg-carbon-900 p-5">
                    <item.icon weight="fill" className="mt-0.5 size-5 shrink-0 text-electric" aria-hidden />
                    <div>
                      <Mono>{item.label}</Mono>
                      {item.lines.map((l) => (
                        <p key={l} className="mt-1 text-[14.5px] text-white">
                          {item.href ? (
                            <a href={item.href} className="hover:text-electric-soft" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
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
              <Reveal delay={150} className="mt-6 aspect-[16/9] overflow-hidden border border-white/10">
                <iframe title="Harta cu locația Tomi Alex SRL" src={contact.location.embedUrl} className="size-full grayscale invert-[0.92] contrast-[0.85]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-7">
              <V2ContactForm />
            </Reveal>
          </div>
        </section>

        {/* ---------------- DECIZIE (portal) ---------------- */}
        <section className="border-t border-white/10 bg-carbon-950 px-5 py-14 sm:px-10" aria-label="Alegerea acestui design">
          <Reveal className="v2-corners flex flex-col items-start justify-between gap-8 border border-white/10 bg-carbon-800 p-8 lg:flex-row lg:items-center">
            <div>
              <Mono className="text-electric">Design V2 · Modern Logistics &amp; High-Tech Fleet</Mono>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Corespunde această direcție companiei dumneavoastră?</h2>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-steel-300">Confirmați varianta preferată sau reveniți la Index pentru a compara cu Design V1 și Design V3. Concept dezvoltat de {brixwave.name}.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ChooseDesignButton className="inline-flex h-12 items-center justify-center bg-electric px-7 text-[14px] font-semibold text-white transition hover:bg-electric-soft data-[chosen]:bg-emerald-500" />
              <BackToIndexLink className="inline-flex h-12 items-center justify-center border border-white/20 px-7 text-[14px] font-semibold text-white transition hover:bg-white/5" />
            </div>
          </Reveal>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="border-t border-white/10 bg-carbon-950 px-5 pb-32 pt-14 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-2xl font-semibold tracking-tight text-white">{company.name}</p>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-steel-300">{company.descriptionSecondary}</p>
              <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-semibold text-white hover:text-electric-soft">
                Facebook
                <ArrowUpRight weight="bold" className="size-4" aria-hidden />
              </a>
            </div>
            <div className="lg:col-span-2">
              <Mono>Secțiuni</Mono>
              <ul className="mt-4 grid gap-2 text-[14px] text-steel-300">
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
              <Mono>Contact</Mono>
              <ul className="mt-4 grid gap-2 text-[14px] text-steel-300">
                <li>
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
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
              <Mono>Date juridice</Mono>
              <ul className="mt-4 grid gap-2 text-[14px] text-steel-300">
                <li>{legal.legalName}</li>
                <li>CUI {legal.cui}</li>
                <li>Nr. Reg. Com. {legal.regCom}</li>
                <li>{legal.capital}</li>
                <li>Zonă operațională: {company.serviceAreas.join(", ")}</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-v2-mono text-[11px] uppercase tracking-[0.18em] text-steel-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.
            </p>
            <p>Website realizat de {brixwave.name}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
