import CodeGrader from "@/components/sections/CodeGrader";
import EarlyAccessBanner from "@/components/sections/EarlyAccessBanner";
import EvaluationCount from "@/components/sections/EvaluationCount";
import FeatureSection from "@/components/sections/FeatureSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import NextStepBanner from "@/components/sections/NextStepBanner";
import RubricGenerator from "@/components/sections/RubricGenerator";
import SupportIntegration from "@/components/sections/SupportIntegration";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <NextStepBanner />
      <SupportIntegration />
      <EvaluationCount />
      <FeatureSection />
      <HowItWorksSection />
      <CodeGrader />
      <RubricGenerator />
      <EarlyAccessBanner />
      <Footer />
    </>
  );
}
