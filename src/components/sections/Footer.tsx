"use client";

import React from "react";
import {
  At,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-blue-50">
      <div className="w-full px-5 lg:mx-auto lg:px-0 pt-12 max-w-screen-xl">
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 justify-between">
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/EduSage32x32.svg"
                  alt="Brand-icon"
                  width={46}
                  height={46}
                  className="w-10 h-10"
                  priority
                />
                <h2 className="text-[22px] md:text-2xl text-blue-600 font-bold">
                  EduSage<span className="text-gray-800">AI</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-gray-700 max-w-[310px]">
                Revolutionize grading with AI-powered speed, accuracy, and
                smarter insights
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-3">
              <Link
                href="https://www.linkedin.com/company/edusage-ai/"
                target="_blank"
                className="flex justify-center items-center bg-blue-200 hover:bg-blue-100 transition-colors duration-300 ease-in-out w-10 h-10 rounded-full"
              >
                <LinkedinLogo size={22} color="#1C64F2" weight="bold" />
              </Link>
              <Link
                href="mailto:contact@edusageai.com"
                target="_blank"
                className="flex justify-center items-center bg-blue-200 hover:bg-blue-100 transition-colors duration-300 ease-in-out w-10 h-10 rounded-full"
              >
                <EnvelopeSimple size={22} color="#1C64F2" weight="bold" />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-14 lg:gap-24 lg:flex-nowrap">
            <div className="flex flex-col gap-2">
              <h5 className="text-gray-500 text-sm uppercase font-semibold mb-2 lg:mb-3">
                Company
              </h5>
              <Link
                href="/about-us"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                About us
              </Link>
              <Link
                href="#Features"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="/#Pricing"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                Pricing
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-gray-500 text-sm uppercase font-semibold mb-2 lg:mb-3">
                Help
              </h5>
              <Link
                href="/privacy-policy"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cancellation-and-refund"
                className="text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                Cancellation / Refund Policy
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-gray-500 text-sm uppercase font-semibold mb-2 lg:mb-3">
                Contact us
              </h5>
              <div className="flex gap-2 mb-1">
                <At size={20} color="#1F2A37" />
                <Link
                  href="mailto:contact@edusageai.com"
                  target="_blank"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600"
                >
                  contact@edusageai.com
                </Link>
              </div>
              {pathname === "/about-us" && (
                <div className="flex gap-2">
                  <MapPin size={20} color="#1F2A37" />
                  <p className="text-sm font-semibold text-gray-700 max-w-[250px]">
                    Office 28, AB Ajinkya Apt, Lokmanyanagar, Pune - 411030,
                    Maharashtra, India
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 pt-5 pb-8 border-t-2 border-gray-50 text-xs text-gray-500 ">
          © Copyright {new Date().getFullYear()}, All rights reserved by
          <span className="font-medium pl-1">EduSageAI</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
