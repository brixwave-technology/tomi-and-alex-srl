import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { company, contact, legal, social } from "@/data/company";
import { brixwave } from "@/data/brixwave";
import { navFor } from "@/lib/routes";

const nav = navFor("v1");

export function V1Footer() {
  return (
    <>
      <section className="border-t border-steel-400/20 bg-graphite-900 py-14" aria-label="Alegerea acestui design">
        <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Design V1 · Corporate Clasic &amp; Autoritate</p>
            <h2 className="v1-display mt-2 text-2xl text-white sm:text-3xl">Vă reprezintă această direcție?</h2>
            <p className="mt-2 max-w-xl text-[14.5px] text-steel-400">
              Confirmați varianta preferată sau reveniți la Index pentru a compara. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ChooseDesignButton className="inline-flex h-12 items-center justify-center rounded-[2px] bg-brand px-6 text-[14px] font-bold text-white transition hover:bg-brand-soft data-[chosen]:bg-emerald-500" />
            <BackToIndexLink className="inline-flex h-12 items-center justify-center rounded-[2px] border border-steel-400/50 px-6 text-[14px] font-bold text-white transition hover:bg-white/5" />
          </div>
        </Reveal>
      </section>
      <footer className="border-t border-steel-400/20 bg-graphite-950 pb-40 lg:pb-16">
        <div className="bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
            <TomiAlexLogo height={64} />
            <a href={`tel:${contact.phone}`} className="v1-display text-2xl text-graphite-950 sm:text-3xl">
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pt-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[14.5px] leading-relaxed text-steel-400">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-white hover:text-brand-soft">
              Facebook
              <ArrowUpRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Pagini</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Contact</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
              <li>
                <a href={`tel:${contact.phone}`} className="font-bold text-white hover:text-brand-soft">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneSecondary}`} className="hover:text-white">
                  {contact.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>{contact.addressLine}</li>
              <li>{contact.hoursSummary}</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-steel-400">Date juridice</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-steel-200">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>Nr. Reg. Com. {legal.regCom}</li>
              <li>{legal.capital}</li>
              <li>Zonă de activitate: {company.serviceAreas.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 border-t border-steel-400/20 px-5 pt-6 text-[13px] text-steel-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.
          </p>
          <p>
            Website realizat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.
          </p>
        </div>
      </footer>
    </>
  );
}
