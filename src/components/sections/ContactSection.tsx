import { ArrowUpRight, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { contact, cta, social } from "@/data/site";

/**
 * Contact details beside the map. Used on the homepage; the contact page
 * adds the form above it.
 */
export function ContactSection({ withButton = true }: { withButton?: boolean }) {
  return (
    <section className="bg-paper">
      <div className="container-site py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Vorbim despre proiectul dumneavoastră.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-concrete">
              Sunați-ne sau scrieți-ne detaliile lucrării. Răspundem cu o ofertă concretă.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="font-display text-sm font-semibold text-concrete">Telefon</dt>
                <dd className="mt-1 font-display text-xl font-semibold tracking-tight">
                  {contact.phone ? (
                    <a href={`tel:${contact.phone}`} className="link-line">{contact.phone}</a>
                  ) : (
                    <Placeholder>Număr de telefon</Placeholder>
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold text-concrete">E-mail</dt>
                <dd className="mt-1 font-display text-xl font-semibold tracking-tight">
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`} className="link-line">{contact.email}</a>
                  ) : (
                    <Placeholder>Adresă de e-mail</Placeholder>
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold text-concrete">Adresă</dt>
                <dd className="mt-1 text-[15px] leading-relaxed">
                  {contact.address ?? <Placeholder>Adresa sediului</Placeholder>}
                  <a
                    href={contact.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-2 inline-flex items-center gap-1 font-display font-semibold"
                  >
                    Deschide în Google Maps
                    <ArrowUpRight weight="bold" className="size-3.5" aria-hidden />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-semibold text-concrete">Social</dt>
                <dd className="mt-1">
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line inline-flex items-center gap-2 font-display font-semibold"
                  >
                    <FacebookLogo weight="fill" className="size-4 text-brand" aria-hidden />
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>

            {withButton && (
              <div className="mt-10">
                <Button href={cta.primary.href} variant="brand" size="lg" arrow>
                  {cta.primary.label}
                </Button>
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-chalk lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <iframe
                title="Locația Tomi Alex SRL pe hartă"
                src={contact.location.embedUrl}
                className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
