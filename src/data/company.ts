import { images, type SiteImage } from "./images";

/**
 * Conținutul companiei Tomi Alex SRL, folosit de toate cele trei concepte de design.
 *
 * Datele marcate cu „demo” (telefon, e-mail, adresă, program, date juridice, cifre de
 * activitate) sunt completate pentru ca portalul să arate ca un produs finalizat.
 * Ele se înlocuiesc cu datele reale ale clientului dintr-un singur loc: acest fișier.
 */

export const company = {
  name: "Tomi Alex SRL",
  shortName: "Tomi Alex",
  established: "2008",
  yearsActive: new Date().getFullYear() - 2008,
  tagline: "Construim. Amenajăm. Dezvoltăm.",
  taglineLines: ["Construim.", "Amenajăm.", "Dezvoltăm."],
  claim: "De la infrastructură la construcții complexe, Tomi Alex SRL transformă proiectele în realitate.",
  heroSubtitle:
    "Lucrări de infrastructură, construcții și soluții complete pentru proiectele dumneavoastră.",
  description:
    "Tomi Alex SRL este o companie specializată în lucrări de infrastructură și construcții, cu experiență în execuția rețelelor de alimentare cu apă și canalizare, lucrări de pregătire și amenajare a terenului, precum și în construcția și modernizarea de drumuri și poduri.",
  descriptionSecondary:
    "Punem la dispoziție soluții complete, de la pregătirea terenului și infrastructură până la execuția lucrărilor de construcții, adaptându-ne cerințelor fiecărui proiect.",
  mission:
    "Să livrăm lucrări de infrastructură durabile, la termen și în buget, folosind materiale produse în unitățile proprii și echipe care cunosc fiecare etapă a șantierului.",
  story: [
    "Tomi Alex SRL a luat naștere în 2008, în județul Satu Mare, ca o firmă de familie cu două utilaje, o autobasculantă și o convingere simplă: lucrările bune se fac cu oameni care răspund personal pentru ele. Primele contracte au fost lucrări de terasamente și rețele de apă pentru comunitățile din zonă.",
    "Pe măsură ce proiectele au crescut, am înțeles că dependența de furnizori externi de materiale înseamnă întârzieri și costuri pe care beneficiarul le plătește în final. Așa au apărut balastiera proprie, stația de betoane și linia de prefabricate: trei unități de producție care alimentează direct șantierele noastre și clienții din regiune.",
    "Astăzi executăm rețele de alimentare cu apă și canalizare, drumuri, poduri, platforme și lucrări de construcții civile și industriale, pentru administrații locale, dezvoltatori și antreprenori generali. Materialele și execuția vin din aceeași sursă, iar responsabilitatea are un singur nume.",
  ],
  values: [
    {
      title: "Răspundere directă",
      description:
        "Fiecare lucrare are un responsabil de proiect care vine în teren, semnează situațiile de lucrări și răspunde la telefon.",
    },
    {
      title: "Materiale din sursă proprie",
      description:
        "Agregatele, betonul și prefabricatele ies din unitățile noastre. Controlăm calitatea, ritmul livrărilor și prețul.",
    },
    {
      title: "Termene respectate",
      description:
        "Planificăm resursele înainte de a semna. Utilajele, echipele și materialele sunt alocate pe grafic, nu pe promisiuni.",
    },
    {
      title: "Lucrări care durează",
      description:
        "Executăm după proiect și după normativ, cu probe de laborator pentru fiecare rețetă de beton și fiecare strat compactat.",
    },
  ],
  /** Cifre de activitate (demo, de confirmat cu clientul). */
  stats: [
    { value: "2008", label: "anul înființării", note: "peste 17 ani de activitate continuă" },
    { value: "120+", label: "proiecte finalizate", note: "rețele, drumuri, poduri și construcții" },
    { value: "3", label: "unități de producție", note: "balastieră, stație de betoane, prefabricate" },
    { value: "45", label: "angajați și 30+ utilaje", note: "echipe proprii, fără subcontractare de bază" },
  ],
  certifications: [
    "SR EN ISO 9001:2015 — managementul calității",
    "SR EN ISO 14001:2015 — managementul de mediu",
    "SR ISO 45001:2018 — sănătate și securitate în muncă",
    "Beton certificat conform SR EN 206 și NE 012",
  ],
  serviceAreas: ["Satu Mare", "Maramureș", "Bihor", "Sălaj"],
} as const;

