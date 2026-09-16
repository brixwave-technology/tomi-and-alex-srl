import type { Metadata } from "next";
import { RegionsIndex } from "@/components/site/RegionPage";
import { contact } from "@/data/company";
import { ogImage } from "@/data/seo";

export const metadata: Metadata = {
  title: "Zone deservite: Satu Mare, Maramureș, Bihor, Sălaj",
  description: `Agregate, beton, prefabricate și lucrări de infrastructură în Satu Mare, Maramureș, Bihor și Sălaj, din unitățile proprii din Turulung. Tel. ${contact.phoneDisplay}.`,
  alternates: { canonical: "/zone/" },
  openGraph: { title: "Zone deservite: Satu Mare, Maramureș, Bihor, Sălaj", description: "Agregate, beton, prefabricate și lucrări de infrastructură în Nord-Vestul României.", url: "/zone/", type: "website", images: [{ url: ogImage, width: 1200, height: 630 }] },
};

export default function Page() {
  return <RegionsIndex />;
}
