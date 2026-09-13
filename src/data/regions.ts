import { contact } from "./company";

/**
 * Pagini locale pe județ. Conținut unic pentru fiecare zonă: orașe, distanțe
 * și timpi de livrare de la unitățile din Turulung, ce livrăm cel mai des,
 * întrebări specifice. Scopul: căutări de tip „beton Baia Mare”, „agregate Oradea”.
 */
export type RegionCity = { name: string; km: number; minutes: number };

export type Region = {
  slug: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  cities: RegionCity[];
  focus: string[];
  logistics: string;
  faq: { question: string; answer: string }[];
};

export const regions: Region[] = [
  {
    slug: "satu-mare",
    county: "Satu Mare",
    title: "Agregate, beton și prefabricate în județul Satu Mare | Tomi Alex",
    description: `Balastieră, stație de betoane și prefabricate în Turulung, județul Satu Mare. Livrări zilnice în Satu Mare, Carei, Negrești-Oaș, Livada, Tășnad. Tel. ${contact.phoneDisplay}.`,
    h1: "Agregate, beton și prefabricate în județul Satu Mare",
    intro:
      "Județul Satu Mare este zona noastră de bază: balastiera, stația de betoane și linia de prefabricate sunt în Turulung, iar echipele de infrastructură lucrează permanent pe șantiere din județ. Livrăm zilnic, de regulă în aceeași zi pentru comenzile primite până la prânz.",
    cities: [
      { name: "Turulung", km: 0, minutes: 0 },
      { name: "Livada", km: 9, minutes: 9 },
      { name: "Halmeu", km: 9, minutes: 14 },
      { name: "Satu Mare", km: 24, minutes: 26 },
      { name: "Negrești-Oaș", km: 35, minutes: 34 },
      { name: "Ardud", km: 47, minutes: 38 },
      { name: "Carei", km: 59, minutes: 54 },
      { name: "Tășnad", km: 79, minutes: 69 },
    ],
    focus: ["Beton pentru fundații, platforme și drumuri comunale", "Nisip și balast pentru șantiere rezidențiale și agricole", "Baze, inele și capace de cămin pentru rețelele de canalizare ale comunelor", "Rețele de apă și canalizare, modernizări de drumuri pentru primării"],
    logistics: "Autobasculantele și autobetonierele pleacă din Turulung; în Satu Mare, Livada, Halmeu și Negrești-Oaș ajungem în sub o oră. Pentru șantiere mari organizăm livrări în serie cu pompă de beton.",
    faq: [
      { question: "Livrați beton în municipiul Satu Mare?", answer: "Da, zilnic. Timpul de transport de la stația din Turulung este de aproximativ 40 de minute, în limita permisă de rețetă. Programați livrarea cu o zi înainte pentru intervalul dorit." },
      { question: "Pot ridica agregate direct de la balastieră?", answer: "Da, din Turulung, de luni până sâmbătă începând cu ora 06:30, cu mijloc de transport propriu. Cântărim și emitem documentele pe loc." },
    ],
  },
  {
    slug: "maramures",
    county: "Maramureș",
    title: "Beton, agregate și prefabricate în Maramureș, Baia Mare | Tomi Alex",
    description: `Beton, nisip, balast, sorturi și prefabricate livrate în Baia Mare, Seini, Baia Sprie, Sighetu Marmației și Târgu Lăpuș, din unitățile proprii. Tel. ${contact.phoneDisplay}.`,
    h1: "Beton, agregate și prefabricate în Maramureș",
    intro:
      "Maramureșul este al doilea județ ca volum de livrări. Seini este la mai puțin de jumătate de oră, iar Baia Mare la aproximativ o oră de unitățile noastre, ceea ce ne permite să livrăm beton în condiții de rețetă și agregate în cantități de șantier, cu programare de la o zi la alta.",
    cities: [
      { name: "Seini", km: 28, minutes: 23 },
      { name: "Baia Mare", km: 54, minutes: 56 },
      { name: "Baia Sprie", km: 63, minutes: 68 },
      { name: "Sighetu Marmației", km: 90, minutes: 101 },
      { name: "Târgu Lăpuș", km: 98, minutes: 95 },
      { name: "Vișeu de Sus", km: 159, minutes: 169 },
    ],
    focus: ["Beton C16/20 – C30/37 pentru construcții rezidențiale și hale", "Agregate pentru drumuri forestiere și platforme", "Elemente prefabricate de cămin pentru rețele de canalizare", "Lucrări de infrastructură pentru comune din zona Seini – Baia Mare"],
    logistics: "Pentru Baia Mare și împrejurimi programăm transporturile cu o zi înainte. Betonul se livrează cu aditivi de întârziere a prizei când distanța o cere; cantitățile de agregate peste 100 t se organizează în convoaie.",
    faq: [
      { question: "Cât durează livrarea betonului până la Baia Mare?", answer: "Aproximativ 75 de minute de la stația din Turulung, cu rețetă adaptată transportului. Confirmăm ora exactă telefonic, în ziua anterioară." },
      { question: "Livrați agregate în zona Sighetu Marmației?", answer: "Da, pentru cantități de șantier (de la 2–3 autobasculante). Pentru comenzi mai mici recomandăm gruparea cu alte lucrări din zonă pentru un cost de transport mai bun." },
    ],
  },
  {
    slug: "bihor",
    county: "Bihor",
    title: "Agregate, beton și prefabricate în Bihor, Oradea, Marghita | Tomi Alex",
    description: `Livrări de agregate, beton și prefabricate din beton în Oradea, Marghita, Săcueni, Valea lui Mihai și Salonta, din unitățile proprii Tomi Alex. Tel. ${contact.phoneDisplay}.`,
    h1: "Agregate, beton și prefabricate în județul Bihor",
    intro:
      "În Bihor lucrăm mai ales cu antreprenori generali și primării din nordul județului: Marghita, Săcueni și Valea lui Mihai sunt la sub două ore de Turulung. Pentru Oradea și Salonta livrăm agregate și prefabricate în cantități de șantier și beton pentru lucrări programate.",
    cities: [
      { name: "Valea lui Mihai", km: 94, minutes: 81 },
      { name: "Marghita", km: 105, minutes: 94 },
      { name: "Săcueni", km: 118, minutes: 101 },
      { name: "Oradea", km: 161, minutes: 139 },
      { name: "Salonta", km: 204, minutes: 172 },
      { name: "Beiuș", km: 217, minutes: 195 },
    ],
    focus: ["Prefabricate pentru cămine de canalizare (baze, inele, conuri, capace)", "Sorturi 4–8, 8–16 și 16–32 pentru stații de betoane și prefabricate", "Balast pentru fundații de drumuri și platforme logistice", "Subantrepriză pentru rețele de apă și canalizare"],
    logistics: "Transporturile spre Bihor se programează cu 1–2 zile înainte. Prefabricatele se livrează cu camion cu macara și se descarcă la punctul de montaj; agregatele, cu autobasculante de 40 t.",
    faq: [
      { question: "Livrați beton până la Oradea?", answer: "Pentru Oradea livrăm beton doar pentru lucrări programate, cu rețete pentru transport lung; de regulă recomandăm agregate și prefabricate, unde distanța nu afectează calitatea." },
      { question: "Aveți elemente de cămin în stoc?", answer: "Bazele cu ieșiri Ø200–Ø315, inelele de 10 cm – 1,00 m, conurile și capacele sunt în stoc permanent. Configurațiile speciale se produc pe comandă în 10–15 zile lucrătoare." },
    ],
  },
  {
    slug: "salaj",
    county: "Sălaj",
    title: "Agregate, beton și prefabricate în Sălaj, Zalău, Șimleu | Tomi Alex",
    description: `Livrăm nisip, balast, sorturi, beton și prefabricate din beton în Zalău, Șimleu Silvaniei, Jibou și Cehu Silvaniei. Unități proprii în Satu Mare. Tel. ${contact.phoneDisplay}.`,
    h1: "Agregate, beton și prefabricate în județul Sălaj",
    intro:
      "În Sălaj deservim lucrări de infrastructură și construcții din Zalău, Șimleu Silvaniei, Jibou și Cehu Silvaniei. Distanțele de 80–110 km fac agregatele și prefabricatele produsele cele mai solicitate; betonul se livrează pentru lucrări programate, cu rețete adaptate.",
    cities: [
      { name: "Cehu Silvaniei", km: 78, minutes: 76 },
      { name: "Jibou", km: 92, minutes: 91 },
      { name: "Șimleu Silvaniei", km: 104, minutes: 91 },
      { name: "Zalău", km: 109, minutes: 105 },
    ],
    focus: ["Balast și sorturi pentru modernizări de drumuri comunale", "Elemente de cămin pentru canalizări", "Beton pentru fundații și platforme, la lucrări programate", "Lucrări de rețele de apă și canalizare"],
    logistics: "Programăm transporturile cu 1–2 zile înainte și grupăm livrările pe zone pentru un cost de transport optim. Pentru lucrări cu volume mari discutăm un grafic săptămânal de livrări.",
    faq: [
      { question: "Care este cantitatea minimă pentru Sălaj?", answer: "O autobasculantă de agregate (aproximativ 24 t) sau un transport de prefabricate. Pentru beton, minimum o autobetonieră (8 mc), la lucrări programate." },
    ],
  },
];

export const regionBySlug = Object.fromEntries(regions.map((r) => [r.slug, r])) as Record<string, Region>;
