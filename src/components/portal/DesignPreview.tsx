import type { DesignId } from "@/data/designs";

/**
 * Miniaturi desenate în CSS pentru cardurile din Index. Fiecare reproduce
 * arhitectura conceptului: grilă corporate, centru de comandă, antracit elite.
 */
export function DesignPreview({ id }: { id: DesignId }) {
  if (id === "v1") {
    return (
      <div className="absolute inset-0 bg-graphite-900 p-4 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
        <div className="flex items-center justify-between rounded bg-graphite-800 px-3 py-2">
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
            <div key={i} className="rounded border border-steel-400/30 bg-graphite-800 p-2">
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
      <div className="absolute inset-0 bg-concrete-100 transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]" aria-hidden>
        <div className="h-1.5 w-full bg-brand" />
        <div className="flex items-center justify-between border-b-2 border-brand bg-asphalt-950 px-3 py-2">
          <span className="h-2 w-12 bg-brand" />
          <span className="flex gap-2">
            <span className="h-1.5 w-6 bg-concrete-300" />
            <span className="h-1.5 w-6 bg-concrete-300" />
            <span className="h-3 w-12 bg-brand" />
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2 bg-asphalt-900 p-3">
          <div className="col-span-3 space-y-1.5">
            <span className="block h-5 w-full bg-white" />
            <span className="block h-5 w-4/5 bg-brand" />
            <span className="block h-5 w-3/5 bg-white" />
            <span className="mt-2 flex gap-1.5">
              <span className="h-4 w-14 bg-brand" />
              <span className="h-4 w-14 border border-white" />
            </span>
          </div>
          <div className="col-span-2 border-t-4 border-brand bg-asphalt-800 p-1.5">
            <span className="block h-1.5 w-3/4 bg-concrete-300" />
            <span className="mt-1 block h-3 w-full bg-asphalt-950" />
            <span className="mt-1 block h-3 w-full bg-asphalt-950" />
            <span className="mt-1 block h-3 w-full bg-brand" />
          </div>
        </div>
        <div className="v2-hazard h-1.5 w-full" />
        <div className="grid grid-cols-3 gap-2 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-2 border-asphalt-950 bg-white p-1.5">
              <span className="block h-6 w-full bg-concrete-300" />
              <span className="mt-1.5 block h-2 w-3/4 bg-asphalt-950" />
              <span className="mt-1.5 block h-2.5 w-full bg-asphalt-950" />
            </div>
          ))}
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
        <span className="text-brand-soft">la scară.</span>
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["120+", "3", "2008"].map((v) => (
          <div key={v} className="border border-brand/30 p-2">
            <span className="block font-v3-display text-[12px] font-semibold text-limestone">{v}</span>
            <span className="mt-1 block h-1 w-3/4 bg-granite-500/50" />
          </div>
        ))}
      </div>
      <span className="absolute bottom-5 left-5 right-5 block h-px bg-brand/40" />
    </div>
  );
}
