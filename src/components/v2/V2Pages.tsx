import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Certificate, Clock, Envelope, MapPin, Phone, ShieldCheck, Truck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { V2ContactForm } from "./V2ContactForm";
import { V2QuickOrder } from "./V2QuickOrder";
import { CapacityTile, VolumeBars } from "./V2Charts";
import {
  aggregates,
  annualVolumes,
  capacities,
  company,
  concreteApplications,
  concreteClasses,
  contact,
  directions,
  faq,
  infrastructureServices,
  prefabProducts,
  process,
  testimonials,
} from "@/data/company";
import { images, type SiteImage } from "@/data/images";
import { pageHref } from "@/lib/routes";
import { cn } from "@/lib/cn";

/* ---------- primitive V2 ---------- */

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

function CallBtn({ big }: { big?: boolean }) {
  return (
    <a href={`tel:${contact.phone}`} className={cn("inline-flex items-center justify-center gap-3 bg-brand font-v2-display font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft", big ? "h-16 px-8 text-2xl" : "h-14 px-7 text-xl")}>
      <Phone weight="fill" className={big ? "size-6" : "size-5"} aria-hidden />
      {contact.phoneDisplay}
    </a>
  );
}

function OutlineLink({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={cn("inline-flex h-14 items-center justify-center gap-3 border-2 px-7 font-v2-display text-xl font-bold uppercase tracking-wide transition", light ? "border-white text-white hover:bg-white hover:text-asphalt-950" : "border-asphalt-950 text-asphalt-950 hover:bg-asphalt-950 hover:text-white")}>
      {children}
      <ArrowRight weight="bold" className="size-5" aria-hidden />
    </Link>
  );
}

function PageHero({ kicker, title, lead, image, order }: { kicker: string; title: string; lead: string; image: SiteImage; order?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-asphalt-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-40" style={{ objectPosition: image.position }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,0.97)_0%,rgba(11,11,12,0.8)_55%,rgba(11,11,12,0.5)_100%)]" />
      </div>
      <Wrap className={cn("grid gap-10 py-14 lg:py-20", order && "lg:grid-cols-12")}>
        <div className={cn(order && "lg:col-span-7")}>
          <p className="anim-rise inline-flex bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider">{kicker}</p>
          <h1 className="v2-display anim-rise mt-6 font-v2-display text-5xl sm:text-6xl lg:text-7xl [animation-delay:150ms]">{title}</h1>
          <p className="anim-rise mt-6 max-w-2xl text-[17px] leading-relaxed text-concrete-200 [animation-delay:300ms]">{lead}</p>
          <div className="anim-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:450ms]">
            <CallBtn />
            <OutlineLink href={pageHref("v2", "contact")} light>
              Cere ofertă
            </OutlineLink>
          </div>
        </div>
        {order && (
          <div className="anim-rise self-end lg:col-span-5 [animation-delay:400ms]">
            <V2QuickOrder />
          </div>
        )}
      </Wrap>
      <Hazard />
    </section>
  );
}

function Cta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-asphalt-950 py-16 text-white">
      <Wrap>
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="v2-display font-v2-display text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-3 max-w-xl text-[15.5px] text-concrete-300">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CallBtn />
            <OutlineLink href={pageHref("v2", "contact")} light>
              Cere ofertă
            </OutlineLink>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

function Plate({ title, tag, children }: { title: string; tag: string; children: React.ReactNode }) {
  return (
    <div className="border-2 border-asphalt-950 bg-white">
      <div className="flex items-center justify-between border-b-2 border-asphalt-950 bg-asphalt-950 px-5 py-3 text-white">
        <h3 className="v2-display font-v2-display text-2xl">{title}</h3>
        <span className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-brand-soft">{tag}</span>
      </div>
      {children}
    </div>
  );
}

/* ---------- ACASĂ ---------- */

