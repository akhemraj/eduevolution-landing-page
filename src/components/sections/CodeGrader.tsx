import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";

const CodeGrader = () => {
  return (
    <div className="px-5 lg:px-[120px] py-[60px] lg:pb-[130px]" id="CodeGrader">
      <div className="max-w-[1260px] flex justify-between items-center mx-auto">
        <div className="hidden lg:block w-[534px] h-[392px] relative">
          <Image
            src="/images/code-grader.svg"
            alt="Code-grader"
            className="object-cover -translate-x-4"
            fill
          />
        </div>
        <div className="max-w-[480px]">
          <div className="flex gap-2 mb-4">
            <SectionBadge
              icon={<Code size={22} color="#1C64F2" weight="bold" />}
              className="bg-[#E1EFFE] text-blue-600"
            >
              Code Grader
            </SectionBadge>
            <SectionBadge
              icon={<Star size={22} color="#ca8a04" weight="fill" />}
              className="text-yellow-600 bg-gradient-to-tr from-[#FFF1CC] via-[#FFF4D6] to-[#FFE396]"
            >
              Premium
            </SectionBadge>
          </div>
          <h3 className="text-2xl lg:text-4xl text-gray-800 font-bold mb-3 leading-8 lg:leading-10">
            Smarter Code Evaluation{" "}
            <span className="block">
              with{" "}
              <span className="bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
                AI
              </span>
            </span>
          </h3>
          <p className="max-w-[400px] text-gray-700 text-base lg:text-lg font-medium mb-6">
            Get real-time feedback, verify originality and optimize your code in
            Python, Java, C++, JavaScript and more
          </p>
          <div className="block lg:hidden w-full h-auto relative aspect-[534/392] mb-6">
            <Image
              src="/images/code-grader.svg"
              alt="Code-grader"
              className="object-cover -translate-x-4"
              fill
            />
          </div>
          <div className="grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-x-4 gap-y-2 mb-[25px] lg:mb-[35px]">
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                In depth Analysis
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Multi Language Support
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                Plagiarism Detector
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle size={24} color="#1F2A37" />
              <span className="text-base font-semibold text-gray-800">
                File-level Analysis
              </span>
            </div>
          </div>
          <Link href="#GetEarlyAccess">
            <Button className="bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/60 hover:gap-3 transition-all duration-300 ease-in-out rounded-full font-semibold text-sm gap-2">
              Request access <ArrowRight weight="bold" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeGrader;
