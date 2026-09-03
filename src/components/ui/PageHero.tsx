import Image from "next/image";
import type { CSSProperties } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import type { SiteImage } from "@/data/images";

type PageHeroProps = {
  title: string;
  lead?: string;
  image: SiteImage;
  crumbs: Crumb[];
};

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/** Inner-page opener: photo bleeding in from the right, title bottom-left, phone at hand. */
export function PageHero({ title, lead, image, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-asphalt text-chalk">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]" aria-hidden>
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="hero-image object-cover"
          style={{ objectPosition: image.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/70 to-asphalt/20 lg:via-asphalt/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent lg:hidden" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-asphalt/80 to-transparent" />
      </div>

      <div className="container-site relative flex min-h-[70vh] flex-col justify-end pb-14 pt-36 lg:min-h-[64vh] lg:pb-20 lg:pt-44">
        <Breadcrumbs items={crumbs} className="hero-enter" />
        <div className="hero-rule rule-double mt-6 w-20 text-brand" aria-hidden />
        <h1 className="hero-enter display mt-6 max-w-3xl text-[2.9rem] sm:text-6xl lg:text-7xl" style={i(1)}>
          {title}
        </h1>
        {lead && (
          <p className="hero-enter mt-6 max-w-xl text-lg leading-relaxed text-chalk/80" style={i(2)}>
            {lead}
          </p>
        )}
        <div className="hero-enter mt-8" style={i(3)}>
          <PhoneCTA size="lg" showNumber />
        </div>
      </div>
    </section>
  );
}
