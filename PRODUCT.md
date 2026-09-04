# Product

## Platform

web

## Stack

Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4, `@phosphor-icons/react`. Deploy target is GitHub Pages (static files under the `/tomi-and-alex-srl` base path), which rules out server features; the contact forms run in demo mode until an e-mail endpoint is connected, and the client's design choice is stored in the browser.

## Purpose

A selection portal built by BRIXWAVE for Tomi Alex SRL. It opens on an index (hub) that carries the BRIXWAVE signature and three large cards, Design V1, V2 and V3. Each card opens a complete presentation website for the company built on the same content and structure but with a radically different visual language. The client validates the preferred variant with the "Aleg acest design" button and returns to the index with "Înapoi la Index".

## Users

- The client (Tomi Alex SRL management) comparing three visual directions and confirming one.
- BRIXWAVE, who receives the confirmation (e-mail or copied summary) and continues the build on the chosen direction.

## The three concepts

1. **V1 Corporate Clasic & Autoritate.** Rigid grid, dark navy palette with the red of the logo, tables and certifications, phone number always visible, one conversion intent ("Cere o ofertă").
2. **V2 Modern Logistics & High-Tech Fleet.** Fixed left navigation rail, carbon / steel / silver palette with restrained electric-blue accents, data-led layout: capacity tiles with utilisation meters, single-series volume chart, technical spec tables, timeline, status bar. IBM Plex Sans and Mono.
3. **V3 Infrastructure Elite & Premium Partner.** Matte anthracite with a fine granite texture, dark-bronze accents, massive geometric sans-serif headlines (Sora), airy spacing, production-capacity block, compliance and environmental commitments for large contractors.

## Shared content (all three)

Hero with the brand claim, "Despre noi" (story, mission, values, key figures), four business directions, six infrastructure services in detail, aggregates, concrete classes, precast products, four-step process, certifications, references, FAQ, contact section with phone, e-mails, address, opening hours, map and a validated contact form, footer with legal details. No placeholder text anywhere.

## Content notes

Confirmed facts: company name, founding year 2008 (from the logo), coordinates 47.909954, 23.088480, Facebook page, the four business directions and the infrastructure services, the aggregate products, the brand claim and descriptions. Contact details, legal identifiers, key figures, certifications, references, concrete classes and precast dimensions were completed for the presentation so that the portal looks finished; they live in `src/data/company.ts` and are replaced with the client's real data in one place.

## Brand commitments

- Tomi Alex logo (red wordmark, EST. 2008) used in the headers of all three concepts. Red from the logo carries through V1. Tone of voice: formal, sober, second person plural.
- BRIXWAVE signature on the index: the Brixwave logo (isometric cube in a hexagonal outline, white-to-royal-blue gradient; wordmark "Brix" in white and "wave" in royal blue #3B5BDB) recreated as SVG, plus the claim "Concepte de design dezvoltate exclusiv de BRIXWAVE".
- Language: Romanian throughout.

## Accessibility

WCAG AA contrast on text, keyboard-navigable headers and menus (Escape closes, scroll locked), native `<dialog>` for the choice confirmation, labelled form fields with inline errors, `prefers-reduced-motion` honoured (movement removed, opacity kept), semantic landmarks and one H1 per page, alt text on every image.

## Acceptance criteria

- `npm run build`, `npm run lint` and `npx tsc --noEmit` pass.
- `/`, `/v1/`, `/v2/`, `/v3/` render with no horizontal overflow at 390 and 1440px and no console errors.
- "Aleg acest design" stores the choice, shows it on the index and offers e-mail / copy of the summary; "Înapoi la Index" works from every variant.
- No lorem ipsum or empty fields.
