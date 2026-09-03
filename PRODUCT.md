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
- Logo image (supplied as a screenshot; original artwork file still needed for `public/`).
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

## Design Direction (recorded for this build)

- Dials (Taste Skill): DESIGN_VARIANCE 7, MOTION_INTENSITY 4, VISUAL_DENSITY 4.
- Type: Manrope (display, 600–800) and Inter (body). Display headlines are large, tight and short; body is 15–18px with generous leading.
- Colour: `ink #0E0E10`, `charcoal #1B1B1E`, `concrete #6B6B70`, `steel #9A9AA0`, `ash #C7C7CB`, `chalk #E3E2DF`, `paper #F4F3F0`, accent `brand #D42A2A` / `brand-deep #B01F22`. Red is reserved for CTAs, markers, active states and small rules.
- Shape: near-sharp (2px radius). No rounded cards, no gradients as decoration, no glass.
- Motion: one entrance on the hero (staggered rise, slow image settle), scroll reveals on sections, clip-reveal on key photographs, 160ms press feedback, 240ms link underlines, 900ms photo scale on hover. Custom ease-out `cubic-bezier(0.23,1,0.32,1)`. Nothing loops except the scroll indicator line.
- Layout families used on the homepage: full-bleed hero, editorial split, index list with sticky image, hairline tile grid, photographic colour block, asymmetric 2+3 grid, sticky headline with grouped list, typographic CTA, split with map.

## Acceptance Criteria

- `npm run build`, `npm run lint` and `npx tsc --noEmit` pass.
- All six routes render and every internal link resolves.
- No horizontal overflow at 360, 375, 390, 768, 1024, 1280 and 1440px.
- Mobile menu opens, closes with Escape, traps focus, and locks scroll.
- Contact form validates inline and shows a success state.
- Every image has alt text; metadata, Open Graph, sitemap and robots exist.
- No invented facts appear anywhere on the site.
