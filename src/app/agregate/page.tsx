import type { Metadata } from "next";
import { Agregate } from "@/components/site/Pages";
import { sitePages } from "@/data/company";

const page = sitePages.find((p) => p.slug === "agregate")!;

export const metadata: Metadata = { title: page.label, description: page.description, alternates: { canonical: "/agregate/" } };

export default function Page() {
  return <Agregate />;
}
