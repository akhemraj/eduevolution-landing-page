import React from "react";
import { LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

function FooterSection() {
  return (
    <div>
      <footer className=" bg-blue-50 mt-[215px] p-10 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ark:text-blue-600">
                <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <span className=" text-2xl flex">
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
              </span>
              <p className="text-xs self-center whitespace-nowrap mt-2">
                Revolutionize the way you grade with <br />
                AI Precision
              </p>

              <div className="flex  sm:justify-start sm:mt-0">
                <div className="flex items-center mt-2">
                  <div className="flex items-center justify-center border-2 border-white rounded-full p-1 ml-1.5">
                    <LinkedinLogo size={20} color="#374151" weight="fill" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1  ">
              <div className=" flex ">
                <Link href="mailto:contact@edusageai.com">
                  <button className=" flex text-xs md:text-base bg-transparent mt-auto mb-auto  hover:bg-blue text-blue-600 font-semibold  py-2 px-4 border border-blue-600 hover:border-blue rounded">
                    <EnvelopeSimple
                      size={18}
                      color="#1C64F2"
                      className="mt-auto mb-auto mr-2"
                    />
                    contact@edusageai.com
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className=" text-[8px] md:text-xs sm:text-sm text-gray-500 text-center dark:text-gray-400">
              © Copyright 2024, All rights reserved by EduSage.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
