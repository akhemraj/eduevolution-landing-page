import React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

const SectionBadge = ({ icon, className, children }: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "text-center font-bold rounded-full text-xs sm:text-sm px-[14px] py-[6px] lg:py-2 inline-flex items-center gap-2",
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
};

export default SectionBadge;
