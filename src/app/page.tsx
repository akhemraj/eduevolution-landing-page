import DemoSection from "@/components/sections/DemoSection";
import EvaluationCount from "@/components/sections/EvaluationCount";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EvaluationCount />
      <FeatureSection />
      <HowItWorksSection />
      <DemoSection />
      <FooterSection />
    </>
  );
}
