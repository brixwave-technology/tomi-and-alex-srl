import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Capabilities } from "@/components/sections/Capabilities";
import { MaterialsRail } from "@/components/sections/MaterialsRail";
import { ConcreteBlock } from "@/components/sections/ConcreteBlock";
import { PrefabStrip } from "@/components/sections/PrefabStrip";
import { InfrastructureBlock } from "@/components/sections/InfrastructureBlock";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Capabilities />
      <MaterialsRail />
      <ConcreteBlock />
      <PrefabStrip />
      <InfrastructureBlock />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
