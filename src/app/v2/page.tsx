import type { Metadata } from "next";
import { V2Home } from "@/components/v2/V2Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v2/" } };

export default function Page() {
  return <V2Home />;
}
