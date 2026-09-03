import { ArrowUpRight, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Placeholder } from "@/components/ui/Placeholder";
import { PhoneCTA, PhoneNumber } from "@/components/ui/PhoneCTA";
import { Reveal } from "@/components/ui/Reveal";
import { contact, social } from "@/data/site";

/**
 * Where we are and how to reach us: the number and the address set large,
 * the map beside them. Used on the homepage and the contact page.
 */
export function ContactSection({ heading = "Sunați-ne. Sau veniți la noi." }: { heading?: string }) {
  return (
    <section className="bg-asphalt">
      <div className="container-site py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-4xl sm:text-5xl">{heading}</h2>

            <div className="mt-10 border-t border-chalk/15 pt-8">
              <p className="text-sm font-semibold text-concrete">Telefon</p>
              <PhoneNumber className="mt-2 text-[2rem] sm:text-[2.6rem]" />
              <div className="mt-5">
                <PhoneCTA size="lg" />
              </div>
            </div>

            <div className="mt-8 border-t border-chalk/15 pt-8">
              <p className="text-sm font-semibold text-concrete">Adresă</p>
              <p className="mt-2 text-xl font-semibold leading-snug tracking-tight text-chalk">
                {contact.address ?? <Placeholder>Adresa sediului</Placeholder>}
              </p>
              <a
                href={contact.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line mt-3 inline-flex items-center gap-1 font-semibold text-chalk"
              >
                Navighează cu Google Maps
                <ArrowUpRight weight="bold" className="size-3.5" aria-hidden />
              </a>
            </div>

            <dl className="mt-8 grid gap-6 border-t border-chalk/15 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-concrete">Program</dt>
                <dd className="mt-1 text-[15px] text-chalk/85">
                  {contact.schedule ?? <Placeholder>Program de lucru</Placeholder>}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-concrete">E-mail</dt>
                <dd className="mt-1 text-[15px] text-chalk/85">
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`} className="link-line">{contact.email}</a>
                  ) : (
                    <Placeholder>Adresă de e-mail</Placeholder>
                  )}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line inline-flex items-center gap-2 font-semibold text-chalk"
                >
                  <FacebookLogo weight="fill" className="size-4 text-brand" aria-hidden />
                  Urmăriți-ne pe Facebook
                </a>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-graphite lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <iframe
                title="Locația Tomi Alex SRL pe hartă"
                src={contact.location.embedUrl}
                className="map-dark absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="rule-double pointer-events-none absolute left-0 top-0 w-28 text-brand" aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
