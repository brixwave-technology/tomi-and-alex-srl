/**
 * Image manifest. Every photo used on the site is referenced from here so
 * replacing the temporary stock photography with the company's own images
 * is a matter of swapping files in /public/images and updating alt text.
 *
 * Current files are temporary Unsplash photos (free license) used for the
 * client mockup only.
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
  width = 1800,
  height = 1199,
  position?: string,
): SiteImage => ({ src: withBase(`/images/${file}`), alt, width, height, position });

export const logo = {
  full: {
    dark: withBase("/images/logo-tomi-alex.png"),
    light: withBase("/images/logo-tomi-alex-light.png"),
    width: 700,
    height: 385,
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
    "hero-excavator.jpg",
    "Excavator încărcând pământ într-o autobasculantă pe un șantier de infrastructură",
  ),
  company: img(
    "company-quarry.jpg",
    "Excavator pe un front de agregate din balastieră",
    1800,
    1198,
  ),
  earthworks: img(
    "earthworks.jpg",
    "Buldozer executând terasamente pe un șantier",
    1800,
    1012,
  ),
  agregate: {
    cover: img(
      "agregate-conveyors.jpg",
      "Depozite de nisip și balast cu benzi transportoare industriale",
    ),
    loader: img(
      "agregate-loader.jpg",
      "Încărcător frontal încărcând balast într-o autobasculantă",
    ),
    rocks: img("agregate-rocks.jpg", "Grămadă de piatră sortată", 1800, 1199, "center bottom"),
    aerial: img(
      "agregate-aerial.jpg",
      "Vedere aeriană a unei stații de sortare cu benzi transportoare",
      1800,
      1012,
    ),
  },
  beton: {
    pouring: img(
      "beton-pouring.jpg",
      "Echipă de muncitori nivelând betonul proaspăt turnat pe o platformă",
    ),
    finishing: img(
      "beton-finishing.jpg",
      "Turnarea și nivelarea betonului peste armătură",
    ),
    rebar: img("beton-rebar.jpg", "Armătură din oțel pregătită pentru turnare"),
  },
  prefabricate: {
    forms: img(
      "prefab-forms.jpg",
      "Elemente prefabricate din beton stivuite pe paleți",
      1800,
      1350,
    ),
    slabs: img(
      "prefab-slabs.jpg",
      "Verificarea unor plăci prefabricate din beton",
    ),
    blocks: img(
      "prefab-blocks.jpg",
      "Blocuri din beton depozitate pe șantier",
      1800,
      1350,
    ),
  },
  infrastructura: {
    asphalt: img(
      "infra-asphalt.jpg",
      "Compactor cu tambur pe un drum în construcție",
      1800,
      1366,
    ),
    bridge: img(
      "infra-bridge.jpg",
      "Pile de pod în construcție și macara turn la apus",
    ),
    bridgeCrane: img(
      "infra-bridge-crane.jpg",
      "Macara ridicând un tronson de pod",
      1800,
      1012,
    ),
    excavatorPipes: img(
      "infra-excavator-pipes.jpg",
      "Excavator și conducte pregătite pentru rețea de canalizare",
    ),
  },
  trucks: {
    haul: img(
      "truck-haul.jpg",
      "Autobasculantă de carieră pe un drum de exploatare",
      1800,
      1197,
    ),
    quarry: img(
      "truck-quarry.jpg",
      "Autobasculantă articulată încărcată cu agregate",
    ),
  },
} as const;
