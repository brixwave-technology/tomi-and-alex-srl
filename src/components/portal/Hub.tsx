"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { BrixwaveLogo } from "./BrixwaveLogo";
import { DesignPreview } from "./DesignPreview";
import { designs, designById } from "@/data/designs";
import { brixwave } from "@/data/brixwave";
import { company } from "@/data/company";
import { formatChoiceDate, useDesignChoice } from "@/lib/selection";
import { cn } from "@/lib/cn";
import type { BrandAssets } from "@/lib/brandAssets";

/** Ecranul de start: semnătura BRIXWAVE și cele trei carduri de design. */
export function Hub({ assets }: { assets: BrandAssets }) {
  const { choice, ready, clear } = useDesignChoice();
  const chosen = ready && choice ? designById[choice.design] : null;

  return (
    <div className="relative isolate min-h-dvh overflow-hidden font-portal">
      {/* Fundal: gradient în derivă, grilă fină, zgomot */}
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden />
      <div className="absolute -top-1/3 left-1/2 -z-10 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,91,219,0.38),transparent_70%)] blur-3xl animate-drift" aria-hidden />
      <div className="absolute -bottom-1/3 right-0 -z-10 h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(107,133,240,0.18),transparent_70%)] blur-3xl animate-drift [animation-delay:-8s]" aria-hidden />
      <div className="absolute -bottom-1/4 left-0 -z-10 h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(42,68,176,0.28),transparent_70%)] blur-3xl animate-drift [animation-delay:-14s]" aria-hidden />
      <div className="noise absolute inset-0 -z-10" aria-hidden />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href={brixwave.url} target="_blank" rel="noreferrer" className="anim-rise inline-flex items-center gap-3" aria-label={`${brixwave.fullName} (se deschide într-o filă nouă)`}>
          {assets.logo ? (
            <Image src={assets.logo} alt={brixwave.fullName} width={344} height={72} className="h-9 w-auto sm:h-10" priority />
          ) : (
            <BrixwaveLogo className="h-9 w-auto sm:h-10" />
          )}
        </a>
        <p className="anim-rise hidden text-[12px] font-semibold uppercase tracking-[0.22em] text-portal-300 sm:block [animation-delay:120ms]">
          Client: {company.name}
        </p>
      </header>

      <main className="mx-auto w-full max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        {/* Semnătura BRIXWAVE */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="anim-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-portal-300 backdrop-blur [animation-delay:150ms]">
            <Sparkle weight="fill" className="size-3.5 text-bw-blue-soft" aria-hidden />
            Portal de selecție design
          </div>
          <div className="anim-rise-blur mt-8 flex justify-center [animation-delay:250ms]">
            {assets.mark ? (
              <Image src={assets.mark} alt="" width={96} height={96} className="size-20 object-contain drop-shadow-[0_20px_50px_rgba(59,91,219,0.6)] sm:size-24" priority />
            ) : (
              <BrixwaveLogo variant="mark" className="size-20 drop-shadow-[0_20px_50px_rgba(59,91,219,0.6)] sm:size-24" />
            )}
          </div>
          <h1 className="anim-rise-blur balance mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl [animation-delay:350ms]">
            {brixwave.claim}
          </h1>
          <p className="anim-rise balance mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-portal-300 sm:text-lg [animation-delay:500ms]">
            Trei website-uri complete pentru <strong className="font-semibold text-white">{company.name}</strong>. {brixwave.subclaim}
          </p>
          <p className="anim-rise mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] font-medium text-portal-300 [animation-delay:600ms]">
            <span className="rounded-full bg-white/5 px-3 py-1">Același conținut</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Aceeași structură</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Trei percepții vizuale</span>
          </p>
        </section>

        {/* Starea alegerii */}
        <div className="mx-auto mt-10 min-h-14 max-w-3xl" aria-live="polite">
          {chosen && (
            <div className="anim-pop flex flex-col items-center justify-between gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-[14px] text-emerald-50 sm:flex-row">
              <p className="inline-flex items-center gap-2">
                <CheckCircle weight="fill" className="size-5 text-emerald-300" aria-hidden />
                <span>
                  Alegerea dumneavoastră: <strong>{chosen.label}</strong> ({chosen.name})
                  {choice?.chosenAt ? `, confirmată la ${formatChoiceDate(choice.chosenAt)}` : ""}.
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Link href={chosen.href} className="font-semibold underline-offset-4 hover:underline">
                  Revezi
                </Link>
                <button type="button" onClick={clear} className="font-semibold text-emerald-200/80 underline-offset-4 hover:underline">
                  Schimbă
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cardurile */}
        <section className="mt-6 grid gap-5 lg:grid-cols-3" aria-label="Conceptele de design">
          {designs.map((design, i) => {
            const active = chosen?.id === design.id;
            return (
              <Link
                key={design.id}
                href={design.href}
                className={cn(
                  "group anim-rise relative flex flex-col overflow-hidden rounded-3xl border bg-portal-900/70 p-2 backdrop-blur transition-all duration-500 ease-out-quint hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_40px_80px_-40px_rgba(59,91,219,0.6)]",
                  active ? "border-emerald-400/60 shadow-[0_0_0_1px_rgba(52,211,153,0.4)]" : "border-white/10",
                )}
                style={{ animationDelay: `${650 + i * 120}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <DesignPreview id={design.id} />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full bg-portal-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {design.label}
                    </span>
                    {active && (
                      <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-portal-950">
                        Ales
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-white text-portal-950 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0 rotate-[-30deg]">
                    <ArrowUpRight weight="bold" className="size-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bw-blue-soft">{design.concept}</p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white">{design.name}</h2>
                  <p className="pretty mt-3 text-[14.5px] leading-relaxed text-portal-300">{design.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Caracteristici">
                    {design.traits.map((t) => (
                      <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-medium text-portal-100/90">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex items-center gap-1.5" aria-label="Paleta de culori">
                      {design.swatches.map((c) => (
                        <span key={c} className="size-5 rounded-full ring-1 ring-white/20" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[14px] font-bold text-white">
                      Deschide {design.label}
                      <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <p className="anim-rise mx-auto mt-10 max-w-2xl text-center text-[13.5px] leading-relaxed text-portal-300 [animation-delay:1100ms]">
          În interiorul fiecărei variante găsiți butonul <strong className="font-semibold text-white">„Aleg acest design”</strong> pentru a valida
          preferința și <strong className="font-semibold text-white">„Înapoi la Index”</strong> pentru a compara celelalte opțiuni.
        </p>
      </main>

      <footer className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-5 py-8 text-[13px] text-portal-300 sm:flex-row sm:px-8">
        <p className="inline-flex items-center gap-3">
          {assets.mark ? <Image src={assets.mark} alt="" width={24} height={24} className="size-6 object-contain" /> : <BrixwaveLogo variant="mark" className="size-6" />}
          <span>
            © {new Date().getFullYear()} {brixwave.fullName}. {brixwave.claim}.
          </span>
        </p>
        <p>
          Prezentare pentru {company.name} · {company.tagline}
        </p>
      </footer>
    </div>
  );
}
