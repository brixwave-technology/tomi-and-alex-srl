import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { V1Site } from "@/components/v1/V1Site";
import { designById } from "@/data/designs";
import { getBrixwaveAssets } from "@/lib/brandAssets";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const design = designById.v1;

export const metadata: Metadata = {
  title: `${design.label} · ${design.name}`,
  description: design.summary,
  alternates: { canonical: design.href },
};

export default function DesignV1Page() {
  return (
    <DesignShell designId="v1" markSrc={getBrixwaveAssets().mark}>
      <div className={`${archivo.variable} font-v1`}>
        <V1Site />
      </div>
    </DesignShell>
  );
}
