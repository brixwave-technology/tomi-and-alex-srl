import type { Metadata } from "next";
import { V3Beton } from "@/components/v3/V3Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "beton")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v3/beton/" } };

export default function Page() {
  return <V3Beton />;
}
