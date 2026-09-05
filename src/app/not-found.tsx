import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/company";
import { nav } from "@/lib/routes";

export const metadata: Metadata = { title: "Pagina nu a fost găsită", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Eroare 404</p>
      <h1 className="v1-display mt-4 text-4xl text-white sm:text-5xl">Pagina nu a fost găsită.</h1>
      <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-steel-200">Adresa este greșită sau pagina a fost mutată. Alegeți una dintre paginile de mai jos sau sunați-ne la {contact.phoneDisplay}.</p>
      <ul className="mt-8 grid gap-px border border-steel-400/20 bg-steel-400/20 sm:grid-cols-2 lg:grid-cols-5">
        {nav.map((n) => (
          <li key={n.href}>
            <Link href={n.href} className="group flex h-full flex-col bg-graphite-950 p-5 transition hover:bg-graphite-900">
              <span className="text-[16px] font-bold text-white">{n.label}</span>
              <span className="mt-1 text-[13px] text-steel-400">{n.description}</span>
              <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-brand-soft">
                Deschide
                <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
