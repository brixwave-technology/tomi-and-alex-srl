export type DesignId = "v1" | "v2" | "v3";

export type Design = {
  id: DesignId;
  href: string;
  label: string;
  name: string;
  concept: string;
  summary: string;
  traits: string[];
  /** Culorile reprezentative, afișate pe cardul din index. */
  swatches: string[];
  /** Fontul de titlu, pentru previzualizarea din index. */
  typeface: string;
};

export const designs: Design[] = [
  {
    id: "v1",
    href: "/v1/",
    label: "Design V1",
    name: "Corporate Clasic & Autoritate",
    concept: "Structură, încredere, conversie directă",
    summary:
      "Layout structurat rigid, grafit închis cu roșul din logo, interfață curată cu butoane solide. Fiecare secțiune demonstrează capacitatea de execuție și se încheie cu un apel telefonic direct.",
    traits: ["Grafit și oțel", "Grilă strictă", "Tabele și certificări", "Telefon mereu la vedere"],
    swatches: ["#141518", "#282B31", "#D23B3C", "#F0F0F2"],
    typeface: "Archivo",
  },
  {
    id: "v2",
    href: "/v2/",
    label: "Design V2",
    name: "Industrial Authority & Trust",
    concept: "Heavy-duty, comenzi rapide, materiale",
    summary:
      "Layout solid, structurat rigid, cu asfalt negru, beton gri și roșul din logo. Butoane masive, comandă rapidă de materiale în prima secțiune, fișe tehnice și capacități de producție la vedere.",
    traits: ["Asfalt, beton și roșu", "Butoane masive", "Comandă rapidă", "Benzi de semnalizare"],
    swatches: ["#0B0B0C", "#6A6A70", "#D23B3C", "#E9E9EB"],
    typeface: "Barlow Condensed",
  },
  {
    id: "v3",
    href: "/v3/",
    label: "Design V3",
    name: "Infrastructure Elite & Premium Partner",
    concept: "Capacitate, excelență, conformitate",
    summary:
      "Design exclusivist pentru contractori mari: antracit mat cu texturi fine de granit și accente rafinate în roșul logo-ului. Tipografie geometrică masivă, spații aerisite, angajamente de conformitate și mediu.",
    traits: ["Antracit și granit", "Accente roșii fine", "Titluri masive", "Spații aerisite"],
    swatches: ["#141416", "#26262A", "#D23B3C", "#EFEFF1"],
    typeface: "Sora",
  },
];

export const designById = Object.fromEntries(designs.map((d) => [d.id, d])) as Record<DesignId, Design>;
