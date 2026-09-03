import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { company, siteUrl } from "@/data/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const title = `${company.name} | Infrastructură, construcții, agregate, beton și prefabricate`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "Tomi Alex SRL",
    "lucrări de infrastructură",
    "construcții",
    "rețele de alimentare cu apă",
    "canalizare",
    "construcție drumuri",
    "modernizare drumuri",
    "construcție poduri",
    "agregate",
    "balastieră",
    "nisip",
    "balast",
    "stație de betoane",
    "beton",
    "prefabricate din beton",
    "Satu Mare",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: company.name,
    title,
    description: company.heroSubtitle,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${company.name}. ${company.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: company.heroSubtitle,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#121214",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${archivo.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="relative flex min-h-full flex-col">
        <a
          href="#continut"
          className="sr-only z-[60] rounded-sm bg-brand px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Sari la conținut
        </a>
        <Header />
        <main id="continut" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
