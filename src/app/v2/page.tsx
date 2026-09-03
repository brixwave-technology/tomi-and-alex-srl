import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { V2Site } from "@/components/v2/V2Site";
import { designById } from "@/data/designs";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
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
      <div className={`${syne.variable} ${spaceGrotesk.variable} font-v2-body`}>
        <V2Site />
      </div>
    </DesignShell>
  );
}
