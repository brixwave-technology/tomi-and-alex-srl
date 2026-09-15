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
    // Randări ale produselor Tomi Alex, pe fundal transparent (decupaje), pentru afișare „contained”.
    baza: img("prefab-baza-camin.webp", "Bază de cămin Tomi Alex din beton, cu ieșire laterală pentru conductă", 1200, 1200),
    inel: img("prefab-inel-camin.webp", "Inel de cămin Tomi Alex din beton, cu îmbinare pe contur", 1200, 1200),
    con: img("prefab-con-camin.webp", "Con de reducție Tomi Alex din beton, pentru partea superioară a căminului", 1200, 1200),
    capac: img("prefab-capac-camin.webp", "Capac de cămin Tomi Alex din beton armat, cu ramă și capac din fontă", 1200, 1200),
    caminComplet: img("prefab-camin-complet.webp", "Cămin de vizitare Tomi Alex complet: bază, inel, con de reducție și capac", 1400, 1400),
    // Aceleași randări, compuse pe fundal închis, pentru zonele unde imaginea acoperă tot cadrul.
    hero: img("prefab-hero.webp", "Cămin de vizitare complet din beton, produs de Tomi Alex", 1600, 900),
    card: img("prefab-card.webp", "Cămin de vizitare complet din beton, produs de Tomi Alex", 1600, 900),
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
