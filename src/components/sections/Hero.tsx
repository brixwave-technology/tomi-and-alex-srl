import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { company, cta } from "@/data/site";
import { images } from "@/data/images";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-site relative pb-16 pt-36 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <p
            className="hero-enter font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
            style={stagger(0)}
          >
            {company.name}
          </p>

          <h1 className="mt-6 font-display font-extrabold leading-[0.92] tracking-[-0.035em]">
            {company.taglineLines.map((line, i) => (
              <span
                key={line}
                className="hero-enter block text-[3.25rem] sm:text-7xl lg:text-[6.5rem]"
                style={stagger(1 + i)}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="hero-enter mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
            style={stagger(4)}
          >
            {company.heroSubtitle}
          </p>

          <div className="hero-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={stagger(5)}>
            <Button href={cta.primary.href} variant="brand" size="lg" arrow>
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="outline-light" size="lg">
              {cta.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator: a single line that draws down and retreats. */}
      <div
        className="hero-enter absolute bottom-0 right-6 hidden h-24 w-px overflow-hidden lg:right-12 lg:block"
        style={stagger(6)}
        aria-hidden
      >
        <span className="scroll-line block h-full w-full bg-white/70" />
      </div>
    </section>
  );
}
