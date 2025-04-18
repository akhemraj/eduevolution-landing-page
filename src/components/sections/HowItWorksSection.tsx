import React from "react";
import {
  SealQuestion,
  PencilSimple,
  FileArrowUp,
  Exam,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import SectionBadge from "../common/SectionBadge";
import { Button } from "../ui/button";
import Link from "next/link";

function HowItWorksSection() {
  return (
    <div id="HowItWorks">
      <div className="mx-auto max-w-7xl px-6 py-[60px] lg:px-8">
        <div className="mx-auto grid max-w-2xl lg:max-w-none grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0   ">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="lg:max-w-lg">
              <div className="w-full flex justify-center md:justify-start ">
                <SectionBadge
                  icon={
                    <SealQuestion size={22} color="#1C64F2" weight="fill" />
                  }
                  className="bg-[#E1EFFE] text-blue-600"
                >
                  How it works
                </SectionBadge>
              </div>
              <div>
                <p className="mt-[15px] md:mt-4 text-2xl font-bold tracking-tight text-gray-800 md:text-4xl text-center md:text-left">
                  <span className="text-gray-800">
                    Start grading with{" "}
                    <span className="bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
                      AI
                    </span>{" "}
                    in just
                  </span>{" "}
                  <span className="block text-blue-600 mt-1">
                    3 simple steps
                  </span>
                </p>

                <p className="max-w-[420px] mt-[10px] text-lg font-medium leading-7 text-gray-700 hidden md:block">
                  Let AI analyze your answers and get results with just a few
                  clicks.
                </p>
                <Link target="_blank" href="https://console.edusageai.com/">
                  <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/60 hover:gap-3 transition-all duration-300 ease-in-out rounded-full font-semibold text-sm gap-2 mt-[30px]">
                    Try now <ArrowRight weight="bold" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* stepper started */}
          <div className="container mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className=" md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 border-l-2 border-dashed border-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 inline-flex items-center justify-center text-white relative z-10">
                    <PencilSimple size={22} color="#1C64F2" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-base md:text-xl text-blue-600 font-bold mb-1">
                      1. Setup Exam or Assessment
                    </h2>
                    <p className="text-xs md:text-lg">
                      Create or upload assignments along with model answers to
                      guide AI for accurate grading.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 border-l-2 border-dashed border-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 inline-flex items-center justify-center text-white relative z-10">
                    <FileArrowUp size={22} color="#1C64F2" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-base md:text-xl text-blue-600 font-bold mb-1">
                      2. Upload Submissions
                    </h2>
                    <p className="text-xs md:text-lg">
                      Upload submissions for AI evaluation.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 inline-flex items-center justify-center text-white relative z-10">
                    <Exam size={22} color="#1C64F2" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-base md:text-xl text-blue-600 font-bold mb-1">
                      3. Get Instant Results
                    </h2>
                    <p className="text-xs md:text-lg">
                      Receive detailed and bias-free results instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              target="_blank"
              href="https://console.edusageai.com/"
              className="mx-auto"
            >
              <Button className="flex lg:hidden bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/60 hover:gap-3 transition-all duration-300 ease-in-out rounded-full font-semibold text-sm gap-2">
                Try now <ArrowRight weight="bold" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
