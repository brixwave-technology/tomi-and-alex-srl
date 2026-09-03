import { images, type SiteImage } from "./images";

/**
 * Aggregate products. Technical fields are intentionally optional: the client
 * has not provided granulometry, usage notes or datasheets yet. When they do,
 * fill the fields and the catalog renders them automatically.
 */
export type AggregateProduct = {
  slug: string;
  name: string;
  summary: string;
  image: SiteImage;
  granulometry?: string;
  usage?: string[];
  availability?: string;
  datasheetUrl?: string;
};

export const aggregates: AggregateProduct[] = [
  {
    slug: "nisip",
    name: "Nisip",
    summary: "Agregat fin pentru betoane, mortare, șape și pat de pozare.",
    image: images.agregate.aerial,
  },
  {
    slug: "balast",
    name: "Balast",
    summary:
      "Amestec natural de nisip și pietriș pentru fundații de drumuri, platforme și umpluturi.",
    image: images.agregate.loader,
  },
  {
    slug: "sort-4-8",
    name: "Sort 4–8",
    summary: "Pietriș sortat pentru betoane, drenaje și straturi filtrante.",
    image: images.agregate.rocks,
  },
  {
    slug: "sort-8-16",
    name: "Sort 8–16",
    summary:
      "Pietriș sortat pentru betoane structurale și straturi de fundație.",
    image: images.agregate.cover,
  },
];

/**
 * Concrete classes. The client produces any class on request; the specific
 * list has not been provided, so this array stays empty and the page shows
 * a single statement instead of an invented table.
 */
export type ConcreteClass = {
  name: string;
  description?: string;
  exposure?: string;
};

export const concreteClasses: ConcreteClass[] = [];

export type ConcreteApplication = {
  title: string;
  description: string;
};

export const concreteApplications: ConcreteApplication[] = [
  {
    title: "Infrastructură",
    description: "Lucrări de artă, rețele, elemente de scurgere și structuri.",
  },
  {
    title: "Fundații",
    description: "Fundații continue, izolate și radiere pentru construcții.",
  },
  {
    title: "Platforme",
    description: "Platforme industriale, logistice și de depozitare.",
  },
  {
    title: "Drumuri",
    description: "Îmbrăcăminți rigide, borduri, rigole și lucrări conexe.",
  },
  {
    title: "Construcții",
    description: "Structuri civile și industriale, stâlpi, grinzi și planșee.",
  },
  {
    title: "Alte aplicații",
    description: "Soluții adaptate cerințelor fiecărui proiect.",
  },
];

/**
 * Prefabricated products. The client mentioned four or five products without
 * naming them; five slots are reserved and rendered as placeholders until the
 * real names, dimensions and photos arrive.
 */
export type PrefabProduct = {
  slug: string;
  name: string;
  summary: string;
  image: SiteImage | null;
  dimensions?: string;
  usage?: string;
  placeholder: boolean;
};

export const prefabProducts: PrefabProduct[] = [
  {
    slug: "produs-01",
    name: "Produs 01",
    summary: "Denumirea și specificațiile urmează să fie confirmate.",
    image: images.prefabricate.forms,
    placeholder: true,
  },
  {
    slug: "produs-02",
    name: "Produs 02",
    summary: "Denumirea și specificațiile urmează să fie confirmate.",
    image: images.prefabricate.slabs,
    placeholder: true,
  },
  {
    slug: "produs-03",
    name: "Produs 03",
    summary: "Denumirea și specificațiile urmează să fie confirmate.",
    image: images.prefabricate.blocks,
    placeholder: true,
  },
  {
    slug: "produs-04",
    name: "Produs 04",
    summary: "Denumirea și specificațiile urmează să fie confirmate.",
    image: null,
    placeholder: true,
  },
  {
    slug: "produs-05",
    name: "Produs 05",
    summary: "Denumirea și specificațiile urmează să fie confirmate.",
    image: null,
    placeholder: true,
  },
];
