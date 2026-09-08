/**
 * Image manifest. Every photo used on the site is referenced from here so
 * replacing the temporary stock photography with the company's own images
 * is a matter of swapping files in /public/images and updating alt text.
 *
 * Current files are temporary Unsplash photos (free license), converted to
 * WebP at 1600px for fast loading; replace them with the company's own photos.
 */
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position for crops that should not centre (e.g. "center 80%"). */
  position?: string;
};

/** Static export on GitHub Pages lives under a base path; next/image does not add it for us. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (path: string) => `${basePath}${path}`;

const img = (
  file: string,
  alt: string,
  width = 1600,
  height = 1066,
  position?: string,
): SiteImage => ({ src: withBase(`/images/${file}`), alt, width, height, position });

export const logo = {
  full: {
    dark: withBase("/images/logo-tomi-alex.png"),
    light: withBase("/images/logo-tomi-alex-light.png"),
    width: 669,
    height: 354,
  },
  wordmark: {
    dark: withBase("/images/logo-wordmark.png"),
    light: withBase("/images/logo-wordmark-light.png"),
    width: 613,
    height: 182,
  },
} as const;

export const images = {
  hero: img(
    "hero-excavator.webp",
    "Excavator încărcând pământ într-o autobasculantă pe un șantier de infrastructură",
  ),
  company: img(
    "company-quarry.webp",
    "Excavator pe un front de agregate din balastieră",
    1600, 1065,
  ),
  earthworks: img(
    "earthworks.webp",
    "Buldozer executând terasamente pe un șantier",
    1600, 900,
  ),
  agregate: {
    cover: img(
      "agregate-conveyors.webp",
      "Depozite de nisip și balast cu benzi transportoare industriale",
    ),
    loader: img(
      "agregate-loader.webp",
      "Încărcător frontal încărcând balast într-o autobasculantă",
    ),
    rocks: img("agregate-rocks.webp", "Grămadă de piatră sortată", 1600, 1066, "center bottom"),
    aerial: img(
      "agregate-aerial.webp",
      "Vedere aeriană a unei stații de sortare cu benzi transportoare",
      1600, 900,
    ),
  },
  beton: {
    pouring: img(
      "beton-pouring.webp",
      "Echipă de muncitori nivelând betonul proaspăt turnat pe o platformă",
    ),
    finishing: img(
      "beton-finishing.webp",
      "Turnarea și nivelarea betonului peste armătură",
    ),
    rebar: img("beton-rebar.webp", "Armătură din oțel pregătită pentru turnare"),
  },
  prefabricate: {
    baza: img("prefab-baza-camin.webp", "Bază de cămin din beton armat, cu ieșiri pentru conducte, în depozitul de prefabricate", 1600, 900),
    inel: img("prefab-inel-camin.webp", "Inele de cămin din beton, de înălțimi diferite, stivuite în depozit", 1600, 900),
    con: img("prefab-con-camin.webp", "Conuri de reducție din beton pentru cămine de vizitare", 1600, 900),
    capac: img("prefab-capac-camin.webp", "Capace de cămin din beton armat, cu gol de acces, stivuite pe șipci", 1600, 900),
    forms: img(
      "prefab-forms.webp",
      "Elemente prefabricate din beton stivuite pe paleți",
      1600, 1200,
    ),
    slabs: img(
      "prefab-slabs.webp",
      "Verificarea unor plăci prefabricate din beton",
    ),
    blocks: img(
      "prefab-blocks.webp",
      "Blocuri din beton depozitate pe șantier",
      1600, 1200,
    ),
  },
  infrastructura: {
    asphalt: img(
      "infra-asphalt.webp",
      "Compactor cu tambur pe un drum în construcție",
      1600, 1214,
    ),
    bridge: img(
      "infra-bridge.webp",
      "Pile de pod în construcție și macara turn la apus",
    ),
    bridgeCrane: img(
      "infra-bridge-crane.webp",
      "Macara ridicând un tronson de pod",
      1600, 900,
    ),
    excavatorPipes: img(
      "infra-excavator-pipes.webp",
      "Excavator și conducte pregătite pentru rețea de canalizare",
    ),
  },
  trucks: {
    haul: img(
      "truck-haul.webp",
      "Autobasculantă de carieră pe un drum de exploatare",
      1600, 1064,
    ),
    quarry: img(
      "truck-quarry.webp",
      "Autobasculantă articulată încărcată cu agregate",
    ),
  },
} as const;
