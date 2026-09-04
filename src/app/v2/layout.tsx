import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { CallFab } from "@/components/shared/CallFab";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { designById } from "@/data/designs";

const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], display: "swap" });
const barlowCondensed = Barlow_Condensed({ variable: "--font-barlow-condensed", subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], display: "swap" });

const design = designById.v2;

export const metadata: Metadata = {
  title: { default: `${design.label} · ${design.name}`, template: `%s · ${design.label}` },
  description: design.summary,
};

export default function DesignV2Layout({ children }: { children: React.ReactNode }) {
  return (
    <DesignShell designId="v2">
      <div className={`${barlow.variable} ${barlowCondensed.variable} font-v2 bg-concrete-50 text-asphalt-950`}>
        <V2Header />
        <main id="continut">{children}</main>
        <V2Footer />
        <CallFab className="bg-brand text-white hover:bg-brand-soft font-v2-display text-[17px] uppercase tracking-wide" />
      </div>
    </DesignShell>
  );
}
