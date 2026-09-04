# Tomi Alex SRL — portal de selecție design

Portal web de prezentare pentru **Tomi Alex SRL** (lucrări de infrastructură și construcții, agregate, beton, prefabricate), cu trei concepte de website complet diferite din care clientul își alege varianta preferată. Concepte de design dezvoltate exclusiv de **BRIXWAVE**.

- Live (GitHub Pages): https://brixwave-technology.github.io/tomi-and-alex-srl/
- Referința de produs: [PRODUCT.md](./PRODUCT.md)

## Ce conține

| Rută   | Conținut |
| ------ | -------- |
| `/`    | **Index (hub)**: semnătura BRIXWAVE (logo Brixwave (cub izometric hexagonal + wordmark „Brix” alb / „wave” albastru) + „Concepte de design dezvoltate exclusiv de BRIXWAVE”), trei carduri mari „Design V1 / V2 / V3” cu miniaturi, starea alegerii clientului |
| `/v1/` | **Design V1 — Corporate / Autoritate**: layout pe grilă, paletă navy + roșu din logo, tabele de produse, certificări, FAQ, formular de ofertă |
| `/v2/` | **Design V2 — Industrial Authority & Trust**: heavy-duty, asfalt negru / beton gri / roșu, bară utilitară roșie, butoane masive, comandă rapidă de materiale în hero, fișe tehnice, benzi de semnalizare, capacități cu grafic SVG |
| `/v3/` | **Design V3 — Infrastructure Elite & Premium Partner**: antracit mat cu textură fină de granit, accente rafinate în roșul logo-ului, tipografie geometrică masivă (Sora), capacitate de producție, angajamente de conformitate și mediu |

Toate variantele folosesc exclusiv paleta logo-ului Tomi Alex: roșu, gri, negru, alb. Fiecare variantă are aceeași structură și același conținut (Despre noi, servicii și direcții de activitate, agregate, clase de beton, prefabricate, proces, referințe, FAQ, contact complet cu formular și hartă, footer cu date juridice) și conține:

- butonul **„Aleg acest design”** (în bara plutitoare și într-o secțiune dedicată), care deschide un dialog de confirmare; alegerea se salvează în browser, apare pe Index și poate fi trimisă către BRIXWAVE prin e-mail sau copiată ca rezumat;
- butonul **„Înapoi la Index”** pentru a compara celelalte opțiuni.

## Stack

Next.js 16 (App Router, export static, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · `@phosphor-icons/react` · fonturi Google self-hosted prin `next/font` (Manrope, Archivo, Barlow, Barlow Condensed, Sora, Inter)

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
    page.tsx               Index (hub)
    v1/ v2/ v3/            cele trei concepte (fiecare își încarcă fonturile proprii)
    layout.tsx             layout rădăcină, metadata
    globals.css            tokeni Tailwind (paletele celor trei concepte), animații, utilitare
  components/
    portal/                BrixwaveLogo, Hub, DesignPreview, DesignShell (bara plutitoare + dialogul de alegere)
    shared/                Reveal (animații la scroll)
    v1/ v2/ v3/            Header, Site, ContactForm și ancorele de navigare ale fiecărui concept
  data/
    company.ts             tot conținutul companiei (texte, servicii, produse, capacități, volume, repere, angajamente, contact, date juridice)
    designs.ts             metadatele celor trei concepte
    brixwave.ts            semnătura BRIXWAVE și adresa la care se trimite confirmarea
    images.ts              manifestul fotografiilor
  lib/
    selection.ts           alegerea clientului (localStorage, sincronizată între componente și file)
    useContactForm.ts      logica formularului de contact, independentă de aspect
public/images/             fotografii (temporar stock) și logo-ul Tomi Alex
```

## Cum se actualizează conținutul

- **Texte, servicii, produse, telefon, e-mail, adresă, program, date juridice, cifre:** `src/data/company.ts`. Datele de contact, juridice și cifrele de activitate sunt completate demonstrativ pentru ca portalul să arate ca un produs finalizat și se înlocuiesc cu datele reale ale clientului din acest singur fișier.
- **Adresa de e-mail la care ajunge confirmarea alegerii:** `src/data/brixwave.ts`.
- **Formularul de contact:** setați `contact.formEndpoint` în `src/data/company.ts` cu un serviciu (Formspree, Resend etc.); până atunci rulează în mod demonstrativ, cu validare și stare de succes.
- **Imagini:** înlocuiți fișierele din `public/images/` și actualizați textul alternativ în `src/data/images.ts`.

## Deploy

Push pe `main` declanșează workflow-ul `.github/workflows/deploy.yml`, care construiește exportul static cu `NEXT_PUBLIC_BASE_PATH=/tomi-and-alex-srl` și îl publică pe GitHub Pages.
