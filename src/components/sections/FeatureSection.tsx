import React from "react";
import {
  Hourglass,
  LightbulbFilament,
  Scales,
  UsersThree,
  SquaresFour,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

function FeatureSection() {
  return (
    <>
      <div className="flex justify-center items-center" id="Features">
        <div className="text-center bg-[#E1EFFE] font-semibold text-blue-600 focus:outline-none rounded-full text-xs sm:text-sm px-[14px] py-2 inline-flex items-center gap-2">
          <SquaresFour size={22} color="#1C64F2" weight="fill" />
          Key Features
        </div>
      </div>
      <h1 className="text-center text-2xl sm:text-4xl font-semibold text-gray-800 mt-[15px] lg:mt-[22px] mb-[50px] lg:mb-[60px] ">
        Grading Reimagined
      </h1>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[980px] flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-[25px] justify-center items-center">
          {/* Card 0: AI Code Review */}
          <div className="w-64 md:w-[310px] md:h-[240px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-purple-50 rounded-full">
                <SquaresFour size={26} color="#7e22ce" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              AI Code Review
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Evaluates programming assignments to ensure accuracy, high efficiency, and alignment with industry standards.
            </p>
          </div>
          {/* Card 1: Fair Grading */}
          <div className="w-64 md:w-[310px] md:h-[240px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-orange-50 rounded-full">
                <Scales size={26} color="#E5C100" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              Fair Grading
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Eliminates bias, ensuring every student’s work is evaluated uniformly and accurately
            </p>
          </div>
          {/* Card 2: Saves time */}
          <div className="w-64 md:w-[310px] md:h-[240px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-blue-50 rounded-full">
                <Hourglass size={26} color="#1C64F2" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              Saves time
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Allows teacher to focus on student engagement and personalized feedback
            </p>
          </div>
          {/* Card 3: AI Plagiarism Score */}
          <div className="w-64 md:w-[310px] md:h-[220px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-cyan-50 rounded-full">
                <MagnifyingGlass size={26} color="#0891b2" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              AI Plagiarism Score
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Quickly check text originality with our AI tool that provides instant plagiarism scores
            </p>
          </div>
          {/* Card 4: Improved Insights */}
          <div className="w-64 md:w-[310px] md:h-[240px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-yellow-50 rounded-full">
                <LightbulbFilament size={26} color="#E3A008" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              Improved Insights
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Generates detailed performance reports to identify Strengths and Weaknesses
            </p>
          </div>
          {/* Card 5: Enhanced Engagement */}
          <div className="w-64 md:w-[310px] md:h-[220px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md">
            <div className="text-gray-500 mb-3 flex justify-center sm:justify-start">
              <div className="flex items-center justify-center w-[45px] h-[45px] bg-green-50 rounded-full">
                <UsersThree size={26} color="#057A55" />
              </div>
            </div>
            <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[30px] text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left">
              Enhanced Engagement
            </h5>
            <p className="font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
              Dashboards offer insights that enhance collaboration among teachers, students, and parents
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
