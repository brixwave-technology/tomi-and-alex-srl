import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { prefabProducts } from "@/data/products";
import { cn } from "@/lib/cn";

/** Five product slots in a 2 + 3 rhythm; empty slots show a hatched surface. */
export function PrefabStrip() {
  return (
    <section className="bg-graphite">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">Prefabricate din beton.</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ash">
            Soluții prefabricate pentru proiecte eficiente și durabile.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {prefabProducts.map((product, n) => (
            <Reveal as="li" key={product.slug} delay={n * 70} className={cn(n < 2 ? "lg:col-span-3" : "lg:col-span-2")}>
              <Link href={`/prefabricate/#${product.slug}`} className="group block">
                <span className={cn("relative block overflow-hidden bg-slate", n < 2 ? "aspect-[3/2]" : "aspect-[4/3]")}>
                  {product.image ? (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="photo-hover object-cover"
                    />
                  ) : (
                    <span className="hatched absolute inset-0 flex items-end p-4 text-[13px] text-concrete">
                      Fotografie de completat
                    </span>
                  )}
                </span>
                <span className="mt-4 block text-xl font-semibold tracking-tight text-chalk">{product.name}</span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <Button href="/prefabricate/" variant="outline" arrow>
            Vezi prefabricatele
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
