import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { company, contact, legal } from "@/data/company";

/** Datele de contact, în ordinea cerută de client: telefon, e-mail, datele firmei, program. */
export const contactGroups = [
  {
    key: "telefon",
    label: "Telefon",
    lines: [
      { text: contact.phoneDisplay, href: `tel:${contact.phone}`, strong: true },
      { text: contact.phoneSecondaryDisplay, href: `tel:${contact.phoneSecondary}` },
    ],
  },
  {
    key: "email",
    label: "E-mail",
    lines: [
      { text: contact.email, href: `mailto:${contact.email}`, strong: true },
    ],
  },
  {
    key: "firma",
    label: "Datele firmei",
    lines: [{ text: legal.legalName, strong: true }, { text: `CUI ${legal.cui}` }, { text: `Nr. Reg. Com. ${legal.regCom}` }, { text: legal.capital }, { text: contact.addressLine }],
  },
  {
    key: "program",
    label: "Program",
    lines: [...contact.hours.map((h) => ({ text: `${h.days}: ${h.hours}` })), { text: contact.dispatchNote }],
  },
] as const;

/** Harta Google Maps cu locația și butonul de deschidere în aplicație. */
export function MapEmbed({ className, frameClassName, buttonClassName }: { className?: string; frameClassName?: string; buttonClassName?: string }) {
  return (
    <div className={className}>
      <div className={frameClassName}>
        <iframe title={`Harta cu locația ${company.name}`} src={contact.location.embedUrl} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a href={contact.location.directionsUrl} target="_blank" rel="noreferrer" className={buttonClassName}>
        Deschide în Google Maps
        <ArrowUpRight weight="bold" className="size-4" aria-hidden />
      </a>
    </div>
  );
}
