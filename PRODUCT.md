# Product

## Platform

web

## Stack

Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4, `@phosphor-icons/react`. Deploy target is GitHub Pages (static files under the `/tomi-and-alex-srl` base path), which rules out server features. There are no forms: the client takes orders by phone and e-mail.

## Purpose

The official presentation website of Tomi Alex SRL, built by BRIXWAVE on the concept the client chose (Design V1, Corporate Clasic & Autoritate) out of three proposals. The site must let a visitor reach the service they need within seconds and call the company with one tap.

## Users

- Beneficiaries of infrastructure and construction works (local administrations, developers, general contractors) checking capacity and contact details.
- Buyers of construction materials (aggregates, concrete, precast) who want to order quickly, usually from a phone on site.

## Structure

Five pages in the navigation bar, as requested by the client: Acasă, Agregate (nisip, balast, sort 4–8, sort 8–16), Stație betoane (any class), Prefabricate (five products), Contact.

**Home shows the services first.** A compact heading is followed immediately by four large cards (Agregate, Stație betoane, Prefabricate, Lucrări de infrastructură) that are visible without scrolling on desktop; the company description, key figures, infrastructure services, process, certifications and references come after. The client's brief: visitors should see the offer at once, without reading or scrolling.

Fully responsive. On mobile and tablet a floating "Sună acum" button (a `tel:` link) is always visible and starts the call instantly. The original Tomi Alex logo, including the wheel-loader illustration, is shown unchanged on the white header and on a white brand strip in the footer. The Contact page has phone, e-mail, company data, opening hours and a Google Maps embed with a directions button; no form.

## Content notes

Confirmed facts: company name, founding year 2008 (from the logo), coordinates 47.909954, 23.088480, Facebook page, the four business directions and the infrastructure services, the aggregate products, the brand claim and descriptions. Contact details, legal identifiers, key figures, certifications, references, concrete classes and precast dimensions were completed for the presentation so that the site looks finished; they live in `src/data/company.ts` and are replaced with the client's real data in one place.

## Brand

Palette derived from the logo only: graphite greys, white, red `#D23B3C`. Type: Archivo variable, display at width 118 and weight 800. Sharp corners (2px), thin borders, no decorative gradients. Tone of voice: formal, direct, second person plural.

## Accessibility

WCAG AA contrast, keyboard-navigable header and menu (Escape closes, scroll locked), `prefers-reduced-motion` honoured, semantic landmarks, one H1 per page, alt text on every image.

## Acceptance criteria

- `npm run build`, `npm run lint` and `npx tsc --noEmit` pass.
- All five routes render with no horizontal overflow at 390 and 1440px and no console errors.
- The four service cards are visible above the fold on a 1440×900 desktop.
- The floating call button is visible on mobile and hidden on desktop.
