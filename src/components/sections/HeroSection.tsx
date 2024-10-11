import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import lightningIcon from "../icons/lightningIcon.svg";
// import arrowIcon from "../icons/arrowIcon.svg";
// import checkIcon from "../icons/checkIcon.svg";
import Link from 'next/link'
import { Lightning,ArrowRight,Check } from "@phosphor-icons/react/dist/ssr";

function HeroSection() {
  return (
   <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="mt-3  flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse ml-5"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-blue-600">EduEvolution</span>AI
            </span>
          </Link>
          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="font-medium flex flex-col p-5  md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div className="mt-2">
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Features
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  How it works
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resources
                </Link>
              </div>
              <div>
                <Button
                  variant="secondary"
                  className= "   text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-6 py-2   text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* home page starts */}

      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 pl-10 ml-10">
        <div className=" flex flex-col mt-5  items-start row-start-2 sm:row-start-1">
          <h1 className=" font-semibold text-3xl ml-5 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Revolutionize the way you
          </h1>
          <h1 className=" font-semibold text-3xl ml-5 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Grade with <span className="text-blue-600">AI Precision. </span>
          </h1>
          <p className="text-black-500 ml-5 mt-5 mb-8 font-medium text-gray-700">
            <span className="text-blue-600"> AI-Powered </span>Grading That
            Delivers Fast, Accurate, <br />
            and Consistent Exam Results Every Time
          </p>
          <div className="flex flex-wrap mt-0 mb-5 items-center justify-between">
            <Button
              variant="secondary"
              className="p-10  ml-5 mr-1 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              See it in Action
              <Lightning size={19}  className="ml-3" color="#e1dbdb" weight="fill" />


            </Button>
            {/* arrowIcon */}
            <Button
              className=" px-5 py-5 ml-2 text-blue-600 border-blue-600"
              variant="outline"
            >
              Learn more
              <ArrowRight size={20} className="ml-3" color="#1c64f2" weight="thin" />


            </Button>
          </div>

          <ul className="max-w-md  space-y-1 text-gray-800 list-inside dark:text-gray-400 mt-5 ml-5 leading-7">
            <li className="flex items-center">
            <Check className="mr-3" size={32} color="#1c64f2" weight="thin" />


              Quick and accurate grading
            </li>
            <li className="flex items-center">
            <Check className="mr-3" size={32} color="#1c64f2" weight="thin" />


              Fairness in Assessment
            </li>
            <li className="flex items-center">
            <Check className="mr-3" size={32} color="#1c64f2" weight="thin" />


             Comprehensive Reporting
            </li>
          </ul>
        </div>

        <div className=" flex  justify-end ">
          <div className=" ">
            <Image
              src="/images/heroBG.png"
              className=" "
              alt="Image not Found "
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
