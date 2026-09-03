# Tomi Alex SRL — website de prezentare

Website premium de prezentare pentru **Tomi Alex SRL** (lucrări de infrastructură și construcții, agregate, beton, prefabricate). Proiect realizat de Brixwave.

- Live (GitHub Pages): https://floredenis2001.github.io/tomi-and-alex-srl/
- Referința de produs: [PRODUCT.md](./PRODUCT.md)

## Stack

Next.js 16 (App Router, export static) · TypeScript · Tailwind CSS v4 · `@phosphor-icons/react`

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
  app/                 rute: /, /agregate, /beton, /prefabricate, /infrastructura, /contact
  components/
    layout/            Header (sticky, meniu mobil), Footer
    sections/          secțiunile paginii principale + CTA + Contact
    forms/             ContactForm (validare, stare de succes, mod demo)
    ui/                Button, Logo, Reveal, PageHero, Breadcrumbs, Placeholder
  data/                site.ts, services.ts, products.ts, images.ts  ← conținutul, separat de UI
public/images/         fotografii (temporar stock, de înlocuit cu imagini reale)
```

## Cum se actualizează conținutul

- **Date de contact, navigare, texte de brand:** `src/data/site.ts`
- **Servicii de infrastructură, direcții de activitate:** `src/data/services.ts`
- **Agregate, clase de beton, prefabricate:** `src/data/products.ts` (câmpurile opționale se afișează automat când sunt completate)
- **Imagini:** înlocuiți fișierele din `public/images/` și actualizați textul alternativ în `src/data/images.ts`
- **Formular de contact:** setați `contact.formEndpoint` în `src/data/site.ts` cu un serviciu (Formspree, Resend etc.); până atunci rulează în mod demo

## Deploy

Push pe `main` declanșează workflow-ul `.github/workflows/deploy.yml`, care construiește exportul static cu `NEXT_PUBLIC_BASE_PATH=/tomi-and-alex-srl` și îl publică pe GitHub Pages.
