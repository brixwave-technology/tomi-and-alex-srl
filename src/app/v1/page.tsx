import type { Metadata } from "next";
import { V1Home } from "@/components/v1/V1Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v1/" } };

export default function Page() {
  return <V1Home />;
}
