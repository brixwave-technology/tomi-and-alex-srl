import { contact } from "./company";

/**
 * Ghiduri utile: articole practice pentru clienții din Nord-Vest. Aduc trafic
 * organic pe întrebări reale („ce clasă de beton pentru fundație”, „cât balast
 * îmi trebuie”) și trimit cititorul către paginile de produs și telefon.
 */
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string;
  updated: string;
  readingMinutes: number;
  intro: string;
  sections: GuideSection[];
  related: { label: string; href: string }[];
  keywords: string[];
};

export const guides: Guide[] = [
  {
    slug: "ce-clasa-de-beton-pentru-fundatie",
    title: "Ce clasă de beton aleg pentru fundația unei case?",
    seoTitle: "Ce clasă de beton pentru fundația casei: C16/20, C20/25 sau C25/30",
    description: "Ce clasă de beton se folosește la fundații continue, izolate și radiere, ce cere expunerea la îngheț și cum comandați corect betonul în Satu Mare și Nord-Vest.",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingMinutes: 6,
    keywords: ["clasă beton fundație", "beton C20/25 fundație", "beton C16/20", "beton fundație casă Satu Mare"],
    intro:
      "Clasa de beton pentru fundație nu se alege „din ochi”, ci după proiect, teren și expunere. Totuși, cele mai multe case din județul Satu Mare și din Nord-Vest se toarnă cu una dintre trei clase. Iată cum le deosebiți și ce trebuie să spuneți la telefon când comandați.",
    sections: [
      {
        heading: "Ce înseamnă C20/25 și de ce contează",
        paragraphs: [
          "Notația „C20/25” arată rezistența la compresiune la 28 de zile: 20 N/mm² pe cilindru și 25 N/mm² pe cub. Cu cât clasa este mai mare, cu atât betonul rezistă mai bine la sarcini și la agresivitatea mediului, dar și costul crește.",
          "Proiectantul stabilește clasa în funcție de încărcări, tipul fundației și clasa de expunere (umiditate, îngheț-dezgheț, săruri). Pe planșa de fundații găsiți clasa exactă; ea este obligatorie, nu orientativă.",
        ],
      },
      {
        heading: "Clasele uzuale pentru fundații de case",
        paragraphs: ["În practică, pentru locuințe cu până la două niveluri, întâlnim aproape întotdeauna:"],
        bullets: [
          "C8/10 – C12/15: beton de egalizare sub fundație, strat suport, umpluturi. Nu este beton structural.",
          "C16/20: fundații continue pentru case ușoare, pe teren bun, în zone fără agresivitate. Tot mai rar folosit la structuri.",
          "C20/25: standardul actual pentru fundații continue și izolate, elevații, plăci pe sol la case P și P+1.",
          "C25/30: fundații pentru case P+2, radiere, terenuri cu apă freatică, zone cu îngheț sever. Recomandat și pentru elevații expuse.",
        ],
      },
      {
        heading: "Expunerea: umiditate, îngheț și săruri",
        paragraphs: [
          "În Nord-Vestul României iernile aduc cicluri repetate de îngheț-dezgheț. Pentru elemente expuse (elevații, socluri, trepte exterioare) proiectantul cere de regulă clasă de expunere XF și un beton de minimum C25/30, eventual cu aer antrenat. Pentru fundații îngropate în teren uscat, XC2 și C20/25 sunt suficiente.",
          "Dacă terenul are apă freatică sau sulfați, spuneți-ne la comandă: rețeta se adaptează (ciment rezistent la sulfați, raport apă/ciment mai mic).",
        ],
      },
      {
        heading: "Cum comandați corect",
        paragraphs: [
          `Sunați la ${contact.phoneDisplay} și spuneți: clasa din proiect, cantitatea (mc), localitatea, dacă aveți nevoie de pompă (distanță până la cofraj, înălțime), ora dorită și dacă terenul permite accesul unei autobetoniere de 8–10 mc. Confirmăm pe loc și livrăm de luni până sâmbătă, în județul Satu Mare de regulă a doua zi, în Maramureș, Bihor și Sălaj cu programare de 1–2 zile.`,
          "Fiecare transport pleacă cu certificat de calitate și buletin de laborator, documente necesare la recepția structurii de rezistență.",
        ],
      },
    ],
    related: [
      { label: "Stație betoane: clase și aplicații", href: "/beton/" },
      { label: "Cât beton îmi trebuie: calculul cantității", href: "/ghiduri/cat-beton-imi-trebuie/" },
      { label: "Contact și program", href: "/contact/" },
    ],
  },
  {
    slug: "nisip-balast-sau-sort",
    title: "Nisip, balast sau sort: ce agregat folosesc și la ce?",
    seoTitle: "Nisip, balast, sort 4–8, sort 8–16: diferențe și utilizări",
    description: "Diferențele dintre nisip 0–4, balast 0–63, sort 4–8 și sort 8–16, la ce lucrări se folosește fiecare și cum estimați cantitatea. Balastieră proprie în Satu Mare.",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingMinutes: 5,
    keywords: ["diferența nisip balast", "sort 4-8 utilizare", "sort 8-16 beton", "balast fundație drum", "agregate constructii Satu Mare"],
    intro:
      "„Îmi trebuie o mașină de pietriș” este cea mai frecventă comandă pe care o primim, și aproape întotdeauna urmează întrebarea: care sort? Alegerea greșită înseamnă beton slab, drenaj care nu drenează sau fundație de drum care cedează. Iată ghidul scurt.",
    sections: [
      {
        heading: "Nisip 0–4 mm",
        paragraphs: ["Agregatul fin, spălat, cu granule sub 4 mm. Intră în orice beton și mortar, se folosește la șape, tencuieli, pat de pozare pentru conducte și pavele. Pentru beton, nisipul trebuie să fie curat (fără argilă); de aceea îl spălăm în stație."],
      },
      {
        heading: "Balast 0–63 mm",
        paragraphs: ["Amestec natural de nisip și pietriș, așa cum iese din balastieră, cu granule până la 63 mm. Este materialul de fundație: sub drumuri comunale, platforme, alei și în umpluturi. Se compactează bine în straturi de 20–25 cm. Nu se folosește la betoane structurale, pentru că granulometria nu este controlată."],
      },
      {
        heading: "Sort 4–8 mm și sort 8–16 mm",
        paragraphs: [
          "Sorturile sunt pietriș spălat și sortat pe intervale precise. Sortul 4–8 se folosește la betoane de clasă medie, drenaje și straturi filtrante; sortul 8–16 este agregatul principal al betoanelor structurale (C20/25 și peste), al prefabricatelor și al straturilor de fundație.",
          "Într-o rețetă de beton, sorturile se combină (de exemplu 0–4, 4–8 și 8–16) ca să obțineți o curbă granulometrică continuă: mai puține goluri, mai puțin ciment, beton mai rezistent.",
        ],
      },
      {
        heading: "Cât îmi trebuie? Calcul rapid",
        paragraphs: ["Volumul se calculează lungime × lățime × grosime, în metri, apoi se înmulțește cu densitatea în vrac (aproximativ 1,6 t/mc pentru nisip și sorturi, 1,8 t/mc pentru balast) și cu un coeficient de compactare de 1,2–1,3 pentru straturi compactate."],
        bullets: [
          "Alee de 20 m × 3 m, balast 20 cm: 12 mc × 1,25 = 15 mc, adică aproximativ 27 t (o autobasculantă mare).",
          "Pat de pozare pentru 100 m de conductă, 0,5 m lățime, 10 cm nisip: 5 mc, aproximativ 8 t.",
          "Fundație de drum comunal 1 km × 5 m × 30 cm: 1.500 mc × 1,25 ≈ 1.900 mc, aproximativ 3.400 t, livrate în serie.",
        ],
      },
      {
        heading: "Livrare din balastiera proprie",
        paragraphs: [`Toate sorturile sunt în stoc în Turulung, județul Satu Mare, și pleacă cu buletin de laborator. Livrăm cu autobasculante de 24–40 t în Satu Mare, Maramureș, Bihor și Sălaj. Pentru cantități mici puteți veni cu mijloc de transport propriu. Comenzi: ${contact.phoneDisplay}.`],
      },
    ],
    related: [
      { label: "Agregate: produse și fișă tehnică", href: "/agregate/" },
      { label: "Zone de livrare", href: "/zone/satu-mare/" },
      { label: "Ce clasă de beton pentru fundație", href: "/ghiduri/ce-clasa-de-beton-pentru-fundatie/" },
    ],
  },
  {
    slug: "cat-beton-imi-trebuie",
    title: "Cât beton îmi trebuie? Cum calculez cantitatea corect",
    seoTitle: "Cât beton îmi trebuie: calcul mc pentru fundație, placă și stâlpi",
    description: "Formule simple pentru cantitatea de beton la fundații continue, plăci, stâlpi și grinzi, plus rezerva recomandată și cum se rotunjește comanda la autobetonieră.",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingMinutes: 5,
    keywords: ["cât beton îmi trebuie", "calcul mc beton", "calcul beton fundație", "cantitate beton placă"],
    intro:
      "Comanda de beton prea mică oprește turnarea la jumătate; prea mare, plătiți beton care se aruncă. Calculul este simplu dacă îl faceți pe elemente și adăugați rezerva corectă.",
    sections: [
      {
        heading: "Formula de bază",
        paragraphs: ["Volum (mc) = lungime × lățime × înălțime, toate în metri. Calculați separat fiecare element (fundație, elevație, placă, stâlpi) și adunați."],
        bullets: [
          "Fundație continuă: perimetrul total al zidurilor × lățimea tălpii × înălțimea. Exemplu: 48 m × 0,6 m × 0,8 m = 23 mc.",
          "Placă pe sol: suprafață × grosime. Exemplu: 120 mp × 0,15 m = 18 mc.",
          "Stâlp: secțiune × înălțime × număr. Exemplu: 0,25 × 0,25 × 3 m × 12 stâlpi = 2,25 mc.",
          "Grindă: lățime × înălțime × lungime totală. Exemplu: 0,25 × 0,4 × 60 m = 6 mc.",
        ],
      },
      {
        heading: "Rezerva și rotunjirea",
        paragraphs: [
          "Adăugați 5–8% pentru neregularitățile săpăturii, cofraje care „burtesc” și betonul rămas în pompă. La fundații turnate direct în săpătură, rezerva poate ajunge la 10%.",
          "Autobetonierele noastre au 8–10 mc. Rotunjiți comanda la capacitatea mașinii și spuneți-ne cantitatea exactă calculată: ultimul transport îl încărcăm parțial, ca să nu plătiți surplus.",
        ],
      },
      {
        heading: "Pompă sau descărcare directă?",
        paragraphs: ["Dacă autobetoniera nu ajunge la 3–4 m de cofraj sau turnați la înălțime, cereți pompă (28–36 m). Pompa se programează odată cu betonul și scurtează turnarea unei fundații de casă la 2–3 ore."],
      },
      {
        heading: "Comanda",
        paragraphs: [`Sunați la ${contact.phoneDisplay} cu: clasa, cantitatea, localitatea, pompă da/nu, ora. Livrăm de luni până sâmbătă în Satu Mare și județele vecine.`],
      },
    ],
    related: [
      { label: "Stație betoane", href: "/beton/" },
      { label: "Ce clasă de beton pentru fundație", href: "/ghiduri/ce-clasa-de-beton-pentru-fundatie/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    slug: "cum-comand-beton-la-domiciliu",
    title: "Cum comand beton la domiciliu în Satu Mare: pași, acces, pompă",
    seoTitle: "Beton la domiciliu în Satu Mare: cum comanzi, acces, pompă, program",
    description: "Pașii pentru o livrare de beton fără probleme: ce spuneți la telefon, cum pregătiți accesul pentru autobetonieră, când e nevoie de pompă și ce documente primiți.",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingMinutes: 4,
    keywords: ["beton la domiciliu Satu Mare", "comandă beton Satu Mare", "livrare beton autobetonieră", "pompă beton Satu Mare"],
    intro: "O livrare de beton reușită se pregătește cu o zi înainte. Iată lista scurtă pe care o parcurgem cu fiecare client din Satu Mare, Maramureș, Bihor sau Sălaj.",
    sections: [
      {
        heading: "1. Telefonul de comandă",
        paragraphs: [`Sunați la ${contact.phoneDisplay} și spuneți: clasa de beton din proiect, cantitatea, adresa exactă, ora dorită, dacă aveți nevoie de pompă. Confirmăm disponibilitatea și prețul pe loc; pentru livrări în afara județului Satu Mare, programăm cu 1–2 zile înainte.`],
      },
      {
        heading: "2. Accesul autobetonierei",
        paragraphs: ["O autobetonieră încărcată cântărește peste 30 t și are nevoie de un drum de acces de minimum 3,5 m lățime, fără cabluri sub 4,5 m și cu loc de manevră. Dacă accesul este dificil, spuneți-ne: trimitem o mașină mai mică sau pompă cu braț lung."],
      },
      {
        heading: "3. Cofrajul și echipa",
        paragraphs: ["La sosirea betonului, cofrajul trebuie să fie gata, armătura montată și recepționată, iar echipa de turnare prezentă. Betonul trebuie pus în operă în cel mult 90 de minute de la încărcare; întârzierile la descărcare se taxează și afectează calitatea."],
      },
      {
        heading: "4. Documentele",
        paragraphs: ["Primiți la fiecare transport avizul de însoțire, certificatul de calitate și, la cerere, buletinul de laborator la 7 și 28 de zile. Păstrați-le pentru cartea construcției."],
      },
    ],
    related: [
      { label: "Stație betoane", href: "/beton/" },
      { label: "Cât beton îmi trebuie", href: "/ghiduri/cat-beton-imi-trebuie/" },
      { label: "Zone de livrare: județul Satu Mare", href: "/zone/satu-mare/" },
    ],
  },
  {
    slug: "prefabricate-beton-canalizare",
    title: "Prefabricate din beton pentru canalizare: tuburi, cămine, podețe",
    seoTitle: "Tuburi, cămine și podețe din beton pentru canalizare: ghid rapid",
    description: "Ce prefabricate din beton se folosesc la canalizări și podețe, dimensiunile uzuale, montajul și ce trebuie să conțină comanda. Producție proprie în Satu Mare.",
    published: "2026-09-05",
    updated: "2026-09-05",
    readingMinutes: 5,
    keywords: ["tuburi beton canalizare", "cămine vizitare beton", "podețe tubulare", "prefabricate canalizare Satu Mare"],
    intro: "Rețelele de canalizare și podețele rutiere se construiesc aproape integral din prefabricate de beton. Ghidul de mai jos explică elementele, dimensiunile uzuale și ce informații ne trebuie pentru o ofertă exactă.",
    sections: [
      {
        heading: "Tuburi de canalizare",
        paragraphs: ["Tuburile din beton armat cu mufă și garnitură de cauciuc, DN 300–1000 mm, lungimi de 1,00–2,50 m. Se folosesc la canalizări pluviale și menajere gravitaționale și la podețe tubulare. Se montează pe pat de nisip compactat, cu pantă conform proiectului."],
      },
      {
        heading: "Cămine de vizitare",
        paragraphs: ["Căminele se asamblează din placă de bază, inele de Ø 800–1500 mm cu înălțimi de 250–1000 mm, con de reducție și placă de acoperire cu gol pentru capac. Se amplasează la schimbări de direcție, de pantă și la maximum 60 m unul de altul."],
      },
      {
        heading: "Podețe: tubulare sau dalate",
        paragraphs: ["Podețele tubulare (din tuburi DN 600–1000 cu timpane) sunt soluția rapidă pentru accesuri și drumuri de exploatare. Pentru deschideri de 1–3 m și trafic greu se folosesc podețe dalate, cu elemente produse după proiect."],
      },
      {
        heading: "Ce ne trebuie pentru ofertă",
        paragraphs: [`Lista de elemente cu diametre, înălțimi și cantități, planșa de detaliu pentru elementele speciale, localitatea și accesul pentru camion cu macara. Sunați la ${contact.phoneDisplay} sau scrieți la ${contact.email}; confirmăm stocul și termenul de livrare în aceeași zi.`],
      },
    ],
    related: [
      { label: "Prefabricate: produse și dimensiuni", href: "/prefabricate/" },
      { label: "Nisip, balast sau sort", href: "/ghiduri/nisip-balast-sau-sort/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g])) as Record<string, Guide>;
