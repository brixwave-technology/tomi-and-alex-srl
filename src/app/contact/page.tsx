import type { Metadata } from "next";
import { Contact } from "@/components/site/Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "contact")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/contact/" } };

export default function Page() {
  return <Contact />;
}
