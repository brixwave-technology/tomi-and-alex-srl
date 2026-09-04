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
      "Layout structurat rigid, paletă navy și roșul din logo, interfață curată cu butoane solide. Fiecare secțiune demonstrează capacitatea de execuție și se încheie cu o cerere de ofertă.",
    traits: ["Navy și oțel", "Grilă strictă", "Tabele și certificări", "Telefon mereu la vedere"],
    swatches: ["#0B1B33", "#1B3559", "#D23B3C", "#EEF2F8"],
    typeface: "Archivo",
  },
  {
    id: "v2",
    href: "/v2/",
    label: "Design V2",
    name: "Modern Logistics & High-Tech Fleet",
    concept: "Precizie, eficiență, flux continuu",
    summary:
      "Aspect corporativ ultra-modern, bazat pe date: griuri metalizate, oțel și negru, cu accente fine de albastru electric. Linii drepte, capacități și volume prezentate ca într-un centru de comandă.",
    traits: ["Carbon și oțel", "Layout bazat pe date", "Grafice integrate", "Navigare laterală fixă"],
    swatches: ["#0F1113", "#2C313A", "#2F6BFF", "#D7DCE4"],
    typeface: "IBM Plex Sans",
  },
  {
    id: "v3",
    href: "/v3/",
    label: "Design V3",
    name: "Infrastructure Elite & Premium Partner",
    concept: "Capacitate, excelență, conformitate",
    summary:
      "Design exclusivist pentru contractori mari: antracit mat cu texturi fine de granit și accente de bronz închis. Tipografie geometrică masivă, spații aerisite, angajamente de conformitate și mediu.",
    traits: ["Antracit și granit", "Bronz închis", "Titluri masive", "Spații aerisite"],
    swatches: ["#141416", "#26262A", "#A8814A", "#ECE8E1"],
    typeface: "Sora",
  },
];

export const designById = Object.fromEntries(designs.map((d) => [d.id, d])) as Record<DesignId, Design>;
