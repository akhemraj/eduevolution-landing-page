"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightning, ArrowRight } from "@phosphor-icons/react/dist/ssr";

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
        <div className="flex flex-col items-center py-[100px] pb-[60px] px-5 lg:py-[80px] lg:pb-14 md:px-0">
          <div className="flex flex-col md:mt-5 items-center">
            <h1 className="font-bold text-center text-2xl leading-7 lg:text-[40px] lg:leading-[46px] text-gray-800">
              Revolutionize Grading with{" "}
              <span className="bg-gradient-to-br from-blue-400 to-blue-700 inline-block text-transparent bg-clip-text">
                AI
              </span>
            </h1>
            <div className="mt-[15px] mb-[30px] lg:mb-[30px]">
              <p className="max-w-[520px] text-sm text-center mr-2 lg:text-lg font-medium text-gray-700">
                AI-Powered grading for{" "}
                <span className="font-bold text-blue-600">Coding</span> and{" "}
                <span className="font-bold text-blue-600">Subjective</span>{" "}
                assignments that delivers Fast, Accurate and Fair results
              </p>
            </div>

            <div className="flex gap-[15px] lg:gap-4 items-center">
              <Link target="_blank" href="https://console.edusageai.com/">
                <Button
                  variant="secondary"
                  className="py-5 px-4 lg:px-6 gap-2 text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:brightness-90 focus:ring-2 focus:ring-blue-300 font-semibold lg:font-bold text-sm"
                >
                  See it in Action
                  <Lightning size={16} color="white" weight="fill" />
                </Button>
              </Link>

              <Link href="#HowItWorks">
                <Button
                  className="py-5 gap-2 hover:bg-blue-50 hover:text-blue-600 text-blue-600 font-semibold lg:font-bold text-sm"
                  variant="ghost"
                >
                  Learn more
                  <ArrowRight size={20} color="#2563eb" />
                </Button>
              </Link>
            </div>

            {/* <div className="bg-blue-50 flex items-center gap-2 p-3 py-2 rounded-md mt-4">
              <Sparkle size={18} weight="fill" color="#2563eb" />
              <p className="text-sm font-semibold text-gray-800">
                Start free trail today -{" "}
                <span className="text-blue-600">200 free evaluations</span>
              </p>
            </div> */}
          </div>
          <Image
            src="/images/heroSectionBg.png"
            alt="hero bg"
            width={1090}
            height={784}
            className="block translate-y-6 md:-translate-y-3"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
