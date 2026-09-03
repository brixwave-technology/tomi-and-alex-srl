import Image from "next/image";
import type { CSSProperties } from "react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { PhoneCTA, PhoneNumber } from "@/components/ui/PhoneCTA";
import { Placeholder } from "@/components/ui/Placeholder";
import { company, contact, cta } from "@/data/site";
import { images } from "@/data/images";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/**
 * Opening viewport. Photo, three-line tagline wiped in line by line, and the
 * call card: the number, the address and one button. The page's one
 * orchestrated motion moment lives here.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-asphalt text-chalk">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-image object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/60 to-asphalt/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt/75 via-asphalt/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-asphalt/80 to-transparent" />
      </div>

      <div className="container-site relative pb-28 pt-40 lg:pb-20">
        <div className="hero-rule rule-double w-24 text-brand" aria-hidden />

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="display text-[3.4rem] sm:text-[5.2rem] lg:text-[6.8rem] xl:text-[7.6rem]">
              {company.taglineLines.map((line, n) => (
                <span key={line} className="hero-wipe block" style={i(n)}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-enter mt-8 max-w-xl text-lg leading-relaxed text-chalk/80 sm:text-xl" style={i(4)}>
              {company.heroSubtitle}
            </p>
            <div className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={i(5)}>
              <Button href={cta.secondary.href} variant="outline" size="lg" arrow>
                {cta.secondary.label}
              </Button>
              <Button href={cta.primary.href} variant="ghost" size="lg">
                {cta.primary.label}
              </Button>
            </div>
          </div>

          {/* Call card */}
          <aside
            className="hero-enter border border-chalk/15 bg-asphalt/70 p-6 backdrop-blur-md lg:col-span-4 lg:p-8"
            style={i(3)}
            aria-label="Contact rapid"
          >
            <p className="text-sm font-medium text-chalk/60">Sunați-ne pentru o ofertă</p>
            <PhoneNumber className="mt-3 text-[2rem] sm:text-[2.4rem]" />
            <div className="mt-6 flex items-start gap-3 text-[15px] leading-snug text-chalk/80">
              <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
              <span>
                {contact.address ?? <Placeholder>Adresa sediului</Placeholder>}
                <a
                  href={contact.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line mt-1 block w-fit font-semibold text-chalk"
                >
                  Navighează la noi
                </a>
              </span>
            </div>
            <div className="mt-6">
              <PhoneCTA size="lg" className="w-full" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
