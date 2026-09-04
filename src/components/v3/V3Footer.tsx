import Link from "next/link";
import { TomiAlexLogo } from "@/components/shared/TomiAlexLogo";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { BackToIndexLink, ChooseDesignButton } from "@/components/portal/DesignShell";
import { BrixwaveLink } from "@/components/portal/BrixwaveLogo";
import { company, contact, legal, social } from "@/data/company";
import { brixwave } from "@/data/brixwave";
import { navFor } from "@/lib/routes";

const nav = navFor("v3");

export function V3Footer() {
  return (
    <>
      <section className="px-6 py-20 sm:px-10" aria-label="Alegerea acestui design">
        <Reveal className="mx-auto w-full max-w-[1440px] border-y border-brand/25 py-14 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-granite-300">Design V3 · Infrastructure Elite &amp; Premium Partner</p>
          <h2 className="v3-display balance mx-auto mt-6 max-w-3xl font-v3-display text-3xl text-limestone sm:text-4xl">
            Este aceasta <span className="text-brand-soft">direcția</span> pe care o alegeți?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-granite-300">
            Confirmați varianta preferată sau reveniți la Index pentru a compara. Concept dezvoltat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ChooseDesignButton className="inline-flex h-13 items-center justify-center border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-brand-soft data-[chosen]:border-emerald-500 data-[chosen]:bg-emerald-500" />
            <BackToIndexLink className="inline-flex h-13 items-center justify-center border border-limestone/40 px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-limestone transition-all duration-500 hover:bg-limestone hover:text-anthracite-950" />
          </div>
        </Reveal>
      </section>
      <footer className="px-6 pb-40 pt-4 sm:px-10 lg:pb-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <TomiAlexLogo height={64} />
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-granite-300">{company.descriptionSecondary}</p>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="v3-link mt-6 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-limestone">
              Facebook
              <ArrowUpRight weight="regular" className="size-3.5" aria-hidden />
            </a>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Pagini</p>
            <ul className="mt-5 grid gap-2 text-[14.5px] text-limestone">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="v3-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Contact</p>
            <ul className="mt-5 grid gap-2 text-[14.5px] text-limestone">
              <li>
                <a href={`tel:${contact.phone}`} className="v3-link">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="v3-link">
                  {contact.email}
                </a>
              </li>
              <li className="text-granite-300">{contact.addressLine}</li>
              <li className="text-granite-300">{contact.hoursSummary}</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">Juridic</p>
            <ul className="mt-5 grid gap-2 text-[13.5px] text-granite-300">
              <li>{legal.legalName}</li>
              <li>CUI {legal.cui}</li>
              <li>{legal.regCom}</li>
              <li>{legal.capital}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 flex w-full max-w-[1440px] flex-col gap-2 border-t border-brand/20 pt-6 text-[11px] uppercase tracking-[0.18em] text-granite-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <p>
            Website realizat de <BrixwaveLink>{brixwave.name}</BrixwaveLink>
          </p>
        </div>
      </footer>
    </>
  );
}
