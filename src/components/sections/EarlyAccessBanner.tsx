"use client";

import { useState } from "react";
import Banner from "../common/Banner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const EarlyAccessBanner = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      className="flex justify-center py-[80px] lg:py-[50px] px-5 lg:px-0"
      id="GetEarlyAccess"
    >
      <Banner
        heading={
          <h3 className="text-xl lg:text-[28px] font-bold text-gray-800">
            Get Early Access to{" "}
            <span className="text-blue-600 block lg:inline">
              Premium Features!
            </span>
          </h3>
        }
        description="Join the waitlist to unlock advanced tools and exclusive capabilities"
        className=" max-w-[1260px] flex-1"
      >
        <div className="w-full lg:w-[340px] flex justify-between items-center rounded-lg border-2 border-blue-400 px-3 py-1 pr-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="!p-0 placeholder:text-gray-500 text-sm lg:text-base border-none shadow-none focus-visible:ring-0"
          />
          <Button
            variant="ghost"
            className="text-blue-600 w-max font-semibold hover:bg-transparent hover:text-blue-700 disabled:text-blue-500 lg:disabled:text-blue-400"
            disabled={!email.trim()}
          >
            Join waitlist
          </Button>
        </div>
      </Banner>
    </div>
  );
};

export default EarlyAccessBanner;
