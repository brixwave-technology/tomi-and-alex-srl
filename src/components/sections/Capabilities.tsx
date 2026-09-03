"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/data/services";
import { cn } from "@/lib/cn";

/**
 * Index of the four business directions. On desktop the list sits beside a
 * sticky photo panel that crossfades to the hovered or focused row; on mobile
 * each row carries its own photo.
 */
export function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilitati" className="scroll-mt-20 bg-graphite">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">Materiale și execuție, din aceeași sursă.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash">
            Agregate, beton și prefabricate produse de noi, puse în operă de echipele noastre de
            infrastructură.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ul className="flex flex-col lg:col-span-7" onMouseLeave={() => setActive(0)}>
            {capabilities.map((item, n) => {
              const isActive = n === active;
              return (
                <Reveal as="li" key={item.slug} delay={n * 70} className="border-t border-chalk/15 last:border-b">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(n)}
                    onFocus={() => setActive(n)}
                    className="group grid gap-5 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 lg:py-9"
                  >
                    <span className="min-w-0">
                      <span className="relative mb-5 block aspect-[16/10] overflow-hidden bg-slate lg:hidden">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(min-width: 640px) 80vw, 100vw"
                          className="object-cover"
                        />
                      </span>
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span
                          className={cn(
                            "display text-3xl transition-[transform,color] duration-500 ease-out-strong sm:text-4xl lg:group-hover:translate-x-1",
                            isActive ? "text-chalk" : "text-chalk/85",
                          )}
                        >
                          {item.title}
                        </span>
                        <span className="text-sm font-semibold text-concrete">{item.kicker}</span>
                      </span>
                      <span className="mt-3 block max-w-md text-[15px] leading-relaxed text-ash">{item.description}</span>
                    </span>

                    <span
                      className={cn(
                        "hidden size-11 items-center justify-center rounded-sm border transition-[border-color,background-color,color] duration-300 sm:inline-flex",
                        isActive ? "border-brand bg-brand text-white" : "border-chalk/25 text-chalk",
                      )}
                      aria-hidden
                    >
                      <ArrowRight weight="bold" className="size-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <Reveal variant="clip" className="sticky top-28 aspect-[4/5] overflow-hidden bg-slate">
              {capabilities.map((item, n) => (
                <Image
                  key={item.slug}
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="40vw"
                  className={cn(
                    "object-cover transition-[opacity,transform] duration-700 ease-out-strong motion-reduce:transition-none",
                    n === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                  )}
                />
              ))}
              <span className="rule-double absolute bottom-0 left-0 w-28 text-brand" aria-hidden />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
