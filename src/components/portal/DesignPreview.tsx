import type { DesignId } from "@/data/designs";

/**
 * Miniaturi desenate în CSS pentru cardurile din Index. Fiecare reproduce
 * arhitectura conceptului: grilă corporate, centru de comandă, antracit elite.
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
      <div className="absolute inset-0 flex bg-carbon-900 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
        <div className="flex w-10 flex-col items-center gap-3 border-r border-white/10 bg-carbon-950 py-3">
          <span className="size-3 border border-electric" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-1 w-4 ${i === 1 ? "bg-electric" : "bg-steel-500/50"}`} />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[7px] uppercase tracking-widest text-steel-300">
            <span>TA / 01 — Flotă</span>
            <span className="text-electric">● online</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["1.200 t", "420 mc", "18"].map((v) => (
              <div key={v} className="border border-white/10 p-2">
                <span className="block font-mono text-[6px] text-steel-500">CAPACITATE</span>
                <span className="mt-1 block text-[11px] font-semibold text-silver">{v}</span>
                <span className="mt-1.5 block h-0.5 w-full bg-carbon-600">
                  <span className="block h-full w-3/4 bg-electric" />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-14 items-end gap-1.5 border-b border-white/10 px-1">
            {[40, 55, 62, 74, 88].map((h, i) => (
              <span key={i} className="flex-1 rounded-t-[2px] bg-electric/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 space-y-1">
            <span className="block h-1 w-full bg-steel-500/40" />
            <span className="block h-1 w-2/3 bg-steel-500/40" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="v3-granite absolute inset-0 p-5 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
      <div className="flex items-center justify-between text-[7px] uppercase tracking-[0.3em] text-granite-300">
        <span className="font-v3-display text-[10px] font-semibold normal-case tracking-tight text-limestone">TOMI ALEX</span>
        <span>Partener</span>
      </div>
      <span className="v3-rule mt-6 block w-16" />
      <p className="v3-display font-v3-display mt-3 text-[30px] text-limestone">
        Construim
        <br />
        <span className="text-bronze-light">la scară.</span>
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["120+", "3", "2008"].map((v) => (
          <div key={v} className="border border-bronze/30 p-2">
            <span className="block font-v3-display text-[12px] font-semibold text-limestone">{v}</span>
            <span className="mt-1 block h-1 w-3/4 bg-granite-500/50" />
          </div>
        ))}
      </div>
      <span className="absolute bottom-5 left-5 right-5 block h-px bg-bronze/40" />
    </div>
  );
}
