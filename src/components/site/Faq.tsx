import { Reveal } from "@/components/shared/Reveal";
import { pageFaq } from "@/data/seo";

export function Faq({ slug }: { slug: string }) {
  const faq = pageFaq[slug] ?? [];
  if (faq.length === 0) return null;
  return (
    <section className="py-16 lg:py-20" aria-labelledby="faq-title">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Întrebări frecvente</p>
          <h2 id="faq-title" className="v1-display mt-4 text-3xl text-white sm:text-4xl">Răspunsuri înainte de a suna.</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-steel-400/20 border-y border-steel-400/20">
          {faq.map((f) => (
            <Reveal as="details" key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-bold text-white [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center border border-steel-400/40 text-steel-200 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl pr-10 text-[14.5px] leading-relaxed text-steel-400">{f.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
