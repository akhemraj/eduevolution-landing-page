import React from "react";
import { Lightning } from "@phosphor-icons/react/dist/ssr";

function DemoSection() {
  return (
    <div className="mt-28" id="Demo">
      <div className="container mx-auto p-4">
        <div className="grid   grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="w-full flex   justify-center md:justify-start ">
              <div className="    text-center p-3 mt-4 mb-3 bg-[#E1EFFE] font-semibold text-blue-600 focus:outline-none rounded-full text-sm px-3 py-2 inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                <Lightning
                  size={20}
                  color="#1C64F2"
                  weight="fill"
                  className="mr-1 "
                />
                Demo
              </div>
            </div>

            <div className=" mt-2  md:w-5/6  text-2xl  md:text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:leading-loose text-center md:text-left">
              <span className="leading-relaxed ">Revolutionize Grading </span>

              <p className=" leading-relaxed">
                with {""}
                <span className="text-blue-600 ">AI Precision.</span>
              </p>
            </div>

            <p className="mt-2 w-5/6 text-lg leading-8 text-gray-700 hidden md:block">
              Watch how our AI app transforms grading, enhancing accuracy and
              simplifying the process for educators. Experience the future of
              assessment!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
