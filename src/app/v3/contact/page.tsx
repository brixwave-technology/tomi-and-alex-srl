import type { Metadata } from "next";
import { V3Contact } from "@/components/v3/V3Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "contact")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v3/contact/" } };

export default function Page() {
  return <V3Contact />;
}
