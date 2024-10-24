import DemoSection from "@/components/sections/DemoSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <DemoSection />
      <FooterSection />
    </>
  );
}
