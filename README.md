# Tomi Alex SRL — website oficial

Website de prezentare pentru **Tomi Alex SRL** (agregate din balastieră proprie, stație de betoane, prefabricate din beton, lucrări de infrastructură). Realizat de [BRIXWAVE](https://brixwave.com), pe designul ales de client dintre trei concepte (Design V1, Corporate Clasic & Autoritate).

- Live (GitHub Pages): https://brixwave-technology.github.io/tomi-and-alex-srl/
- Referința de produs: [PRODUCT.md](./PRODUCT.md)

## Structura site-ului

| Rută             | Pagina           | Conținut |
| ---------------- | ---------------- | -------- |
| `/`              | Acasă            | **Serviciile primele**: patru carduri mari (Agregate, Stație betoane, Prefabricate, Lucrări de infrastructură) imediat sub titlu, fără scroll; apoi cifre, Despre noi, lucrările de infrastructură în detaliu, cum lucrăm, certificări, referințe |
| `/agregate/`     | Agregate         | Nisip, balast, sort 4–8, sort 8–16, fișă tehnică, livrare |
| `/beton/`        | Stație betoane   | Orice clasă de beton, tabel de clase, aplicații, capacitate |
| `/prefabricate/` | Prefabricate     | Cinci produse, dimensiuni, utilizări |
| `/contact/`      | Contact          | Telefon, e-mail, datele firmei, program, Google Maps (fără formular) |

Toate paginile sunt în bara de navigare. Pe mobil și tabletă o **bară fixă de contact rapid** în partea de jos (apel direct cu numărul afișat, e-mail, locație în Google Maps) este mereu vizibilă; fiecare acțiune pornește instant prin link nativ. Logo-ul original (cu încărcătorul frontal) stă pe header-ul alb și pe banda albă din footer.

## Stack

Next.js 16 (App Router, export static, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · `@phosphor-icons/react` · fontul Archivo self-hosted prin `next/font`

## Comenzi

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # export static în ./out
npm run lint
npx tsc --noEmit
```

## Structură

```
src/
  app/
    layout.tsx             layout: font, header, footer, buton Sună, metadata
    page.tsx               Acasă
    agregate/ beton/ prefabricate/ contact/   celelalte patru pagini
    globals.css            tokeni Tailwind (paleta din logo), animații
  components/
    site/                  Header (5 pagini, meniu mobil), Footer, Pages (cele 5 pagini)
    shared/                Reveal, CallFab (bara fixă de contact rapid pe mobil), TomiAlexLogo, ContactBlocks, BrixwaveLink
  data/
    company.ts             tot conținutul (texte, servicii, produse, contact, program, date juridice)
    brixwave.ts            creditul agenției din footer
    images.ts              manifestul fotografiilor
public/images/             fotografii (temporar stock) și logo-ul Tomi Alex
```

## Cum se actualizează conținutul

- **Texte, servicii, produse, telefon, e-mail, adresă, program, date juridice, cifre:** `src/data/company.ts`. Datele de contact, juridice și cifrele de activitate sunt completate demonstrativ și se înlocuiesc cu datele reale ale clientului din acest singur fișier.
- **Logo:** `public/images/logo-tomi-alex.png` (original, fundal transparent).
- **Imagini:** înlocuiți fișierele din `public/images/` și actualizați textul alternativ în `src/data/images.ts`.

## SEO local (Nord-Vestul României)

- **Cuvinte-cheie și texte pe pagină** în `src/data/seo.ts`: titluri (≤ 60 caractere), descrieri (≤ 160), H1 cu localizare, cuvinte-cheie pentru Satu Mare, Maramureș, Bihor și Sălaj, întrebări frecvente pe fiecare pagină de serviciu.
- **Date structurate JSON-LD** (`src/components/seo/JsonLd.tsx`): `GeneralContractor`/`LocalBusiness` cu adresă, coordonate, program, zone deservite (cele patru județe), oferte (agregate, beton, prefabricate, lucrări), `WebSite`, `WebPage`, `BreadcrumbList` și `FAQPage` pe fiecare pagină.
- **Secțiunea „Zone deservite”** pe Acasă și pe paginile de produs, cu județele și orașele principale.
- **Tehnic:** canonical pe fiecare pagină, Open Graph și Twitter cu imagine 1200×630 (`public/og.jpg`), sitemap și robots, manifest și iconițe, pagina 404, `lang="ro"`, breadcrumbs, alt text pe toate imaginile, fotografii WebP la 1600 px (3,9 MB în loc de 10 MB), font self-hosted.

### Checklist la lansare (de făcut de client sau de agenție)

1. **Domeniu propriu** (ex. `tomialex.ro`): adăugați `public/CNAME` cu domeniul, setați DNS-ul către GitHub Pages, scoateți `NEXT_PUBLIC_BASE_PATH` din `.github/workflows/deploy.yml` și schimbați `siteUrl` în `src/data/seo.ts`.
2. **Date reale** în `src/data/company.ts`: telefon, e-mail, adresă, program, CUI, Reg. Com., cifre, certificări, referințe.
3. **Google Business Profile** pentru sediul din Turulung, cu aceleași nume, adresă și telefon ca pe site (NAP identic), categorii „Furnizor de materiale de construcții”, „Stație de betoane”, „Firmă de construcții”, program și fotografii reale.
4. **Google Search Console**: verificați domeniul, trimiteți `sitemap.xml`, urmăriți indexarea celor 5 pagini.
5. **Fotografii proprii** (balastieră, stație, flotă, prefabricate) în locul celor stock, cu text alternativ actualizat în `src/data/images.ts`.
6. **Recenzii și citări locale**: pagina de Facebook legată în footer, listări în directoare de construcții din Satu Mare, Baia Mare, Oradea, Zalău.

## Deploy

Push pe `main` declanșează workflow-ul `.github/workflows/deploy.yml`, care construiește exportul static cu `NEXT_PUBLIC_BASE_PATH=/tomi-and-alex-srl` și îl publică pe GitHub Pages.
