import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { CallFab } from "@/components/shared/CallFab";
import { V3Header } from "@/components/v3/V3Header";
import { V3Footer } from "@/components/v3/V3Footer";
import { designById } from "@/data/designs";

const sora = Sora({ variable: "--font-sora", subsets: ["latin", "latin-ext"], weight: "variable", display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], weight: "variable", display: "swap" });

const design = designById.v3;

export const metadata: Metadata = {
  title: { default: `${design.label} · ${design.name}`, template: `%s · ${design.label}` },
  description: design.summary,
};

export default function DesignV3Layout({ children }: { children: React.ReactNode }) {
  return (
    <DesignShell designId="v3">
      <div className={`${sora.variable} ${inter.variable} font-v3-body bg-anthracite-950 text-limestone`}>
        <V3Header />
        <main id="continut">{children}</main>
        <V3Footer />
        <CallFab className="bg-brand text-white hover:bg-brand-soft" />
      </div>
    </DesignShell>
  );
}
