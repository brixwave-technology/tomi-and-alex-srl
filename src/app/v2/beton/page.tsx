import type { Metadata } from "next";
import { V2Beton } from "@/components/v2/V2Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "beton")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v2/beton/" } };

export default function Page() {
  return <V2Beton />;
}
