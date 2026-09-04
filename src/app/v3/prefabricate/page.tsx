import type { Metadata } from "next";
import { V3Prefabricate } from "@/components/v3/V3Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "prefabricate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v3/prefabricate/" } };

export default function Page() {
  return <V3Prefabricate />;
}
