import { company, contact } from "./company";

/**
 * SEO local pentru Nord-Vestul României. Toate titlurile, descrierile și
 * cuvintele-cheie ale paginilor sunt centralizate aici.
 */

export const siteUrl = "https://brixwave-technology.github.io/tomi-and-alex-srl";

/** Regiunea și județele deservite, cu orașele principale (pentru text și date structurate). */
export const serviceRegion = {
  name: "Nord-Vestul României",
  counties: [
    { name: "Satu Mare", cities: ["Satu Mare", "Carei", "Negrești-Oaș", "Tășnad", "Livada", "Turulung", "Halmeu", "Ardud"] },
    { name: "Maramureș", cities: ["Baia Mare", "Sighetu Marmației", "Seini", "Baia Sprie", "Târgu Lăpuș", "Vișeu de Sus"] },
    { name: "Bihor", cities: ["Oradea", "Marghita", "Săcueni", "Valea lui Mihai", "Salonta", "Beiuș"] },
    { name: "Sălaj", cities: ["Zalău", "Șimleu Silvaniei", "Jibou", "Cehu Silvaniei"] },
  ],
} as const;

export const countyNames = serviceRegion.counties.map((c) => c.name);
export const mainCities = serviceRegion.counties.flatMap((c) => c.cities.slice(0, 2));

export type PageSeo = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  /** Titlul H1 afișat în pagină. */
  h1: string;
  /** Numele scurt pentru breadcrumbs și navigare. */
  crumb: string;
};

const region = "Satu Mare, Maramureș, Bihor și Sălaj";

export const pagesSeo: Record<string, PageSeo> = {
  "": {
    slug: "",
    crumb: "Acasă",
    title: `${company.name} | Agregate, beton, prefabricate – Satu Mare, Nord-Vest`,
    description: `Balastieră, stație de betoane și prefabricate proprii în Satu Mare. Agregate și beton livrate în ${region}. Tel. ${contact.phoneDisplay}.`,
    h1: "Agregate, beton, prefabricate și lucrări de infrastructură.",
    keywords: [
      "agregate Satu Mare",
      "balastieră Satu Mare",
      "stație betoane Satu Mare",
      "beton Satu Mare",
      "prefabricate beton Satu Mare",
      "firmă construcții Satu Mare",
      "lucrări infrastructură Nord-Vest",
      "construcții drumuri Satu Mare",
      "rețele apă canalizare Satu Mare",
      "agregate Maramureș",
      "beton Baia Mare",
      "agregate Bihor",
      "beton Oradea",
      "balast nisip Sălaj",
      "Tomi Alex SRL",
      "Turulung",
    ],
  },
  agregate: {
    slug: "agregate",
    crumb: "Agregate",
    title: "Agregate: nisip, balast, sort 4–8, 8–16 | Satu Mare, Nord-Vest",
    description: `Nisip, balast, sort 4–8 și 8–16 din balastiera proprie Tomi Alex, cu buletin de laborator și livrare cu flota proprie în ${region}.`,
    h1: "Agregate pentru construcții în Satu Mare și Nord-Vest: nisip, balast, sort 4–8, sort 8–16.",
    keywords: [
      "agregate Satu Mare",
      "balastieră Satu Mare",
      "nisip Satu Mare",
      "balast Satu Mare",
      "sort 4-8",
      "sort 8-16",
      "pietriș Satu Mare",
      "agregate construcții Maramureș",
      "nisip balast Baia Mare",
      "agregate Bihor Oradea",
      "agregate Sălaj Zalău",
      "livrare agregate autobasculantă",
      "agregate pentru beton",
    ],
  },
  beton: {
    slug: "beton",
    crumb: "Stație betoane",
    title: "Stație de betoane: beton C8/10–C35/45 | Satu Mare, Nord-Vest",
    description: `Beton certificat SR EN 206, orice clasă, produs în stația proprie din Satu Mare, livrat cu autobetoniere și pompe în Maramureș, Bihor, Sălaj. Tel. ${contact.phoneDisplay}.`,
    h1: "Stație de betoane în Satu Mare: beton de orice clasă, cu certificat de calitate.",
    keywords: [
      "stație betoane Satu Mare",
      "beton Satu Mare",
      "beton la domiciliu Satu Mare",
      "beton C16/20",
      "beton C20/25",
      "beton C25/30",
      "beton C30/37",
      "pompă beton Satu Mare",
      "autobetonieră Satu Mare",
      "beton Baia Mare Maramureș",
      "beton Oradea Bihor",
      "beton Zalău Sălaj",
      "beton certificat SR EN 206",
      "livrare beton Nord-Vest",
    ],
  },
  prefabricate: {
    slug: "prefabricate",
    crumb: "Prefabricate",
    title: "Prefabricate din beton pentru cămine de canalizare | Satu Mare",
    description: "Baze, inele, conuri și capace de cămin din beton vibrat, produse în Satu Mare și livrate în tot Nord-Vestul României. Stoc permanent, livrare cu macara.",
    h1: "Prefabricate din beton în Satu Mare și Nord-Vest, gata de montaj.",
    keywords: [
      "prefabricate beton Satu Mare",
      "cămine de vizitare beton",
      "bază cămin beton",
      "inele cămin beton",
      "con reducție cămin",
      "capac cămin beton",
      "elemente cămin canalizare",
      "prefabricate beton Maramureș",
      "prefabricate beton Bihor",
      "prefabricate beton Sălaj",
      "producător prefabricate Nord-Vest",
    ],
  },
  contact: {
    slug: "contact",
    crumb: "Contact",
    title: `Contact ${company.name} | Turulung, județul Satu Mare`,
    description: `Tomi Alex SRL: ${contact.phoneDisplay}, ${contact.email}. Balastieră și stație de betoane în ${contact.address.locality}, Satu Mare. ${contact.hoursSummary}.`,
    h1: "Contact",
    keywords: ["contact Tomi Alex SRL", "telefon Tomi Alex", "balastieră Turulung", "stație betoane Turulung", "Tomi Alex Satu Mare adresă", "program Tomi Alex"],
  },
};

