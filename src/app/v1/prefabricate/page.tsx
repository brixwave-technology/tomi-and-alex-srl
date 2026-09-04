import type { Metadata } from "next";
import { V1Prefabricate } from "@/components/v1/V1Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "prefabricate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v1/prefabricate/" } };

export default function Page() {
  return <V1Prefabricate />;
}