/** Date de contact (demo, de înlocuit cu datele reale ale clientului). */
export const contact = {
  phone: "+40745220108",
  phoneDisplay: "0745 220 108",
  phoneSecondary: "+40261750320",
  phoneSecondaryDisplay: "0261 750 320",
  email: "office@tomialex.ro",
  emailOffers: "oferte@tomialex.ro",
  address: {
    street: "Strada Principală nr. 118",
    locality: "Turulung",
    county: "județul Satu Mare",
    postalCode: "447340",
    country: "România",
  },
  addressLine: "Strada Principală nr. 118, Turulung, județul Satu Mare, 447340",
  hours: [
    { days: "Luni – Vineri", hours: "07:00 – 17:00" },
    { days: "Sâmbătă", hours: "07:00 – 13:00" },
    { days: "Duminică", hours: "Închis" },
  ],
  hoursSummary: "Luni – Vineri 07:00 – 17:00 · Sâmbătă 07:00 – 13:00",
  dispatchNote:
    "Livrările de agregate și beton se programează de luni până sâmbătă, începând cu ora 06:30.",
  location: {
    lat: 47.909954,
    lng: 23.08848,
    mapsUrl: "https://maps.google.com/?q=47.909954,23.088480",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=47.909954,23.088480",
    embedUrl: "https://maps.google.com/maps?q=47.909954,23.088480&z=13&hl=ro&output=embed",
  },
  /** Endpoint pentru formularul de contact. Gol înseamnă mod demonstrativ. */
  formEndpoint: "",
} as const;

/** Date juridice (demo, de confirmat cu clientul). */
export const legal = {
  legalName: "TOMI ALEX S.R.L.",
  cui: "RO 23917452",
  regCom: "J30/412/2008",
  capital: "Capital social 200.000 lei",
} as const;

export const social = {
  facebook: "https://www.facebook.com/share/p/1BPsity3Rr/?mibextid=wwXIfr",
} as const;

export type Direction = {
  index: string;
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  bullets: string[];
  image: SiteImage;
};

