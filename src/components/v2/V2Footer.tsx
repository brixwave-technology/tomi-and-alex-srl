import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { company, contact, legal, social } from "@/data/company";
import { brixwave } from "@/data/brixwave";
import { navFor } from "@/lib/routes";

const nav = navFor("v2");

export function V2Footer() {
  return (
    <>
      <section className="bg-asphalt-950 px-4 py-12 text-white sm:px-8" aria-label="Alegerea acestui design">
        <Reveal className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-6 border-l-8 border-brand bg-asphalt-900 p-7 lg:flex-row lg:items-center">
          <div>
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-300">Design V2 · Industrial Authority &amp; Trust</p>
            <h2 className="v2-display mt-2 font-v2-display text-3xl">Corespunde această direcție?</h2>
            <p className="mt-2 max-w-xl text-[14.5px] text-concrete-300">
              Confirmați varianta preferată sau reveniți la Index pentru a compara. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ChooseDesignButton className="inline-flex h-13 items-center justify-center bg-brand px-7 font-v2-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft data-[chosen]:bg-emerald-500" />
            <BackToIndexLink className="inline-flex h-13 items-center justify-center border-2 border-white px-7 font-v2-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-asphalt-950" />
          </div>
        </Reveal>
      </section>
      <footer className="border-t-4 border-brand bg-asphalt-950 px-4 pb-40 pt-14 text-white sm:px-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TomiAlexLogo height={64} />
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-concrete-300">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-v2-display text-[16px] font-bold uppercase tracking-wider text-white hover:text-brand-soft">
              Facebook
              <ArrowUpRight weight="bold" className="size-4" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Pagini</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
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
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Contact</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
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
            <p className="font-v2-display text-[14px] font-bold uppercase tracking-wider text-concrete-500">Date juridice</p>
            <ul className="mt-4 grid gap-2 text-[14.5px] text-concrete-200">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>Nr. Reg. Com. {legal.regCom}</li>
              <li>{legal.capital}</li>
              <li>Zonă de livrare: {company.serviceAreas.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex w-full max-w-[1400px] flex-col gap-2 border-t border-concrete-700 pt-6 text-[13px] text-concrete-500 sm:flex-row sm:items-center sm:justify-between">
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
