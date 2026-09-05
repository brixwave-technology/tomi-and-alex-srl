import type { Metadata } from "next";
import { Beton } from "@/components/site/Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "beton")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/beton/" } };

export default function Page() {
  return <Beton />;
}