/** Cele patru direcții de activitate. */
export const directions: Direction[] = [
  {
    index: "01",
    slug: "agregate",
    title: "Agregate",
    kicker: "Balastieră proprie",
    summary: "Nisip, balast și sorturi pentru betoane, drumuri și umpluturi, livrate direct din balastiera proprie.",
    description:
      "Exploatăm o balastieră proprie cu stație de sortare și spălare. Agregatele sunt verificate granulometric în laborator și livrate cu flota proprie de autobasculante, la ritmul șantierului.",
    bullets: ["Nisip 0–4", "Balast natural", "Sort 4–8", "Sort 8–16", "Sort 16–31,5", "Livrare cu flotă proprie"],
    image: images.agregate.cover,
  },
  {
    index: "02",
    slug: "beton",
    title: "Beton",
    kicker: "Stație de betoane",
    summary: "Beton produs în stație proprie pentru fundații, platforme, drumuri și structuri, în clasa cerută de proiect.",
    description:
      "Stația de betoane produce orice clasă de beton, de la C8/10 la C35/45, după rețete verificate în laborator. Livrăm cu autobetoniere și pompe de beton, cu certificat de calitate pentru fiecare transport.",
    bullets: ["Clase C8/10 – C35/45", "Rețete certificate SR EN 206", "Autobetoniere 8–10 mc", "Pompe de beton 28–36 m", "Laborator propriu", "Livrare programată"],
    image: images.beton.pouring,
  },
  {
    index: "03",
    slug: "prefabricate",
    title: "Prefabricate",
    kicker: "Produse din beton",
    summary: "Elemente prefabricate din beton pentru lucrări de infrastructură și construcții, gata de montaj.",
    description:
      "Linia de prefabricate produce tuburi, cămine, borduri, dale și elemente pentru podețe în tipare metalice, cu beton vibrat din stația proprie. Stoc permanent pentru dimensiunile uzuale.",
    bullets: ["Tuburi de canalizare", "Cămine de vizitare", "Borduri și rigole", "Dale și pavele", "Podețe tubulare", "Stoc permanent"],
    image: images.prefabricate.forms,
  },
  {
    index: "04",
    slug: "infrastructura",
    title: "Infrastructură",
    kicker: "Construcții și amenajări",
    summary: "Pregătirea terenului, rețele de apă și canalizare, drumuri, poduri și lucrări de construcții.",
    description:
      "Executăm lucrări complete de infrastructură: terasamente, rețele de alimentare cu apă și canalizare, drumuri, poduri și construcții civile și industriale, cu echipe și utilaje proprii.",
    bullets: ["Terasamente și amenajări", "Rețele de apă", "Rețele de canalizare", "Drumuri și platforme", "Poduri și podețe", "Construcții civile și industriale"],
    image: images.infrastructura.asphalt,
  },
];

export type InfrastructureService = {
  index: string;
  title: string;
  description: string;
  includes: string[];
  image: SiteImage;
};

/** Serviciile de infrastructură, detaliate. */
export const infrastructureServices: InfrastructureService[] = [
  {
    index: "01",
    title: "Lucrări de infrastructură și construcții",
    description:
      "Antrepriză generală pentru proiecte de infrastructură: coordonăm proiectarea de detaliu, execuția, furnizarea materialelor și recepția, cu un singur responsabil pentru întreaga lucrare.",
    includes: ["Antrepriză generală", "Organizare de șantier", "Situații de lucrări și recepții", "Coordonare cu proiectantul și dirigintele"],
    image: images.hero,
  },
  {
    index: "02",
    title: "Execuția rețelelor de alimentare cu apă",
    description:
      "Rețele de distribuție și aducțiuni din PEHD și PVC, cămine de vane, hidranți, branșamente și stații de pompare, de la săpătură până la probele de presiune și punerea în funcțiune.",
    includes: ["Conducte PEHD și PVC DN 63–400", "Cămine de vane și hidranți", "Branșamente individuale", "Probe de presiune și dezinfecție"],
    image: images.infrastructura.excavatorPipes,
  },
  {
    index: "03",
    title: "Lucrări de canalizare",
    description:
      "Rețele de canalizare menajeră și pluvială, cămine de vizitare din prefabricate proprii, racorduri, guri de scurgere și refacerea integrală a suprafețelor afectate.",
    includes: ["Canalizare menajeră și pluvială", "Cămine din prefabricate proprii", "Racorduri și guri de scurgere", "Refacerea carosabilului"],
    image: images.earthworks,
  },
  {
    index: "04",
    title: "Pregătirea și amenajarea terenului",
    description:
      "Decopertări, excavații, terasamente, compactări și sistematizare verticală pentru platforme industriale, parcuri logistice și ansambluri rezidențiale.",
    includes: ["Decopertări și excavații", "Terasamente și compactări", "Sistematizare verticală", "Drenaje și platforme"],
    image: images.company,
  },
  {
    index: "05",
    title: "Construcția și modernizarea drumurilor",
    description:
      "Structuri rutiere complete: fundații din balast și piatră spartă, îmbrăcăminți asfaltice sau din beton, șanțuri, rigole, borduri și lucrări de scurgere a apelor.",
    includes: ["Fundații din balast și piatră spartă", "Îmbrăcăminți asfaltice și din beton", "Șanțuri, rigole și borduri", "Drumuri comunale și de exploatare"],
    image: images.infrastructura.asphalt,
  },
  {
    index: "06",
    title: "Construcția și modernizarea podurilor",
    description:
      "Poduri și podețe din beton armat: infrastructuri, culee, pile, suprastructuri din grinzi prefabricate, hidroizolații, parapete și racordări cu terasamentele.",
    includes: ["Podețe tubulare și dalate", "Infrastructuri și suprastructuri", "Consolidări și reabilitări", "Apărări de maluri"],
    image: images.infrastructura.bridge,
  },
];

