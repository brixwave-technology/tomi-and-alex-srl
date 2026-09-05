import type { Metadata } from "next";
import { Prefabricate } from "@/components/site/Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "prefabricate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/prefabricate/" } };

export default function Page() {
  return <Prefabricate />;
}