export type Faq = { question: string; answer: string };

/** Întrebări frecvente pe pagină, cu răspunsuri locale (afișate și ca FAQPage în JSON-LD). */
export const pageFaq: Record<string, Faq[]> = {
  "": [
    {
      question: "În ce zone livrați materiale și executați lucrări?",
      answer: `Livrăm agregate, beton și prefabricate în județul Satu Mare și în județele învecinate Maramureș, Bihor și Sălaj: ${mainCities.join(", ")} și localitățile din jur. Pentru lucrări de infrastructură de amploare ne deplasăm în tot Nord-Vestul României.`,
    },
    {
      question: "Cum comand materiale?",
      answer: `Telefonic, la ${contact.phoneDisplay}, sau pe e-mail la ${contact.email}. Spuneți-ne materialul, cantitatea și localitatea; confirmăm prețul și intervalul de livrare pe loc. Livrările se fac de luni până sâmbătă, de la 06:30.`,
    },
    {
      question: "Lucrați cu primării și proiecte finanțate din fonduri europene?",
      answer: "Da. Avem experiență în lucrări contractate de administrații locale din Satu Mare și județele vecine, inclusiv proiecte finanțate prin PNDL, PNRR și fonduri europene, cu documentația completă de calitate pentru recepții.",
    },
  ],
  agregate: [
    {
      question: "Ce cantitate minimă de agregate livrați?",
      answer: "De la o autobasculantă (aproximativ 24 t) până la volume de șantier. Pentru cantități mai mici puteți ridica materialul direct de la balastiera din Turulung, județul Satu Mare.",
    },
    {
      question: "Cât durează livrarea în Satu Mare, Baia Mare sau Oradea?",
      answer: "În județul Satu Mare livrăm de regulă în aceeași zi sau a doua zi lucrătoare. Pentru Maramureș, Bihor și Sălaj programăm transporturile cu 1–2 zile înainte, în funcție de cantitate.",
    },
    {
      question: "Agregatele au buletin de laborator?",
      answer: "Da. Fiecare sort este verificat granulometric în laboratorul propriu, iar fiecare transport pleacă cu certificat de calitate, necesar la recepții și la rețetele de beton.",
    },
  ],
  beton: [
    {
      question: "Ce clase de beton produceți?",
      answer: "Orice clasă cerută de proiect, de la C8/10 la C35/45, inclusiv rețete speciale (beton rutier, hidrotehnic, cu aditivi de iarnă), stabilite împreună cu proiectantul.",
    },
    {
      question: "Livrați beton în afara județului Satu Mare?",
      answer: "Da, cu autobetoniere de 8–10 mc, în Maramureș, Bihor și Sălaj, în limita timpului de transport permis de rețetă. Pentru șantiere mari organizăm livrări în serie, cu pompă de 28–36 m.",
    },
    {
      question: "Se poate comanda 1 mc de beton?",
      answer: "Da. Livrăm de la 1 mc, pentru fundații de garduri, trotuare, alei și anexe gospodărești, cu programare telefonică.",
    },
  ],
  prefabricate: [
    {
      question: "Aveți prefabricate în stoc?",
      answer: "Da. Bazele de cămin cu ieșirile uzuale (Ø200, Ø250, Ø315), inelele de 10 cm – 1,00 m, conurile și capacele sunt în stoc permanent. Configurațiile speciale se produc pe comandă în 10–15 zile lucrătoare.",
    },
    {
      question: "Livrați și descărcați la șantier?",
      answer: "Da, livrăm cu camioane echipate cu macara în Satu Mare, Maramureș, Bihor și Sălaj și descărcăm direct la punctul de montaj.",
    },
  ],
  contact: [],
};
