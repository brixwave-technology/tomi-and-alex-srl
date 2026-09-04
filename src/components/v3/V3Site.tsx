import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { V3Header } from "./V3Header";
import { v3Nav } from "./nav";
import { V3ContactForm } from "./V3ContactForm";
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
import { images } from "@/data/images";
import { brixwave } from "@/data/brixwave";
import { cn } from "@/lib/cn";

function Eyebrow({ children, index }: { children: string; index?: string }) {
  return (
    <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.26em] text-stone">
      {index && <span className="font-v3-display text-[13px] normal-case tracking-normal text-bronze">{index}</span>}
      <span className="h-px w-10 bg-bronze" aria-hidden />
      {children}
    </p>
  );
}

function Hairline({ className }: { className?: string }) {
  return <Reveal variant="line" className={cn("h-px w-full bg-hair", className)} />;
}

export function V3Site() {
  return (
    <div id="top" className="relative bg-ivory text-inkk">
      <V3Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-dvh px-6 pb-24 pt-40 sm:px-10 lg:pt-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="anim-rise text-[11px] font-medium uppercase tracking-[0.26em] text-stone">
            Infrastructură · Construcții · Materiale &nbsp;—&nbsp; Satu Mare, din {company.established}
          </p>
          <h1 className="v3-display mt-12 font-v3-display text-[18vw] text-inkk sm:text-[13vw] lg:text-[10.5rem]">
            {company.taglineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span
                  className={cn("anim-letter-up block", i === 1 && "v3-italic pl-[6vw] text-bronze lg:pl-40", i === 2 && "pl-[12vw] lg:pl-80")}
                  style={{ animationDelay: `${200 + i * 160}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-end">
            <p className="anim-rise max-w-md text-[17px] leading-relaxed text-stone [animation-delay:800ms] lg:col-span-5 lg:col-start-2">
              {company.claim} {company.heroSubtitle}
            </p>
            <div className="anim-rise flex flex-wrap items-center gap-8 [animation-delay:950ms] lg:col-span-5 lg:col-start-8">
              <a href="#contact" className="group inline-flex h-14 items-center gap-4 rounded-full bg-inkk px-8 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:bg-bronze">
                Cere o ofertă
                <ArrowRight weight="regular" className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
              </a>
              <a href="#despre" className="v3-link text-[12px] font-medium uppercase tracking-[0.22em] text-inkk">
                Descoperă compania
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 w-full max-w-[1400px]">
          <Reveal variant="clip" className="relative aspect-[16/8] overflow-hidden">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="scroll-zoom object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- DESPRE ---------------- */}
      <section id="despre" className="scroll-mt-24 px-6 py-32 sm:px-10 lg:py-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <Eyebrow index="01">Despre noi</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="v3-display balance font-v3-display text-5xl text-inkk sm:text-6xl lg:text-7xl">
                Materiale și execuție <em className="v3-italic text-bronze">din aceeași sursă</em>, cu un singur responsabil.
              </h2>
            </Reveal>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <Reveal delay={150}>
                <p className="text-[17px] leading-relaxed text-inkk">{company.description}</p>
                <p className="mt-6 text-[15.5px] leading-relaxed text-stone">{company.descriptionSecondary}</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-28 grid gap-16 lg:grid-cols-12">
            <Reveal variant="clip" className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image src={images.company.src} alt={images.company.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="scroll-zoom object-cover" />
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              {company.story.map((p, i) => (
                <Reveal key={p.slice(0, 20)} delay={i * 120} className={cn("text-[16.5px] leading-[1.8] text-stone", i > 0 && "mt-8")}>
                  <p className={cn(i === 0 && "first-letter:float-left first-letter:mr-3 first-letter:font-v3-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-inkk")}>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={400} className="mt-14 border-l border-bronze pl-8">
                <p className="v3-display font-v3-display text-2xl text-inkk sm:text-3xl">{company.mission}</p>
              </Reveal>
            </div>
          </div>

          {/* Cifre */}
          <Hairline className="mt-28" />
          <div className="grid gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <p className="v3-display font-v3-display text-6xl text-inkk lg:text-7xl">{s.value}</p>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">{s.label}</p>
                <p className="mt-2 text-[14px] text-stone/80">{s.note}</p>
              </Reveal>
            ))}
          </div>
          <Hairline />

          {/* Valori */}
          <div className="mt-24 grid gap-x-16 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Principii</Eyebrow>
              <h3 className="v3-display mt-8 font-v3-display text-4xl text-inkk sm:text-5xl">
                Ce nu <em className="v3-italic">negociem</em>.
              </h3>
            </Reveal>
            <dl className="grid gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {company.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <dt className="flex items-baseline gap-4 font-v3-display text-2xl text-inkk">
                    <span className="text-[13px] text-bronze">0{i + 1}</span>
                    {v.title}
                  </dt>
                  <dd className="mt-3 pl-10 text-[15px] leading-relaxed text-stone">{v.description}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICII ---------------- */}
      <section id="servicii" className="scroll-mt-24 bg-white px-6 py-32 sm:px-10 lg:py-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <Eyebrow index="02">Servicii</Eyebrow>
          </Reveal>
          <Reveal className="mt-12 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-5xl text-inkk sm:text-6xl lg:text-7xl">
              Patru direcții, <em className="v3-italic text-bronze">o singură</em> responsabilitate.
            </h2>
          </Reveal>

          <div className="mt-20">
            {directions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80} className="group grid gap-8 border-t border-hair py-12 lg:grid-cols-12 lg:items-center">
                <span className="font-v3-display text-[13px] text-bronze lg:col-span-1">{d.index}</span>
                <div className="lg:col-span-4">
                  <h3 className="v3-display font-v3-display text-4xl text-inkk transition-colors duration-500 group-hover:text-bronze sm:text-5xl">{d.title}</h3>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">{d.kicker}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[15.5px] leading-relaxed text-stone">{d.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-inkk/80">
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden lg:col-span-3">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
            <Hairline />
          </div>

          {/* Infrastructură detaliat */}
          <div className="mt-32 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="lg:sticky lg:top-32">
                <Eyebrow>Lucrări de infrastructură</Eyebrow>
                <h3 className="v3-display mt-8 font-v3-display text-4xl text-inkk sm:text-5xl">
                  Ce executăm, <em className="v3-italic">în detaliu</em>.
                </h3>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone">Fiecare lucrare are un responsabil de proiect, un grafic de execuție și documentația de calitate pentru recepție.</p>
                <div className="relative mt-10 hidden aspect-[3/4] overflow-hidden lg:block">
                  <Image src={images.infrastructura.bridge.src} alt={images.infrastructura.bridge.alt} fill sizes="30vw" className="scroll-zoom object-cover" />
                </div>
              </Reveal>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {infrastructureServices.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 60} className="border-t border-hair py-10 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-5">
                    <span className="font-v3-display text-[13px] text-bronze">{s.index}</span>
                    <h4 className="v3-display font-v3-display text-3xl text-inkk">{s.title}</h4>
                  </div>
                  <p className="mt-4 pl-10 text-[15.5px] leading-relaxed text-stone">{s.description}</p>
                  <ul className="mt-4 grid gap-1.5 pl-10 text-[13.5px] text-inkk/80 sm:grid-cols-2">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-baseline gap-2">
                        <span className="size-1 shrink-0 rounded-full bg-bronze" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- MATERIALE ---------------- */}
      <section id="materiale" className="scroll-mt-24 px-6 py-32 sm:px-10 lg:py-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <Eyebrow index="03">Materiale</Eyebrow>
          </Reveal>
          <Reveal className="mt-12 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-5xl text-inkk sm:text-6xl lg:text-7xl">
              Agregate, beton și prefabricate <em className="v3-italic text-bronze">din unitățile proprii</em>.
            </h2>
          </Reveal>

          {/* Agregate */}
          <div className="mt-24 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <h3 className="v3-display font-v3-display text-3xl text-inkk">Agregate</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-stone">Sortate și spălate în stația proprie, verificate în laborator, livrate cu flota noastră.</p>
            </Reveal>
            <div className="lg:col-span-9">
              {aggregates.map((a, i) => (
                <Reveal key={a.name} delay={i * 60} className="grid items-baseline gap-2 border-t border-hair py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-v3-display text-2xl text-inkk sm:col-span-3">{a.name}</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-bronze sm:col-span-2">{a.granulometry}</span>
                  <span className="text-[14.5px] leading-relaxed text-stone sm:col-span-4">{a.summary}</span>
                  <span className="text-[12.5px] text-inkk/70 sm:col-span-3">{a.usage.join(" · ")}</span>
                </Reveal>
              ))}
              <Hairline />
            </div>
          </div>

          {/* Beton */}
          <div className="mt-28 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <h3 className="v3-display font-v3-display text-3xl text-inkk">Beton</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-stone">Orice clasă, după rețete verificate în laboratorul propriu, conform SR EN 206. Certificat de calitate la fiecare transport.</p>
              <div className="relative mt-8 aspect-[4/5] overflow-hidden">
                <Image src={images.beton.finishing.src} alt={images.beton.finishing.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="scroll-zoom object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-8 lg:col-start-5">
              {concreteClasses.map((c, i) => (
                <Reveal key={c.name} delay={i * 50} className="grid items-baseline gap-2 border-t border-hair py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-v3-display text-2xl text-inkk sm:col-span-3">{c.name}</span>
                  <span className="text-[14.5px] leading-relaxed text-stone sm:col-span-6">{c.usage}</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-bronze sm:col-span-3 sm:text-right">{c.exposure}</span>
                </Reveal>
              ))}
              <Hairline />
            </div>
          </div>

          {/* Prefabricate */}
          <div className="mt-28">
            <Reveal className="grid gap-6 lg:grid-cols-12">
              <h3 className="v3-display font-v3-display text-3xl text-inkk lg:col-span-3">Prefabricate</h3>
              <p className="max-w-lg text-[14.5px] leading-relaxed text-stone lg:col-span-6">Beton vibrat din stația proprie, tipare metalice, stoc permanent pentru dimensiunile uzuale și producție pe comandă după proiect.</p>
            </Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
              {prefabProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 80} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105" />
                  </div>
                  <h4 className="mt-5 font-v3-display text-xl text-inkk">{p.name}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-stone">{p.summary}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-bronze">{p.dimensions}</p>
                  <p className="mt-1 text-[12.5px] text-inkk/70">{p.usage}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCES ---------------- */}
      <section id="proces" className="scroll-mt-24 bg-inkk px-6 py-32 text-ivory sm:px-10 lg:py-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.26em] text-ivory/60">
              <span className="font-v3-display text-[13px] normal-case tracking-normal text-bronze-soft">04</span>
              <span className="h-px w-10 bg-bronze-soft" aria-hidden />
              Cum lucrăm
            </p>
          </Reveal>
          <Reveal className="mt-12 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-5xl sm:text-6xl lg:text-7xl">
              De la primul telefon la recepție, <em className="v3-italic text-bronze-soft">fără surprize</em>.
            </h2>
          </Reveal>
          <ol className="mt-24 grid gap-14 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120} className="border-t border-ivory/20 pt-8">
                <span className="v3-display font-v3-display text-6xl text-bronze-soft">{s.index}</span>
                <h3 className="mt-8 font-v3-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/65">{s.description}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-32 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-ivory/60">Certificări</p>
              <ul className="mt-6 grid gap-3 text-[15px] text-ivory/85">
                {company.certifications.map((c) => (
                  <li key={c} className="border-b border-ivory/15 pb-3">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid gap-12 lg:col-span-7 lg:col-start-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 100}>
                  <p className="v3-display font-v3-display text-2xl leading-snug text-ivory sm:text-3xl">„{t.quote}”</p>
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-bronze-soft">{t.author}</p>
                  <p className="mt-1 text-[13px] text-ivory/55">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="px-6 py-32 sm:px-10 lg:py-40">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow index="05">Întrebări frecvente</Eyebrow>
            <h2 className="v3-display mt-8 font-v3-display text-4xl text-inkk sm:text-5xl">
              Răspunsuri <em className="v3-italic">înainte</em> de a suna.
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {faq.map((f, i) => (
              <Reveal as="details" key={f.question} delay={i * 60} className="group border-t border-hair py-7 last:border-b">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 font-v3-display text-2xl text-inkk transition-colors group-open:text-bronze [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-stone group-open:hidden">Deschide</span>
                  <span className="hidden shrink-0 text-[11px] uppercase tracking-[0.22em] text-stone group-open:inline">Închide</span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-stone">{f.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="scroll-mt-24 bg-white px-6 py-32 sm:px-10 lg:py-48">
        <div className="mx-auto w-full max-w-[1400px]">
          <Reveal>
            <Eyebrow index="06">Contact</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="v3-display font-v3-display text-5xl text-inkk sm:text-6xl lg:text-7xl">
                  Să <em className="v3-italic text-bronze">discutăm</em> proiectul.
                </h2>
                <p className="mt-8 max-w-md text-[16px] leading-relaxed text-stone">Răspundem în aceeași zi lucrătoare pentru materiale și în maximum 5 zile pentru lucrări, după vizita în teren.</p>
              </Reveal>
              <Reveal delay={120} className="mt-14 grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Telefon</p>
                  <a href={`tel:${contact.phone}`} className="mt-3 block font-v3-display text-3xl text-inkk">
                    {contact.phoneDisplay}
                  </a>
                  <a href={`tel:${contact.phoneSecondary}`} className="mt-1 block text-[15px] text-stone">
                    {contact.phoneSecondaryDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">E-mail</p>
                  <a href={`mailto:${contact.email}`} className="v3-link mt-3 block text-[16px] text-inkk">
                    {contact.email}
                  </a>
                  <a href={`mailto:${contact.emailOffers}`} className="v3-link mt-1 block text-[15px] text-stone">
                    {contact.emailOffers}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Adresă</p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-inkk">{contact.addressLine}</p>
                  <a href={contact.location.mapsUrl} target="_blank" rel="noreferrer" className="v3-link mt-2 inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.18em] text-bronze">
                    Google Maps
                    <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Program</p>
                  {contact.hours.map((h) => (
                    <p key={h.days} className="mt-3 flex justify-between gap-4 border-b border-hair pb-2 text-[14.5px] text-inkk first:mt-3">
                      <span>{h.days}</span>
                      <span className="text-stone">{h.hours}</span>
                    </p>
                  ))}
                  <p className="mt-3 text-[12.5px] leading-relaxed text-stone">{contact.dispatchNote}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
              <V3ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- DECIZIE (portal) ---------------- */}
      <section className="px-6 py-32 sm:px-10" aria-label="Alegerea acestui design">
        <Reveal className="mx-auto w-full max-w-[1400px] border-y border-hair py-16 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">Design V3 · Minimalist / Premium</p>
          <h2 className="v3-display balance mx-auto mt-8 max-w-3xl font-v3-display text-4xl text-inkk sm:text-5xl lg:text-6xl">
            Este aceasta <em className="v3-italic text-bronze">direcția</em> pe care o alegeți?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-stone">Confirmați varianta preferată sau reveniți la Index pentru a compara cu Design V1 și Design V2. Concept dezvoltat de {brixwave.name}.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ChooseDesignButton className="inline-flex h-14 items-center justify-center rounded-full bg-inkk px-8 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:bg-bronze data-[chosen]:bg-bronze" />
            <BackToIndexLink className="inline-flex h-14 items-center justify-center rounded-full border border-inkk px-8 text-[12px] font-medium uppercase tracking-[0.22em] text-inkk transition-all duration-500 hover:bg-inkk hover:text-ivory" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="px-6 pb-36 pt-8 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="v3-display font-v3-display text-5xl text-inkk">
              Tomi <em className="v3-italic">Alex</em>
            </p>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-stone">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="v3-link mt-6 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-inkk">
              Facebook
              <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Navigare</p>
            <ul className="mt-5 grid gap-2 text-[14.5px] text-inkk">
              {v3Nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="v3-link">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Contact</p>
            <ul className="mt-5 grid gap-2 text-[14.5px] text-inkk">
              <li>
                <a href={`tel:${contact.phone}`} className="v3-link">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="v3-link">
                  {contact.email}
                </a>
              </li>
              <li className="text-stone">{contact.addressLine}</li>
              <li className="text-stone">{contact.hoursSummary}</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Juridic</p>
            <ul className="mt-5 grid gap-2 text-[13.5px] text-stone">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>{legal.regCom}</li>
              <li>{legal.capital}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 flex w-full max-w-[1400px] flex-col gap-2 border-t border-hair pt-6 text-[12px] uppercase tracking-[0.18em] text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <p>Website realizat de {brixwave.name}</p>
        </div>
      </footer>
    </div>
  );
}
