import React from "react";
import { Article } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

function ResourcesSection() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center ">
            <div className="text-center  mt-4 mb-5 bg-[#E1EFFE] font-semibold text-blue-600  focus:outline-none  font-medium rounded-full text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
              <Article
                size={25}
                color="#1C64F2"
                className="mr-2 "
                weight="fill"
              />
              Resources
            </div>
          </div>
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
            Resources to Get Started
          </h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
                <Image
                  src="/images/vlog1.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">August 24, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  A Teacher’s Guide to Getting Started with AI-Powered Grading
                </h1>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
                <Image
                  src="/images/vlog2.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">August 30, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  The Future of Education: AI-Driven Assessment Tools{" "}
                </h1>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
              <Image
                  src="/images/vlog3.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">September 8, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  Customizing the AI Grading Tool for Different Subjects{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
              <Image
                  src="/images/vlog4.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">September 13, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  How to Upload Exam Papers and Train the AI for Accurate
                  Grading{" "}
                </h1>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
              <Image
                  src="/images/vlog5.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">September 27, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  Integrating AI Grading Tool with Your School’s Existing System{" "}
                </h1>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3    transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center ">
              <Image
                  src="/images/vlog6.svg"
                  className=" "
                  alt="Image not Found "
                  width={355}
                  height={220}
                />
              </div>
              <div className="block">
                <h6 className="mb-2">October 01, 2024</h6>
                <h1 className="text-xl font-semibold	">
                  Troubleshooting Common Setup Issues with AI Grading{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesSection;
