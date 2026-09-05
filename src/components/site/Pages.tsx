import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Certificate, Clock, Envelope, MapPin, Phone, ShieldCheck, Truck } from "@phosphor-icons/react/dist/ssr";
import { MapEmbed, contactGroups } from "@/components/shared/ContactBlocks";
import { PageJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "./Breadcrumbs";
import { ServiceArea } from "./ServiceArea";
import { Faq } from "./Faq";
import { GuideCard } from "./Guides";
import { guides } from "@/data/guides";
import { pagesSeo } from "@/data/seo";
import { Reveal } from "@/components/shared/Reveal";
import {
  aggregates,
  capacities,
  company,
  concreteApplications,
  concreteClasses,
  contact,
  directions,
  infrastructureServices,
  prefabProducts,
  process,
  testimonials,
} from "@/data/company";
import { images, type SiteImage } from "@/data/images";
import { pageHref } from "@/lib/routes";
import { cn } from "@/lib/cn";

/* ---------- primitive V1 ---------- */

function Wrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

function Label({ index, children }: { index: string; children: string }) {
  return (
    <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
      <span className="font-mono">{index}</span>
      <span className="h-px w-8 bg-brand" aria-hidden />
      {children}
    </p>
  );
}

function PageHero({ kicker, title, lead, image, children }: { kicker: string; title: string; lead: string; image: SiteImage; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-steel-400/20">
      <div className="absolute inset-0 -z-10">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-30" style={{ objectPosition: image.position }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,15,0.98)_0%,rgba(12,13,15,0.85)_55%,rgba(12,13,15,0.6)_100%)]" />
      </div>
      <Wrap className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
          <p className="anim-rise mt-5 text-[13px] font-bold uppercase tracking-[0.22em] text-steel-200 [animation-delay:100ms]">{kicker}</p>
          <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl lg:text-6xl [animation-delay:200ms]">{title}</h1>
          <p className="anim-rise mt-6 max-w-2xl text-lg leading-relaxed text-steel-200 [animation-delay:350ms]">{lead}</p>
          {children && <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:500ms]">{children}</div>}
        </div>
        <aside className="anim-rise self-end lg:col-span-4 [animation-delay:450ms]">
          <div className="border border-steel-400/25 bg-graphite-900/85 p-6 backdrop-blur">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Comenzi și informații</p>
            <a href={`tel:${contact.phone}`} className="v1-display mt-2 block text-3xl text-white">
              {contact.phoneDisplay}
            </a>
            <p className="mt-1 text-[13.5px] text-steel-200">{contact.hoursSummary}</p>
            <p className="mt-3 text-[13px] text-steel-400">{contact.dispatchNote}</p>
          </div>
        </aside>
      </Wrap>
    </section>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-steel-400/50 px-7 text-[15px] font-bold text-white transition hover:bg-white/5">
      {children}
      <ArrowRight weight="bold" className="size-4" aria-hidden />
    </Link>
  );
}

function CallLink() {
  return (
    <a href={`tel:${contact.phone}`} className="inline-flex h-13 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft">
      <Phone weight="fill" className="size-4" aria-hidden />
      Sună: {contact.phoneDisplay}
    </a>
  );
}

function Cta({ title, text }: { title: string; text: string }) {
  return (
    <section className="border-t border-steel-400/20 bg-graphite-900 py-16">
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="v1-display text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-[15.5px] text-steel-400">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallLink />
          <PrimaryLink href={pageHref("contact")}>Date de contact</PrimaryLink>
        </div>
      </Reveal>
    </section>
  );
}

const cell = "border border-steel-400/20 bg-steel-400/20";

/* ---------- ACASĂ ---------- */

const serviceCards = [
  { slug: "agregate", title: "Agregate", kicker: "Balastieră proprie", text: "Nisip, balast, sort 4–8, sort 8–16. Livrare cu flota proprie.", image: images.agregate.cover },
  { slug: "beton", title: "Stație betoane", kicker: "Orice clasă de beton", text: "C8/10 – C35/45, certificat de calitate la fiecare transport.", image: images.beton.pouring },
  { slug: "prefabricate", title: "Prefabricate", kicker: "Produse din beton", text: "Tuburi, cămine, borduri, dale, elemente pentru podețe.", image: images.prefabricate.forms },
  { slug: "contact", title: "Lucrări de infrastructură", kicker: "Echipe și utilaje proprii", text: "Rețele de apă și canalizare, drumuri, poduri, terasamente.", image: images.infrastructura.asphalt },
];

/**
 * Prima pagină: serviciile sunt primul lucru pe care îl vede vizitatorul,
 * imediat sub titlu, fără scroll. Descrierea firmei și restul urmează.
 */
export function Home() {
  return (
    <>
      <PageJsonLd slug="" />
      <section className="relative isolate overflow-hidden border-b border-steel-400/20">
        <div className="absolute inset-0 -z-10">
          <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,13,15,0.92)_0%,rgba(12,13,15,0.86)_60%,#0c0d0f_100%)]" />
        </div>
        <Wrap className="pb-12 pt-10 lg:pb-16 lg:pt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
              <p className="anim-rise mt-4 text-[13px] font-bold uppercase tracking-[0.22em] text-steel-200 [animation-delay:100ms]">{company.tagline} · Satu Mare, din {company.established}</p>
              <h1 className="v1-display anim-rise mt-4 text-[2rem] text-white sm:text-5xl lg:text-6xl [animation-delay:200ms]">{pagesSeo[""].h1}</h1>
              <p className="anim-rise mt-3 hidden max-w-2xl text-[16.5px] leading-relaxed text-steel-200 sm:block [animation-delay:300ms]">Produse în unitățile proprii și livrate cu flota noastră. Alegeți serviciul de care aveți nevoie sau sunați-ne direct.</p>
            </div>
            <div className="anim-rise hidden flex-col gap-3 sm:flex sm:flex-row [animation-delay:400ms]">
              <CallLink />
              <PrimaryLink href={pageHref("contact")}>Date de contact</PrimaryLink>
            </div>
          </div>

          <div className={cn("anim-rise mt-6 grid grid-cols-2 gap-px xl:grid-cols-4 sm:mt-10 [animation-delay:500ms]", cell)}>
            {serviceCards.map((c, i) => (
              <Link key={c.slug} href={pageHref(c.slug)} className="group flex flex-col bg-graphite-950 transition hover:bg-graphite-900">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
                  <Image src={c.image.src} alt={c.image.alt} fill priority={i < 2} sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,#0c0d0f_5%,transparent_60%)]" />
                  <span className="absolute left-3 top-3 hidden rounded-[2px] bg-brand px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-wider text-white sm:inline-block">{c.kicker}</span>
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <h2 className="text-[16px] font-bold leading-tight text-white sm:text-[22px]">{c.title}</h2>
                  <p className="mt-2 hidden text-[14px] leading-relaxed text-steel-200 sm:block">{c.text}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-bold text-brand-soft sm:mt-4 sm:text-[14px]">
                    {c.slug === "contact" ? "Contactați-ne" : `Vezi ${c.title.toLowerCase()}`}
                    <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-b border-steel-400/20 bg-graphite-900" aria-label="Cifre cheie">
        <Wrap className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-steel-400/20">
          {company.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="py-7 lg:px-8 lg:first:pl-0">
              <p className="v1-display text-4xl text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-steel-200">{s.label}</p>
            </Reveal>
          ))}
        </Wrap>
      </section>

      <section className="py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Label index="01">Despre noi</Label>
              <h2 className="v1-display mt-5 text-4xl text-white sm:text-5xl">Materiale și execuție din aceeași sursă.</h2>
              <p className="mt-6 text-[17px] leading-relaxed text-steel-200">{company.description}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-steel-400">{company.descriptionSecondary}</p>
            </Reveal>
            <Reveal variant="clip" delay={200} className="mt-8">
              <Image src={images.company.src} alt={images.company.alt} width={images.company.width} height={images.company.height} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal className="grid gap-5 lg:pl-8">
              {company.story.map((p) => (
                <p key={p.slice(0, 20)} className="text-[15.5px] leading-relaxed text-steel-200">
                  {p}
                </p>
              ))}
              <blockquote className="mt-2 border-l-2 border-brand pl-6 text-xl font-semibold leading-snug text-white">{company.mission}</blockquote>
            </Reveal>
            <div className={cn("mt-10 grid gap-px sm:grid-cols-2 lg:ml-8", cell)}>
              {company.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-graphite-950 p-6">
                  <p className="font-mono text-[12px] text-brand">0{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      <section className="border-y border-steel-400/20 bg-graphite-900 py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Label index="02">Lucrări de infrastructură</Label>
            <h2 className="v1-display mt-5 text-3xl text-white sm:text-4xl">Executăm cu echipe și utilaje proprii.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-steel-400">{directions[3].description}</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden">
              <Image src={images.infrastructura.excavatorPipes.src} alt={images.infrastructura.excavatorPipes.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <ol className="divide-y divide-steel-400/20 border-y border-steel-400/20 lg:col-span-8">
            {infrastructureServices.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60} className="grid gap-3 py-6 sm:grid-cols-12">
                <span className="font-mono text-[13px] text-brand sm:col-span-1">{s.index}</span>
                <div className="sm:col-span-6">
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{s.description}</p>
                </div>
                <ul className="grid gap-1 text-[13.5px] text-steel-200 sm:col-span-5 sm:pl-6">
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
        </Wrap>
      </section>

      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="max-w-2xl">
            <Label index="03">Cum lucrăm</Label>
            <h2 className="v1-display mt-5 text-4xl text-white sm:text-5xl">De la primul telefon la livrare, în patru pași.</h2>
          </Reveal>
          <ol className={cn("mt-12 grid gap-px md:grid-cols-2 xl:grid-cols-4", cell)}>
            {process.map((s) => (
              <Reveal as="li" key={s.title} className="bg-graphite-950 p-7">
                <span className="v1-display text-5xl text-brand/90">{s.index}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-steel-400">{s.description}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <Reveal className="flex gap-5 border border-steel-400/20 bg-graphite-900 p-6 lg:col-span-5">
              <Certificate weight="fill" className="size-10 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="text-lg font-bold text-white">Certificări</p>
                <ul className="mt-2 grid gap-1 text-[14px] text-steel-200">
                  {company.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <div className={cn("grid gap-px md:grid-cols-3 lg:col-span-7", cell)}>
              {testimonials.map((t) => (
                <Reveal key={t.author} className="bg-graphite-950 p-6">
                  <p className="text-[14.5px] leading-relaxed text-white">„{t.quote}”</p>
                  <p className="mt-4 text-[13px] font-bold text-steel-200">{t.author}</p>
                  <p className="text-[12.5px] text-steel-400">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      </section>
      <ServiceArea />
      <section className="py-16 lg:py-20" aria-labelledby="ghiduri-title">
        <Wrap>
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label index="04">Ghiduri utile</Label>
              <h2 id="ghiduri-title" className="v1-display mt-4 text-3xl text-white sm:text-4xl">Răspunsuri practice pentru șantierul dumneavoastră.</h2>
            </div>
            <Link href="/ghiduri/" className="inline-flex items-center gap-2 text-[14px] font-bold text-white hover:text-brand-soft">
              Toate ghidurile
              <ArrowRight weight="bold" className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <div className={cn("mt-8 grid gap-px md:grid-cols-3", cell)}>
            {guides.slice(0, 3).map((g, i) => (
              <GuideCard key={g.slug} guide={g} delay={i * 70} />
            ))}
          </div>
        </Wrap>
      </section>
      <Faq slug="" />
      <Cta title="Aveți un proiect sau o comandă?" text="Sunați-ne sau scrieți-ne pe e-mail. Răspundem în aceeași zi lucrătoare." />
    </>
  );
}

/* ---------- AGREGATE ---------- */

export function Agregate() {
  return (
    <>
      <PageJsonLd slug="agregate" />
      <Breadcrumbs slug="agregate" />
      <PageHero
        kicker="Balastieră proprie · județul Satu Mare"
        title={pagesSeo.agregate.h1}
        lead="Exploatăm o balastieră proprie cu stație de sortare și spălare. Agregatele sunt verificate granulometric în laborator și livrate cu flota proprie de autobasculante, de la o mașină până la volume de șantier."
        image={images.agregate.cover}
      >
        <CallLink />
        <PrimaryLink href={pageHref("contact")}>Date de contact</PrimaryLink>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="max-w-2xl">
            <Label index="01">Produse</Label>
            <h2 className="v1-display mt-5 text-4xl text-white sm:text-5xl">Patru sorturi, în stoc permanent.</h2>
          </Reveal>
          <div className={cn("mt-12 grid gap-px sm:grid-cols-2 xl:grid-cols-4", cell)}>
            {aggregates.map((a, i) => (
              <Reveal key={a.name} delay={i * 80} className="flex flex-col bg-graphite-950">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" style={{ objectPosition: a.image.position }} />
                  <span className="absolute left-4 top-4 rounded-[2px] bg-graphite-950/85 px-2.5 py-1 font-mono text-[12px] text-white">{a.granulometry}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold text-white">{a.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-steel-200">{a.summary}</p>
                  <ul className="mt-4 grid gap-1.5 text-[13.5px] text-steel-400">
                    {a.usage.map((u) => (
                      <li key={u} className="flex items-center gap-2">
                        <span className="size-1 bg-brand" aria-hidden />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${contact.phone}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-bold text-white hover:text-brand-soft">
                    <Phone weight="fill" className="size-4 text-brand" aria-hidden />
                    Comandă {a.name.toLowerCase()}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-y border-steel-400/20 bg-graphite-900 py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Label index="02">Livrare și comandă</Label>
            <h2 className="v1-display mt-5 text-3xl text-white sm:text-4xl">Cu flota proprie, la ritmul șantierului.</h2>
            <ul className="mt-8 grid gap-4 text-[15px] text-steel-200">
              {[
                { icon: Truck, text: "18 autobasculante proprii de 24–40 t, programate centralizat din dispecerat." },
                { icon: Clock, text: contact.dispatchNote },
                { icon: ShieldCheck, text: "Buletin de laborator și certificat de calitate la fiecare transport." },
                { icon: MapPin, text: `Livrăm în ${company.serviceAreas.join(", ")}; pentru alte zone, la cerere.` },
              ].map((r) => (
                <li key={r.text} className="flex gap-3">
                  <r.icon weight="fill" className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  {r.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="overflow-x-auto lg:col-span-7">
            <table className="w-full min-w-[520px] border-collapse text-left text-[14.5px]">
              <thead>
                <tr className="border-b-2 border-brand text-[12px] font-bold uppercase tracking-[0.14em] text-steel-200">
                  <th className="py-3 pr-4">Produs</th>
                  <th className="py-3 pr-4">Granulometrie</th>
                  <th className="py-3">Utilizări principale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-400/20">
                {aggregates.map((a) => (
                  <tr key={a.name} className="align-top">
                    <td className="py-4 pr-4 font-bold text-white">{a.name}</td>
                    <td className="py-4 pr-4 font-mono text-[13px] text-steel-200">{a.granulometry}</td>
                    <td className="py-4 text-steel-400">{a.usage.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden">
              <Image src={images.agregate.loader.src} alt={images.agregate.loader.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Wrap>
      </section>
      <ServiceArea what="agregate" />
      <Faq slug="agregate" />
      <Cta title="Comandați agregate astăzi." text="Spuneți-ne sortul, cantitatea și localitatea. Confirmăm telefonic prețul și intervalul de livrare." />
    </>
  );
}

/* ---------- STAȚIE BETOANE ---------- */

export function Beton() {
  return (
    <>
      <PageJsonLd slug="beton" />
      <Breadcrumbs slug="beton" />
      <PageHero
        kicker="Stație de betoane proprie · județul Satu Mare"
        title={pagesSeo.beton.h1}
        lead="Stația automatizată produce orice clasă de beton, de la C8/10 la C35/45, după rețete verificate în laboratorul propriu, conform SR EN 206 și NE 012. Livrăm cu autobetoniere de 8–10 mc și pompe de beton de 28–36 m."
        image={images.beton.pouring}
      >
        <CallLink />
        <PrimaryLink href={pageHref("contact")}>Date de contact</PrimaryLink>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Label index="01">Clase de beton</Label>
            <h2 className="v1-display mt-5 text-3xl text-white sm:text-4xl">Orice clasă cerută de proiect.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-steel-400">Clasele de mai jos sunt cele mai solicitate. Pentru rețete speciale (beton rutier, hidrotehnic, cu aditivi de iarnă) stabilim rețeta împreună cu proiectantul.</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden">
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
        </Wrap>
      </section>

      <section className="border-y border-steel-400/20 bg-graphite-900 py-20 lg:py-28">
        <Wrap>
          <Reveal className="max-w-2xl">
            <Label index="02">Aplicații</Label>
            <h2 className="v1-display mt-5 text-3xl text-white sm:text-4xl">Pentru ce turnăm.</h2>
          </Reveal>
          <div className={cn("mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3", cell)}>
            {concreteApplications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="bg-graphite-950 p-6">
                <h3 className="text-lg font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-steel-400">{a.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {capacities.slice(1, 2).concat(capacities.slice(3, 4)).map((c) => (
              <Reveal key={c.label} className="border border-steel-400/20 bg-graphite-950 p-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">{c.label}</p>
                <p className="v1-display mt-2 text-4xl text-white">
                  {c.value} <span className="text-lg text-steel-200">{c.unit}</span>
                </p>
                <p className="mt-2 text-[13.5px] text-steel-400">{c.note}</p>
              </Reveal>
            ))}
            <Reveal className="border border-steel-400/20 bg-graphite-950 p-6 sm:col-span-2">
              <div className="flex gap-4">
                <Certificate weight="fill" className="size-8 shrink-0 text-brand" aria-hidden />
                <div>
                  <p className="text-lg font-bold text-white">Calitate verificabilă</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-steel-400">Beton certificat conform SR EN 206 și NE 012. Laborator propriu pentru rețete, probe la 7 și 28 de zile, buletine arhivate cinci ani pentru recepții și licitații.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Wrap>
      </section>
      <ServiceArea what="beton" />
      <Faq slug="beton" />
      <Cta title="Programați o livrare de beton." text="Spuneți-ne clasa, cantitatea, amplasamentul și ora dorită. Confirmăm telefonic în aceeași zi." />
    </>
  );
}

/* ---------- PREFABRICATE ---------- */

export function Prefabricate() {
  return (
    <>
      <PageJsonLd slug="prefabricate" />
      <Breadcrumbs slug="prefabricate" />
      <PageHero
        kicker="Linie proprie de prefabricate · județul Satu Mare"
        title={pagesSeo.prefabricate.h1}
        lead="Produse în tipare metalice cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale și producție pe comandă după proiect, cu livrare și descărcare la șantier."
        image={images.prefabricate.forms}
      >
        <CallLink />
        <PrimaryLink href={pageHref("contact")}>Date de contact</PrimaryLink>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="max-w-2xl">
            <Label index="01">Produse</Label>
            <h2 className="v1-display mt-5 text-4xl text-white sm:text-5xl">Ce producem.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-steel-400/20 bg-steel-400/20">
            {prefabProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 60} className="grid gap-6 bg-graphite-950 p-5 md:grid-cols-12 md:items-center">
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-3">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
                </div>
                <div className="md:col-span-5">
                  <p className="font-mono text-[12px] text-brand">0{i + 1}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-steel-200">{p.summary}</p>
                </div>
                <dl className="grid gap-3 text-[14px] md:col-span-4">
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">Dimensiuni</dt>
                    <dd className="mt-1 font-mono text-[13px] text-white">{p.dimensions}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">Utilizare</dt>
                    <dd className="mt-1 text-steel-200">{p.usage}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid gap-6 border border-steel-400/20 bg-graphite-900 p-6 md:grid-cols-[auto_1fr]">
            <ShieldCheck weight="fill" className="size-8 text-brand" aria-hidden />
            <p className="text-[15px] leading-relaxed text-steel-200">
              Toate prefabricatele sunt produse din beton C30/37 sau C35/45, vibrat mecanic, cu armătură conform proiectului. Pentru elemente speciale (timpane, aripi, dale de podeț) producem după planșele beneficiarului, cu termen de 10–15 zile lucrătoare.
            </p>
          </Reveal>
        </Wrap>
      </section>
      <ServiceArea what="prefabricate" />
      <Faq slug="prefabricate" />
      <Cta title="Aveți nevoie de prefabricate?" text="Trimiteți lista de produse și cantitățile sau sunați-ne. Verificăm stocul și confirmăm termenul de livrare." />
    </>
  );
}

/* ---------- CONTACT ---------- */

export function Contact() {
  return (
    <>
      <PageJsonLd slug="contact" />
      <section className="border-b border-steel-400/20 bg-graphite-900">
        <Breadcrumbs slug="contact" />
        <Wrap className="py-14 lg:py-20">
          <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
          <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl lg:text-6xl [animation-delay:150ms]">Contact Tomi Alex SRL, Turulung, județul Satu Mare</h1>
          <p className="anim-rise mt-5 max-w-2xl text-lg leading-relaxed text-steel-200 [animation-delay:300ms]">
            Cel mai rapid: sunați-ne. Livrăm agregate, beton și prefabricate în Satu Mare, Maramureș, Bihor și Sălaj; pentru lucrări, discutăm după vizita în teren.
          </p>
          <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:400ms]">
            <a href={`tel:${contact.phone}`} className="v1-display inline-flex items-center gap-3 rounded-[2px] bg-brand px-6 py-3 text-3xl text-white transition hover:bg-brand-soft sm:text-4xl">
              <Phone weight="fill" className="size-7" aria-hidden />
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex h-auto items-center gap-3 rounded-[2px] border border-steel-400/50 px-6 py-3 text-lg font-bold text-white transition hover:bg-white/5">
              <Envelope weight="fill" className="size-5 text-brand" aria-hidden />
              {contact.email}
            </a>
          </div>
        </Wrap>
      </section>
      <section className="py-16 lg:py-24">
        <Wrap className={cn("grid gap-px md:grid-cols-2 xl:grid-cols-4", cell)}>
          {contactGroups.map((g) => (
            <Reveal key={g.key} className="bg-graphite-950 p-6">
              <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">
                {g.key === "telefon" && <Phone weight="fill" className="size-4 text-brand" aria-hidden />}
                {g.key === "email" && <Envelope weight="fill" className="size-4 text-brand" aria-hidden />}
                {g.key === "firma" && <MapPin weight="fill" className="size-4 text-brand" aria-hidden />}
                {g.key === "program" && <Clock weight="fill" className="size-4 text-brand" aria-hidden />}
                {g.label}
              </p>
              <ul className="mt-4 grid gap-1.5">
                {g.lines.map((l) => (
                  <li key={l.text} className={cn("text-[15px] leading-relaxed", "strong" in l && l.strong ? "text-lg font-bold text-white" : "text-steel-200")}>
                    {"href" in l && l.href ? (
                      <a href={l.href} className="hover:text-brand-soft">
                        {l.text}
                      </a>
                    ) : (
                      l.text
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Wrap>
        <Wrap className="mt-12">
          <Reveal>
            <Label index="02">Unde ne găsiți</Label>
            <h2 className="v1-display mt-4 text-3xl text-white sm:text-4xl">{contact.addressLine}</h2>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <MapEmbed frameClassName="aspect-[16/9] overflow-hidden border border-steel-400/20 sm:aspect-[21/9]" buttonClassName="mt-4 inline-flex h-13 items-center gap-2 rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft" />
          </Reveal>
        </Wrap>
      </section>
    </>
  );
}
