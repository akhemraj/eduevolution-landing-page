"use client";

import { useEffect, useState } from "react";
import { Check, Tag, X } from "@phosphor-icons/react/dist/ssr";

import SectionBadge from "../common/SectionBadge";
import { Button } from "../ui/button";
import { PRICING_PLANS } from "@/constants/pricings";

const EXCHANGE_RATE = 83;

const Pricing = () => {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    const detectUserCountry = async () => {
      const cachedCountry = localStorage.getItem("user_country");
      if (cachedCountry) {
        if (cachedCountry.toLowerCase() === "india") {
          setIsIndia(true);
        }
        return;
      }

      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const country = data?.country_name;
        if (country) {
          localStorage.setItem("user_country", country);
          if (country.toLowerCase() === "india") {
            setIsIndia(true);
          }
        }
      } catch (err) {
        console.error("Failed to detect location", err);
      }
    };

    detectUserCountry();
  }, []);

  const formatPrice = (usdPrice: string) => {
    const numericValue = parseFloat(usdPrice.replace(/[^0-9.]/g, ""));
    return isIndia ? `₹${Math.round(numericValue * EXCHANGE_RATE)}` : usdPrice;
  };

  return (
    <div className="w-full py-20 pb-[100px] px-5 md:px-0" id="Pricing">
      <div className="flex flex-col items-center ">
        <SectionBadge
          icon={<Tag size={22} color="#1C64F2" weight="fill" />}
          className="bg-[#E1EFFE] text-blue-600"
        >
          Pricing
        </SectionBadge>
        <div className="text-center flex flex-col space-y-3 mt-4">
          <h3 className="text-2xl sm:text-4xl text-gray-800 font-bold capitalize">
            Choose your plan
          </h3>
          <p className="text-gray-700 text-base md:text-lg font-medium max-w-[500px]">
            Whether you&apos;re a solo educator or an institution, we&apos;ve
            got a plan tailored for you.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch space-x-0 md:space-x-5 space-y-6 md:space-y-0 mt-14">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col justify-between flex-1 max-w-full md:max-w-[315px] border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 ease-out"
          >
            {/* Main content block with flex-1 to push button to bottom */}
            <div className="flex flex-col flex-1 space-y-5">
              <div>
                <h4 className="capitalize text-base text-blue-600 font-bold">
                  {plan.title}
                </h4>
                <p className="text-sm text-gray-700 mt-[6px]">
                  {plan.description}
                </p>
              </div>
              <div className="flex items-end space-x-1">
                <h2 className="text-gray-800 font-bold text-2xl">
                  {plan.price !== "Custom Pricing"
                    ? formatPrice(plan.price)
                    : plan.price}
                </h2>
                <span className="text-sm font-medium text-gray-700">
                  {plan.priceNote}
                </span>
              </div>
              <hr className="bg-gray-300" />
              <div className="flex flex-col space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div>
                      <Check
                        size={18}
                        weight="bold"
                        className="text-blue-600"
                      />
                    </div>
                    <span className="text-base text-gray-700 font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.missing?.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div>
                      <X size={18} className="text-red-500" />
                    </div>
                    <span className="text-base text-gray-700 font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button aligned to bottom */}
            {/* <div className="mt-6">
              <Button className="w-full bg-blue-100 text-gray-900 text-[15px] font-semibold shadow-none hover:bg-blue-600 hover:text-white">
                Get Started
              </Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
