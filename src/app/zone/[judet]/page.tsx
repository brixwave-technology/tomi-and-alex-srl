import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegionPage } from "@/components/site/RegionPage";
import { regionBySlug, regions } from "@/data/regions";

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ judet: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ judet: string }> }): Promise<Metadata> {
  const { judet } = await params;
  const region = regionBySlug[judet];
  if (!region) return {};
  return {
    title: { absolute: region.title },
    description: region.description,
    alternates: { canonical: `/zone/${region.slug}/` },
    openGraph: { title: region.title, description: region.description, url: `/zone/${region.slug}/`, type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
    twitter: { title: region.title, description: region.description },
  };
}

export default async function Page({ params }: { params: Promise<{ judet: string }> }) {
  const { judet } = await params;
  const region = regionBySlug[judet];
  if (!region) notFound();
  return <RegionPage region={region} />;
}
