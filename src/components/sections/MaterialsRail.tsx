"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { aggregates } from "@/data/products";
import { cn } from "@/lib/cn";

/**
 * Aggregates as a horizontal rail: large photo cards you drag or step
 * through. The rail bleeds to the right edge so it reads as a stockyard,
 * not a grid of cards.
 */
export function MaterialsRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setIndex(items.indexOf(entry.target as HTMLElement));
        }
      },
      { root: rail, threshold: 0.6 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const step = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.children) as HTMLElement[];
    const next = Math.min(Math.max(index + dir, 0), items.length - 1);
    items[next]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section className="overflow-hidden bg-asphalt">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-4xl sm:text-5xl">Agregate pentru proiecte solide.</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ash">
              Nisip, balast și sorturi din balastiera proprie, pentru betoane, drumuri și umpluturi.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex" role="group" aria-label="Derulează produsele">
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={index === 0}
                aria-label="Produsul anterior"
                className="pressable inline-flex size-12 items-center justify-center rounded-sm border border-chalk/25 text-chalk disabled:opacity-30"
              >
                <ArrowLeft weight="bold" className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                disabled={index >= aggregates.length - 1}
                aria-label="Produsul următor"
                className="pressable inline-flex size-12 items-center justify-center rounded-sm border border-chalk/25 text-chalk disabled:opacity-30"
              >
                <ArrowRight weight="bold" className="size-4" />
              </button>
            </div>
            <Button href="/agregate/" variant="outline" arrow>
              Catalog agregate
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="container-site !pr-0">
        <ul ref={railRef} className="rail -mt-8 gap-4 pb-24 pr-5 lg:gap-6 lg:pb-32" aria-label="Agregate">
          {aggregates.map((product) => (
            <li key={product.slug} className="w-[82vw] sm:w-[58vw] lg:w-[34vw] xl:w-[30vw]">
              <Link href={`/agregate/#${product.slug}`} className="group block">
                <span className="relative block aspect-[4/5] overflow-hidden bg-graphite sm:aspect-[4/3] lg:aspect-[4/5]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 34vw, (min-width: 640px) 58vw, 82vw"
                    className="photo-hover object-cover"
                    style={{ objectPosition: product.image.position }}
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-asphalt/85 to-transparent" aria-hidden />
                  <span className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="display block text-3xl text-chalk sm:text-4xl">{product.name}</span>
                  </span>
                </span>
                <span className="mt-4 block max-w-sm text-[15px] leading-relaxed text-ash">{product.summary}</span>
              </Link>
            </li>
          ))}
          <li className="w-5 lg:w-14" aria-hidden />
        </ul>
      </div>

      <div className="container-site -mt-16 mb-24 flex gap-1.5 lg:-mt-24 lg:mb-32" aria-hidden>
        {aggregates.map((p, idx) => (
          <span
            key={p.slug}
            className={cn("h-[3px] transition-[width,background-color] duration-400 ease-out-strong", idx === index ? "w-10 bg-brand" : "w-4 bg-chalk/25")}
          />
        ))}
      </div>
    </section>
  );
}
