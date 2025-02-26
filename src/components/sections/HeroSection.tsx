"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Lightning,
  ArrowRight,
  Check,
  X,
  List,
} from "@phosphor-icons/react/dist/ssr";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <nav className="px-[20px] pt-[25px] md:px-[50px] md:pt-[40px]">
          <div className="flex flex-wrap items-center justify-between mx-auto ">
            <Link
              href="/"
              className="flex items-center gap-[6px] md:gap-[10px]"
            >
              <Image
                src="/images/EduSage32x32.svg"
                alt="Brand-icon"
                width={36}
                height={36}
                priority
                className="w-6 h-6 md:w-9 md:h-9"
              />
              <span className="text-lg md:text-[2rem] text-blue-600 font-bold">
                EduSage<span className="text-gray-800">AI</span>
              </span>
            </Link>

            {/* Mobile Navbar Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={toggleNavbar}
              className="md:hidden inline-flex border-0 p-0 shadow-none hover:bg-transparent"
            >
              <List size={20} color="#4B5563" />
            </Button>

            {/* Desktop Navbar */}
            <div className="hidden md:flex">
              <div className="text-base font-semibold flex gap-5">
                <Link
                  href="#Features"
                  className="py-2 text-gray-600 hover:text-blue-600"
                >
                  Features
                </Link>
                <Link
                  href="#How-it-works"
                  className="py-2 text-gray-600 hover:text-blue-600"
                >
                  How it works
                </Link>
                <Link
                  href="#Demo"
                  className="py-2 text-gray-600 hover:text-blue-600"
                >
                  Demo
                </Link>
                <Link href="https://console.edusageai.com/" target="_blank">
                  <Button
                    variant="secondary"
                    className="text-white bg-blue-600 hover:bg-blue-800 ml-1"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`flex flex-col h-full p-5 pt-[25px] bg-gray-50 transition-transform duration-300 ${
                isOpen ? "transform-none" : "transform -translate-y-full"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <span className="text-lg font-bold text-gray-800 flex gap-[6px]">
                    <Image
                      src="/images/EduSage32x32.svg"
                      alt="Brand-icon"
                      width={24}
                      height={24}
                      priority
                    />
                    <span className="md:text-lg text-blue-600 font-bold">
                      EduSage<span className="text-gray-800">AI</span>
                    </span>
                  </span>
                </span>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={toggleNavbar}
                  className="md:hidden inline-flex bg-transparent border-0 p-0 shadow-none hover:bg-transparent"
                >
                  <X size={22} color="#4B5563" />
                </Button>
              </div>

              <div className="flex flex-col items-center  space-y-5 mt-28">
                <Link
                  href="#Features"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  Features
                </Link>
                <Link
                  href="#How-it-works"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  How it works
                </Link>
                <Link
                  href="#Demo"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  Demo
                </Link>
                <Link href="https://console.edusageai.com/" target="_blank">
                  <Button
                    variant="secondary"
                    className="mt-4 text-white bg-blue-600 hover:bg-blue-800"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Home Page */}
        <div className="grid grid-flow-row sm:grid-flow-col gap-8 px-[30px] lg:pl-[110px] py-[92px] pb-[75px] sm:pt-[54px]">
          <div className="flex flex-col md:mt-5 items-start row-start-1">
            <h1 className="font-bold text-2xl leading-7 lg:text-[38px] lg:leading-[46px] text-gray-800">
              Revolutionizing Assignment 
            </h1>
            <h1 className="font-bold text-2xl leading-7 lg:text-[38px] lg:leading-[46px] text-gray-800">
              Grading with AI
            </h1>

            <div className="mt-[15px] mb-[30px] lg:mb-[35px]">
              <p className="text-sm mr-2 lg:text-lg font-medium text-gray-700">
                <span className="text-blue-600">AI-Powered</span> grading for&nbsp;
                <span className="bg-yellow-200 text-blue-600 px-2 py-1 rounded inline-block whitespace-nowrap"
                  ref={(el) => {
                    if (el && !el.dataset.initialized) {
                      el.dataset.initialized = "true";
                      let current = "Coding";
                      el.textContent = current;
                      setInterval(() => {
                        current = current === "Coding" ? "Subjective" : "Coding";
                        el.textContent = current;
                      }, 2000);
                    }
                  }}>
                </span>
                {/* <br /> */}
                <span className="block">
                  assignments that delivers
                </span>
                <span className="block"> Fast, Accurate and Fair results.</span>
              </p>
            </div>

            <div className="flex gap-[15px] lg:gap-5 items-center">
              <Link href="#Demo">
                <Button
                  variant="secondary"
                  className="py-[22px] px-4 lg:py-6 lg:px-6 gap-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-semibold lg:font-bold text-sm"
                >
                  See it in Action
                  <Lightning size={16} color="white" weight="fill" />
                </Button>
              </Link>

              <Link href="#How-it-works">
                <Button
                  className="py-5 px-4 lg:py-6 lg:px-6 gap-2 hover:bg-blue-50 hover:text-blue-600 text-blue-600 border-2 border-blue-600 font-semibold lg:font-bold text-sm"
                  variant="outline"
                >
                  Learn more
                  <ArrowRight size={20} color="#2563eb" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 max-w-md space-y-1 text-gray-800">
              <div className="flex items-center gap-[10px]">
                <Check
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                  color="#1c64f2"
                  weight="regular"
                />
                <span className="font-medium text-sm md:text-lg">
                  Quick and accurate grading
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <Check
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                  color="#1c64f2"
                  weight="regular"
                />
                <span className="font-medium text-sm md:text-lg">
                  Fairness in assessment
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <Check
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                  color="#1c64f2"
                  weight="regular"
                />
                <span className="font-medium text-sm md:text-lg">
                  Concise student reports
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <Check
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                  color="#1c64f2"
                  weight="regular"
                />
                <span className="font-medium text-sm md:text-lg">
                  AI plagiarism checker
                </span>
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="hidden md:flex justify-end">
            <Image
              src="/images/heroBG.png"
              alt="Image not Found"
              width={600}
              height={550}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
