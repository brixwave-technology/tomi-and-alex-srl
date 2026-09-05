import type { Metadata } from "next";
import { GuidesIndex } from "@/components/site/Guides";

export const metadata: Metadata = {
  title: "Ghiduri utile: beton, agregate, prefabricate",
  description: "Ghiduri practice Tomi Alex: ce clasă de beton pentru fundație, nisip sau balast, cât beton îmi trebuie, comanda betonului la domiciliu, prefabricate pentru canalizare.",
  alternates: { canonical: "/ghiduri/" },
  openGraph: { title: "Ghiduri utile: beton, agregate, prefabricate", description: "Răspunsuri practice la întrebările clienților din Satu Mare și Nord-Vest.", url: "/ghiduri/", type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
};

export default function Page() {
  return <GuidesIndex />;
}
