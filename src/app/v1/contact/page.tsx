import type { Metadata } from "next";
import { V1Contact } from "@/components/v1/V1Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "contact")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/v1/contact/" } };

export default function Page() {
  return <V1Contact />;
}
