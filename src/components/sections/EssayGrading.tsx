import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import {
  ArrowRight,
  CheckCircle,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";

const EssayGrading = () => {
  return (
    <div
      className="px-5 lg:px-[120px] py-[60px] lg:pb-[130px]"
      id="EssayGrading"
    >
      <div className="max-w-[1260px] flex justify-between items-center  mx-auto">
        <div className="max-w-[480px]">
          <div className="flex gap-1 mb-4">
            <SectionBadge
              icon={<FileText size={22} color="#1C64F2" weight="bold" />}
              className="bg-[#E1EFFE] text-blue-600"
            >
              Essay Grading
            </SectionBadge>
          </div>
          <h3 className="text-2xl lg:text-4xl text-gray-800 font-bold mb-3 leading-8 lg:leading-10">
            <span className="bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
              AI
            </span>
            -Essay Grader
          </h3>
          <p className="max-w-[400px] text-gray-700 text-base lg:text-lg font-medium mb-6">
            AI-powered grading that evaluates essay context, structure, and
            coherence — reducing manual effort and ensuring consistency
          </p>
          <div className="block lg:hidden w-full h-auto relative aspect-[534/392] mb-6">
            <Image
              src="/images/essay.png"
              alt="Essay Grading"
              className="object-cover"
              fill
            />
          </div>
          <div className="grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-x-4 gap-y-2 mb-[25px] lg:mb-[35px]">
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Context-Aware Scoring
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Writing Quality Checks
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Instant AI Feedback
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Rubric-Based Evaluation
              </span>
            </div>
          </div>
          <Link target="_blank" href="https://console.edusageai.com/">
            <Button className="bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/60 hover:gap-3 transition-all duration-300 ease-in-out rounded-full font-semibold text-sm gap-2">
              Try now <ArrowRight weight="bold" size={18} />
            </Button>
          </Link>
        </div>
        <div className="hidden lg:block w-[564px] h-[406px] relative">
          <Image
            src="/images/essay.png"
            alt="Essay-generator"
            className="object-contain translate-x-4"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default EssayGrading;
