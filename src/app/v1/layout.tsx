import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { CallFab } from "@/components/shared/CallFab";
import { V1Header } from "@/components/v1/V1Header";
import { V1Footer } from "@/components/v1/V1Footer";
import { designById } from "@/data/designs";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const design = designById.v1;

export const metadata: Metadata = {
  title: { default: `${design.label} · ${design.name}`, template: `%s · ${design.label}` },
  description: design.summary,
};

export default function DesignV1Layout({ children }: { children: React.ReactNode }) {
  return (
    <DesignShell designId="v1">
      <div className={`${archivo.variable} font-v1 bg-graphite-950 text-frost`}>
        <V1Header />
        <main id="continut">{children}</main>
        <V1Footer />
        <CallFab className="bg-brand text-white hover:bg-brand-soft" />
      </div>
    </DesignShell>
  );
}
