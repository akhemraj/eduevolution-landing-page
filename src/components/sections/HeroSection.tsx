"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightning,
  ArrowRight,
  Check,
  X,
  List,
} from "@phosphor-icons/react/dist/ssr";

const words = ["Subjective", "Coding"];

function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleBookCall = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: process.env.NEXT_PUBLIC_CALENDLY_URL,
      });
    }
  };

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 1200);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

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
              <span className="text-lg md:text-2xl text-blue-600 font-bold">
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
              <div className="text-[15px] font-semibold flex items-center gap-5">
                <Link
                  className="text-gray-600 font-semibold hover:text-blue-600"
                  href="#CodeGrader"
                >
                  Code Grader
                </Link>
                <Link
                  className="text-gray-600 font-semibold hover:text-blue-600"
                  href="#RubricGenerator"
                >
                  Rubric Generator
                </Link>
                <Link
                  href="#Features"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </Link>
                <Link
                  className="text-gray-600 font-semibold hover:text-blue-600"
                  href="#HowItWorks"
                >
                  How it works
                </Link>
                <Button
                  variant="link"
                  className="text-gray-600 font-semibold hover:text-blue-600 px-0 hover:no-underline"
                  onClick={handleBookCall}
                >
                  Schedule a call
                </Button>
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
                  href="#CodeGrader"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  Code Grader
                </Link>
                <Link
                  href="#RubricGenerator"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  Rubric Generator
                </Link>
                <Link
                  href="#Features"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  Features
                </Link>
                <Link
                  href="#HowItWorks"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={handleLinkClick}
                >
                  How it works
                </Link>
                <Button
                  variant="link"
                  className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                  onClick={() => {
                    handleLinkClick();
                    handleBookCall();
                  }}
                >
                  Schedule a call
                </Button>
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
        <div className="flex items-center justify-between py-[100px] pb-[60px] lg:py-[80px] px-5 lg:px-[120px]  lg:pr-0 lg:pt-0">
          <div className="flex flex-col md:mt-5 items-start -translate-y-4">
            <h1 className="font-bold text-2xl leading-7 lg:text-[38px] lg:leading-[46px] text-gray-800">
              Revolutionize Assignment
            </h1>
            <h1 className="font-bold text-2xl leading-7 lg:text-[38px] lg:leading-[46px] text-gray-800 mt-1 lg:mt-0">
              Grading with{" "}
              <span className="bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
                AI
              </span>
            </h1>

            <div className="mt-[15px] mb-[30px] lg:mb-[35px]">
              <p className="text-sm mr-2 lg:text-lg font-medium text-gray-700">
                <span className="text-blue-600 font-semibold">AI-Powered</span>{" "}
                grading for&nbsp;
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xs lg:text-base font-semibold bg-blue-600 text-white py-1 px-[6px] lg:px-2 rounded-md"
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    |
                  </motion.span>
                </motion.span>
                <span>&nbsp;assignments</span>
                {/* <br /> */}
                <span className="block mt-1 lg:mt-0">
                  that delivers Fast, Accurate and Fair results
                </span>
              </p>
            </div>

            <div className="flex gap-[15px] lg:gap-5 items-center">
              <Link target="_blank" href="https://console.edusageai.com/">
                <Button
                  variant="secondary"
                  className="py-[22px] px-4 lg:py-6 lg:px-6 gap-2 text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:brightness-90 focus:ring-2 focus:ring-blue-300 font-semibold lg:font-bold text-sm"
                >
                  See it in Action
                  <Lightning size={16} color="white" weight="fill" />
                </Button>
              </Link>

              <Link href="#HowItWorks">
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
          <Image
            src="/images/heroSectionBg.png"
            alt="hero bg"
            width={835 - 80}
            height={614 - 80}
            className="hidden md:block"
            priority
          />
          {/* <div className="w-[885px] h-[660px] relative">
            <Image
              src="/images/heroSectionBg.png"
              alt="hero bg"
              fill
              className="hidden md:block object-contain"
              priority
            />
          </div> */}
          {/* <div className="hidden md:flex md:justify-end justify-end relative w-[885px] h-[664px]">
            <Image
              src="/images/heroSectionBg.png"
              alt="hero section bg"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
