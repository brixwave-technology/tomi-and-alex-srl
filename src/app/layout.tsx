import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { CallFab } from "@/components/shared/CallFab";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { company, seo } from "@/data/company";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const title = `${company.name} | Agregate, beton, prefabricate și lucrări de infrastructură`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: title, template: `%s | ${company.name}` },
  description: company.description,
  applicationName: company.name,
  keywords: [...seo.keywords],
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
  twitter: { card: "summary_large_image", title, description: company.heroSubtitle, images: ["/og.jpg"] },
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
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <CallFab className="bg-brand text-white hover:bg-brand-soft" />
      </body>
    </html>
  );
}
