import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { V2Site } from "@/components/v2/V2Site";
import { designById } from "@/data/designs";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const design = designById.v2;

export const metadata: Metadata = {
  title: `${design.label} · ${design.name}`,
  description: design.summary,
  alternates: { canonical: design.href },
};

export default function DesignV2Page() {
  return (
    <DesignShell designId="v2">
      <div className={`${barlow.variable} ${barlowCondensed.variable} font-v2`}>
        <V2Site />
      </div>
    </DesignShell>
  );
}
