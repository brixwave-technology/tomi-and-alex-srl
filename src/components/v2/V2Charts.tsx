import { Reveal } from "@/components/shared/Reveal";
import type { Capacity, YearVolume } from "@/data/company";

/**
 * Grafic cu bare pentru o singură serie (volum anual). O singură nuanță,
 * bare subțiri cu capete rotunjite, grilă discretă, etichete în culorile
 * textului, tooltip nativ pe fiecare bară și tabel echivalent pentru acces.
 */
export function VolumeBars({ data, title, unit }: { data: YearVolume[]; title: string; unit: string }) {
  const max = Math.max(...data.map((d) => d.value));
  const ticks = [0, 0.5, 1].map((f) => Math.round((max * f) / 10) * 10);
  return (
    <Reveal className="v2-corners border border-white/10 bg-carbon-800 p-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-v2-mono text-[11px] uppercase tracking-[0.24em] text-steel-300">{title}</p>
          <p className="mt-1 text-[13px] text-steel-500">{unit}</p>
        </div>
        <p className="text-right">
          <span className="block text-2xl font-semibold text-white">{data[data.length - 1].value}</span>
          <span className="font-v2-mono text-[11px] text-electric-soft">
            +{Math.round(((data[data.length - 1].value - data[0].value) / data[0].value) * 100)}% față de {data[0].year}
          </span>
        </p>
      </div>
      <figure className="mt-6">
        <svg viewBox="0 0 400 180" className="h-44 w-full" role="img" aria-label={`${title}: ${data.map((d) => `${d.year} ${d.value}`).join(", ")}`}>
          {ticks.map((t) => {
            const y = 150 - (t / max) * 130;
            return (
              <g key={t}>
                <line x1="34" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="28" y={y + 4} textAnchor="end" fontSize="10" fill="#6f7a8a" fontFamily="var(--font-plex-mono)">
                  {t}
                </text>
              </g>
            );
          })}
          {data.map((d, i) => {
            const slot = (400 - 44) / data.length;
            const w = Math.min(28, slot * 0.42);
            const x = 44 + i * slot + (slot - w) / 2;
            const h = (d.value / max) * 130;
            const last = i === data.length - 1;
            return (
              <g key={d.year} className="group/bar">
                <title>{`${d.year}: ${d.value} ${unit}`}</title>
                <rect x={x - 8} y="18" width={w + 16} height="132" fill="transparent" />
                <rect
                  x={x}
                  y={150 - h}
                  width={w}
                  height={h}
                  rx="4"
                  fill={last ? "#2f6bff" : "#2f6bff"}
                  fillOpacity={last ? 1 : 0.55}
                  className="v2-bar transition-[fill-opacity] group-hover/bar:[fill-opacity:1]"
                  style={{ ["--bar-delay" as string]: `${i * 90}ms` }}
                />
                {last && (
                  <text x={x + w / 2} y={150 - h - 8} textAnchor="middle" fontSize="11" fontWeight="600" fill="#d7dce4" fontFamily="var(--font-plex-sans)">
                    {d.value}
                  </text>
                )}
                <text x={x + w / 2} y="168" textAnchor="middle" fontSize="10" fill="#a9b2c0" fontFamily="var(--font-plex-mono)">
                  {d.year}
                </text>
              </g>
            );
          })}
        </svg>
        <figcaption className="sr-only">
          <table>
            <caption>{title}</caption>
            <tbody>
              {data.map((d) => (
                <tr key={d.year}>
                  <th scope="row">{d.year}</th>
                  <td>
                    {d.value} {unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/** Indicator de capacitate: valoare, unitate, grad de utilizare ca bară orizontală subțire. */
export function CapacityTile({ item, index }: { item: Capacity; index: number }) {
  return (
    <Reveal delay={index * 80} className="v2-corners border border-white/10 bg-carbon-800 p-5">
      <p className="font-v2-mono text-[10.5px] uppercase tracking-[0.22em] text-steel-300">{item.label}</p>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight text-white">{item.value}</span>
        <span className="text-[13px] text-steel-300">{item.unit}</span>
      </p>
      <div className="mt-4 h-1 w-full bg-carbon-600" role="img" aria-label={`Grad de utilizare ${item.share}%`}>
        <span className="v2-meter block h-full bg-electric" style={{ width: `${item.share}%`, ["--bar-delay" as string]: `${index * 90}ms` }} />
      </div>
      <p className="mt-2 flex justify-between font-v2-mono text-[10.5px] text-steel-500">
        <span>utilizare medie</span>
        <span className="text-steel-300">{item.share}%</span>
      </p>
      <p className="mt-3 text-[12.5px] leading-relaxed text-steel-500">{item.note}</p>
    </Reveal>
  );
}
