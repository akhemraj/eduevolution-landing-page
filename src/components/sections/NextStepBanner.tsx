"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Banner from "../common/Banner";
import { Button } from "../ui/button";

const NextStepBanner = () => {
  const handleBookCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: process.env.NEXT_PUBLIC_CALENDLY_URL,
      });
    }
  };

  return (
    <div className="flex justify-center py-[60px] pt-[50px] px-5 lg:px-0">
      <Banner
        heading={
          <h3 className="text-xl lg:text-[28px] font-bold text-gray-800">
            Ready to take the next step?
          </h3>
        }
        description="Book a call for a quick walkthrough, tailored solutions, and to see how we can help"
        className="max-w-[1260px] flex-1"
      >
        <Button
          onClick={handleBookCall}
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/60 hover:gap-3 transition-all duration-300 ease-in-out rounded-full font-semibold text-sm gap-2"
        >
          Book a call now <ArrowRight weight="bold" size={18} />
        </Button>
      </Banner>
    </div>
  );
};

export default NextStepBanner;
