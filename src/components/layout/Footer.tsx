import Link from "next/link";
import { FacebookLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/Logo";
import { Placeholder } from "@/components/ui/Placeholder";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { company, contact, footerNav, social } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-chalk/10 bg-asphalt text-chalk pb-24 lg:pb-0">
      <div className="container-site">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <Logo variant="full" tone="light" className="h-24" />
            <p className="display mt-8 max-w-sm text-2xl text-chalk sm:text-3xl">{company.tagline}</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-concrete">{company.claim}</p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-sm font-semibold text-concrete">Navigare</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-line text-lg font-medium tracking-tight text-chalk/85 transition-colors hover:text-chalk"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-concrete">Contact</p>
            <div className="mt-5">
              <PhoneCTA size="md" showNumber />
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-chalk/85">
              <li>
                {contact.address ?? <Placeholder>Adresa sediului</Placeholder>}
              </li>
              <li>
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="link-line">{contact.email}</a>
                ) : (
                  <Placeholder>E-mail</Placeholder>
                )}
              </li>
              <li>
                <a
                  href={contact.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-chalk"
                >
                  <MapPin className="size-4 shrink-0 text-brand" weight="fill" aria-hidden />
                  <span className="link-line">Navighează la noi</span>
                </a>
              </li>
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-chalk"
                >
                  <FacebookLogo className="size-4 shrink-0 text-brand" weight="fill" aria-hidden />
                  <span className="link-line">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-double text-chalk/15" aria-hidden />

        <div className="flex flex-col gap-3 py-6 text-[13px] text-concrete sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. Toate drepturile rezervate.</p>
          <p>Lucrări de infrastructură și construcții</p>
        </div>
      </div>
    </footer>
  );
}
