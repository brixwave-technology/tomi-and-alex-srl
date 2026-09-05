import type { Metadata } from "next";
import { Prefabricate } from "@/components/site/Pages";
import { pagesSeo } from "@/data/seo";

const seo = pagesSeo["prefabricate"];

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/prefabricate/" },
  openGraph: { title: seo.title, description: seo.description, url: "/prefabricate/", type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <Prefabricate />;
}
