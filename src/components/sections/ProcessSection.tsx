import { Reveal } from "@/components/ui/Reveal";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { process } from "@/data/services";

/**
 * How a job starts: four steps in order, from the phone call to delivery.
 * This is a real sequence, so the numbering carries information.
 */
export function ProcessSection() {
  return (
    <section className="bg-graphite">
      <div className="container-site py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">Un apel și pornim.</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ash">
            Așa decurge o colaborare cu noi, de la prima discuție până la livrare sau execuție.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-chalk/10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, n) => (
            <Reveal as="li" key={step.title} delay={n * 90} className="bg-graphite p-6 lg:p-8">
              <Reveal variant="line" delay={n * 90 + 200} className="h-[3px] w-full bg-brand" />
              <p className="mt-6 text-sm font-semibold text-concrete tabular-nums">Pasul {n + 1}</p>
              <p className="display mt-2 text-2xl text-chalk">{step.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ash">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <PhoneCTA size="lg" showNumber />
          <p className="text-[15px] text-concrete">Răspundem la telefon în timpul programului de lucru.</p>
        </Reveal>
      </div>
    </section>
  );
}
