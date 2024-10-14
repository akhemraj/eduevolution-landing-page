import React from "react";
import {
  SealQuestion,
  PencilSimple,
  FileArrowUp,
  Exam,
} from "@phosphor-icons/react/dist/ssr";

function HowItWorksSection() {
  return (
    <div className="">
      <div className="overflow-hidden bg-white m-[120px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="lg:pr-8 lg:pt-4 mr-10">
              <div className="lg:max-w-lg ">
                <div className=" text-center mt-4 mb-3 bg-[#E1EFFE] font-semibold text-blue-600  focus:outline-none  font-medium rounded-full text-sm px-2 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                  <SealQuestion
                    size={25}
                    color="#1C64F2"
                    weight="fill"
                    className="mr-2 "
                  />
                  How it works
                </div>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl leading-loose">
                  <span className="leading-relaxed">
                    Create Exams and Start
                  </span>{" "}
                  Grading with AI in Just
                  <span className="block text-blue-600 leading-relaxed">
                    3 Simple Steps
                  </span>
                </p>

                <p className="mt-2 text-lg leading-8 text-gray-700">
                  Upload your exam sheets, let our AI analyze the answers, and
                  get instant, bias-free results—all with just a few clicks
                </p>
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
                      <h2 className=" title-font text-base	 text-blue-600 font-bold mb-1 tracking-wider">
                        1. Setup Exam
                      </h2>
                      <p className="leading-relaxed">
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
                      <h2 className="text-blue-600 font-bold title-font text-base	  mb-1 tracking-wider">
                        2. Upload Submissions
                      </h2>
                      <p className="leading-relaxed">
                        Upload scanned answer sheets or typed responses for AI
                        analysis and comparison to model answers.
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 inline-flex items-center justify-center text-white relative z-10">
                      <Exam size={22} color="#1C64F2" />
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="text-blue-600 font-bold title-font text-base	  mb-1 tracking-wider">
                        3. Get Instant Results
                      </h2>
                      <p className="leading-relaxed">
                        Receive detailed, bias-free grading results instantly
                        with AI-driven accuracy and feedback.
                      </p>
                    </div>
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
