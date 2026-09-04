import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Handshake, Leaf, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { MapEmbed, contactGroups } from "@/components/shared/ContactBlocks";
import {
  aggregates,
  capacities,
  commitments,
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

const commitmentIcons = [Leaf, Scales, ShieldCheck, Handshake];

/* ---------- primitive V3 ---------- */

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 sm:px-10", className)}>{children}</div>;
}

function Eyebrow({ children, index }: { children: string; index?: string }) {
  return (
    <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">
      {index && <span className="font-v3-display text-[12px] font-semibold text-brand-soft">{index}</span>}
      <span className="v3-rule w-10" aria-hidden />
      {children}
    </p>
  );
}

function Primary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex h-14 items-center gap-4 border border-limestone/40 px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone transition-all duration-500 hover:border-limestone">
      {children}
      <ArrowRight weight="regular" className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

function CallLink() {
  return (
    <a href={`tel:${contact.phone}`} className="inline-flex h-14 items-center gap-3 border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-brand-soft">
      Sună: {contact.phoneDisplay}
    </a>
  );
}

function PageHero({ kicker, title, accent, lead, image }: { kicker: string; title: string; accent: string; lead: string; image: SiteImage }) {
  return (
    <section className="v3-granite relative isolate overflow-hidden border-b border-brand/20">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block">
        <Image src={image.src} alt={image.alt} fill priority sizes="42vw" className="anim-settle object-cover opacity-60" style={{ objectPosition: image.position }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#141416_0%,rgba(20,20,22,0.35)_45%,rgba(20,20,22,0.15)_100%)]" />
      </div>
      <Container className="py-20 lg:py-28">
        <p className="anim-rise text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">{kicker}</p>
        <h1 className="v3-display balance anim-rise mt-8 max-w-4xl font-v3-display text-4xl text-limestone sm:text-6xl lg:text-7xl [animation-delay:150ms]">
          {title} <span className="text-brand-soft">{accent}</span>
        </h1>
        <p className="anim-rise mt-8 max-w-2xl text-[16.5px] leading-relaxed text-granite-300 [animation-delay:300ms]">{lead}</p>
        <div className="anim-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:450ms]">
          <CallLink />
          <Primary href={pageHref("v3", "contact")}>Date de contact</Primary>
        </div>
      </Container>
    </section>
  );
}

function Cta({ title, accent, text }: { title: string; accent: string; text: string }) {
  return (
    <section className="v3-granite border-y border-brand/20 py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="v3-display font-v3-display text-4xl text-limestone sm:text-5xl">
              {title} <span className="text-brand-soft">{accent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-granite-300">{text}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CallLink />
            <Primary href={pageHref("v3", "contact")}>Date de contact</Primary>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const grid = "grid gap-px border border-brand/25 bg-brand/25";

/* ---------- ACASĂ ---------- */

export function V3Home() {
  const slugs = ["agregate", "beton", "prefabricate"];
  return (
    <>
      <section className="v3-granite relative isolate min-h-[88vh] overflow-hidden">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block">
          <Image src={images.infrastructura.bridge.src} alt={images.infrastructura.bridge.alt} fill priority sizes="42vw" className="anim-settle object-cover opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#141416_0%,rgba(20,20,22,0.35)_40%,rgba(20,20,22,0.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,#141416,transparent)]" />
        </div>
        <Container className="flex min-h-[88vh] flex-col justify-between pb-16 pt-24 lg:pt-32">
          <div>
            <p className="anim-rise text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">Partener de infrastructură · Satu Mare · din {company.established}</p>
            <h1 className="v3-display mt-10 font-v3-display text-[3.4rem] text-limestone sm:text-[5.5rem] lg:text-[7.5rem]">
              {company.taglineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <span className={cn("anim-letter-up block", i === 1 && "text-brand-soft")} style={{ animationDelay: `${200 + i * 140}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <p className="anim-rise max-w-lg text-[17px] leading-relaxed text-granite-300 [animation-delay:800ms] lg:col-span-6">
                {company.claim} {company.heroSubtitle}
              </p>
              <div className="anim-rise flex flex-wrap items-center gap-4 [animation-delay:950ms] lg:col-span-5 lg:col-start-8">
                <CallLink />
                <Primary href={pageHref("v3", "contact")}>Date de contact</Primary>
              </div>
            </div>
          </div>
          <dl className={cn("anim-rise mt-20 grid-cols-2 lg:grid-cols-4 [animation-delay:1100ms]", grid)}>
            {company.stats.map((s) => (
              <div key={s.label} className="bg-anthracite-900/90 p-6 backdrop-blur">
                <dd className="v3-display font-v3-display text-4xl text-limestone sm:text-5xl">{s.value}</dd>
                <dt className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-granite-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="01">Ce producem</Eyebrow>
          </Reveal>
          <Reveal className="mt-10 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">
              Agregate, beton și prefabricate <span className="text-brand-soft">din unitățile proprii</span>.
            </h2>
          </Reveal>
          <div className="mt-16">
            {directions.slice(0, 3).map((d, i) => (
              <Reveal key={d.slug} delay={i * 80} className="group grid gap-8 border-t border-brand/20 py-12 lg:grid-cols-12 lg:items-center">
                <span className="font-v3-display text-[12px] font-semibold text-brand-soft lg:col-span-1">{d.index}</span>
                <div className="lg:col-span-4">
                  <Link href={pageHref("v3", slugs[i])} className="v3-display font-v3-display text-4xl text-limestone transition-colors duration-500 group-hover:text-brand-soft sm:text-5xl">
                    {d.title}
                  </Link>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">{d.kicker}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[15.5px] leading-relaxed text-granite-300">{d.description}</p>
                  <Link href={pageHref("v3", slugs[i])} className="v3-link mt-5 inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone">
                    Vezi {d.title.toLowerCase()}
                    <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
                  </Link>
                </div>
                <Link href={pageHref("v3", slugs[i])} className="v3-frame relative aspect-[4/3] overflow-hidden lg:col-span-3">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105" />
                </Link>
              </Reveal>
            ))}
            <Reveal variant="line" className="h-px w-full bg-brand/20" />
          </div>
        </Container>
      </section>

      <section className="v3-granite border-y border-brand/20 py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="02">Compania</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">
                Materiale și execuție <span className="text-brand-soft">din aceeași sursă</span>, sub o singură responsabilitate.
              </h2>
            </Reveal>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <Reveal delay={150}>
                <p className="text-[16px] leading-relaxed text-limestone">{company.description}</p>
                <p className="mt-6 text-[15px] leading-relaxed text-granite-300">{company.descriptionSecondary}</p>
              </Reveal>
            </div>
          </div>
          <div className="mt-20 grid gap-16 lg:grid-cols-12">
            <Reveal variant="clip" className="v3-frame relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image src={images.company.src} alt={images.company.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="scroll-zoom object-cover" />
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              {company.story.map((p, i) => (
                <Reveal key={p.slice(0, 20)} delay={i * 120} className={cn("text-[16px] leading-[1.8] text-granite-300", i > 0 && "mt-8")}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={400} className="mt-12 border-l border-brand pl-8">
                <p className="v3-display font-v3-display text-2xl text-limestone sm:text-3xl">{company.mission}</p>
              </Reveal>
            </div>
          </div>
          <dl className={cn("mt-20 sm:grid-cols-2 lg:grid-cols-4", grid)}>
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="bg-anthracite-950 p-7">
                <dt className="flex items-baseline gap-4 font-v3-display text-xl font-semibold text-limestone">
                  <span className="text-[12px] text-brand-soft">0{i + 1}</span>
                  {v.title}
                </dt>
                <dd className="mt-3 text-[14.5px] leading-relaxed text-granite-300">{v.description}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-28 lg:py-36">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <Eyebrow index="03">Lucrări de infrastructură</Eyebrow>
              <h2 className="v3-display mt-8 font-v3-display text-4xl text-limestone sm:text-5xl">Executăm cu echipe și utilaje proprii.</h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-granite-300">{directions[3].description}</p>
              <div className="v3-frame relative mt-10 hidden aspect-[3/4] overflow-hidden lg:block">
                <Image src={images.infrastructura.excavatorPipes.src} alt={images.infrastructura.excavatorPipes.alt} fill sizes="30vw" className="scroll-zoom object-cover" />
              </div>
            </Reveal>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {infrastructureServices.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60} className="border-t border-brand/20 py-8 first:border-t-0 first:pt-0">
                <div className="flex items-baseline gap-5">
                  <span className="font-v3-display text-[12px] font-semibold text-brand-soft">{s.index}</span>
                  <h3 className="v3-display font-v3-display text-2xl text-limestone sm:text-3xl">{s.title}</h3>
                </div>
                <p className="mt-4 pl-9 text-[15px] leading-relaxed text-granite-300">{s.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="v3-granite border-y border-brand/20 py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="04">Capacitate și conformitate</Eyebrow>
          </Reveal>
          <div className={cn("mt-12 sm:grid-cols-2 lg:grid-cols-4", grid)}>
            {capacities.map((c, i) => (
              <Reveal key={c.label} delay={i * 90} className="bg-anthracite-900 p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">{c.label}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="v3-display font-v3-display text-5xl text-limestone">{c.value}</span>
                  <span className="text-[13px] text-granite-300">{c.unit}</span>
                </p>
                <p className="mt-5 text-[13.5px] leading-relaxed text-granite-500">{c.note}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            <div className={cn("sm:grid-cols-2 lg:col-span-7", grid)}>
              {commitments.map((c, i) => {
                const Icon = commitmentIcons[i];
                return (
                  <Reveal key={c.title} delay={i * 90} className="bg-anthracite-950 p-8">
                    <Icon weight="regular" className="size-7 text-brand-soft" aria-hidden />
                    <h3 className="mt-6 font-v3-display text-xl font-semibold text-limestone">{c.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-granite-300">{c.description}</p>
                  </Reveal>
                );
              })}
            </div>
            <div className="grid gap-10 lg:col-span-5">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 100} className="border-t border-brand/30 pt-6">
                  <p className="v3-display font-v3-display text-xl leading-snug text-limestone">„{t.quote}”</p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-soft">{t.author}</p>
                  <p className="mt-1 text-[13px] text-granite-500">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="05">Mod de lucru</Eyebrow>
          </Reveal>
          <ol className={cn("mt-10 md:grid-cols-2 lg:grid-cols-4", grid)}>
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="bg-anthracite-950 p-8">
                <span className="v3-display font-v3-display text-5xl text-brand">{s.index}</span>
                <h3 className="mt-8 font-v3-display text-xl font-semibold text-limestone">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-granite-300">{s.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
      <Cta title="Să discutăm" accent="proiectul." text="Sunați-ne sau scrieți-ne pe e-mail. Răspundem în aceeași zi lucrătoare pentru materiale; pentru lucrări, după vizita în teren." />
    </>
  );
}

/* ---------- AGREGATE ---------- */

export function V3Agregate() {
  return (
    <>
      <PageHero kicker="Balastieră proprie" title="Nisip, balast, sort 4–8, sort 8–16," accent="din exploatarea proprie." lead="Sortate și spălate în stația proprie, verificate granulometric în laborator, livrate cu flota noastră de autobasculante. De la o mașină până la volume de șantier." image={images.agregate.cover} />
      <section className="py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="01">Produse</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {aggregates.map((a, i) => (
              <Reveal key={a.name} delay={i * 80} className="group">
                <div className="v3-frame relative aspect-[4/5] overflow-hidden">
                  <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-85 transition duration-[1.4s] ease-out-expo group-hover:scale-105 group-hover:opacity-100" style={{ objectPosition: a.image.position }} />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="v3-display font-v3-display text-3xl text-limestone">{a.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-brand-soft">{a.granulometry}</span>
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-granite-300">{a.summary}</p>
                <p className="mt-3 text-[12.5px] text-limestone/70">{a.usage.join(" · ")}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="v3-granite border-y border-brand/20 py-28 lg:py-36">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="02">Livrare și comandă</Eyebrow>
            <h2 className="v3-display mt-8 font-v3-display text-4xl text-limestone sm:text-5xl">Cu flota proprie, la ritmul șantierului.</h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {[
              "18 autobasculante proprii de 24–40 t, programate centralizat din dispecerat.",
              contact.dispatchNote,
              "Buletin de laborator și certificat de calitate la fiecare transport.",
              `Livrăm în ${company.serviceAreas.join(", ")}; pentru alte zone, la cerere.`,
            ].map((t, i) => (
              <Reveal key={t} delay={i * 80} className="flex items-baseline gap-5 border-t border-brand/20 py-5 text-[15.5px] leading-relaxed text-granite-300">
                <span className="font-v3-display text-[12px] font-semibold text-brand-soft">0{i + 1}</span>
                {t}
              </Reveal>
            ))}
            <Reveal variant="line" className="h-px w-full bg-brand/20" />
          </div>
        </Container>
      </section>
      <Cta title="Comandați" accent="agregate." text="Spuneți-ne sortul, cantitatea și localitatea. Confirmăm telefonic prețul și intervalul de livrare." />
    </>
  );
}

/* ---------- STAȚIE BETOANE ---------- */

export function V3Beton() {
  return (
    <>
      <PageHero kicker="Stație de betoane proprie" title="Beton de orice clasă," accent="certificat la fiecare transport." lead="Stația automatizată produce orice clasă de beton, de la C8/10 la C35/45, după rețete verificate în laboratorul propriu, conform SR EN 206 și NE 012. Autobetoniere de 8–10 mc și pompe de beton de 28–36 m." image={images.beton.pouring} />
      <section className="py-28 lg:py-36">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01">Clase</Eyebrow>
            <h2 className="v3-display mt-8 font-v3-display text-3xl text-limestone">Orice clasă cerută de proiect.</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-granite-300">Pentru rețete speciale (beton rutier, hidrotehnic, cu aditivi de iarnă) stabilim rețeta împreună cu proiectantul.</p>
            <div className="v3-frame relative mt-8 aspect-[4/5] overflow-hidden">
              <Image src={images.beton.finishing.src} alt={images.beton.finishing.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="scroll-zoom object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-8 lg:col-start-5">
            {concreteClasses.map((c, i) => (
              <Reveal key={c.name} delay={i * 50} className="grid items-baseline gap-2 border-t border-brand/20 py-6 sm:grid-cols-12 sm:gap-6">
                <span className="font-v3-display text-xl font-semibold text-limestone sm:col-span-3">{c.name}</span>
                <span className="text-[14.5px] leading-relaxed text-granite-300 sm:col-span-6">{c.usage}</span>
                <span className="text-[12px] uppercase tracking-[0.18em] text-brand-soft sm:col-span-3 sm:text-right">{c.exposure}</span>
              </Reveal>
            ))}
            <Reveal variant="line" className="h-px w-full bg-brand/20" />
          </div>
        </Container>
      </section>
      <section className="v3-granite border-y border-brand/20 py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="02">Aplicații</Eyebrow>
          </Reveal>
          <dl className={cn("mt-10 sm:grid-cols-2 lg:grid-cols-3", grid)}>
            {concreteApplications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="bg-anthracite-950 p-7">
                <dt className="font-v3-display text-xl font-semibold text-limestone">{a.title}</dt>
                <dd className="mt-3 text-[14.5px] leading-relaxed text-granite-300">{a.description}</dd>
              </Reveal>
            ))}
          </dl>
          <div className={cn("mt-10 sm:grid-cols-2", grid)}>
            {[capacities[1], capacities[3]].map((c) => (
              <Reveal key={c.label} className="bg-anthracite-900 p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">{c.label}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="v3-display font-v3-display text-5xl text-limestone">{c.value}</span>
                  <span className="text-[13px] text-granite-300">{c.unit}</span>
                </p>
                <p className="mt-5 text-[13.5px] leading-relaxed text-granite-500">{c.note}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <Cta title="Programați" accent="o livrare de beton." text="Clasa, cantitatea, amplasamentul și ora dorită. Confirmăm telefonic în aceeași zi." />
    </>
  );
}

/* ---------- PREFABRICATE ---------- */

export function V3Prefabricate() {
  return (
    <>
      <PageHero kicker="Linie proprie de prefabricate" title="Prefabricate din beton," accent="gata de montaj." lead="Produse în tipare metalice cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale, producție pe comandă după proiect, livrare și descărcare la șantier." image={images.prefabricate.forms} />
      <section className="py-28 lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow index="01">Produse</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
            {prefabProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="group">
                <div className="v3-frame relative aspect-[4/5] overflow-hidden">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-85 transition duration-[1.4s] ease-out-expo group-hover:scale-105 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-v3-display text-lg font-semibold text-limestone">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-granite-300">{p.summary}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-brand-soft">{p.dimensions}</p>
                <p className="mt-1 text-[12.5px] text-granite-500">{p.usage}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 border-l border-brand pl-8">
            <p className="text-[15.5px] leading-relaxed text-granite-300">Toate prefabricatele sunt produse din beton C30/37 sau C35/45, vibrat mecanic, cu armătură conform proiectului. Pentru elemente speciale producem după planșele beneficiarului, cu termen de 10–15 zile lucrătoare.</p>
          </Reveal>
        </Container>
      </section>
      <Cta title="Aveți nevoie" accent="de prefabricate?" text="Trimiteți lista de produse și cantitățile sau sunați-ne. Verificăm stocul și confirmăm termenul de livrare." />
    </>
  );
}

/* ---------- CONTACT ---------- */

export function V3Contact() {
  return (
    <>
      <section className="v3-granite border-b border-brand/20">
        <Container className="py-20 lg:py-28">
          <p className="anim-rise text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">Contact</p>
          <h1 className="v3-display anim-rise mt-8 font-v3-display text-5xl text-limestone sm:text-6xl lg:text-7xl [animation-delay:150ms]">
            Să discutăm <span className="text-brand-soft">proiectul</span>.
          </h1>
          <div className="anim-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:300ms]">
            <a href={`tel:${contact.phone}`} className="inline-flex h-16 items-center gap-3 border border-brand bg-brand px-8 font-v3-display text-2xl font-semibold text-white transition-all duration-500 hover:bg-brand-soft">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="v3-link text-[12px] font-medium uppercase tracking-[0.22em] text-limestone">
              {contact.email}
            </a>
          </div>
        </Container>
      </section>
      <section className="py-24 lg:py-32">
        <Container>
          <dl className={cn("md:grid-cols-2 xl:grid-cols-4", grid)}>
            {contactGroups.map((g) => (
              <Reveal key={g.key} className="bg-anthracite-950 p-7">
                <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">{g.label}</dt>
                {g.lines.map((l) => (
                  <dd key={l.text} className={cn("mt-2 text-[14.5px] leading-relaxed", "strong" in l && l.strong ? "font-v3-display text-xl font-semibold text-limestone" : "text-granite-300")}>
                    {"href" in l && l.href ? (
                      <a href={l.href} className="v3-link">
                        {l.text}
                      </a>
                    ) : (
                      l.text
                    )}
                  </dd>
                ))}
              </Reveal>
            ))}
          </dl>
        </Container>
        <Container className="mt-20">
          <Reveal>
            <Eyebrow index="02">Unde ne găsiți</Eyebrow>
            <h2 className="v3-display mt-6 font-v3-display text-3xl text-limestone sm:text-4xl">{contact.addressLine}</h2>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <MapEmbed frameClassName="v3-frame aspect-[16/9] overflow-hidden sm:aspect-[21/9] [&_iframe]:grayscale [&_iframe]:invert-[0.92] [&_iframe]:contrast-[0.85]" buttonClassName="mt-5 inline-flex h-14 items-center gap-3 border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-brand-soft" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