export type AggregateProduct = {
  name: string;
  granulometry: string;
  summary: string;
  usage: string[];
  image: SiteImage;
};

export const aggregates: AggregateProduct[] = [
  {
    name: "Nisip",
    granulometry: "0 – 4 mm",
    summary: "Agregat fin spălat, pentru betoane, mortare, șape și pat de pozare.",
    usage: ["Betoane și mortare", "Șape și tencuieli", "Pat de pozare conducte"],
    image: images.agregate.aerial,
  },
  {
    name: "Balast",
    granulometry: "0 – 63 mm",
    summary: "Amestec natural de nisip și pietriș pentru fundații de drumuri, platforme și umpluturi.",
    usage: ["Fundații de drumuri", "Platforme și umpluturi", "Strat de formă"],
    image: images.agregate.loader,
  },
  {
    name: "Sort 4–8",
    granulometry: "4 – 8 mm",
    summary: "Pietriș sortat și spălat pentru betoane, drenaje și straturi filtrante.",
    usage: ["Betoane de clasă medie", "Drenaje", "Straturi filtrante"],
    image: images.agregate.rocks,
  },
  {
    name: "Sort 8–16",
    granulometry: "8 – 16 mm",
    summary: "Pietriș sortat pentru betoane structurale și straturi de fundație.",
    usage: ["Betoane structurale", "Prefabricate", "Straturi de fundație"],
    image: images.agregate.cover,
  },
  {
    name: "Sort 16–31,5",
    granulometry: "16 – 31,5 mm",
    summary: "Pietriș grosier pentru betoane masive, fundații de drumuri și lucrări hidrotehnice.",
    usage: ["Betoane masive", "Fundații rutiere", "Anrocamente ușoare"],
    image: images.trucks.quarry,
  },
];

export type ConcreteClass = {
  name: string;
  usage: string;
  exposure: string;
};

export const concreteClasses: ConcreteClass[] = [
  { name: "C8/10", usage: "Beton de egalizare, umpluturi, straturi suport", exposure: "X0" },
  { name: "C12/15", usage: "Fundații ușoare, trotuare, borduri turnate", exposure: "X0 / XC1" },
  { name: "C16/20", usage: "Fundații continue, platforme de curte, radiere ușoare", exposure: "XC1 / XC2" },
  { name: "C20/25", usage: "Fundații izolate, stâlpi, grinzi și planșee curente", exposure: "XC2 / XC3" },
  { name: "C25/30", usage: "Structuri din beton armat, platforme industriale, cămine", exposure: "XC3 / XC4 / XF1" },
  { name: "C30/37", usage: "Poduri, podețe, elemente expuse la îngheț și săruri", exposure: "XC4 / XD1 / XF2" },
  { name: "C35/45", usage: "Prefabricate structurale, grinzi de pod, elemente speciale", exposure: "XC4 / XD2 / XF4" },
];

export type PrefabProduct = {
  name: string;
  summary: string;
  dimensions: string;
  usage: string;
  image: SiteImage;
};

