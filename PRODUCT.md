# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4, `@phosphor-icons/react`. Deploy target is GitHub Pages (static files under the `/tomi-and-alex-srl` base path), which rules out server features; the contact form therefore runs in demo mode until an e-mail endpoint is connected.

## Users

- Primary: beneficiaries of infrastructure and construction works (local administrations, developers, general contractors, industrial and agricultural investors) evaluating whether Tomi Alex SRL can execute their project or supply materials for it.
- Secondary: buyers of construction materials (aggregates, concrete, precast elements) who need a quote quickly, usually from a phone on site or in a procurement office.

Both arrive with a concrete need and want to answer one question fast: "Can they do this, and how do I ask for a price?"

## Product Purpose

A presentation website that positions Tomi Alex SRL as a serious, capable infrastructure and construction company, presents the four business directions (aggregates, concrete, precast, infrastructure works) and turns interest into offer requests. Success is a visitor who understands the company's capacity within a minute and requests a quote.

## Positioning

Materials and execution from the same source: the company owns a gravel pit (balastieră), a concrete plant (stație de betoane) and a precast production line, and also executes earthworks, water and sewage networks, roads, bridges and construction works. Brand message: **"Construim. Amenajăm. Dezvoltăm."** Supporting claim: "De la infrastructură la construcții complexe, Tomi Alex SRL transformă proiectele în realitate."

## Operating Context

- Offers are requested for a specific site: type of work, location, quantities, deadline. The contact form asks for exactly this.
- Visitors frequently come from a phone on a construction site; mobile is designed, not derived.
- Language: Romanian. Architecture allows an English version later (all copy lives in `src/data/*` and page files; no strings are hard-coded in shared components beyond labels).

## Capabilities and Constraints

Confirmed services:
- Lucrări de infrastructură și construcții
- Execuția rețelelor de alimentare cu apă
- Lucrări de canalizare
- Pregătirea și amenajarea terenului
- Construcția și modernizarea drumurilor
- Construcția și modernizarea podurilor
- Agregate pentru construcții: Nisip, Balast, Sort 4–8, Sort 8–16
- Producție de beton: "orice clasă de beton" (no class list supplied)
- Prefabricate din beton: approximately 4–5 products (names not supplied; five slots reserved)

Confirmed facts:
- Company name: Tomi Alex SRL
- Founding year 2008, as printed on the logo ("EST. 2008"). Used only inside the wordmark.
- Location: 47.909954, 23.088480 (https://maps.google.com/?q=47.909954,23.088480)
- Facebook: https://www.facebook.com/share/p/1BPsity3Rr/?mibextid=wwXIfr

Explicitly undecided / not supplied (must not be invented):
- Phone, e-mail, postal address, schedule
- Years of experience, number of employees, turnover
- Project references, clients, certifications, awards
- Production capacities, fleet, technical specifications, concrete classes, precast product names
- Legal footer information (CUI, registration number)
- An e-mail/back-end endpoint for the contact form

## Brand Commitments

- Logo: red wordmark "TOMI ALEX" in wide-tracked geometric capitals between two black double rules, "EST. 2008" beneath, over a grey wheel-loader illustration. The site palette is derived from it: black, concrete grey, off-white, red accent. The client asked for the logo colours to carry through the site.
- Voice: direct, technical, confident. Short sentences. No startup or agency tone. Statements of capacity, not slogans about beauty.
- Reference for quality level only (not for copying): https://cml.ro
- Brand must communicate power, precision, seriousness, capacity, stability, execution, trust.

## Evidence on Hand

- Client-supplied copy: company description, secondary description, claim, hero subtitle, section headlines (recorded in `src/data/site.ts` and page files).
- Logo supplied as `public/images/logo-tomi-alex.jpg` (white background); transparent full and wordmark variants for dark and light surfaces were derived from it.
- No photography of the company's own sites, plant or fleet. All images in `public/images` are temporary Unsplash stock photos for the mockup and are referenced from `src/data/images.ts` so they can be swapped file-for-file.
- No testimonials, case studies or references. None are shown.

## Product Principles

1. Prove capacity, not decoration. Every section answers "can they execute?" before it answers "does it look good?".
2. Materials and execution together. The four directions are always presented as one system, never as unrelated services.
3. Never invent. Missing facts render as visible placeholders, not as plausible copy.
4. One action. "Cere o ofertă" is the single conversion intent; every page ends in it.
5. Built for the site, not the office. Mobile first in hierarchy, contrast and tap targets.

## Accessibility & Inclusion

WCAG AA contrast on all text, keyboard-navigable header and drawer, visible focus rings, labelled form fields with inline errors, `prefers-reduced-motion` honoured (movement removed, opacity kept), semantic landmarks and one H1 per page.

## Design Direction (recorded for this build, v2)

- Dials (Taste Skill): DESIGN_VARIANCE 7, MOTION_INTENSITY 5, VISUAL_DENSITY 4.
- Type: Archivo variable, one family. Display at width 118 and weight 800 (the logo's wide capitals), body at width 100.
- Colour: dark asphalt page. `asphalt #121214`, `graphite #1B1B1F`, `slate #26262B`, `concrete #8E8E94`, `ash #B9B9BF`, `chalk #ECEBE6`, accent `brand #D23B3C` (sampled from the logo). Red only for calls to action, active states and the double rule.
- Signature: the logo's double rule structures the page (hero, section openers, header when scrolled, footer, map corner).
- Conversion: the phone number and the address are the product. They appear in the header, in the hero call card, on every inner-page hero, in the process section, in the map section, in the footer, and in a sticky bottom bar on mobile. Until the real number exists every call button renders as a marked placeholder that keeps the layout honest.
- Shape: near-sharp (2px radius). No cards with shadows, no gradients as decoration, no glass beyond the hero card's backdrop blur.
- Motion: one orchestrated hero moment (rule draws, three lines wipe in, image settles), scroll reveals on sections and photos, hover crossfade in the capabilities index, a snap-scrolling materials rail, 160ms press feedback. Reduced motion keeps opacity only.
- Layout families on the homepage: full-bleed hero with call card, editorial split, index list with sticky image, horizontal rail, photographic colour block, asymmetric 2+3 grid, sticky headline with grouped list, four-step process, split with map.
- SEO: per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards with a generated `og.jpg`, Organization/GeneralContractor + WebSite + BreadcrumbList JSON-LD (phone, address and hours join automatically once supplied), sitemap with priorities, robots, one H1 per page, alt text on every image, `lang="ro"`.

## Acceptance Criteria

- `npm run build`, `npm run lint` and `npx tsc --noEmit` pass.
- All six routes render and every internal link resolves.
- No horizontal overflow at 360, 375, 390, 768, 1024, 1280 and 1440px.
- Mobile menu opens, closes with Escape, traps focus, and locks scroll.
- Contact form validates inline and shows a success state.
- Every image has alt text; metadata, Open Graph, sitemap and robots exist.
- No invented facts appear anywhere on the site.
