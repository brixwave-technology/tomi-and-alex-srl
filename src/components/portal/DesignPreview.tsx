import type { DesignId } from "@/data/designs";

/**
 * Miniaturi desenate în CSS pentru cardurile din Index. Fiecare reproduce
 * arhitectura conceptului: grilă corporate, colaj asimetric, spațiu alb.
 */
export function DesignPreview({ id }: { id: DesignId }) {
  if (id === "v1") {
    return (
      <div className="absolute inset-0 bg-navy-900 p-4 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
        <div className="flex items-center justify-between rounded bg-navy-800 px-3 py-2">
          <span className="h-2 w-12 rounded-sm bg-brand" />
          <span className="flex gap-2">
            <span className="h-1.5 w-6 rounded-sm bg-steel-400/60" />
            <span className="h-1.5 w-6 rounded-sm bg-steel-400/60" />
            <span className="h-1.5 w-6 rounded-sm bg-steel-400/60" />
            <span className="h-1.5 w-8 rounded-sm bg-brand" />
          </span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 space-y-2 pt-2">
            <span className="block h-1.5 w-10 rounded-sm bg-brand" />
            <span className="block h-4 w-full rounded-sm bg-frost" />
            <span className="block h-4 w-4/5 rounded-sm bg-frost" />
            <span className="block h-1.5 w-3/4 rounded-sm bg-steel-400/70" />
            <span className="block h-1.5 w-2/3 rounded-sm bg-steel-400/70" />
            <span className="mt-3 flex gap-2">
              <span className="h-4 w-14 rounded-sm bg-brand" />
              <span className="h-4 w-14 rounded-sm border border-steel-400/60" />
            </span>
          </div>
          <div className="col-span-2 rounded bg-[linear-gradient(160deg,#264a7a,#122645)]" />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded border border-steel-400/30 bg-navy-800 p-2">
              <span className="block h-2 w-2 rounded-sm bg-brand" />
              <span className="mt-2 block h-1.5 w-full rounded-sm bg-steel-200/70" />
              <span className="mt-1 block h-1 w-3/4 rounded-sm bg-steel-400/60" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (id === "v2") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-paper p-4 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
        <div className="absolute -right-8 -top-8 size-32 rounded-full bg-lime" />
        <div className="absolute -bottom-10 left-6 size-28 rotate-12 rounded-[30%] bg-violet" />
        <div className="relative flex items-center justify-between">
          <span className="rotate-[-6deg] rounded-md bg-ink px-2 py-1 text-[9px] font-black uppercase tracking-wider text-lime">Tomi Alex</span>
          <span className="rounded-full bg-coral px-2 py-1 text-[8px] font-black uppercase text-paper">Cere ofertă</span>
        </div>
        <div className="relative mt-4">
          <span className="block h-6 w-3/4 rounded-sm bg-ink" />
          <span className="mt-1 block h-6 w-1/2 rounded-sm bg-coral" />
          <span className="mt-1 ml-8 block h-6 w-2/5 rounded-sm bg-ink" />
        </div>
        <div className="relative mt-3 flex gap-2">
          <div className="hard-shadow-sm h-16 w-2/5 rotate-[-3deg] rounded-lg border-2 border-ink bg-cyan" />
          <div className="hard-shadow-sm mt-4 h-14 w-1/3 rotate-[4deg] rounded-lg border-2 border-ink bg-sun" />
          <div className="hard-shadow-sm h-12 w-1/4 rotate-[-8deg] rounded-full border-2 border-ink bg-pink" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-5 items-center gap-3 overflow-hidden bg-ink text-[8px] font-black uppercase tracking-widest text-paper">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap">
              Agregate ✦ Beton ✦ Prefabricate ✦ Infrastructură ✦
            </span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 bg-ivory p-5 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
      <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.3em] text-stone">
        <span className="font-v3-display text-[10px] normal-case tracking-normal text-inkk">Tomi Alex</span>
        <span>Menu</span>
      </div>
      <div className="mt-8">
        <span className="block h-px w-8 bg-bronze" />
        <p className="font-v3-display mt-3 text-[34px] leading-[0.95] text-inkk">
          Construim.
          <br />
          <em className="font-light">Amenajăm.</em>
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-1.5">
          <span className="block h-1 w-full rounded-sm bg-stone/40" />
          <span className="block h-1 w-5/6 rounded-sm bg-stone/40" />
          <span className="block h-1 w-2/3 rounded-sm bg-stone/40" />
        </div>
        <div className="aspect-[3/4] rounded-sm bg-[linear-gradient(160deg,#c9ae84,#9c7c4e)]" />
      </div>
      <span className="absolute bottom-5 left-5 right-5 block h-px bg-hair" />
    </div>
  );
}
