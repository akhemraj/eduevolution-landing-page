"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === "/";

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

  return (
    <div className="max-w-[1600px] mx-auto">
      <nav className="px-[20px] pt-[25px] md:px-[50px] md:pt-[40px]">
        <div className="flex flex-wrap items-center justify-between mx-auto ">
          <Link href="/" className="flex items-center gap-[6px] md:gap-[10px]">
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
                className={cn(
                  "text-gray-600 font-semibold hover:text-blue-600"
                )}
                href={isHomePage ? "#CodeGrader" : "/#CodeGrader"}
              >
                Code Grader
              </Link>
              <Link
                className={cn(
                  "text-gray-600 font-semibold hover:text-blue-600"
                )}
                href={isHomePage ? "#RubricGenerator" : "/#RubricGenerator"}
              >
                Rubric Generator
              </Link>
              <Link
                href={isHomePage ? "#Features" : "/#Features"}
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-blue-600"
              >
                About us
              </Link>
              <Link
                className="text-gray-600 font-semibold hover:text-blue-600"
                href={isHomePage ? "#HowItWorks" : "/#HowItWorks"}
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
                href="/about-us"
                className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                About us
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
    </div>
  );
};

export default Navbar;
