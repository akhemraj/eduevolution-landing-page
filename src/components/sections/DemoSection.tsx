import React from "react";
import { Lightning } from "@phosphor-icons/react/dist/ssr";

function DemoSection() {
  return (
    <div className="mt-28" id="Demo">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex order-2 md:order-1 justify-center">
            <video
              className="h-auto md:h-96 border-8  border-width: 10px; rounded border-solid border-gray-200 border-spacing-3"
              poster="/images/VideoPoster.svg"
              controls
            >
              <source
                src="https://edusage-lp.s3.ap-south-1.amazonaws.com/demo-recording-0.1.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* second part  */}
          <div className="order-1 md:order-2 ml-0 md:ml-20 rounded-lg">
            <div className="w-full flex justify-center md:justify-start ">
              <div className="text-center bg-[#E1EFFE] font-semibold text-blue-600 focus:outline-none rounded-full text-xs sm:text-sm px-[14px] py-2 inline-flex items-center gap-2">
                <Lightning size={20} color="#1C64F2" weight="fill" />
                Demo
              </div>
            </div>

            <div className="mt-[15px] md:mt-[22px] md:w-5/6 text-2xl mb-12 md:mb-0 md:text-[38px] font-bold text-gray-800 sm:text-4xl text-center md:text-left">
              <span className="leading-[34px] md:leading-[48px]">
                Revolutionize Grading{" "}
              </span>
              <p className="leading-[34px] md:leading-[48px]">
                with <span className="text-blue-600">EduSage</span>AI
              </p>
            </div>

            <p className="mt-4 w-5/6 text-lg font-medium leading-7 text-gray-700 hidden md:block">
              Experience the power of AI-driven grading - Faster, more Accurate,
              and Easier for educators than ever before. Discover the future of
              grading with EduSage AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