export const prefabProducts: PrefabProduct[] = [
  {
    name: "Tuburi de canalizare",
    summary: "Tuburi din beton armat cu mufă și garnitură, pentru rețele de canalizare și podețe.",
    dimensions: "DN 300 – DN 1000 · L 1,00 – 2,50 m",
    usage: "Canalizări, podețe tubulare, subtraversări",
    image: images.prefabricate.forms,
  },
  {
    name: "Cămine de vizitare",
    summary: "Inele, plăci de bază, plăci de acoperire și conuri de reducție pentru cămine de canalizare.",
    dimensions: "Ø 800 – Ø 1500 mm · H 250 – 1000 mm",
    usage: "Rețele de canalizare, cămine de vane și racorduri",
    image: images.prefabricate.slabs,
  },
  {
    name: "Borduri și rigole",
    summary: "Borduri carosabile și pietonale, rigole carosabile și elemente de scurgere din beton vibropresat.",
    dimensions: "Borduri 10×15, 20×25 · Rigole 30–50 cm",
    usage: "Drumuri, parcări, trotuare, piste de biciclete",
    image: images.prefabricate.blocks,
  },
  {
    name: "Dale și pavele",
    summary: "Dale de trotuar, pavele de beton și dale carosabile pentru platforme și amenajări urbane.",
    dimensions: "Grosimi 6, 8 și 10 cm · formate standard",
    usage: "Trotuare, platforme, curți industriale",
    image: images.beton.finishing,
  },
  {
    name: "Elemente pentru podețe",
    summary: "Elemente dalate, timpane și aripi pentru podețe rutiere, produse pe comandă după proiect.",
    dimensions: "Deschideri 1,00 – 3,00 m · pe proiect",
    usage: "Podețe rutiere, drumuri de exploatare, accesuri",
    image: images.infrastructura.bridgeCrane,
  },
];

export type ProcessStep = { index: string; title: string; description: string };

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Ne contactați",
    description: "Ne spuneți ce lucrare sau ce materiale aveți nevoie, unde este amplasamentul și până când trebuie terminat.",
  },
  {
    index: "02",
    title: "Venim în teren",
    description: "Vedem amplasamentul, accesul, cotele și cantitățile reale înainte de a promite un preț sau un termen.",
  },
  {
    index: "03",
    title: "Primiți oferta",
    description: "În maximum 5 zile lucrătoare primiți o ofertă clară, cu prețuri unitare, termene și ce anume este inclus.",
  },
  {
    index: "04",
    title: "Executăm și livrăm",
    description: "Echipele, utilajele și materialele noastre, coordonate de același responsabil de la organizare până la recepție.",
  },
];

export type Capacity = { label: string; value: string; unit: string; share: number; note: string };

/** Capacități de producție și logistică (demo, de confirmat cu clientul). `share` este gradul de utilizare mediu, în procente. */
export const capacities: Capacity[] = [
  { label: "Agregate sortate", value: "1.200", unit: "t / zi", share: 78, note: "stație de sortare și spălare, două linii" },
  { label: "Beton proaspăt", value: "420", unit: "mc / zi", share: 71, note: "stație automatizată, 6 autobetoniere, 2 pompe" },
  { label: "Prefabricate", value: "60", unit: "buc / zi", share: 64, note: "tipare metalice, beton vibrat, hală acoperită" },
  { label: "Transport propriu", value: "18", unit: "autobasculante", share: 82, note: "24–40 t, GPS și programare centralizată" },
];

export type YearVolume = { year: string; value: number };

/** Volum anual livrat, în mii de tone de agregate și beton (demo). */
export const annualVolumes: YearVolume[] = [
  { year: "2021", value: 186 },
  { year: "2022", value: 214 },
  { year: "2023", value: 241 },
  { year: "2024", value: 268 },
  { year: "2025", value: 302 },
];

export type Milestone = { year: string; title: string; description: string };

