import React from "react";
import {
  Hourglass,
  LightbulbFilament,
  Scales,
  UsersThree,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";

function FeatureSection() {
  return (
    <>
      <div className="flex justify-center items-center mt-36 md:mt-28 " id="Features">
        <div className="text-center mt-4 mb-3 bg-[#E1EFFE] font-semibold text-blue-600 focus:outline-none  rounded-full text-xs sm:text-sm px-2.5 py-1.5 inline-flex items-center dark:focus:ring-[#3b5998]/55">
          <SquaresFour
            size={25}
            color="#1C64F2"
            className="mr-2"
            weight="fill"
          />
          Key Features
        </div>
       

      </div>
      <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-3">
        Grading reimagined <span className="text-blue-600">.</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
        <div className="container pl-10 pr-10 mt-5 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          {/* Card 1 */}
          <div className="w-60   sm:w-72 md:w-70 md:h-64 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-gray-500 dark:text-gray-400 mb-3 flex justify-center sm:justify-start ">
              <div className="flex items-center  justify-center w-10 h-10 bg-blue-50 rounded-full">
                <Hourglass size={23} color="#1C64F2" />
              </div>
            </div>
            <h5 className=" whitespace-nowrap mb-2 mt-5 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left  sm:text-xlg">
              Time saving for Teachers
            </h5>
            <p className="mb-3 font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-sm">
              AI automates grading, allowing teachers to focus on student
              engagement and personalized instruction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-60   sm:w-72 md:w-70 md:h-64 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3 flex justify-center sm:justify-start ">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-full">
                <LightbulbFilament size={23} color="#E3A008" />
              </div>
            </div>
            <h5 className="mb-2 mt-5 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left  sm:text-xlg">
              Improved Insights
            </h5>
            <p className="mb-3 font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-sm">
              Generates detailed performance reports to identify strengths and
              weaknesses at individual and institutional levels.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-60   sm:w-72 md:w-70 md:h-64 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3 flex justify-center sm:justify-start ">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-full">
                <Scales size={23} color="#E5C100" />
              </div>
            </div>
            <h5 className="mb-2 mt-5 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left  sm:text-xlg">
              Fair Grading
            </h5>
            <p className="mb-3 font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-sm">
              AI eliminates bias, ensuring every student’s work is evaluated
              uniformly, enhancing equity in assignments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-60   sm:w-72 md:w-70 md:h-64 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3 flex justify-center sm:justify-start ">
              <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-full">
                <UsersThree size={23} color="#057A55" />
              </div>
            </div>
            <h5 className=" whitespace-nowrap mb-2 mt-5 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center sm:text-left  sm:text-xlg">
              Enhanced Engagement
            </h5>
            <p className="mb-3 font-normal text-xs text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-sm">
              Dashboards offer real-time insights for teachers, students, and
              parents, fostering collaboration in the learning process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
