import React from "react";
import FooterSection from "@/components/sections/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { Square } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EduSageAI",
  description:
    "Discover our mission to transform education with AI-powered grading and smarter evaluations",
  keywords: [
    "About EduSageAI",
    "EduSageAI Team",
    "Our Mission",
    "AI in Education",
    "EduSageAI Vision",
    "Educational Technology",
    "Company Overview",
  ],
  robots: "index, follow",
};

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center py-[100px]">
        <div className="flex flex-col items-center space-y-10 mb-16">
          <h3 className="text-xl md:text-3xl text-gray-800 text-center font-bold">
            We&apos;re here to make {/* <span className="block md:inline"> */}
            Grading <span className="text-blue-600">Easy!</span>
            {/* </span> */}
          </h3>
          <div className="relative w-full h-[260px] md:h-[318px]">
            <Image
              src="/images/team-members/group-pic.png"
              alt="Group pic"
              className="object-contain"
              priority
              fill
            />
          </div>
        </div>
        <div className="mb-20 md:mb-[120px] px-5 md:px-0">
          <h5 className="flex items-center text-lg md:text-xl font-bold text-gray-800 mb-5 uppercase">
            <Square
              size={16}
              color="#1C64F2"
              weight="fill"
              className="mr-[6px] rotate-45"
            />
            Our Story
          </h5>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-10">
            <p className="w-full max-w-[440px] text-gray-600 font-normal leading-[26px]">
              As <span className="font-semibold">former educators</span> and
              technologists, we&apos;ve seen firsthand how{" "}
              <span className="font-semibold">time-consuming</span> and
              inconsistent grading can be.{" "}
              <span className="font-semibold">Long nights</span> spent pouring
              over essays, the struggle to stay{" "}
              <span className="font-semibold">objective</span>, and the{" "}
              <span className="font-semibold">delays in getting feedback</span>{" "}
              to students—it all adds up. We believed there had to be a{" "}
              <span className="font-semibold">better way!</span>
            </p>
            <p className="w-full max-w-[440px] text-gray-600 font-normal leading-[26px]">
              That&apos;s why we created{" "}
              <span className="font-semibold">EduSageAI</span>: a{" "}
              <span className="font-semibold">
                smart, intuitive grading assistant
              </span>{" "}
              built to <span className="font-semibold">support educators</span>,
              not replace them. By combining the power of{" "}
              <span className="font-semibold">Artificial Intelligence</span>{" "}
              with the{" "}
              <span className="font-semibold">nuance of human judgment</span>,
              we&apos;re making grading{" "}
              <span className="font-semibold">faster, fairer,</span> and more
              <span className="font-semibold">consistent</span>-so teachers can
              spend less time marking papers and more time doing what they love:{" "}
              <span className="font-semibold">teaching</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-[#FAFAFA] mb-16 md:mb-[100px] px-5 lg:px-0">
          <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row lg:justify-between">
            <div className="py-12 lg:py-14">
              <h5 className="flex items-center text-lg md:text-xl font-bold text-gray-800 mb-5 uppercase">
                <Square
                  size={16}
                  color="#1C64F2"
                  weight="fill"
                  className="mr-[6px] rotate-45"
                />
                Our mission & values
              </h5>
              <div className="w-full lg:max-w-[410px] space-y-4">
                <p className="text-gray-700 text-base font-medium">
                  Our mission is to revolutionize the grading process through
                  cutting-edge AI that drastically reduces time and effort,
                  eliminates bias, and ensures consistency.
                </p>
                <p className="text-gray-700 text-base font-medium">
                  By delivering smart, actionable feedback, we empower educators
                  to focus more on impactful teaching and meaningful student
                  growth.
                </p>
              </div>
            </div>
            <div className="grid pb-12 md:pb-0 gap-2 md:gap-0 grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
              <div className="w-full h-full max-w-full lg:max-w-[285px] max-h-[220px] lg:max-h-[166px] bg-[#EBF5FF] p-4 lg:p-7">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-[10px] uppercase">
                  Innovation
                </h5>
                <p className="text-gray-700 font-medium text-sm">
                  Continuously evolving with cutting-edge AI to transform
                  assessment
                </p>
              </div>
              <div className="w-full h-full max-w-full lg:max-w-[285px] max-h-[200px] lg:max-h-[166px] bg-[#D6ECFF] p-4 lg:p-7">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-[10px] uppercase">
                  Fairness
                </h5>
                <p className="text-gray-700 font-medium text-sm">
                  Ensuring unbiased, consistent evaluation for every student.
                </p>
              </div>
              <div className="w-full h-full max-w-full lg:max-w-[285px] max-h-[200px] lg:max-h-[166px] bg-[#E3F2FD] p-4 lg:p-7">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-[10px] uppercase">
                  Insight
                </h5>
                <p className="text-gray-700 font-medium text-sm">
                  Providing meaningful feedback that supports teaching and
                  student improvement
                </p>
              </div>
              <div className="w-full h-full max-w-full lg:max-w-[285px] max-h-[200px] lg:max-h-[166px] bg-[#F0F8FF] p-4 lg:p-7">
                <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-[10px] uppercase">
                  Effeciency
                </h5>
                <p className="text-gray-700 font-medium text-sm">
                  Streamlining grading workflows to save time and maximize
                  productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 grid-rows-2 gap-[35px]">
          <div className="w-[290px] h-[320px] flex items-center px-6 border-2 border-blue-100 bg-blue-50 rounded-[12px]">
            <h4 className="text-3xl font-bold text-gray-800">
              Meet the team that makes it all happen.
            </h4>
          </div>
          <div className="relative w-[270px] h-[300px] p-[10px]">
            <Image
              src="/images/team-members/gaurav.png"
              alt="Gaurav"
              className="object-cover object-center rounded-lg"
              fill
            />
            <div className="max-w-[250px] w-full absolute bottom-[10px] bg-white/80 backdrop-blur-sm px-[14px] py-3 rounded-[10px]">
              <h6 className="text-base text-gray-900 font-semibold">
                Gaurav Chaudhari
              </h6>
              <p className="text-sm text-gray-700 font-medium">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div> */}
      </section>
      <FooterSection />
    </div>
  );
}

export default AboutUs;
