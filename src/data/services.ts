import { images, type SiteImage } from "./images";

export type Capability = {
  index: string;
  slug: string;
  title: string;
  kicker: string;
  description: string;
  href: string;
  image: SiteImage;
};

/** The four business directions shown on the homepage, in order. */
export const capabilities: Capability[] = [
  {
    index: "01",
    slug: "agregate",
    title: "Agregate",
    kicker: "Balastieră",
    description:
      "Nisip, balast și sorturi pentru betoane, drumuri și umpluturi, livrate direct din balastiera proprie.",
    href: "/agregate/",
    image: images.agregate.cover,
  },
  {
    index: "02",
    slug: "beton",
    title: "Beton",
    kicker: "Stație de betoane",
    description:
      "Beton produs în stație proprie pentru fundații, platforme, drumuri și structuri, în clasa cerută de proiect.",
    href: "/beton/",
    image: images.beton.pouring,
  },
  {
    index: "03",
    slug: "prefabricate",
    title: "Prefabricate",
    kicker: "Produse din beton",
    description:
      "Elemente prefabricate din beton pentru lucrări de infrastructură și construcții, gata de montaj.",
    href: "/prefabricate/",
    image: images.prefabricate.forms,
  },
  {
    index: "04",
    slug: "infrastructura",
    title: "Infrastructură",
    kicker: "Construcții și amenajări",
    description:
      "Pregătirea terenului, rețele de apă și canalizare, drumuri, poduri și lucrări de construcții.",
    href: "/infrastructura/",
    image: images.infrastructura.asphalt,
  },
];

export type InfrastructureGroup = {
  title: string;
  items: { title: string; description: string }[];
};

/** Infrastructure services grouped by phase, as confirmed by the client. */
export const infrastructureGroups: InfrastructureGroup[] = [
  {
    title: "Teren",
    items: [
      {
        title: "Pregătirea terenului",
        description:
          "Decopertări, excavații, terasamente și compactări care aduc terenul la cota proiectului.",
      },
      {
        title: "Amenajarea terenului",
        description:
          "Sistematizare verticală, platforme, drenaje și lucrări de amenajare pentru orice tip de investiție.",
      },
    ],
  },
  {
    title: "Rețele",
    items: [
      {
        title: "Alimentare cu apă",
        description:
          "Execuția rețelelor de alimentare cu apă, de la săpătură și montaj până la probe și punere în funcțiune.",
      },
      {
        title: "Canalizare",
        description:
          "Rețele de canalizare menajeră și pluvială, cămine, racorduri și refacerea suprafețelor afectate.",
      },
    ],
  },
  {
    title: "Drumuri și poduri",
    items: [
      {
        title: "Drumuri",
        description:
          "Construcția și modernizarea drumurilor: structuri rutiere, îmbrăcăminți și lucrări de scurgere a apelor.",
      },
      {
        title: "Poduri",
        description:
          "Construcția și modernizarea podurilor și podețelor, cu lucrări de infrastructură și suprastructură.",
      },
      {
        title: "Lucrări de construcții",
        description:
          "Execuția lucrărilor de construcții civile și industriale, integrate cu infrastructura proiectului.",
      },
    ],
  },
];

export type ProcessStep = { title: string; description: string };

/** How a collaboration starts. A real sequence, from the call to delivery. */
export const process: ProcessStep[] = [
  {
    title: "Ne sunați",
    description: "Ne spuneți ce lucrare sau ce materiale aveți nevoie, unde și până când.",
  },
  {
    title: "Venim în teren",
    description: "Vedem amplasamentul, accesul și cantitățile reale înainte de a promite ceva.",
  },
  {
    title: "Primiți oferta",
    description: "O ofertă clară, cu prețuri, termene și ce anume este inclus.",
  },
  {
    title: "Executăm și livrăm",
    description: "Echipele, utilajele și materialele noastre, coordonate de la început la sfârșit.",
  },
];
