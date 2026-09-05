import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/site/Guides";
import { guideBySlug, guides } from "@/data/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) return {};
  return {
    title: { absolute: guide.seoTitle },
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/ghiduri/${guide.slug}/` },
    openGraph: { title: guide.seoTitle, description: guide.description, url: `/ghiduri/${guide.slug}/`, type: "article", publishedTime: guide.published, modifiedTime: guide.updated, images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
    twitter: { title: guide.seoTitle, description: guide.description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
