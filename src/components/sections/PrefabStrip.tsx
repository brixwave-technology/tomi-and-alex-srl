import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { prefabProducts } from "@/data/products";
import { cn } from "@/lib/cn";

/**
 * Five product slots in a 2 + 3 rhythm. Slots without a photo render a
 * hatched surface so the reserved space is visible without pretending.
 */
export function PrefabStrip() {
  return (
    <section className="bg-paper">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Prefabricate din beton.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-concrete">
            Soluții prefabricate pentru proiecte eficiente și durabile.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {prefabProducts.map((product, i) => (
            <Reveal
              as="li"
              key={product.slug}
              delay={i * 70}
              className={cn(i < 2 ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <Link href={`/prefabricate/#${product.slug}`} className="group block">
                <span
                  className={cn(
                    "relative block overflow-hidden bg-chalk",
                    i < 2 ? "aspect-[3/2]" : "aspect-[4/3]",
                  )}
                >
                  {product.image ? (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="photo-hover object-cover"
                    />
                  ) : (
                    <span
                      className="absolute inset-0 flex items-end p-4 text-[13px] text-concrete"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, transparent 0 14px, rgb(14 14 16 / 0.05) 14px 15px)",
                      }}
                    >
                      Fotografie de completat
                    </span>
                  )}
                </span>
                <span className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl font-extrabold tracking-[-0.02em]">{product.name}</span>
                  <span className="font-display text-xs font-bold text-steel tabular-nums">0{i + 1}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <Button href="/prefabricate/" variant="outline-dark" arrow>
            Vezi prefabricatele
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
