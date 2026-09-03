import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactSection } from "@/components/sections/ContactSection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const description =
  "Sunați Tomi Alex SRL pentru agregate, beton, prefabricate sau lucrări de infrastructură. Adresă, hartă și formular de cerere de ofertă.";

export const metadata: Metadata = {
  title: "Contact și cerere de ofertă",
  description,
  alternates: { canonical: "/contact/" },
  openGraph: { title: "Sunați-ne. Sau veniți la noi.", description, url: "/contact/" },
};

const i = (n: number) => ({ "--i": n }) as CSSProperties;

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact/" }]} />
      <section className="bg-asphalt text-chalk">
        <div className="container-site pb-4 pt-36 lg:pt-44">
          <Breadcrumbs items={[{ label: "Contact" }]} className="hero-enter" />
          <div className="hero-rule rule-double mt-6 w-20 text-brand" aria-hidden />
          <h1 className="hero-enter display mt-6 max-w-3xl text-[2.9rem] sm:text-6xl lg:text-7xl" style={i(1)}>
            Contact
          </h1>
        </div>
      </section>

      <ContactSection heading="Sunați-ne. Sau veniți la noi." />

      <section className="border-t border-chalk/10 bg-asphalt">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="display text-3xl sm:text-4xl">Preferați în scris?</h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-ash">
                Lăsați-ne detaliile lucrării și vă sunăm noi înapoi cu o ofertă.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
