import type { Metadata } from "next";
import { V3Agregate } from "@/components/v3/V3Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "agregate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v3/agregate/" } };

export default function Page() {
  return <V3Agregate />;
}
