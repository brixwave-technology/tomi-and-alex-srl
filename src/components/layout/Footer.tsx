import Link from "next/link";
import { FacebookLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/Logo";
import { Placeholder } from "@/components/ui/Placeholder";
import { company, contact, footerNav, social } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Logo tone="light" size="md" />
            <p className="mt-8 max-w-sm font-display text-2xl font-semibold leading-tight tracking-tight">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              {company.claim}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-display text-sm font-semibold text-white/50">Navigare</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-line font-display text-lg font-medium tracking-tight text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-display text-sm font-semibold text-white/50">Contact</p>
            <ul className="mt-5 flex flex-col gap-4 text-[15px] leading-relaxed text-white/85">
              <li>
                {contact.phone ? (
                  <a href={`tel:${contact.phone}`} className="link-line">{contact.phone}</a>
                ) : (
                  <Placeholder tone="light">Telefon</Placeholder>
                )}
              </li>
              <li>
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="link-line">{contact.email}</a>
                ) : (
                  <Placeholder tone="light">E-mail</Placeholder>
                )}
              </li>
              <li>
                <a
                  href={contact.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-white/85 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" weight="fill" aria-hidden />
                  <span className="link-line">Vezi locația pe hartă</span>
                </a>
              </li>
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
                >
                  <FacebookLogo className="size-4 shrink-0 text-brand" weight="fill" aria-hidden />
                  <span className="link-line">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. Toate drepturile rezervate.</p>
          <p>Lucrări de infrastructură și construcții</p>
        </div>
      </div>
    </footer>
  );
}
