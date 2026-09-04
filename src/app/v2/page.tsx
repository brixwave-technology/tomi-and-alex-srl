import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { DesignShell } from "@/components/portal/DesignShell";
import { V2Site } from "@/components/v2/V2Site";
import { designById } from "@/data/designs";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
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
      <div className={`${plexSans.variable} ${plexMono.variable} font-v2`}>
        <V2Site />
      </div>
    </DesignShell>
  );
}
