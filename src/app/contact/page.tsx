import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Cereți o ofertă pentru agregate, beton, prefabricate sau lucrări de infrastructură de la Tomi Alex SRL.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="container-site pb-14 pt-32 lg:pb-20 lg:pt-40">
          <Breadcrumbs items={[{ label: "Contact" }]} className="hero-enter" />
          <h1
            className="hero-enter mt-6 max-w-3xl font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Cereți o ofertă.
          </h1>
          <p
            className="hero-enter mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Completați formularul cu detaliile lucrării sau ale materialelor necesare. Revenim cu o
            ofertă adaptată proiectului.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site -mt-8 pb-8 lg:-mt-10">
          <ContactForm />
        </div>
      </section>

      <ContactSection withButton={false} />
    </>
  );
}
