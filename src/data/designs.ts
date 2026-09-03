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
    name: "Corporate / Autoritate",
    concept: "Structură, încredere, conversie",
    summary:
      "Layout structurat pe grilă, paletă închisă și profesională, interfață curată. Fiecare secțiune răspunde la întrebarea „pot executa?” și se încheie cu o cerere de ofertă.",
    traits: ["Navy și oțel", "Grilă strictă", "Date și certificări", "Telefon mereu la vedere"],
    swatches: ["#0B1B33", "#1B3559", "#D23B3C", "#EEF2F8"],
    typeface: "Archivo",
  },
  {
    id: "v2",
    href: "/v2/",
    label: "Design V2",
    name: "Creativ / Inovator",
    concept: "Asimetrie, culoare, energie",
    summary:
      "Arhitectură asimetrică, paletă vibrantă, elemente grafice neconvenționale și tranziții dinamice. Un brand de construcții care arată că are curaj.",
    traits: ["Coral, lime și violet", "Grilă ruptă", "Stickere și marquee", "Mișcare la fiecare scroll"],
    swatches: ["#FF4D3D", "#CBFF3A", "#5B2EFF", "#FFF6E9"],
    typeface: "Syne",
  },
  {
    id: "v3",
    href: "/v3/",
    label: "Design V3",
    name: "Minimalist / Premium",
    concept: "Spațiu, tipografie, lux",
    summary:
      "Spațiu alb generos, tipografie supradimensionată cu serife, animații fluide și un aspect de lux. Mai puține elemente, fiecare spus cu greutate.",
    traits: ["Ivoriu, cerneală și bronz", "Titluri uriașe", "Linii subțiri", "Animații lente"],
    swatches: ["#F8F6F1", "#141414", "#9C7C4E", "#E4E0D8"],
    typeface: "Fraunces",
  },
];

export const designById = Object.fromEntries(designs.map((d) => [d.id, d])) as Record<DesignId, Design>;
