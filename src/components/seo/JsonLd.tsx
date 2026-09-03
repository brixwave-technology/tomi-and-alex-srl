import { company, contact, serviceArea, siteUrl, social } from "@/data/site";

/**
 * Structured data for the organisation. Only confirmed facts are emitted;
 * phone, address and opening hours join automatically once they exist in
 * `src/data/site.ts`.
 */
export function OrganizationJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/images/logo-tomi-alex.png`,
    image: `${siteUrl}/og.jpg`,
    slogan: company.tagline,
    description: company.description,
    foundingDate: company.established,
    sameAs: [social.facebook],
    areaServed: { "@type": "AdministrativeArea", name: serviceArea.region, addressCountry: serviceArea.country },
    geo: { "@type": "GeoCoordinates", latitude: contact.location.lat, longitude: contact.location.lng },
    hasMap: contact.location.mapsUrl,
    knowsAbout: [
      "Lucrări de infrastructură",
      "Rețele de alimentare cu apă",
      "Canalizare",
      "Construcția și modernizarea drumurilor",
      "Construcția și modernizarea podurilor",
      "Agregate pentru construcții",
      "Producție de beton",
      "Prefabricate din beton",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Agregate pentru construcții (nisip, balast, sort 4-8, sort 8-16)" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Beton" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Prefabricate din beton" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lucrări de infrastructură și construcții" } },
    ],
  };
  if (contact.phone) data.telephone = contact.phone;
  if (contact.email) data.email = contact.email;
  if (contact.address) {
    data.address = { "@type": "PostalAddress", streetAddress: contact.address, addressLocality: contact.locality ?? undefined, addressCountry: "RO" };
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: company.name,
    inLanguage: "ro-RO",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Acasă", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
