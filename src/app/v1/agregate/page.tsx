import type { Metadata } from "next";
import { V1Agregate } from "@/components/v1/V1Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "agregate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v1/agregate/" } };

export default function Page() {
  return <V1Agregate />;
}
