import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { CallFab } from "@/components/shared/CallFab";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { company } from "@/data/company";
import { pagesSeo, siteUrl } from "@/data/seo";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const home = pagesSeo[""];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: home.title, template: `%s | ${company.name}` },
  description: home.description,
  applicationName: company.name,
  keywords: home.keywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  category: "construction",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: company.name,
    title: home.title,
    description: home.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${company.name}. ${company.tagline}` }],
  },
  twitter: { card: "summary_large_image", title: home.title, description: home.description, images: ["/og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={archivo.variable}>
      <body className="min-h-dvh bg-graphite-950 font-sans text-frost">
        <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
          Sari la conținut
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <CallFab className="bg-brand text-white hover:bg-brand-soft" />
      </body>
    </html>
  );
}
