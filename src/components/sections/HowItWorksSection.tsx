import React from "react";
import {
  SealQuestion,
  PencilSimple,
  FileArrowUp,
  Exam,
} from "@phosphor-icons/react/dist/ssr";

function HowItWorksSection() {
  return (
    <div id="How-it-works" className="mt-32 md:mt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl lg:max-w-none grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16 sm:gap-y-20 lg:mx-0   ">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="lg:max-w-lg">
              <div className="w-full flex justify-center md:justify-start ">
                <div className="text-center bg-[#E1EFFE] font-semibold text-blue-600 focus:outline-none rounded-full text-xs sm:text-sm px-[14px] py-2 inline-flex items-center gap-2">
                  <SealQuestion size={22} color="#1C64F2" weight="fill" />
                  How it works
                </div>
              </div>
              <div>
                <p className="mt-[15px] md:mt-5  text-2xl font-bold tracking-tight text-gray-800 md:text-4xl  text-center md:text-left">
                  <span className="md:leading-relaxed">
                    Create exams and start
                  </span>{" "}
                  grading with AI in just
                  <span className="block text-blue-600 md:leading-relaxed">
                    3 simple steps
                  </span>
                </p>

                <p className="max-w-[480px] mt-[10px] text-lg font-medium leading-7 text-gray-700 hidden md:block">
                  Let AI analyze your answers and get Instant, Bias-free
                  results—all with just a few clicks
                </p>
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
                      1. Setup Exam
                    </h2>
                    <p className="text-xs md:text-base">
                      Create or upload your question paper along with model
                      answers to guide the AI for accurate grading.
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
                    <p className="text-xs md:text-base">
                      Upload handwritten or digital answer sheets for AI
                      evaluation.
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
                    <p className="text-xs md:text-base">
                      Receive detailed, bias-free grading results instantly with
                      AI-driven accuracy and feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
