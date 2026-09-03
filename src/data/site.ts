/**
 * Durable company facts. Only confirmed information lives here.
 * Anything marked `null` has not been provided by the client yet;
 * the UI renders a discreet placeholder until it is filled in.
 */
export const company = {
  name: "Tomi Alex SRL",
  shortName: "Tomi Alex",
  established: "2008",
  tagline: "Construim. Amenajăm. Dezvoltăm.",
  taglineLines: ["Construim.", "Amenajăm.", "Dezvoltăm."],
  description:
    "Tomi Alex SRL este o companie specializată în lucrări de infrastructură și construcții, cu experiență în execuția rețelelor de alimentare cu apă și canalizare, lucrări de pregătire și amenajare a terenului, precum și în construcția și modernizarea de drumuri și poduri.",
  descriptionSecondary:
    "Punem la dispoziție soluții complete, de la pregătirea terenului și infrastructură până la execuția lucrărilor de construcții, adaptându-ne cerințelor fiecărui proiect.",
  claim:
    "De la infrastructură la construcții complexe, Tomi Alex SRL transformă proiectele în realitate.",
  heroSubtitle:
    "Lucrări de infrastructură, construcții și soluții complete pentru proiectele dumneavoastră.",
} as const;

/**
 * The phone number and the address are the site's conversion channel.
 * Fill `phone` (E.164, e.g. "+40740000000") and `phoneDisplay` (as printed)
 * and every call button on the site becomes live.
 */
export const contact = {
  phone: null as string | null,
  phoneDisplay: null as string | null,
  email: null as string | null,
  address: null as string | null,
  locality: null as string | null,
  schedule: null as string | null,
  location: {
    lat: 47.909954,
    lng: 23.08848,
    mapsUrl: "https://maps.google.com/?q=47.909954,23.088480",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=47.909954,23.088480",
    embedUrl:
      "https://maps.google.com/maps?q=47.909954,23.088480&z=13&hl=ro&output=embed",
  },
  /** Endpoint for the contact form. Empty means the form runs in demo mode. */
  formEndpoint: "",
} as const;

export const social = {
  facebook: "https://www.facebook.com/share/p/1BPsity3Rr/?mibextid=wwXIfr",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Agregate", href: "/agregate/" },
  { label: "Stație betoane", href: "/beton/" },
  { label: "Prefabricate", href: "/prefabricate/" },
  { label: "Infrastructură", href: "/infrastructura/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNav: NavItem[] = primaryNav.filter((i) => i.href !== "/");

export const cta = {
  primary: { label: "Cere o ofertă", href: "/contact/" },
  secondary: { label: "Descoperă serviciile", href: "/#capabilitati" },
  call: { label: "Sună acum" },
} as const;

/** Public site URL, used for metadata, sitemap and structured data. */
export const siteUrl = "https://brixwave-technology.github.io/tomi-and-alex-srl";

/** Service area used in structured data; the coordinates are confirmed, the county name is derived from them. */
export const serviceArea = {
  region: "Satu Mare",
  country: "RO",
} as const;
