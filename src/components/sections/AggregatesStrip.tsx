import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { aggregates } from "@/data/products";

/**
 * Materials board: four product tiles separated by hairlines rather than
 * boxed as cards. Photo, name, one line. The full catalog lives on /agregate.
 */
export function AggregatesStrip() {
  return (
    <section className="bg-white">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Agregate pentru proiecte solide.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-concrete">
              Nisip, balast și sorturi din balastiera proprie, pentru betoane, drumuri și umpluturi.
            </p>
          </div>
          <Button href="/agregate/" variant="outline-dark" arrow className="shrink-0">
            Catalog agregate
          </Button>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-ash sm:grid-cols-2 lg:grid-cols-4">
          {aggregates.map((product, i) => (
            <Reveal as="li" key={product.slug} delay={i * 80} className="bg-white">
              <Link href={`/agregate/#${product.slug}`} className="group block h-full p-5 sm:p-6">
                <span className="relative block aspect-[4/3] overflow-hidden bg-chalk">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="photo-hover object-cover"
                    style={{ objectPosition: product.image.position }}
                  />
                </span>
                <span className="mt-6 flex items-baseline justify-between gap-4">
                  <span className="font-display text-2xl font-extrabold tracking-[-0.02em]">{product.name}</span>
                  <span className="font-display text-xs font-bold text-steel tabular-nums">0{i + 1}</span>
                </span>
                <span className="mt-2 block text-[15px] leading-relaxed text-concrete">{product.summary}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
