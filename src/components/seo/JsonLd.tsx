import { aggregates, company, concreteClasses, contact, legal, prefabProducts, social } from "@/data/company";
import { logo } from "@/data/images";
import { countyNames, pageFaq, pagesSeo, serviceRegion, siteUrl } from "@/data/seo";
import { pageHref } from "@/lib/routes";

function Script({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const orgId = `${siteUrl}/#organization`;

/** Organizația (afacere locală de construcții și materiale), o singură dată, în layout. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": orgId,
    name: company.name,
    legalName: legal.legalName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}${logo.full.dark.replace(process.env.NEXT_PUBLIC_BASE_PATH ?? "", "")}`,
    image: `${siteUrl}/og.jpg`,
    description: company.description,
    foundingDate: company.established,
    slogan: company.tagline,
    telephone: contact.phone,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.county.replace("județul ", ""),
      postalCode: contact.address.postalCode,
      addressCountry: "RO",
    },
    geo: { "@type": "GeoCoordinates", latitude: contact.location.lat, longitude: contact.location.lng },
    hasMap: contact.location.mapsUrl,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "13:00" },
    ],
    areaServed: serviceRegion.counties.map((c) => ({ "@type": "AdministrativeArea", name: `Județul ${c.name}`, containedInPlace: { "@type": "Country", name: "România" } })),
    sameAs: [social.facebook],
    contactPoint: [
      { "@type": "ContactPoint", telephone: contact.phone, contactType: "sales", areaServed: "RO", availableLanguage: "ro" },
      { "@type": "ContactPoint", telephone: contact.phoneSecondary, contactType: "customer service", areaServed: "RO", availableLanguage: "ro" },
    ],
    knowsAbout: ["agregate", "balastieră", "beton", "prefabricate din beton", "lucrări de infrastructură", "rețele de apă și canalizare", "drumuri", "poduri"],
    makesOffer: [
      ...aggregates.map((a) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: `${a.name} ${a.granulometry}`, description: a.summary, category: "Agregate" }, areaServed: countyNames })),
      { "@type": "Offer", itemOffered: { "@type": "Product", name: `Beton ${concreteClasses[0].name} – ${concreteClasses[concreteClasses.length - 1].name}`, description: "Beton de orice clasă, certificat SR EN 206, livrat cu autobetoniere și pompe.", category: "Beton" }, areaServed: countyNames },
      ...prefabProducts.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: p.name, description: p.summary, category: "Prefabricate din beton" }, areaServed: countyNames })),
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lucrări de infrastructură și construcții", description: "Rețele de alimentare cu apă și canalizare, terasamente, drumuri, poduri, construcții civile și industriale.", serviceType: "Construcții și infrastructură", provider: { "@id": orgId } }, areaServed: countyNames },
    ],
  };
  return <Script data={data} />;
}

export function WebSiteJsonLd() {
  return <Script data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: company.name, inLanguage: "ro-RO", publisher: { "@id": orgId } }} />;
}

/** Breadcrumb + WebPage + FAQ pentru o pagină. */
export function PageJsonLd({ slug }: { slug: string }) {
  const seo = pagesSeo[slug];
  const url = `${siteUrl}${pageHref(slug)}`;
  const items = [{ "@type": "ListItem", position: 1, name: "Acasă", item: `${siteUrl}/` }];
  if (slug) items.push({ "@type": "ListItem", position: 2, name: seo.crumb, item: url });
  const faq = pageFaq[slug] ?? [];
  return (
    <>
      <Script data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }} />
      <Script data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: seo.title, description: seo.description, inLanguage: "ro-RO", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": orgId } }} />
      {faq.length > 0 && <Script data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />}
    </>
  );
}
