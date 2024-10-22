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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="mt-3 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse ml-0 md:ml-5"
          >
            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className=" text-base flex">
                <Image
                  src="/images/logo.svg"
                  alt="Image not Found"
                  width={20}
                  height={20}
                  className="mr-1"
                  priority
                />{" "}
                <span className="text-blue-600">Edu</span>Sage
              </span>
            </span>
          </Link>

          {/* Mobile Navbar Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNavbar}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Laptop Navbar */}
          <div className="hidden md:flex md:w-auto">
            <div className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
              <Link
                href="#Features"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="#How-it-works"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                How it works
              </Link>
              <Link
                href="#Demo"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                Demo
              </Link>
              <Link
                href="#Resources"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                Resources
              </Link>

              <Button
                variant="secondary"
                className="text-white bg-blue-600 hover:bg-blue-800"
              >
                Login
              </Button>
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
            className={`flex flex-col h-full p-5 bg-gray-50 transition-transform duration-300 ${
              isOpen ? "transform-none" : "transform -translate-y-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                <span className=" text-base flex">
                  <Image
                    src="/images/logo.svg"
                    alt="Image not Found"
                    width={20}
                    height={20}
                    className="mr-1"
                    priority
                  />{" "}
                  <span className="text-blue-600">Edu</span>Sage
                </span>
              </span>

              <button
                type="button"
                className="text-gray-500 hover:text-blue-600"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Close menu</span>
                <X size={25} weight="thin" />
              </button>
            </div>

            <div className="flex flex-col items-center  space-y-4 mt-28">
              <Link
                href="#Features"
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                Features
              </Link>
              <Link
                href="#How-it-works"
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                How it works
              </Link>
              <Link
                href="#Resources"
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                Resources
              </Link>
              <Link
                href="#Demo"
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                Demo
              </Link>
              <Button
                variant="secondary"
                className="mt-4 text-white bg-blue-600 hover:bg-blue-800"
                onClick={handleLinkClick}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Page Starts */}
      <div className="grid grid-flow-row sm:grid-flow-col gap-8 py-6 sm:py-16 pl-3 sm:pl-10 ml-0 sm:ml-10">
        <div className="flex flex-col mt-16 md:mt-5 items-start row-start-1">
          <h1 className="font-semibold text-xl sm:text-4xl ml-5 lg:text-4xl xl:text-5xl text-black-600 leading-[1.2] md:leading-loose">
            Revolutionize the way you
          </h1>
          <h1 className="font-semibold text-xl sm:text-2xl ml-5 lg:text-4xl xl:text-5xl text-black-600 leading-[1.2] md:leading-loose">
            Grade with <span className="text-blue-600">AI Precision.</span>
          </h1>

          <div className="ml-5 mt-5 mb-8 sm:ml-0 sm:mt-0 md:ml-5 md:mt-5">
            <p className="text-sm mr-3 sm:text-lg font-medium text-gray-700">
              <span className="text-blue-600">AI-Powered</span> Grading That
              Delivers Fast, Accurate,
              <span className="inline sm:block">
                {" "}
                and Consistent Exam Results Every Time
              </span>
            </p>
          </div>

          <div className="flex space-x-2 mt-0 mb-5 items-center">
            <Button
              variant="secondary"
              className="p-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 ml-5 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:p-4 sm:text-base"
            >
              See it in Action
              <Lightning
                size={16}
                className=" pml-2 sm:ml-3"
                color="#e1dbdb"
                weight="fill"
              />
            </Button>

            <Button
              className="px-3  py-1 text-blue-600 border-blue-600 text-sm sm:px-4 sm:py-2 sm:text-base"
              variant="outline"
            >
              Learn more
              <ArrowRight
                size={16}
                className="ml-2 sm:ml-3"
                color="#1c64f2"
                weight="thin"
              />
            </Button>
          </div>

          <div className="max-w-md space-y-1 text-gray-800 list-inside dark:text-gray-400 mt-5 ml-5 leading-7 text-sm sm:text-lg">
            <div className="flex items-center">
              <Check
                className="mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                color="#1c64f2"
                weight="thin"
              />
              <span className="text-sm sm:text-lg md:text-xl">
                Quick and accurate grading
              </span>
            </div>
            <div className="flex items-center">
              <Check
                className="mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                size={30}
                color="#1c64f2"
                weight="thin"
              />
              <span className="text-sm sm:text-lg md:text-xl">
                Fairness in Assessment
              </span>
            </div>
            <div className="flex items-center">
              <Check
                className="mr-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                size={30}
                color="#1c64f2"
                weight="thin"
              />
              <span className="text-sm sm:text-lg md:text-xl">
                Comprehensive Reporting
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
    </>
  );
}

export default HeroSection;
