import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Certificate,
  Clock,
  Envelope,
  MapPin,
  Phone,
  Quotes,
  ShieldCheck,
  Truck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { V1Header } from "./V1Header";
import { v1Nav } from "./nav";
import { V1ContactForm } from "./V1ContactForm";
import {
  aggregates,
  company,
  concreteClasses,
  contact,
  directions,
  faq,
  infrastructureServices,
  legal,
  prefabProducts,
  process,
  social,
  testimonials,
} from "@/data/company";
import { images, logo } from "@/data/images";
import { brixwave } from "@/data/brixwave";

const directionIcons = [Truck, Buildings, Wrench, ShieldCheck];

function SectionLabel({ index, children, light }: { index: string; children: string; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] ${light ? "text-brand" : "text-brand"}`}>
      <span className="font-mono">{index}</span>
      <span className="h-px w-8 bg-brand" aria-hidden />
      {children}
    </p>
  );
}

export function V1Site() {
  return (
    <div id="top" className="relative bg-graphite-950 text-frost">
      <V1Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate min-h-[92vh] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="anim-settle object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,31,0.98)_0%,rgba(7,16,31,0.88)_45%,rgba(7,16,31,0.45)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#07101f,transparent)]" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-12 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="anim-draw v1-rule w-24 text-brand" aria-hidden />
            <p className="anim-rise mt-6 text-[13px] font-bold uppercase tracking-[0.22em] text-steel-200 [animation-delay:150ms]">
              Infrastructură · Construcții · Agregate · Beton · Prefabricate
            </p>
            <h1 className="v1-display mt-6 text-5xl text-white sm:text-6xl lg:text-7xl">
              {company.taglineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span className="anim-letter-up block" style={{ animationDelay: `${250 + i * 120}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p className="anim-rise mt-8 max-w-xl text-lg leading-relaxed text-steel-200 [animation-delay:700ms]">
              {company.claim} {company.heroSubtitle}
            </p>
            <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:850ms]">
              <a href="#contact" className="inline-flex h-13 items-center justify-center gap-2 rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft">
                Cere o ofertă
                <ArrowRight weight="bold" className="size-4" aria-hidden />
              </a>
              <a href="#servicii" className="inline-flex h-13 items-center justify-center rounded-[2px] border border-steel-400/50 px-7 text-[15px] font-bold text-white transition hover:bg-white/5">
                Vezi serviciile
              </a>
            </div>
            <ul className="anim-rise mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-steel-200 sm:grid-cols-3 [animation-delay:1000ms]">
              {["Din 2008", "Materiale din sursă proprie", "Echipe și utilaje proprii", "ISO 9001 · 14001 · 45001", "Ofertă în 5 zile", "Satu Mare și județele vecine"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <ShieldCheck weight="fill" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <aside className="anim-rise self-end lg:col-span-5 [animation-delay:600ms]">
            <div className="border border-steel-400/25 bg-graphite-900/80 p-6 backdrop-blur sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Ofertare directă</p>
              <a href={`tel:${contact.phone}`} className="v1-display mt-3 block text-3xl text-white sm:text-4xl">
                {contact.phoneDisplay}
              </a>
              <p className="mt-2 text-[14px] text-steel-200">{contact.hoursSummary}</p>
              <div className="mt-6 grid gap-3 border-t border-steel-400/20 pt-6 text-[14px] text-steel-200">
                <p className="flex items-start gap-3">
                  <MapPin weight="fill" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {contact.addressLine}
                </p>
                <p className="flex items-start gap-3">
                  <Envelope weight="fill" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  <a href={`mailto:${contact.emailOffers}`} className="hover:text-white">
                    {contact.emailOffers}
                  </a>
                </p>
                <p className="flex items-start gap-3">
                  <Truck weight="fill" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {contact.dispatchNote}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- CIFRE ---------------- */}
      <section className="border-y border-steel-400/20 bg-graphite-900" aria-label="Cifre cheie">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-steel-400/20 px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
          {company.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p className="v1-display text-4xl text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-steel-200">{s.label}</p>
              <p className="mt-1 text-[13px] text-steel-400">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- DESPRE ---------------- */}
      <section id="despre" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="01">Despre noi</SectionLabel>
              <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">Materiale și execuție din aceeași sursă.</h2>
              <p className="mt-6 text-lg leading-relaxed text-steel-200">{company.description}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-steel-400">{company.descriptionSecondary}</p>
            </Reveal>
            <Reveal variant="clip" delay={200} className="mt-10">
              <Image src={images.company.src} alt={images.company.alt} width={images.company.width} height={images.company.height} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal className="grid gap-6 lg:pl-10">
              {company.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16.5px] leading-relaxed text-steel-200">
                  {p}
                </p>
              ))}
              <blockquote className="mt-4 border-l-2 border-brand pl-6 text-xl font-semibold leading-snug text-white">{company.mission}</blockquote>
            </Reveal>
            <div className="mt-12 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2 lg:ml-10">
              {company.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-graphite-950 p-6">
                  <p className="font-mono text-[12px] text-brand">0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-steel-400">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DIRECȚII ---------------- */}
      <section id="servicii" className="scroll-mt-20 border-t border-steel-400/20 bg-graphite-900 py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel index="02">Servicii și direcții de activitate</SectionLabel>
              <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">Patru direcții, un singur responsabil.</h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-steel-400">
              Balastiera, stația de betoane și linia de prefabricate alimentează direct șantierele noastre de infrastructură. Comandați materiale sau contractați lucrarea întreagă.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px border border-steel-400/20 bg-steel-400/20 md:grid-cols-2 xl:grid-cols-4">
            {directions.map((d, i) => {
              const Icon = directionIcons[i];
              return (
                <Reveal key={d.slug} delay={i * 90} className="group relative flex flex-col bg-graphite-950">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-quint group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,#07101f_10%,transparent_70%)]" />
                    <span className="absolute left-5 top-5 inline-flex size-10 items-center justify-center rounded-[2px] bg-brand text-white">
                      <Icon weight="fill" className="size-5" aria-hidden />
                    </span>
                    <span className="absolute bottom-4 right-5 font-mono text-[12px] text-steel-200">{d.index}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">{d.kicker}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{d.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-steel-200">{d.description}</p>
                    <ul className="mt-5 grid gap-1.5 text-[13.5px] text-steel-400">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="size-1 bg-brand" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-bold text-white">
                      Cere ofertă pentru {d.title.toLowerCase()}
                      <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Infrastructură detaliat */}
          <div className="mt-24 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <SectionLabel index="02.1">Lucrări de infrastructură</SectionLabel>
              <h3 className="v1-display mt-6 text-3xl text-white sm:text-4xl">Ce executăm, în detaliu.</h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-steel-400">
                Fiecare lucrare este contractată cu un responsabil de proiect, un grafic de execuție și documentația de calitate pentru recepție.
              </p>
              <div className="relative mt-8 aspect-[4/5] overflow-hidden">
                <Image src={images.infrastructura.excavatorPipes.src} alt={images.infrastructura.excavatorPipes.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-8">
              <ol className="divide-y divide-steel-400/20 border-y border-steel-400/20">
                {infrastructureServices.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 60} className="grid gap-4 py-7 sm:grid-cols-12">
                    <span className="font-mono text-[13px] text-brand sm:col-span-1">{s.index}</span>
                    <div className="sm:col-span-6">
                      <h4 className="text-lg font-bold text-white">{s.title}</h4>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-steel-400">{s.description}</p>
                    </div>
                    <ul className="grid gap-1.5 text-[13.5px] text-steel-200 sm:col-span-5 sm:pl-6">
                      {s.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <ShieldCheck weight="fill" className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUSE ---------------- */}
      <section id="produse" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <SectionLabel index="03">Produse</SectionLabel>
            <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">Agregate, beton și prefabricate din unitățile proprii.</h2>
          </Reveal>

          {/* Agregate */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h3 className="text-2xl font-bold text-white">Agregate din balastieră</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-400">
                Sortate și spălate în stația proprie, verificate granulometric în laborator, livrate cu flota noastră de autobasculante.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden">
                <Image src={images.agregate.loader.src} alt={images.agregate.loader.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="overflow-x-auto lg:col-span-8">
              <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b-2 border-brand text-[12px] font-bold uppercase tracking-[0.14em] text-steel-200">
                    <th className="py-3 pr-4">Produs</th>
                    <th className="py-3 pr-4">Granulometrie</th>
                    <th className="py-3 pr-4">Descriere</th>
                    <th className="py-3">Utilizări</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-400/20">
                  {aggregates.map((a) => (
                    <tr key={a.name} className="align-top">
                      <td className="py-4 pr-4 font-bold text-white">{a.name}</td>
                      <td className="py-4 pr-4 font-mono text-[13px] text-steel-200">{a.granulometry}</td>
                      <td className="py-4 pr-4 text-steel-400">{a.summary}</td>
                      <td className="py-4 text-steel-200">{a.usage.join(" · ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          {/* Beton */}
          <div className="mt-20 grid gap-10 border-t border-steel-400/20 pt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h3 className="text-2xl font-bold text-white">Clase de beton</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-steel-400">
                Producem orice clasă de beton după rețete verificate în laboratorul propriu, conform SR EN 206 și NE 012. Fiecare transport pleacă cu certificat de calitate.
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden">
                <Image src={images.beton.finishing.src} alt={images.beton.finishing.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="overflow-x-auto lg:col-span-8">
              <table className="w-full min-w-[520px] border-collapse text-left text-[14.5px]">
                <thead>
                  <tr className="border-b-2 border-brand text-[12px] font-bold uppercase tracking-[0.14em] text-steel-200">
                    <th className="py-3 pr-4">Clasă</th>
                    <th className="py-3 pr-4">Utilizare recomandată</th>
                    <th className="py-3">Clase de expunere</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-400/20">
                  {concreteClasses.map((c) => (
                    <tr key={c.name} className="align-top">
                      <td className="py-4 pr-4 font-mono text-[14px] font-bold text-white">{c.name}</td>
                      <td className="py-4 pr-4 text-steel-200">{c.usage}</td>
                      <td className="py-4 font-mono text-[13px] text-steel-400">{c.exposure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          {/* Prefabricate */}
          <div className="mt-20 border-t border-steel-400/20 pt-16">
            <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="text-2xl font-bold text-white">Prefabricate din beton</h3>
              <p className="max-w-lg text-[15px] leading-relaxed text-steel-400">Produse în tipare metalice cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale, producție pe comandă după proiect.</p>
            </Reveal>
            <div className="mt-8 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2 xl:grid-cols-5">
              {prefabProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 70} className="flex flex-col bg-graphite-950">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-[16px] font-bold text-white">{p.name}</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-steel-400">{p.summary}</p>
                    <dl className="mt-4 grid gap-1 text-[12.5px]">
                      <div>
                        <dt className="inline font-bold text-steel-200">Dimensiuni: </dt>
                        <dd className="inline text-steel-400">{p.dimensions}</dd>
                      </div>
                      <div>
                        <dt className="inline font-bold text-steel-200">Utilizare: </dt>
                        <dd className="inline text-steel-400">{p.usage}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCES ---------------- */}
      <section id="proces" className="scroll-mt-20 border-t border-steel-400/20 bg-graphite-900 py-24 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <SectionLabel index="04">Cum lucrăm</SectionLabel>
            <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">De la primul telefon la recepție, în patru pași.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px border border-steel-400/20 bg-steel-400/20 md:grid-cols-2 xl:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="relative bg-graphite-950 p-7">
                <span className="v1-display text-5xl text-brand/90">{s.index}</span>
                <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-steel-400">{s.description}</p>
                {i < process.length - 1 && <ArrowRight weight="bold" className="absolute right-5 top-9 hidden size-5 text-steel-400/60 xl:block" aria-hidden />}
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 grid gap-6 border border-steel-400/20 bg-graphite-950 p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
            <Certificate weight="fill" className="size-10 text-brand" aria-hidden />
            <div>
              <p className="text-lg font-bold text-white">Certificări și sisteme de management</p>
              <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[14px] text-steel-200">
                {company.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-[2px] border border-steel-400/40 px-5 text-[14px] font-bold text-white transition hover:bg-white/5">
              Solicită documentele
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------- REFERINȚE + FAQ ---------------- */}
      <section id="referinte" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="05">Referințe</SectionLabel>
              <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">Ce spun beneficiarii.</h2>
            </Reveal>
            <div className="mt-10 grid gap-px border border-steel-400/20 bg-steel-400/20">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 90} className="bg-graphite-950 p-7">
                  <Quotes weight="fill" className="size-6 text-brand" aria-hidden />
                  <p className="mt-4 text-[17px] leading-relaxed text-white">„{t.quote}”</p>
                  <p className="mt-4 text-[13.5px] font-bold text-steel-200">{t.author}</p>
                  <p className="text-[13px] text-steel-400">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="06">Întrebări frecvente</SectionLabel>
              <h2 className="v1-display mt-6 text-3xl text-white sm:text-4xl">Răspunsuri înainte de a suna.</h2>
            </Reveal>
            <div className="mt-10 divide-y divide-steel-400/20 border-y border-steel-400/20">
              {faq.map((f, i) => (
                <Reveal as="details" key={f.question} delay={i * 70} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold text-white [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center border border-steel-400/40 text-steel-200 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-10 text-[14.5px] leading-relaxed text-steel-400">{f.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="scroll-mt-20 border-t border-steel-400/20 bg-graphite-900 py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="07">Contact</SectionLabel>
              <h2 className="v1-display mt-6 text-4xl text-white sm:text-5xl">Cereți o ofertă.</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-steel-400">
                Spuneți-ne ce lucrare sau ce materiale aveți nevoie. Răspundem în aceeași zi lucrătoare pentru materiale și în maximum 5 zile pentru lucrări, după vizita în teren.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-10 grid gap-px border border-steel-400/20 bg-steel-400/20">
              {[
                { icon: Phone, label: "Telefon", lines: [contact.phoneDisplay, contact.phoneSecondaryDisplay], href: `tel:${contact.phone}` },
                { icon: Envelope, label: "E-mail", lines: [contact.email, contact.emailOffers], href: `mailto:${contact.email}` },
                { icon: MapPin, label: "Sediu și unități de producție", lines: [contact.addressLine], href: contact.location.mapsUrl },
                { icon: Clock, label: "Program", lines: contact.hours.map((h) => `${h.days}: ${h.hours}`) },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-graphite-950 p-5">
                  <item.icon weight="fill" className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">{item.label}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="mt-1 text-[15px] text-white">
                        {item.href ? (
                          <a href={item.href} className="hover:text-brand-soft" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
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
            <Reveal delay={200} className="mt-6 aspect-[16/9] overflow-hidden border border-steel-400/20">
              <iframe title="Harta cu locația Tomi Alex SRL" src={contact.location.embedUrl} className="size-full grayscale invert-[0.9] contrast-[0.9]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-7">
            <V1ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ---------------- DECIZIE (portal) ---------------- */}
      <section className="border-t border-steel-400/20 bg-graphite-950 py-16" aria-label="Alegerea acestui design">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Design V1 · Corporate / Autoritate</p>
            <h2 className="v1-display mt-3 text-3xl text-white sm:text-4xl">Vă reprezintă această direcție?</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-steel-400">
              Confirmați varianta preferată sau reveniți la Index pentru a compara cu Design V2 și Design V3. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ChooseDesignButton className="inline-flex h-13 items-center justify-center gap-2 rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft data-[chosen]:bg-emerald-500 data-[chosen]:hover:bg-emerald-400" />
            <BackToIndexLink className="inline-flex h-13 items-center justify-center rounded-[2px] border border-steel-400/50 px-7 text-[15px] font-bold text-white transition hover:bg-white/5" />
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-steel-400/20 bg-graphite-950 pb-32 pt-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src={logo.full.light} alt={company.name} width={logo.full.width} height={logo.full.height} className="h-20 w-auto" />
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-steel-400">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-white hover:text-brand-soft">
              Facebook
              <ArrowUpRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Navigare</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
              {v1Nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Contact</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
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
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Date juridice</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>Nr. Reg. Com. {legal.regCom}</li>
              <li>{legal.capital}</li>
              <li>Zonă de activitate: {company.serviceAreas.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 border-t border-steel-400/20 px-5 pt-6 text-[13px] text-steel-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.
          </p>
          <p>Website realizat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.</p>
        </div>
      </footer>
    </div>
  );
}
