import React from "react";
import {
  SquaresFour,
  Code,
  ShieldCheck,
  Checks,
  ClockClockwise,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FEATURES } from "@/constants/features";
import SectionBadge from "../common/SectionBadge";

const iconMap = {
  Code: <Code size={26} color="#C326FF" weight="bold" />,
  ShieldCheck: <ShieldCheck size={26} color="#0EBDE4" weight="bold" />,
  Checks: <Checks size={26} color="#6154EA" weight="bold" />,
  ClockClockwise: <ClockClockwise size={26} color="#2563eb" weight="bold" />,
  Users: <Users size={26} color="#16a34a" weight="bold" />,
  Custom: (
    <Image
      src="/images/network-bars.svg"
      alt="Improvement"
      width={18}
      height={18}
    />
  ),
};

function FeatureSection() {
  return (
    <div className="py-[75px]" id="Features">
      <div className="flex justify-center items-center">
        <SectionBadge
          icon={<SquaresFour size={22} color="#1C64F2" weight="fill" />}
          className="bg-[#E1EFFE] text-blue-600"
        >
          Key Features
        </SectionBadge>
      </div>
      <h1 className="text-center text-2xl sm:text-4xl font-bold text-gray-800 mt-[15px] lg:mt-[18px] mb-[50px] lg:mb-[60px] ">
        Grading Reimagined
      </h1>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[980px] flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-[25px] justify-center items-center">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="w-[300px] p-5 bg-white border border-gray-200 rounded-lg hover:shadow-md"
            >
              <div className="text-gray-500 flex justify-center sm:justify-start">
                <div
                  className="flex items-center justify-center w-[45px] h-[45px] rounded-full"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  {iconMap[feature.icon]}
                </div>
              </div>
              <h5 className="whitespace-nowrap mb-2 mt-[25px] lg:mt-[26px] text-lg lg:text-xl font-semibold tracking-tight text-gray-900 text-center sm:text-left">
                {feature.title}
              </h5>
              <p className="font-normal text-sm text-gray-500 dark:text-gray-700 text-center sm:text-left sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
