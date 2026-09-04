import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { V3Site } from "@/components/v3/V3Site";
import { designById } from "@/data/designs";
import { getBrixwaveAssets } from "@/lib/brandAssets";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
});

const design = designById.v3;

export const metadata: Metadata = {
  title: `${design.label} · ${design.name}`,
  description: design.summary,
  alternates: { canonical: design.href },
};

export default function DesignV3Page() {
  return (
    <DesignShell designId="v3" markSrc={getBrixwaveAssets().mark}>
      <div className={`${sora.variable} ${inter.variable} font-v3-body`}>
        <V3Site />
      </div>
    </DesignShell>
  );
}
