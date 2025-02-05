import React from "react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function FooterSection() {
  return (
    <div>
      <footer className=" bg-blue-50 mt-[240px]">
        <div className="mx-auto w-full max-w-screen-xl px-[40px] py-[50px] md:px-0">
          <div className="md:flex md:justify-between">
            <div className="mb-28 md:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ark:text-blue-600">
                <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <div className="flex gap-2 md:gap-4 items-center">
                    <Image
                      src="/images/EduSage32x32.svg"
                      alt="Brand-icon"
                      width={46}
                      height={46}
                      className="w-10 h-10 md:w-[46px] md:h-[46px]"
                      priority
                    />
                    <div className="flex flex-col">
                      <h2 className="text-[22px] md:text-2xl text-blue-600 font-bold">
                        EduSage<span className="text-gray-800">AI</span>
                      </h2>
                      <p className="text-xs md:text-sm text-gray-700 font-normal">
                        Revolutionizing Assignment Grading with AI
                      </p>
                    </div>
                  </div>
                </span>
              </span>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex justify-center md:justify-start">
                <Link href="mailto:contact@edusageai.com">
                  <Button className="bg-transparent text-blue-600 border-2 border-blue-600 rounded-md gap-[10px] px-[30px] md:px-[18px] py-[24px] hover:bg-transparent">
                    <EnvelopeSimple size={20} color="#1C64F2" />
                    contact@edusageai.com
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <div className="flex text-[10px] md:text-xs sm:text-sm mb-3 md:mb-0 justify-center items-center space-x-5 text-gray-500 dark:text-gray-400 mr-3">
              <Link
                href={"/PrivacyPolicy"}
                className="text-xs cursor-pointer hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/TermsAndConditionsSection"}
                className="text-xs cursor-pointer hover:text-blue-600 "
              >
                Terms And Conditions
              </Link>
            </div>

            <p className="text-[10px] md:text-xs sm:text-sm text-gray-500 text-center dark:text-gray-400">
              © Copyright {new Date().getFullYear()}, All rights reserved by
              EduSageAI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
