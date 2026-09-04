import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Lightning, Phone, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { V2Header } from "./V2Header";
import { v2Nav } from "./nav";
import { V2ContactForm } from "./V2ContactForm";
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

const marqueeItems = ["Agregate", "Beton", "Prefabricate", "Infrastructură", "Drumuri", "Poduri", "Apă și canalizare", "Terasamente"];
const stickerColors = ["bg-cyan", "bg-sun", "bg-pink", "bg-lime"];
const stickerRotations = ["-2deg", "1.5deg", "-1deg", "2.5deg"];

function Marquee({ className, reverse, children }: { className?: string; reverse?: boolean; children: React.ReactNode }) {
  return (
    <div className={cn("flex overflow-hidden", className)} aria-hidden>
      <div className={cn("flex shrink-0 items-center gap-8 pr-8", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {children}
        {children}
      </div>
    </div>
  );
}

function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 font-v2-display text-[11px] font-extrabold uppercase tracking-wider", className)}>
      {children}
    </span>
  );
}

export function V2Site() {
  return (
    <div id="top" className="relative overflow-x-clip bg-paper text-ink">
      <V2Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate min-h-dvh overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="absolute -left-24 top-24 -z-10 size-72 rounded-full bg-lime blur-2xl animate-float sm:size-96" aria-hidden />
        <div className="absolute -right-20 top-1/3 -z-10 size-64 rotate-12 rounded-[38%] bg-cyan/80 animate-float [animation-delay:-3s] [--float-rotate:12deg] sm:size-80" aria-hidden />
        <div className="absolute bottom-10 left-1/3 -z-10 size-40 rounded-[45%] bg-pink/80 animate-float [animation-delay:-5s]" aria-hidden />
        <div className="absolute inset-0 -z-20 grid-lines-dark opacity-60" aria-hidden />

        <div className="mx-auto w-full max-w-7xl">
          <p className="anim-pop inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-v2-display text-[12px] font-extrabold uppercase tracking-[0.2em] text-paper">
            <Lightning weight="fill" className="size-4 text-sun" aria-hidden />
            Satu Mare · din {company.established}
          </p>
          <h1 className="mt-8 font-v2-display text-[8.6vw] font-extrabold uppercase leading-[0.86] tracking-tight sm:text-[8.8vw] lg:text-[8.2vw] 2xl:text-[8.25rem]">
            <span className="anim-rise block [animation-delay:100ms]">Construim.</span>
            <span className="anim-rise ml-[8vw] block text-coral [animation-delay:250ms] lg:ml-24">Amenajăm.</span>
            <span className="anim-rise v2-outline block [animation-delay:400ms]">Dezvoltăm.</span>
          </h1>
        </div>
        <div className="mx-auto mt-10 grid w-full max-w-7xl gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="anim-rise max-w-xl text-lg leading-relaxed [animation-delay:600ms] sm:text-xl">
              <span className="v2-highlight font-bold">{company.claim}</span> {company.heroSubtitle}
            </p>
            <div className="anim-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:750ms]">
              <a href="#contact" className="v2-sticker inline-flex h-14 items-center gap-2 rounded-full bg-coral px-8 font-v2-display text-[15px] font-extrabold uppercase tracking-wider text-paper [--sticker-rotate:-2deg]">
                Cere o ofertă
                <ArrowRight weight="bold" className="size-5" aria-hidden />
              </a>
              <a href="#ce-facem" className="inline-flex h-14 items-center gap-2 px-2 font-v2-display text-[15px] font-extrabold uppercase tracking-wider underline decoration-4 decoration-lime underline-offset-8 hover:decoration-coral">
                Vezi ce facem
                <ArrowDown weight="bold" className="size-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Colaj asimetric */}
          <div className="relative min-h-[420px] lg:col-span-5 lg:-mt-16">
            <div className="anim-pop absolute left-0 top-0 w-[68%] rotate-[-4deg] overflow-hidden rounded-3xl border-3 border-ink hard-shadow [animation-delay:500ms] [--pop-rotate:-4deg]">
              <Image src={images.trucks.quarry.src} alt={images.trucks.quarry.alt} width={images.trucks.quarry.width} height={images.trucks.quarry.height} priority className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="anim-pop absolute bottom-6 right-0 w-[58%] rotate-[5deg] overflow-hidden rounded-3xl border-3 border-ink hard-shadow [animation-delay:700ms] [--pop-rotate:5deg]">
              <Image src={images.beton.pouring.src} alt={images.beton.pouring.alt} width={images.beton.pouring.width} height={images.beton.pouring.height} className="aspect-square w-full object-cover" />
            </div>
            <div className="anim-pop absolute -left-4 bottom-0 flex size-32 rotate-[-12deg] items-center justify-center rounded-full border-3 border-ink bg-sun text-center font-v2-display text-[13px] font-extrabold uppercase leading-tight hard-shadow-sm [animation-delay:900ms] [--pop-rotate:-12deg]">
              Ofertă
              <br />
              în 5 zile
            </div>
            <Star weight="fill" className="anim-pop absolute right-4 top-2 size-14 text-violet animate-spin-slow [animation-delay:800ms]" aria-hidden />
          </div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="rotate-[-1.5deg] border-y-3 border-ink bg-lime py-3 font-v2-display text-2xl font-extrabold uppercase tracking-wider sm:text-3xl">
        <Marquee>
          {marqueeItems.map((m) => (
            <span key={m} className="flex items-center gap-8">
              {m}
              <Asterisk weight="bold" className="size-6 text-coral" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---------------- POVESTEA ---------------- */}
      <section id="povestea" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12">
          <Reveal variant="slide" className="lg:col-span-5">
            <Tag className="bg-pink">Povestea</Tag>
            <p className="mt-6 font-v2-display text-[26vw] font-extrabold leading-none text-violet sm:text-[12rem] lg:text-[14rem]">{company.established}</p>
            <h2 className="-mt-4 font-v2-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Am pornit cu două utilaje și <span className="text-coral">o convingere.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:pt-16">
            {company.story.map((p, i) => (
              <Reveal key={p.slice(0, 20)} delay={i * 100} className={cn("max-w-xl text-[17px] leading-relaxed", i === 1 && "lg:ml-24", i === 2 && "lg:ml-12")}>
                <p className={cn(i > 0 && "mt-8")}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={300} className="mt-12 rotate-1 rounded-3xl border-3 border-ink bg-cyan p-7 hard-shadow lg:ml-8">
              <p className="font-v2-display text-xl font-extrabold uppercase leading-snug sm:text-2xl">{company.mission}</p>
            </Reveal>
          </div>
        </div>

        {/* Cifre în stickere */}
        <div className="mx-auto mt-20 grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.stats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 90} style={{ ["--reveal-rotate" as string]: stickerRotations[i] }} className={cn("v2-sticker rounded-3xl p-6", stickerColors[i])}>
              <p className="font-v2-display text-6xl font-extrabold leading-none">{s.value}</p>
              <p className="mt-3 font-v2-display text-[13px] font-extrabold uppercase tracking-wider">{s.label}</p>
              <p className="mt-1 text-[14px] leading-snug text-ink/70">{s.note}</p>
            </Reveal>
          ))}
        </div>

        {/* Valori */}
        <div className="mx-auto mt-20 grid w-full max-w-7xl gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Tag className="bg-lime">Cum gândim</Tag>
            <h3 className="mt-5 font-v2-display text-3xl font-extrabold uppercase leading-none sm:text-4xl">Patru reguli pe care nu le negociem.</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className={cn("rounded-2xl border-3 border-ink bg-paper p-6 transition hover:bg-sun", i % 2 === 1 && "sm:translate-y-8")}>
                <p className="font-v2-display text-5xl font-extrabold text-coral">0{i + 1}</p>
                <h4 className="mt-3 font-v2-display text-xl font-extrabold uppercase">{v.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CE FACEM ---------------- */}
      <section id="ce-facem" className="relative scroll-mt-24 bg-ink py-24 text-paper [clip-path:polygon(0_3vw,100%_0,100%_100%,0_100%)] lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Tag className="border-paper bg-violet text-paper">Ce facem</Tag>
              <h2 className="mt-6 font-v2-display text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl">
                Patru direcții.
                <br />
                <span className="text-lime">Un singur</span> responsabil.
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-paper/70">
              Balastiera, stația de betoane și linia de prefabricate alimentează direct șantierele noastre. Comandă materialele sau dă-ne toată lucrarea.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {directions.map((d, i) => (
              <Reveal
                key={d.slug}
                delay={i * 100}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border-3 border-paper/20 bg-paper/5 transition duration-500 hover:border-paper hover:bg-paper hover:text-ink",
                  i === 1 && "md:translate-y-12",
                  i === 2 && "md:-translate-y-6",
                )}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-quint group-hover:scale-110 group-hover:rotate-1" />
                  <span className={cn("absolute left-5 top-5 rotate-[-4deg] rounded-xl border-3 border-ink px-3 py-1.5 font-v2-display text-[13px] font-extrabold uppercase tracking-wider text-ink hard-shadow-sm", stickerColors[i])}>
                    {d.kicker}
                  </span>
                  <span className="absolute bottom-4 right-5 font-v2-display text-6xl font-extrabold text-paper/90 drop-shadow">{d.index}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-v2-display text-3xl font-extrabold uppercase">{d.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed opacity-80">{d.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.bullets.map((b) => (
                      <li key={b} className="rounded-full border-2 border-current px-3 py-1 text-[12.5px] font-bold">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-v2-display text-[14px] font-extrabold uppercase tracking-wider text-lime group-hover:text-coral">
                    Cere ofertă
                    <ArrowUpRight weight="bold" className="size-5 transition-transform group-hover:rotate-45" aria-hidden />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Infrastructură detaliat */}
          <div className="mt-28">
            <Reveal className="max-w-2xl">
              <Tag className="border-paper bg-coral text-paper">Lucrări de infrastructură</Tag>
              <h3 className="mt-6 font-v2-display text-4xl font-extrabold uppercase leading-[0.92] sm:text-5xl">Șase lucrări pe care le facem cap-coadă.</h3>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructureServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 70} className={cn("relative rounded-3xl border-3 p-6 transition hover:-translate-y-2", i % 3 === 0 ? "border-lime" : i % 3 === 1 ? "border-cyan" : "border-pink")}>
                  <span className={cn("absolute -top-4 left-6 rounded-full px-3 py-1 font-v2-display text-[12px] font-extrabold text-ink", i % 3 === 0 ? "bg-lime" : i % 3 === 1 ? "bg-cyan" : "bg-pink")}>{s.index}</span>
                  <h4 className="mt-2 font-v2-display text-xl font-extrabold uppercase leading-tight">{s.title}</h4>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-paper/70">{s.description}</p>
                  <ul className="mt-4 grid gap-1 text-[13.5px] text-paper/90">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Asterisk weight="bold" className="mt-1 size-3 shrink-0 text-sun" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MATERIALE ---------------- */}
      <section id="materiale" className="scroll-mt-24 py-24 lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <Tag className="bg-cyan">Materiale</Tag>
            <h2 className="mt-6 font-v2-display text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl">
              Din <span className="text-violet">balastiera</span> noastră direct pe șantierul tău.
            </h2>
          </Reveal>
        </div>

        {/* Agregate: rail orizontal */}
        <div className="mt-14">
          <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-5 sm:px-8">
            <h3 className="font-v2-display text-2xl font-extrabold uppercase">Agregate</h3>
            <p className="hidden text-[13px] font-bold uppercase tracking-wider text-ink/50 sm:block">Derulează →</p>
          </div>
          <div className="scrollbar-none mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {aggregates.map((a, i) => (
              <Reveal key={a.name} delay={i * 60} className={cn("v2-sticker w-[78vw] shrink-0 snap-start rounded-3xl p-5 sm:w-[340px]", stickerColors[i % 4])} style={{ ["--sticker-rotate" as string]: stickerRotations[i % 4] }}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-3 border-ink">
                  <Image src={a.image.src} alt={a.image.alt} fill sizes="340px" className="object-cover" style={{ objectPosition: a.image.position }} />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h4 className="font-v2-display text-2xl font-extrabold uppercase">{a.name}</h4>
                  <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[12px] font-bold text-paper">{a.granulometry}</span>
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed">{a.summary}</p>
                <p className="mt-3 text-[12.5px] font-bold uppercase tracking-wider text-ink/60">{a.usage.join(" · ")}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Beton: listă mare */}
        <div className="mx-auto mt-20 grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="font-v2-display text-2xl font-extrabold uppercase">Beton, orice clasă</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink/75">
              Rețete verificate în laboratorul propriu, conform SR EN 206. Autobetoniere de 8–10 mc și pompe de 28–36 m. Certificat de calitate la fiecare transport.
            </p>
            <div className="relative mt-6 rotate-[-2deg] overflow-hidden rounded-3xl border-3 border-ink hard-shadow">
              <Image src={images.beton.rebar.src} alt={images.beton.rebar.alt} width={images.beton.rebar.width} height={images.beton.rebar.height} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="divide-y-3 divide-ink border-y-3 border-ink">
              {concreteClasses.map((c, i) => (
                <Reveal as="li" key={c.name} delay={i * 50} className="group grid items-center gap-2 py-4 transition hover:bg-lime sm:grid-cols-12 sm:gap-4 sm:px-3">
                  <span className="font-v2-display text-3xl font-extrabold sm:col-span-3">{c.name}</span>
                  <span className="text-[15px] sm:col-span-6">{c.usage}</span>
                  <span className="font-mono text-[12.5px] font-bold text-ink/60 sm:col-span-3 sm:text-right">{c.exposure}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Prefabricate: grilă ruptă */}
        <div className="mx-auto mt-24 w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-v2-display text-2xl font-extrabold uppercase">Prefabricate gata de montaj</h3>
            <p className="max-w-md text-[14.5px] text-ink/70">Beton vibrat din stația proprie, tipare metalice, stoc permanent pentru dimensiunile uzuale.</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {prefabProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 70} className={cn("group overflow-hidden rounded-3xl border-3 border-ink bg-paper transition hover:bg-sun", i === 0 && "lg:col-span-3", i === 1 && "lg:col-span-3", i > 1 && "lg:col-span-2")}>
                <div className={cn("relative overflow-hidden border-b-3 border-ink", i < 2 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="font-v2-display text-xl font-extrabold uppercase">{p.name}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{p.summary}</p>
                  <p className="mt-3 font-mono text-[12px] font-bold">{p.dimensions}</p>
                  <p className="text-[12.5px] text-ink/60">{p.usage}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MARQUEE 2 ---------------- */}
      <div className="rotate-[1deg] border-y-3 border-ink bg-coral py-3 font-v2-display text-2xl font-extrabold uppercase tracking-wider text-paper sm:text-3xl">
        <Marquee reverse>
          {["Ofertă în 5 zile", "Livrare cu flotă proprie", "Laborator propriu", "ISO 9001 · 14001 · 45001", "Echipe proprii"].map((m) => (
            <span key={m} className="flex items-center gap-8">
              {m}
              <Star weight="fill" className="size-5 text-lime" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---------------- CUM LUCRĂM ---------------- */}
      <section id="cum-lucram" className="scroll-mt-24 bg-violet py-24 text-paper lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <Tag className="border-paper bg-lime text-ink">Cum lucrăm</Tag>
            <h2 className="mt-6 font-v2-display text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl">Patru pași. Zero surprize.</h2>
          </Reveal>
          <ol className="relative mt-16 grid gap-10 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-14 hidden border-t-3 border-dashed border-paper/40 lg:block" aria-hidden />
            {process.map((s, i) => (
              <Reveal as="li" key={s.title} variant="scale" delay={i * 120} className={cn("relative", i % 2 === 1 && "lg:translate-y-16")}>
                <span className={cn("relative z-10 inline-flex size-28 items-center justify-center rounded-full border-3 border-ink font-v2-display text-4xl font-extrabold text-ink hard-shadow", stickerColors[i])}>{s.index}</span>
                <h3 className="mt-6 font-v2-display text-2xl font-extrabold uppercase">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-paper/75">{s.description}</p>
              </Reveal>
            ))}
          </ol>

          {/* Referințe */}
          <div className="mt-28 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100} className={cn("rounded-3xl border-3 border-paper/30 bg-paper/10 p-7 backdrop-blur", i === 1 && "lg:-translate-y-6")}>
                <div className="flex gap-1 text-sun" aria-label="5 din 5 stele">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <Star key={k} weight="fill" className="size-4" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 text-[16.5px] leading-relaxed">„{t.quote}”</p>
                <p className="mt-5 font-v2-display text-[13px] font-extrabold uppercase tracking-wider text-lime">{t.author}</p>
                <p className="text-[13px] text-paper/60">{t.role}</p>
              </Reveal>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h3 className="font-v2-display text-3xl font-extrabold uppercase leading-none sm:text-4xl">Întrebări pe care le auzim des.</h3>
            </Reveal>
            <div className="lg:col-span-8">
              {faq.map((f, i) => (
                <Reveal as="details" key={f.question} delay={i * 60} className="group border-b-3 border-paper/30 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-v2-display text-lg font-extrabold uppercase [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/80">{f.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-36">
        <div className="absolute -right-32 top-10 size-96 rounded-full bg-cyan/60 blur-3xl" aria-hidden />
        <div className="absolute -left-32 bottom-10 size-96 rounded-full bg-lime/70 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Tag className="bg-sun">Contact</Tag>
              <h2 className="mt-6 font-v2-display text-5xl font-extrabold uppercase leading-[0.9] sm:text-7xl">
                Hai să <span className="text-coral">vorbim</span> despre șantierul tău.
              </h2>
              <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-ink/75">Cel mai rapid e telefonul. Dacă preferi scrisul, formularul ajunge direct la echipa de ofertare.</p>
            </Reveal>
            <Reveal delay={120} className="mt-10 grid gap-4">
              <a href={`tel:${contact.phone}`} className="v2-sticker flex items-center gap-4 rounded-2xl bg-ink p-5 text-paper [--sticker-rotate:-1deg]">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-lime text-ink">
                  <Phone weight="fill" className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-lime">Sună acum</span>
                  <span className="block font-v2-display text-2xl font-extrabold">{contact.phoneDisplay}</span>
                </span>
              </a>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border-3 border-ink bg-paper p-5">
                  <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-ink/60">E-mail</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 block font-bold hover:text-coral">
                    {contact.email}
                  </a>
                  <a href={`mailto:${contact.emailOffers}`} className="block font-bold hover:text-coral">
                    {contact.emailOffers}
                  </a>
                </div>
                <div className="rounded-2xl border-3 border-ink bg-paper p-5">
                  <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-ink/60">Program</p>
                  {contact.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-[14px]">
                      <strong>{h.days}:</strong> {h.hours}
                    </p>
                  ))}
                </div>
              </div>
              <a href={contact.location.mapsUrl} target="_blank" rel="noreferrer" className="rounded-2xl border-3 border-ink bg-paper p-5 transition hover:bg-pink">
                <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-ink/60">Sediu, balastieră, stație de betoane</p>
                <p className="mt-1 font-bold">{contact.addressLine}</p>
                <p className="mt-1 text-[13px] text-ink/60">{contact.dispatchNote}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-v2-display text-[13px] font-extrabold uppercase tracking-wider">
                  Deschide în Google Maps
                  <ArrowUpRight weight="bold" className="size-4" aria-hidden />
                </span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-7">
            <V2ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ---------------- DECIZIE (portal) ---------------- */}
      <section className="px-5 pb-20 sm:px-8" aria-label="Alegerea acestui design">
        <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border-3 border-ink bg-lime p-8 hard-shadow sm:p-12 lg:flex-row lg:items-center">
          <div>
            <Tag className="bg-paper">Design V2 · Creativ / Inovator</Tag>
            <h2 className="mt-5 font-v2-display text-4xl font-extrabold uppercase leading-[0.9] sm:text-5xl">Îți place energia asta?</h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink/75">Confirmă varianta preferată sau întoarce-te la Index ca să compari cu Design V1 și Design V3. Concept dezvoltat de {brixwave.name}.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ChooseDesignButton className="v2-sticker inline-flex h-14 items-center justify-center rounded-full bg-coral px-8 font-v2-display text-[15px] font-extrabold uppercase tracking-wider text-paper data-[chosen]:bg-ink data-[chosen]:text-lime [--sticker-rotate:-2deg]" />
            <BackToIndexLink className="v2-sticker inline-flex h-14 items-center justify-center rounded-full bg-paper px-8 font-v2-display text-[15px] font-extrabold uppercase tracking-wider [--sticker-rotate:2deg]" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t-3 border-ink bg-ink pb-32 pt-16 text-paper">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-v2-display text-5xl font-extrabold uppercase leading-none">
              Tomi
              <br />
              <span className="text-coral">Alex</span> SRL
            </p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/70">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-v2-display text-[13px] font-extrabold uppercase tracking-wider text-lime hover:text-sun">
              Facebook
              <ArrowUpRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-paper/50">Navigare</p>
            <ul className="mt-4 grid gap-2 text-[15px] font-bold">
              {v2Nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-lime">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-paper/50">Contact</p>
            <ul className="mt-4 grid gap-2 text-[15px]">
              <li>
                <a href={`tel:${contact.phone}`} className="font-bold hover:text-lime">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneSecondary}`} className="font-bold hover:text-lime">
                  {contact.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-lime">
                  {contact.email}
                </a>
              </li>
              <li className="text-paper/70">{contact.addressLine}</li>
              <li className="text-paper/70">{contact.hoursSummary}</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="font-v2-display text-[12px] font-extrabold uppercase tracking-wider text-paper/50">Juridic</p>
            <ul className="mt-4 grid gap-2 text-[14px] text-paper/70">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>{legal.regCom}</li>
              <li>{legal.capital}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 border-t border-paper/20 px-5 pt-6 text-[13px] text-paper/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.
          </p>
          <p>Website realizat de {brixwave.name}.</p>
        </div>
      </footer>
    </div>
  );
}