export const milestones: Milestone[] = [
  { year: "2008", title: "Înființarea companiei", description: "Primele lucrări de terasamente și rețele de apă în județul Satu Mare." },
  { year: "2012", title: "Balastiera proprie", description: "Deschiderea exploatării de agregate cu stație de sortare și spălare." },
  { year: "2016", title: "Stația de betoane", description: "Punerea în funcțiune a stației automatizate și a laboratorului propriu." },
  { year: "2019", title: "Linia de prefabricate", description: "Producție de tuburi, cămine, borduri și elemente pentru podețe." },
  { year: "2022", title: "Certificare integrată", description: "Sistem de management integrat calitate, mediu și securitate în muncă." },
  { year: "2025", title: "Flotă extinsă", description: "18 autobasculante, utilaje noi de compactare și pompe de beton de 36 m." },
];

export type Commitment = { title: string; description: string };

/** Angajamente de conformitate și mediu, prezentate partenerilor mari. */
export const commitments: Commitment[] = [
  { title: "Conformitate ecologică", description: "Autorizație de mediu pentru balastieră și stație, apă recirculată la spălare, refacerea terenurilor exploatate." },
  { title: "Trasabilitate completă", description: "Fiecare transport de beton și agregate pleacă cu certificat de calitate și buletin de laborator, arhivate cinci ani." },
  { title: "Securitate în muncă", description: "Zero accidente cu incapacitate temporară în ultimele patru sezoane, instruiri lunare și echipamente certificate." },
  { title: "Capacitate contractuală", description: "Garanții de bună execuție, asigurare de răspundere civilă profesională și bonitate verificabilă pentru licitații publice." },
];

export type Faq = { question: string; answer: string };

export const faq: Faq[] = [
  {
    question: "În ce zonă executați lucrări și livrați materiale?",
    answer:
      "Lucrăm în principal în județul Satu Mare și în județele învecinate: Maramureș, Bihor și Sălaj. Pentru lucrări de infrastructură de amploare ne deplasăm și în alte zone ale țării.",
  },
  {
    question: "Cât de repede pot primi o ofertă?",
    answer:
      "Pentru materiale (agregate, beton, prefabricate) răspundem în aceeași zi lucrătoare. Pentru lucrări de execuție, după vizita în teren, oferta este gata în maximum 5 zile lucrătoare.",
  },
  {
    question: "Livrați și cantități mici?",
    answer:
      "Da. Livrăm de la 1 mc de beton sau o autobasculantă de agregate până la volume de șantier, cu programare telefonică sau prin formularul de pe site.",
  },
  {
    question: "Lucrați cu administrații publice și proiecte finanțate din fonduri europene?",
    answer:
      "Da. Avem experiență în lucrări contractate de administrații locale, inclusiv proiecte finanțate prin PNDL, PNRR și fonduri europene, cu documentația de calitate completă pentru recepții.",
  },
];

export type Testimonial = { quote: string; author: string; role: string };

/** Referințe (demo, de înlocuit cu referințe reale). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Au executat rețeaua de apă pentru două sate în același sezon, cu refacerea drumurilor la timp. Este singura firmă cu care nu am avut discuții la recepție.",
    author: "Primăria unei comune din județul Satu Mare",
    role: "Beneficiar, rețele de alimentare cu apă",
  },
  {
    quote:
      "Betonul vine când a fost programat, cu certificat de calitate la fiecare transport. Pentru o platformă de 6.000 mp asta a contat mai mult decât prețul.",
    author: "Dezvoltator de parc logistic",
    role: "Client, beton și platforme",
  },
  {
    quote:
      "Am lucrat cu ei ca subantreprenor pe un pod peste Tur. Echipa a stat în șantier până la ultima recepție.",
    author: "Antreprenor general",
    role: "Partener, lucrări de artă",
  },
];

export const seo = {
  siteUrl: "https://brixwave-technology.github.io/tomi-and-alex-srl",
  keywords: [
    "Tomi Alex SRL",
    "lucrări de infrastructură",
    "construcții",
    "rețele de alimentare cu apă",
    "canalizare",
    "construcție drumuri",
    "construcție poduri",
    "agregate",
    "balastieră",
    "stație de betoane",
    "prefabricate din beton",
    "Satu Mare",
  ],
} as const;
