import { cn } from "@/lib/utils";
import React from "react";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
  description: string;
}

const Banner = ({ heading, description, className, children }: BannerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 justify-center items-center text-center rounded-lg bg-[url('/images/bannerBg.png')] bg-right-bottom lg:bg-center bg-no-repeat bg-cover py-10 lg:py-12",
        className
      )}
    >
      {heading}
      <p className="text-sm lg:text-base font-medium text-gray-700 max-w-[260px] lg:max-w-[400px]">
        {description}
      </p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
};

export default Banner;
