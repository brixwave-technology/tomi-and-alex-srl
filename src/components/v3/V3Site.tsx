import Image from "next/image";
import { ArrowRight, ArrowUpRight, Handshake, Leaf, Scales, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { V3Header } from "./V3Header";
import { V3ContactForm } from "./V3ContactForm";
import { v3Nav } from "./nav";
import {
  aggregates,
  capacities,
  commitments,
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

const commitmentIcons = [Leaf, Scales, ShieldCheck, Handshake];

function Eyebrow({ children, index, className }: { children: string; index?: string; className?: string }) {
  return (
    <p className={cn("flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300", className)}>
      {index && <span className="font-v3-display text-[12px] font-semibold text-brand-soft">{index}</span>}
      <span className="v3-rule w-10" aria-hidden />
      {children}
    </p>
  );
}

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 sm:px-10", className)}>{children}</div>;
}

export function V3Site() {
  return (
    <div id="top" className="relative bg-anthracite-950 text-limestone">
      <V3Header />

      {/* ---------------- HERO ---------------- */}
      <section className="v3-granite relative isolate min-h-dvh overflow-hidden">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block">
          <Image src={images.infrastructura.bridge.src} alt={images.infrastructura.bridge.alt} fill priority sizes="42vw" className="anim-settle object-cover opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#141416_0%,rgba(20,20,22,0.35)_40%,rgba(20,20,22,0.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,#141416,transparent)]" />
        </div>
        <Container className="flex min-h-dvh flex-col justify-between pb-16 pt-36 lg:pt-44">
          <div>
            <p className="anim-rise text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">
              Partener de infrastructură · Satu Mare · din {company.established}
            </p>
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
              <div className="anim-rise flex flex-wrap items-center gap-6 [animation-delay:950ms] lg:col-span-5 lg:col-start-8">
                <a href="#contact" className="group inline-flex h-14 items-center gap-4 border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-anthracite-950 transition-all duration-500 hover:bg-brand-soft">
                  Solicitați o ofertă
                  <ArrowRight weight="regular" className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
                </a>
                <a href="#capacitate" className="v3-link text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone">
                  Capacitate de producție
                </a>
              </div>
            </div>
          </div>
          <dl className="anim-rise mt-20 grid grid-cols-2 gap-px border border-brand/25 bg-brand/25 lg:grid-cols-4 [animation-delay:1100ms]">
            {company.stats.map((s) => (
              <div key={s.label} className="bg-anthracite-900/90 p-6 backdrop-blur">
                <dd className="v3-display font-v3-display text-4xl text-limestone sm:text-5xl">{s.value}</dd>
                <dt className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-granite-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------- COMPANIA ---------------- */}
      <section id="compania" className="scroll-mt-24 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="01">Compania</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">
                Materiale și execuție <span className="text-brand-soft">din aceeași sursă</span>, sub o singură responsabilitate contractuală.
              </h2>
            </Reveal>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <Reveal delay={150}>
                <p className="text-[16.5px] leading-relaxed text-limestone">{company.description}</p>
                <p className="mt-6 text-[15px] leading-relaxed text-granite-300">{company.descriptionSecondary}</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-12">
            <Reveal variant="clip" className="v3-frame relative aspect-[4/5] overflow-hidden lg:col-span-5">
              <Image src={images.company.src} alt={images.company.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="scroll-zoom object-cover" />
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              {company.story.map((p, i) => (
                <Reveal key={p.slice(0, 20)} delay={i * 120} className={cn("text-[16px] leading-[1.8] text-granite-300", i > 0 && "mt-8")}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={400} className="mt-14 border-l border-brand pl-8">
                <p className="v3-display font-v3-display text-2xl text-limestone sm:text-3xl">{company.mission}</p>
              </Reveal>
              <Reveal delay={450} className="mt-14">
                <Eyebrow>Repere</Eyebrow>
                <ol className="mt-6 grid gap-0 divide-y divide-brand/20 border-y border-brand/20 sm:grid-cols-2 sm:divide-y-0 sm:gap-x-10">
                  {milestones.map((m) => (
                    <li key={m.year} className="grid grid-cols-[56px_1fr] gap-4 py-4 sm:border-b sm:border-brand/20">
                      <span className="font-v3-display text-[13px] font-semibold text-brand-soft">{m.year}</span>
                      <div>
                        <p className="text-[14.5px] font-medium text-limestone">{m.title}</p>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-granite-500">{m.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>

          <div className="mt-28 grid gap-x-16 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Principii</Eyebrow>
              <h3 className="v3-display mt-8 font-v3-display text-4xl text-limestone sm:text-5xl">Ce nu negociem.</h3>
            </Reveal>
            <dl className="grid gap-px border border-brand/25 bg-brand/25 sm:grid-cols-2 lg:col-span-8">
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
          </div>
        </Container>
      </section>

      {/* ---------------- CAPACITATE ---------------- */}
      <section id="capacitate" className="v3-granite scroll-mt-24 border-y border-brand/20 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="02">Capacitate de producție</Eyebrow>
          </Reveal>
          <Reveal className="mt-12 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">
              Dimensionați pentru <span className="text-brand-soft">proiecte mari</span> de infrastructură.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-brand/25 bg-brand/25 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mt-20 grid gap-8 lg:grid-cols-12">
            {directions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80} className={cn("v3-frame group relative flex min-h-[320px] flex-col justify-end overflow-hidden", i < 2 ? "lg:col-span-6" : "lg:col-span-6")}>
                <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-50 transition duration-[1.4s] ease-out-expo group-hover:scale-105 group-hover:opacity-65" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,13,0.1),rgba(12,12,13,0.92))]" />
                <div className="relative p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-soft">
                    {d.index} · {d.kicker}
                  </p>
                  <h3 className="v3-display mt-3 font-v3-display text-3xl text-limestone sm:text-4xl">{d.title}</h3>
                  <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-granite-300">{d.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-limestone/80">
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- SERVICII ---------------- */}
      <section id="servicii" className="scroll-mt-24 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="03">Servicii de infrastructură</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal className="lg:sticky lg:top-32">
                <h2 className="v3-display font-v3-display text-4xl text-limestone sm:text-5xl">Ce executăm, în detaliu.</h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-granite-300">Fiecare lucrare are un responsabil de proiect, un grafic de execuție și documentația completă de calitate pentru recepție.</p>
                <div className="v3-frame relative mt-10 hidden aspect-[3/4] overflow-hidden lg:block">
                  <Image src={images.infrastructura.excavatorPipes.src} alt={images.infrastructura.excavatorPipes.alt} fill sizes="30vw" className="scroll-zoom object-cover" />
                </div>
              </Reveal>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {infrastructureServices.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 60} className="border-t border-brand/20 py-10 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-5">
                    <span className="font-v3-display text-[12px] font-semibold text-brand-soft">{s.index}</span>
                    <h3 className="v3-display font-v3-display text-2xl text-limestone sm:text-3xl">{s.title}</h3>
                  </div>
                  <p className="mt-4 pl-9 text-[15px] leading-relaxed text-granite-300">{s.description}</p>
                  <ul className="mt-4 grid gap-1.5 pl-9 text-[13.5px] text-limestone/80 sm:grid-cols-2">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-baseline gap-2">
                        <span className="size-1 shrink-0 bg-brand" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-28">
            <Reveal>
              <Eyebrow>Mod de lucru</Eyebrow>
            </Reveal>
            <ol className="mt-10 grid gap-px border border-brand/25 bg-brand/25 md:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 100} className="bg-anthracite-950 p-8">
                  <span className="v3-display font-v3-display text-5xl text-brand">{s.index}</span>
                  <h3 className="mt-8 font-v3-display text-xl font-semibold text-limestone">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-granite-300">{s.description}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ---------------- MATERIALE ---------------- */}
      <section id="materiale" className="scroll-mt-24 border-y border-brand/20 bg-anthracite-900 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="04">Materiale</Eyebrow>
          </Reveal>
          <Reveal className="mt-12 max-w-4xl">
            <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">
              Agregate, beton și prefabricate <span className="text-brand-soft">din unitățile proprii</span>.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <h3 className="v3-display font-v3-display text-3xl text-limestone">Agregate</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-granite-300">Sortate și spălate în stație proprie, verificate în laborator, livrate cu flota noastră.</p>
            </Reveal>
            <div className="lg:col-span-9">
              {aggregates.map((a, i) => (
                <Reveal key={a.name} delay={i * 60} className="grid items-baseline gap-2 border-t border-brand/20 py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-v3-display text-xl font-semibold text-limestone sm:col-span-3">{a.name}</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-brand-soft sm:col-span-2">{a.granulometry}</span>
                  <span className="text-[14.5px] leading-relaxed text-granite-300 sm:col-span-4">{a.summary}</span>
                  <span className="text-[12.5px] text-limestone/70 sm:col-span-3">{a.usage.join(" · ")}</span>
                </Reveal>
              ))}
              <Reveal variant="line" className="h-px w-full bg-brand/20" />
            </div>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <h3 className="v3-display font-v3-display text-3xl text-limestone">Beton</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-granite-300">Orice clasă, după rețete certificate SR EN 206, cu buletin de laborator la fiecare transport.</p>
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
          </div>

          <div className="mt-24">
            <Reveal className="grid gap-6 lg:grid-cols-12">
              <h3 className="v3-display font-v3-display text-3xl text-limestone lg:col-span-3">Prefabricate</h3>
              <p className="max-w-lg text-[14.5px] leading-relaxed text-granite-300 lg:col-span-6">Beton vibrat din stația proprie, tipare metalice, stoc permanent pentru dimensiunile uzuale și producție pe comandă după proiect.</p>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {prefabProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 80} className="group">
                  <div className="v3-frame relative aspect-[4/5] overflow-hidden">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-80 transition duration-[1.4s] ease-out-expo group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <h4 className="mt-5 font-v3-display text-lg font-semibold text-limestone">{p.name}</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-granite-300">{p.summary}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-brand-soft">{p.dimensions}</p>
                  <p className="mt-1 text-[12.5px] text-granite-500">{p.usage}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- CONFORMITATE ---------------- */}
      <section id="conformitate" className="scroll-mt-24 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="05">Conformitate și parteneriat</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="v3-display balance font-v3-display text-4xl text-limestone sm:text-5xl">
                Excelență în afaceri și <span className="text-brand-soft">conformitate ecologică</span>.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-granite-300">Contractorii mari lucrează cu parteneri verificabili. Prezentăm mai jos angajamentele pe care le susținem cu documente la fiecare licitație și recepție.</p>
              <ul className="mt-10 grid gap-3">
                {company.certifications.map((c) => (
                  <li key={c} className="flex items-start gap-3 border-b border-brand/20 pb-3 text-[14.5px] text-limestone/85">
                    <ShieldCheck weight="regular" className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid gap-px border border-brand/25 bg-brand/25 sm:grid-cols-2 lg:col-span-7">
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
          </div>

          <div className="mt-28 grid gap-12 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100} className="border-t border-brand/30 pt-8">
                <p className="v3-display font-v3-display text-xl leading-snug text-limestone sm:text-2xl">„{t.quote}”</p>
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-soft">{t.author}</p>
                <p className="mt-1 text-[13px] text-granite-500">{t.role}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-28 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Întrebări frecvente</Eyebrow>
              <h3 className="v3-display mt-8 font-v3-display text-3xl text-limestone sm:text-4xl">Răspunsuri înainte de a ne contacta.</h3>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              {faq.map((f, i) => (
                <Reveal as="details" key={f.question} delay={i * 60} className="group border-t border-brand/20 py-6 last:border-b">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 font-v3-display text-lg font-semibold text-limestone transition-colors group-open:text-brand-soft [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-granite-300 group-open:hidden">Deschide</span>
                    <span className="hidden shrink-0 text-[11px] uppercase tracking-[0.22em] text-granite-300 group-open:inline">Închide</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-granite-300">{f.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="v3-granite scroll-mt-24 border-y border-brand/20 py-28 lg:py-40">
        <Container>
          <Reveal>
            <Eyebrow index="06">Contact</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="v3-display font-v3-display text-4xl text-limestone sm:text-5xl lg:text-6xl">Să discutăm proiectul.</h2>
                <p className="mt-8 max-w-md text-[15.5px] leading-relaxed text-granite-300">Răspundem în aceeași zi lucrătoare pentru materiale și în maximum 5 zile lucrătoare pentru lucrări, după vizita în teren.</p>
              </Reveal>
              <Reveal delay={120} className="mt-14 grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Telefon</p>
                  <a href={`tel:${contact.phone}`} className="mt-3 block font-v3-display text-2xl font-semibold text-limestone">
                    {contact.phoneDisplay}
                  </a>
                  <a href={`tel:${contact.phoneSecondary}`} className="mt-1 block text-[14.5px] text-granite-300">
                    {contact.phoneSecondaryDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">E-mail</p>
                  <a href={`mailto:${contact.email}`} className="v3-link mt-3 block text-[15.5px] text-limestone">
                    {contact.email}
                  </a>
                  <a href={`mailto:${contact.emailOffers}`} className="v3-link mt-1 block text-[14.5px] text-granite-300">
                    {contact.emailOffers}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Adresă</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-limestone">{contact.addressLine}</p>
                  <a href={contact.location.mapsUrl} target="_blank" rel="noreferrer" className="v3-link mt-2 inline-flex items-center gap-1 text-[11.5px] uppercase tracking-[0.18em] text-brand-soft">
                    Google Maps
                    <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Program</p>
                  {contact.hours.map((h) => (
                    <p key={h.days} className="mt-3 flex justify-between gap-4 border-b border-brand/20 pb-2 text-[14px] text-limestone">
                      <span>{h.days}</span>
                      <span className="text-granite-300">{h.hours}</span>
                    </p>
                  ))}
                  <p className="mt-3 text-[12.5px] leading-relaxed text-granite-500">{contact.dispatchNote}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
              <V3ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- DECIZIE (portal) ---------------- */}
      <section className="py-28" aria-label="Alegerea acestui design">
        <Container>
          <Reveal className="border-y border-brand/25 py-16 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">Design V3 · Infrastructure Elite &amp; Premium Partner</p>
            <h2 className="v3-display balance mx-auto mt-8 max-w-3xl font-v3-display text-4xl text-limestone sm:text-5xl">
              Este aceasta <span className="text-brand-soft">direcția</span> pe care o alegeți?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-granite-300">Confirmați varianta preferată sau reveniți la Index pentru a compara cu Design V1 și Design V2. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ChooseDesignButton className="inline-flex h-14 items-center justify-center border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-anthracite-950 transition-all duration-500 hover:bg-brand-soft data-[chosen]:border-emerald-500 data-[chosen]:bg-emerald-500" />
              <BackToIndexLink className="inline-flex h-14 items-center justify-center border border-limestone/40 px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone transition-all duration-500 hover:border-limestone hover:bg-limestone hover:text-anthracite-950" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="pb-36 pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image src={logo.full.light} alt={company.name} width={logo.full.width} height={logo.full.height} className="h-20 w-auto" />
              <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-granite-300">{company.descriptionSecondary}</p>
              <a href={social.facebook} target="_blank" rel="noreferrer" className="v3-link mt-6 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-limestone">
                Facebook
                <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
              </a>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Navigare</p>
              <ul className="mt-5 grid gap-2 text-[14.5px] text-limestone">
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
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Contact</p>
              <ul className="mt-5 grid gap-2 text-[14.5px] text-limestone">
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
                <li className="text-granite-300">{contact.addressLine}</li>
                <li className="text-granite-300">{contact.hoursSummary}</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Juridic</p>
              <ul className="mt-5 grid gap-2 text-[13.5px] text-granite-300">
                <li>{legal.legalName}</li>
                <li>CUI {legal.cui}</li>
                <li>{legal.regCom}</li>
                <li>{legal.capital}</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-2 border-t border-brand/20 pt-6 text-[11px] uppercase tracking-[0.18em] text-granite-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {company.name}
            </p>
            <p>Website realizat de <BrixwaveLink>{brixwave.name}</BrixwaveLink></p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
