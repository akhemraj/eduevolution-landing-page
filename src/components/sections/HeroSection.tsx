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
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

const words = ["Subjective", "Coding"];

function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
        <div className="flex items-center justify-between py-[100px] pb-[60px] lg:py-[80px] lg:pb-14 px-5 lg:px-[120px] lg:pr-0 lg:pt-0">
          <div className="flex flex-col md:mt-5 items-start -translate-y-4">
            <h1 className="font-bold text-2xl leading-7 lg:text-[38px] lg:leading-[46px] text-gray-800">
              Revolutionize
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

            <div className="bg-blue-100 flex items-center gap-2 p-3 py-2 rounded-md mt-4">
              <Sparkle size={18} weight="fill" color="#2563eb" />
              <p className="text-sm font-semibold text-gray-800">
                Start free trail today -{" "}
                <span className="text-blue-600">200 free evaluations</span>
              </p>
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
          <Image
            src="/images/heroSectionBg.png"
            alt="hero bg"
            width={835 - 80}
            height={614 - 80}
            className="hidden md:block"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
