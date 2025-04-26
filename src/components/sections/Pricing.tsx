import { Check, Tag } from "@phosphor-icons/react/dist/ssr";
import SectionBadge from "../common/SectionBadge";
import { Button } from "../ui/button";
import { PRICING_PLANS } from "@/constants/pricings";

const Pricing = () => {
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
      <div
        className="
        flex flex-col md:flex-row 
        justify-center 
        items-center md:items-start 
        space-x-0 md:space-x-5
        space-y-6 md:space-y-0
        mt-14"
      >
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col flex-1 space-y-5 max-w-full md:max-w-[315px] h-max border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 ease-out"
          >
            <div>
              <h4 className="capitalize text-base text-blue-600 font-bold">
                {plan.title}
              </h4>
              <p className="text-sm text-gray-700 mt-[6px]">
                {plan.description}
              </p>
            </div>
            <div className="flex items-end">
              <h2 className="text-gray-800 font-bold text-2xl">{plan.price}</h2>
              {plan.priceNote && (
                <span className="text-sm font-medium text-gray-700">
                  {plan.priceNote}
                </span>
              )}
            </div>
            <hr className="bg-gray-300" />
            <div className="flex flex-col space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Check size={18} weight="bold" className="text-blue-600" />
                  <span className="text-base text-gray-700 font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <Button
              style={{ padding: "24px 0" }}
              className="bg-blue-100 text-gray-900 text-[15px] font-semibold shadow-none hover:bg-blue-600 hover:text-white"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
