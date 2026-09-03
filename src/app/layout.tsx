import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company, siteUrl } from "@/data/site";
import { images } from "@/data/images";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: company.heroSubtitle,
    images: [{ url: images.hero.src, width: images.hero.width, height: images.hero.height, alt: images.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <a
          href="#continut"
          className="sr-only z-[60] rounded-sm bg-brand px-4 py-2 font-display font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Sari la conținut
        </a>
        <Header />
        <main id="continut" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
