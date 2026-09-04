import { Hub } from "@/components/portal/Hub";
import { getBrixwaveAssets } from "@/lib/brandAssets";

export default function IndexPage() {
  return <Hub assets={getBrixwaveAssets()} />;
}
