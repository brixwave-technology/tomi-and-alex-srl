import type { Metadata } from "next";
import { Agregate } from "@/components/site/Pages";
import { ogImage, pagesSeo } from "@/data/seo";

const seo = pagesSeo["agregate"];

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/agregate/" },
  openGraph: { title: seo.title, description: seo.description, url: "/agregate/", type: "website", images: [{ url: ogImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [ogImage] },
};

export default function Page() {
  return <Agregate />;
}
