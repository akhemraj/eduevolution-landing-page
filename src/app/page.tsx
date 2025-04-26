import Navbar from "@/components/common/Navbar";
import CodeGrader from "@/components/sections/CodeGrader";
import EarlyAccessBanner from "@/components/sections/EarlyAccessBanner";
import EssayGrading from "@/components/sections/EssayGrading";
import EvaluationCount from "@/components/sections/EvaluationCount";
import FeatureSection from "@/components/sections/FeatureSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import NextStepBanner from "@/components/sections/NextStepBanner";
import Pricing from "@/components/sections/Pricing";
import RubricGenerator from "@/components/sections/RubricGenerator";
import SubjectiveGrading from "@/components/sections/SubjectiveGrading";
import SupportIntegration from "@/components/sections/SupportIntegration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduSageAI - AI-Powered Assignment Grading & Evaluation Platform",
  description:
    "Grade faster and smarter with AI-driven evaluations, custom rubrics, and detailed reports.",
  keywords: [
    "EduSageAI",
    "AI in Education",
    "Smart Learning",
    "Personalized Education",
    "AI Learning Tools",
    "Online Learning Platform",
    "Educational Technology",
    "AI Tutoring",
    "Adaptive Learning",
  ],
  robots: "index, follow",
};

export default async function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NextStepBanner />
      <SupportIntegration />
      <EvaluationCount />
      <FeatureSection />
      <HowItWorksSection />
      <CodeGrader />
      <RubricGenerator />
      <SubjectiveGrading />
      <EssayGrading />
      <Pricing />
      <EarlyAccessBanner />
      <Footer />
    </>
  );
}