export function V2Home() {
  const slugs = ["agregate", "beton", "prefabricate"];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-asphalt-950 text-white">
        <div className="absolute inset-0 -z-10">
          <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="anim-settle object-cover opacity-45" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,0.96)_0%,rgba(11,11,12,0.8)_50%,rgba(11,11,12,0.5)_100%)]" />
        </div>
        <Wrap className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="anim-rise inline-flex bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider">Agregate · Beton · Prefabricate · Infrastructură</p>
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
              <CallBtn big />
              <OutlineLink href={pageHref("v2", "agregate")} light>
                Vezi materialele
              </OutlineLink>
            </div>
          </div>
          <div className="anim-rise self-end lg:col-span-5 [animation-delay:500ms]">
            <V2QuickOrder />
          </div>
        </Wrap>
        <Hazard />
      </section>

      <section className="bg-asphalt-900 text-white" aria-label="Cifre cheie">
        <Wrap className="grid grid-cols-2 gap-px bg-concrete-700 lg:grid-cols-4">
          {company.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-asphalt-900 px-6 py-8">
              <p className="v2-display font-v2-display text-6xl">{s.value}</p>
              <p className="mt-2 font-v2-display text-[15px] font-bold uppercase tracking-wider text-brand-soft">{s.label}</p>
            </Reveal>
          ))}
        </Wrap>
      </section>

      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="flex flex-col gap-6 border-b-4 border-asphalt-950 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker>Ce producem</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl lg:text-7xl">Agregate, beton, prefabricate.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-concrete-500">Produse în unitățile proprii, verificate în laborator, livrate cu flota noastră. Fiecare pagină de produs are prețuri ferme la telefon.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {directions.slice(0, 3).map((d, i) => (
              <Reveal key={d.slug} delay={i * 90} className="group flex flex-col border-2 border-asphalt-950 bg-white">
                <Link href={pageHref("v2", slugs[i])} className="relative aspect-[16/9] overflow-hidden border-b-2 border-asphalt-950">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-0 top-4 bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider text-white">{d.kicker}</span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="v2-display font-v2-display text-4xl">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-concrete-500">{d.summary}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-1.5 text-[14px] font-medium">
                    {d.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="size-1.5 bg-brand" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={pageHref("v2", slugs[i])} className="mt-6 inline-flex h-13 items-center justify-center gap-2 bg-asphalt-950 font-v2-display text-[18px] font-bold uppercase tracking-wide text-white transition group-hover:bg-brand">
                    Vezi {d.title.toLowerCase()}
                    <ArrowRight weight="bold" className="size-5" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-concrete-100 py-20 lg:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Despre noi</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Materiale și execuție din aceeași sursă.</h2>
              <p className="mt-6 text-[17px] leading-relaxed">{company.description}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-concrete-500">{company.descriptionSecondary}</p>
            </Reveal>
            <Reveal variant="clip" delay={200} className="mt-8 border-2 border-asphalt-950">
              <Image src={images.company.src} alt={images.company.alt} width={images.company.width} height={images.company.height} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5">
              {company.story.map((p) => (
                <Reveal key={p.slice(0, 20)}>
                  <p className="text-[16px] leading-relaxed text-concrete-500">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 border-l-8 border-brand bg-white p-6">
              <p className="v2-display font-v2-display text-2xl leading-snug sm:text-3xl">{company.mission}</p>
            </Reveal>
            <div className="mt-8 grid gap-px bg-asphalt-950 sm:grid-cols-2">
              {company.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-white p-6">
                  <p className="font-v2-display text-2xl font-bold text-brand">0{i + 1}</p>
                  <h3 className="v2-display mt-2 font-v2-display text-2xl">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-concrete-500">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      <section className="bg-asphalt-950 py-20 text-white lg:py-28">
        <Wrap>
          <Reveal className="flex flex-col gap-6 border-b-4 border-brand pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Kicker dark>Lucrări de infrastructură</Kicker>
              <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Executăm cu echipe și utilaje proprii.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-concrete-300">{directions[3].description}</p>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-concrete-700 md:grid-cols-2 xl:grid-cols-3">
            {infrastructureServices.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60} className="group bg-asphalt-950 p-7 transition hover:bg-asphalt-800">
                <span className="v2-display font-v2-display text-5xl text-concrete-700 transition group-hover:text-brand">{s.index}</span>
                <h3 className="v2-display mt-3 font-v2-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-concrete-300">{s.description}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {capacities.map((c, i) => (
              <CapacityTile key={c.label} item={c} index={i} />
            ))}
          </div>
        </Wrap>
      </section>

      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="border-b-4 border-asphalt-950 pb-8">
            <Kicker>Cum comandați</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Patru pași. Un singur responsabil.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-asphalt-950 md:grid-cols-2 xl:grid-cols-4">
            {process.map((s) => (
              <Reveal as="li" key={s.title} className="bg-white p-7">
                <span className="v2-display inline-flex size-16 items-center justify-center bg-brand font-v2-display text-3xl text-white">{s.index}</span>
                <h3 className="v2-display mt-5 font-v2-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-concrete-500">{s.description}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Reveal className="flex gap-5 border-2 border-asphalt-950 bg-white p-6 lg:col-span-5">
              <Certificate weight="fill" className="size-10 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="v2-display font-v2-display text-2xl">Certificări</p>
                <ul className="mt-2 grid gap-1 text-[14.5px] text-concrete-500">
                  {company.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <div className="grid gap-px bg-asphalt-950 md:grid-cols-3 lg:col-span-7">
              {testimonials.map((t) => (
                <Reveal key={t.author} className="bg-white p-6">
                  <p className="text-[14.5px] leading-relaxed">„{t.quote}”</p>
                  <p className="mt-4 font-v2-display text-[14px] font-bold uppercase tracking-wider text-brand">{t.author}</p>
                  <p className="text-[12.5px] text-concrete-500">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Wrap>
      </section>
      <Cta title="Sunați. Comandați. Livrăm." text="Materiale în aceeași zi lucrătoare, oferte pentru lucrări în maximum 5 zile de la vizita în teren." />
    </>
  );
}

/* ---------- AGREGATE ---------- */

export function V2Agregate() {
  return (
    <>
      <PageHero kicker="Balastieră proprie" title="Nisip, balast, sort 4–8, sort 8–16." lead="Sortate și spălate în stația proprie, verificate granulometric în laborator, livrate cu 18 autobasculante proprii de 24–40 t. De la o mașină până la volume de șantier." image={images.agregate.cover} order />
      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="border-b-4 border-asphalt-950 pb-8">
            <Kicker>Produse</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Patru sorturi, în stoc permanent.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {aggregates.map((a, i) => (
              <Reveal key={a.name} delay={i * 80} className="flex flex-col border-2 border-asphalt-950 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-asphalt-950">
                  <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" style={{ objectPosition: a.image.position }} />
                  <span className="absolute left-0 top-4 bg-asphalt-950 px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider text-white">{a.granulometry}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="v2-display font-v2-display text-3xl">{a.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-concrete-500">{a.summary}</p>
                  <ul className="mt-4 grid gap-1 text-[13.5px] font-medium">
                    {a.usage.map((u) => (
                      <li key={u} className="flex items-center gap-2">
                        <span className="size-1.5 bg-brand" aria-hidden />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${contact.phone}`} className="mt-auto inline-flex h-12 items-center justify-center gap-2 bg-asphalt-950 pt-0 font-v2-display text-[17px] font-bold uppercase tracking-wide text-white transition hover:bg-brand [margin-top:1.25rem]">
                    <Phone weight="fill" className="size-4" aria-hidden />
                    Comandă
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="bg-concrete-100 py-20 lg:py-28">
        <Wrap className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Kicker>Livrare și comandă</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-4xl sm:text-5xl">Cu flota proprie, la ritmul șantierului.</h2>
            <ul className="mt-8 grid gap-4 text-[15px]">
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
          <Reveal delay={100} className="lg:col-span-7">
            <Plate title="Agregate" tag="Fișă tehnică">
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
            </Plate>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden border-2 border-asphalt-950">
              <Image src={images.agregate.loader.src} alt={images.agregate.loader.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Wrap>
      </section>
      <Cta title="Comandați agregate astăzi." text="Sortul, cantitatea și localitatea. Confirmăm telefonic prețul și intervalul de livrare." />
    </>
  );
}

/* ---------- STAȚIE BETOANE ---------- */

export function V2Beton() {
  return (
    <>
      <PageHero kicker="Stație de betoane proprie" title="Beton de orice clasă." lead="Stația automatizată produce orice clasă de beton, de la C8/10 la C35/45, după rețete verificate în laborator, conform SR EN 206 și NE 012. Autobetoniere de 8–10 mc, pompe de 28–36 m, certificat de calitate la fiecare transport." image={images.beton.pouring} order />
      <section className="py-20 lg:py-28">
        <Wrap className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Kicker>Clase de beton</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-4xl sm:text-5xl">Orice clasă cerută de proiect.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-concrete-500">Clasele de mai jos sunt cele mai solicitate. Pentru rețete speciale (beton rutier, hidrotehnic, cu aditivi de iarnă) stabilim rețeta împreună cu proiectantul.</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden border-2 border-asphalt-950">
              <Image src={images.beton.rebar.src} alt={images.beton.rebar.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <Plate title="Clase de beton" tag="SR EN 206">
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
            </Plate>
          </Reveal>
        </Wrap>
      </section>
      <section className="bg-asphalt-950 py-20 text-white lg:py-28">
        <Wrap>
          <Reveal className="border-b-4 border-brand pb-8">
            <Kicker dark>Aplicații și capacitate</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-4xl sm:text-5xl">Pentru ce turnăm.</h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-concrete-700 sm:grid-cols-2 lg:grid-cols-3">
            {concreteApplications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="bg-asphalt-950 p-6">
                <h3 className="v2-display font-v2-display text-2xl">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-concrete-300">{a.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <CapacityTile item={capacities[1]} index={0} />
              <CapacityTile item={capacities[3]} index={1} />
            </div>
            <div className="lg:col-span-5">
              <VolumeBars data={annualVolumes} title="Volum anual livrat" unit="mii tone agregate și beton" />
            </div>
          </div>
        </Wrap>
      </section>
      <Cta title="Programați o livrare de beton." text="Clasa, cantitatea, amplasamentul și ora dorită. Confirmăm telefonic în aceeași zi." />
    </>
  );
}

/* ---------- PREFABRICATE ---------- */

export function V2Prefabricate() {
  return (
    <>
      <PageHero kicker="Linie proprie de prefabricate" title="Prefabricate din beton, gata de montaj." lead="Produse în tipare metalice cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale, producție pe comandă după proiect, livrare și descărcare la șantier." image={images.prefabricate.forms} order />
      <section className="py-20 lg:py-28">
        <Wrap>
          <Reveal className="border-b-4 border-asphalt-950 pb-8">
            <Kicker>Produse</Kicker>
            <h2 className="v2-display mt-4 font-v2-display text-5xl sm:text-6xl">Ce producem.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {prefabProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 60} className="flex flex-col border-2 border-asphalt-950 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-asphalt-950">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute left-0 top-4 bg-brand px-3 py-1 font-v2-display text-[14px] font-bold text-white">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="v2-display font-v2-display text-2xl">{p.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-concrete-500">{p.summary}</p>
                  <p className="mt-3 text-[13px] font-bold text-brand">{p.dimensions}</p>
                  <p className="mt-0.5 text-[12.5px] text-concrete-500">{p.usage}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex gap-5 border-l-8 border-brand bg-white p-6">
            <ShieldCheck weight="fill" className="size-8 shrink-0 text-brand" aria-hidden />
            <p className="text-[15px] leading-relaxed text-concrete-500">Toate prefabricatele sunt produse din beton C30/37 sau C35/45, vibrat mecanic, cu armătură conform proiectului. Pentru elemente speciale producem după planșele beneficiarului, cu termen de 10–15 zile lucrătoare.</p>
          </Reveal>
        </Wrap>
      </section>
      <Cta title="Aveți nevoie de prefabricate?" text="Trimiteți lista de produse și cantitățile sau sunați-ne. Verificăm stocul și confirmăm termenul de livrare." />
    </>
  );
}

/* ---------- CONTACT ---------- */

export function V2Contact() {
  const rows = [
    { icon: Phone, label: "Telefon secundar", lines: [contact.phoneSecondaryDisplay], href: `tel:${contact.phoneSecondary}` },
    { icon: Envelope, label: "E-mail", lines: [contact.email, contact.emailOffers], href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Sediu, balastieră, stație de betoane", lines: [contact.addressLine], href: contact.location.mapsUrl },
    { icon: Clock, label: "Program", lines: [...contact.hours.map((h) => `${h.days}: ${h.hours}`), contact.dispatchNote] },
  ];
  return (
    <>
      <section className="bg-asphalt-950 text-white">
        <Wrap className="py-14 lg:py-20">
          <p className="anim-rise inline-flex bg-brand px-3 py-1.5 font-v2-display text-[15px] font-bold uppercase tracking-wider">Contact</p>
          <h1 className="v2-display anim-rise mt-6 font-v2-display text-5xl sm:text-6xl lg:text-7xl [animation-delay:150ms]">Sunați. Comandați. Livrăm.</h1>
          <a href={`tel:${contact.phone}`} className="v2-display anim-rise mt-6 block font-v2-display text-5xl text-brand-soft sm:text-7xl [animation-delay:300ms]">
            {contact.phoneDisplay}
          </a>
          <p className="anim-rise mt-2 text-[15px] text-concrete-300 [animation-delay:400ms]">{contact.hoursSummary}</p>
        </Wrap>
        <Hazard />
      </section>
      <section className="py-16 lg:py-24">
        <Wrap className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="grid gap-px bg-asphalt-950">
              {rows.map((item) => (
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
            <Reveal delay={150} className="mt-6 aspect-[16/10] overflow-hidden border-2 border-asphalt-950">
              <iframe title="Harta cu locația Tomi Alex SRL" src={contact.location.embedUrl} className="size-full grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
          </div>
          <div className="grid gap-8 lg:col-span-7">
            <Reveal>
              <V2QuickOrder className="border-2 border-asphalt-950" />
            </Reveal>
            <Reveal delay={100}>
              <V2ContactForm />
            </Reveal>
          </div>
        </Wrap>
        <Wrap className="mt-16">
          <Reveal>
            <Kicker>Întrebări frecvente</Kicker>
          </Reveal>
          <div className="mt-6 divide-y-2 divide-concrete-100 border-y-2 border-concrete-100">
            {faq.map((f) => (
              <Reveal as="details" key={f.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-v2-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center bg-asphalt-950 text-white transition group-open:rotate-45 group-open:bg-brand">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-concrete-500">{f.answer}</p>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
