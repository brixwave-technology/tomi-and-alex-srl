import Link from "next/link";
import { ArrowRight, CaretRight, Clock, Phone } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { JsonLdScript, orgId } from "@/components/seo/JsonLd";
import { company, contact } from "@/data/company";
import { guides, type Guide } from "@/data/guides";
import { siteUrl } from "@/data/seo";

function fmt(date: string) {
  return new Intl.DateTimeFormat("ro-RO", { dateStyle: "long" }).format(new Date(date));
}

function Crumbs({ current }: { current?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-5 pt-5 text-[13px] text-steel-400 sm:px-8">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-white">
            Acasă
          </Link>
        </li>
        <li aria-hidden>
          <CaretRight weight="bold" className="size-3" />
        </li>
        <li className={current ? "" : "font-semibold text-steel-200"}>
          <Link href="/ghiduri/" className="hover:text-white">
            Ghiduri utile
          </Link>
        </li>
        {current && (
          <>
            <li aria-hidden>
              <CaretRight weight="bold" className="size-3" />
            </li>
            <li aria-current="page" className="max-w-[60vw] truncate font-semibold text-steel-200">
              {current}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

export function GuideCard({ guide, delay = 0 }: { guide: Guide; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group flex flex-col bg-graphite-950 transition hover:bg-graphite-900">
      <Link href={`/ghiduri/${guide.slug}/`} className="flex h-full flex-col p-6">
        <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-steel-400">
          <Clock weight="fill" className="size-3.5 text-brand" aria-hidden />
          {guide.readingMinutes} min de citit
        </p>
        <h3 className="mt-3 text-xl font-bold leading-snug text-white">{guide.title}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-steel-400">{guide.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-bold text-brand-soft">
          Citește ghidul
          <ArrowRight weight="bold" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </Reveal>
  );
}

export function GuidesIndex() {
  return (
    <>
      <JsonLdScript data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Ghiduri utile", item: `${siteUrl}/ghiduri/` }] }} />
      <JsonLdScript data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Ghiduri utile Tomi Alex", itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: `${siteUrl}/ghiduri/${g.slug}/`, name: g.title })) }} />
      <Crumbs />
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
        <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl [animation-delay:150ms]">Ghiduri utile pentru beton, agregate și prefabricate</h1>
        <p className="anim-rise mt-5 max-w-2xl text-[16.5px] leading-relaxed text-steel-200 [animation-delay:300ms]">
          Răspunsuri scurte și practice la întrebările pe care le primim zilnic de la clienți din Satu Mare și Nord-Vest: ce clasă de beton, cât material, cum se comandă, ce prefabricate se folosesc.
        </p>
        <div className="mt-10 grid gap-px border border-steel-400/20 bg-steel-400/20 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((g, i) => (
            <GuideCard key={g.slug} guide={g} delay={i * 70} />
          ))}
        </div>
      </section>
    </>
  );
}

export function GuidePage({ guide }: { guide: Guide }) {
  const url = `${siteUrl}/ghiduri/${guide.slug}/`;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  return (
    <>
      <JsonLdScript data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Ghiduri utile", item: `${siteUrl}/ghiduri/` }, { "@type": "ListItem", position: 3, name: guide.title, item: url }] }} />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${url}#article`,
          headline: guide.title,
          description: guide.description,
          inLanguage: "ro-RO",
          datePublished: guide.published,
          dateModified: guide.updated,
          author: { "@id": orgId },
          publisher: { "@id": orgId },
          mainEntityOfPage: url,
          image: `${siteUrl}/og.jpg`,
          keywords: guide.keywords.join(", "),
          about: guide.related.map((r) => ({ "@type": "Thing", name: r.label, url: `${siteUrl}${r.href}` })),
        }}
      />
      <Crumbs current={guide.title} />
      <article className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <header className="max-w-3xl">
          <div className="anim-draw v1-rule w-20 text-brand" aria-hidden />
          <p className="anim-rise mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] font-bold uppercase tracking-[0.16em] text-steel-400 [animation-delay:100ms]">
            <span>Ghid · {guide.readingMinutes} min</span>
            <time dateTime={guide.updated}>Actualizat {fmt(guide.updated)}</time>
            <span>{company.name}</span>
          </p>
          <h1 className="v1-display anim-rise mt-5 text-4xl text-white sm:text-5xl [animation-delay:200ms]">{guide.title}</h1>
          <p className="anim-rise mt-6 text-[17px] leading-relaxed text-steel-200 [animation-delay:350ms]">{guide.intro}</p>
        </header>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {guide.sections.map((sec) => (
              <Reveal as="section" key={sec.heading} className="border-t border-steel-400/20 py-8">
                <h2 className="text-2xl font-bold text-white">{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-[16px] leading-[1.8] text-steel-200">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="mt-4 grid gap-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15.5px] leading-relaxed text-steel-200">
                        <span className="mt-2.5 size-1.5 shrink-0 bg-brand" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <div className="border border-steel-400/25 bg-graphite-900 p-6 lg:sticky lg:top-28">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Comenzi și informații</p>
              <a href={`tel:${contact.phone}`} className="v1-display mt-2 block text-3xl text-white">
                {contact.phoneDisplay}
              </a>
              <p className="mt-1 text-[13.5px] text-steel-200">{contact.hoursSummary}</p>
              <a href={`tel:${contact.phone}`} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[2px] bg-brand text-[14px] font-bold text-white transition hover:bg-brand-soft">
                <Phone weight="fill" className="size-4" aria-hidden />
                Sună acum
              </a>
              <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-steel-400">Pagini utile</p>
              <ul className="mt-3 divide-y divide-steel-400/20">
                {guide.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="group flex items-center justify-between gap-3 py-3 text-[14.5px] font-semibold text-white">
                      {r.label}
                      <ArrowRight weight="bold" className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
      <section className="border-t border-steel-400/20 bg-graphite-900 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">Alte ghiduri</p>
          </Reveal>
          <div className="mt-6 grid gap-px border border-steel-400/20 bg-steel-400/20 md:grid-cols-3">
            {others.map((g, i) => (
              <GuideCard key={g.slug} guide={g} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
