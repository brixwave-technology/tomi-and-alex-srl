import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Capabilities } from "@/components/sections/Capabilities";
import { AggregatesStrip } from "@/components/sections/AggregatesStrip";
import { ConcreteBlock } from "@/components/sections/ConcreteBlock";
import { PrefabStrip } from "@/components/sections/PrefabStrip";
import { InfrastructureBlock } from "@/components/sections/InfrastructureBlock";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Capabilities />
      <AggregatesStrip />
      <ConcreteBlock />
      <PrefabStrip />
      <InfrastructureBlock />
      <CTASection />
      <ContactSection withButton={false} />
    </>
  );
}
