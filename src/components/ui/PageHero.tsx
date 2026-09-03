import Image from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import type { SiteImage } from "@/data/images";

type PageHeroProps = {
  title: string;
  lead?: string;
  image: SiteImage;
  crumbs: Crumb[];
};

/**
 * Inner-page opener: a dark band with the photo bleeding in from the right
 * and the title anchored bottom-left. Shorter than the homepage hero on
 * purpose: these pages exist to be read, not to impress.
 */
export function PageHero({ title, lead, image, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]" aria-hidden>
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20 lg:via-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent lg:hidden" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-site relative flex min-h-[68vh] flex-col justify-end pb-14 pt-32 lg:min-h-[64vh] lg:pb-20 lg:pt-40">
        <Breadcrumbs items={crumbs} className="hero-enter" />
        <h1
          className="hero-enter mt-6 max-w-3xl font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="hero-enter mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {lead}
          </p>
        )}
        <span
          className="hero-enter mt-10 block h-[3px] w-16 bg-brand"
          style={{ "--i": 3 } as React.CSSProperties}
          aria-hidden
        />
      </div>
    </section>
  );
}
