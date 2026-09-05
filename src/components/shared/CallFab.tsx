import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/company";

/**
 * Bară fixă de acțiuni pe mobil și tabletă: apel direct (principal),
 * e-mail și locație. Link-uri native (tel:, mailto:, Google Maps), deci
 * fiecare acțiune pornește instant. Ascunsă pe desktop.
 */
export function CallFab() {
  return (
    <nav
      aria-label="Contact rapid"
      className="fixed inset-x-0 bottom-0 z-[95] border-t border-white/10 bg-graphite-950/92 pb-[env(safe-area-inset-bottom)] shadow-[0_-16px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex max-w-2xl items-stretch gap-2 p-2.5">
        <a
          href={`tel:${contact.phone}`}
          className="flex flex-1 items-center justify-center gap-3 rounded-[2px] bg-brand px-4 py-3 text-white transition active:scale-[0.99]"
          aria-label={`Sunați acum la ${contact.phoneDisplay}`}
        >
          <span className="relative flex size-9 items-center justify-center rounded-full bg-white/15">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" aria-hidden />
            <Phone weight="fill" className="relative size-5" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/80">Sună acum</span>
            <span className="mt-1 block text-[17px] font-extrabold tracking-tight">{contact.phoneDisplay}</span>
          </span>
        </a>
        <a href={`mailto:${contact.email}`} className="flex w-16 flex-col items-center justify-center gap-1 rounded-[2px] border border-white/15 text-steel-200 transition hover:border-white/40 hover:text-white active:scale-[0.98]" aria-label={`Scrieți-ne la ${contact.email}`}>
          <EnvelopeSimple weight="bold" className="size-5" aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-wider">E-mail</span>
        </a>
        <a href={contact.location.directionsUrl} target="_blank" rel="noreferrer" className="flex w-16 flex-col items-center justify-center gap-1 rounded-[2px] border border-white/15 text-steel-200 transition hover:border-white/40 hover:text-white active:scale-[0.98]" aria-label="Deschide locația în Google Maps">
          <MapPin weight="bold" className="size-5" aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-wider">Locație</span>
        </a>
      </div>
    </nav>
  );
}
