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

Toate paginile sunt în bara de navigare. Pe mobil și tabletă un buton plutitor **„Sună acum”** (link `tel:`) este mereu vizibil și pornește apelul instant. Logo-ul original (cu încărcătorul frontal) stă pe header-ul alb și pe banda albă din footer.

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
    shared/                Reveal, CallFab (buton plutitor Sună), TomiAlexLogo, ContactBlocks, BrixwaveLink
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

## Deploy

Push pe `main` declanșează workflow-ul `.github/workflows/deploy.yml`, care construiește exportul static cu `NEXT_PUBLIC_BASE_PATH=/tomi-and-alex-srl` și îl publică pe GitHub Pages.
