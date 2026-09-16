import type { Metadata } from "next";
import { Contact } from "@/components/site/Pages";
import { ogImage, pagesSeo } from "@/data/seo";

const seo = pagesSeo["contact"];

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: "/contact/" },
  openGraph: { title: seo.title, description: seo.description, url: "/contact/", type: "website", images: [{ url: ogImage, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [ogImage] },
};

export default function Page() {
  return <Contact />;
}
