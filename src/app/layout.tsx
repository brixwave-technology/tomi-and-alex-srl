import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { company, seo } from "@/data/company";
import { brixwave } from "@/data/brixwave";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
});

const title = `${company.name} · Portal de design`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: title,
    template: `%s · ${company.name}`,
  },
  description: `${brixwave.claim}. Trei concepte de website pentru ${company.name}: corporate, creativ și minimalist premium.`,
  applicationName: `${company.name} · Portal de design`,
  keywords: [...seo.keywords, "BRIXWAVE", "concept de design", "website de prezentare"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: company.name,
    title,
    description: brixwave.claim,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${company.name}. ${company.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: brixwave.claim,
    images: ["/og.jpg"],
  },
  robots: { index: false, follow: false },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#07090f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={manrope.variable}>
      <body className="min-h-dvh bg-portal-950 text-portal-100">{children}</body>
    </html>
  );
}
