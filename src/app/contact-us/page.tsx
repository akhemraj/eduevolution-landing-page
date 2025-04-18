"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import FooterSection from "@/components/sections/Footer";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div>
      <nav className="px-[20px] pt-[25px] md:px-[50px] md:pt-[40px]">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center gap-[6px] md:gap-[10px]">
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
          <Button
            size="sm"
            variant="outline"
            onClick={toggleNavbar}
            className="md:hidden inline-flex border-0 p-0 shadow-none hover:bg-transparent"
          >
            <List size={20} color="#4B5563" />
          </Button>
          <div className="hidden md:flex">
            <div className="text-base font-semibold flex gap-5">
              <Link href="/" className="py-2 text-gray-600 hover:text-blue-600">
                Features
              </Link>
              <Link href="/" className="py-2 text-gray-600 hover:text-blue-600">
                How it works
              </Link>
              <Link href="/" className="py-2 text-gray-600 hover:text-blue-600">
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
              <Link href="/" className="flex items-center gap-[6px]">
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
              </Link>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleNavbar}
                className="md:hidden inline-flex bg-transparent border-0 p-0 shadow-none hover:bg-transparent"
              >
                <X size={22} color="#4B5563" />
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-5 mt-28">
              <Link
                href="/"
                className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                Features
              </Link>
              <Link
                href="/"
                className="text-gray-600 font-semibold hover:text-blue-600 text-lg"
                onClick={handleLinkClick}
              >
                How it works
              </Link>
              <Link
                href="/"
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

      <section className="bg-gray-50 px-6 py-16 md:px-20 mt-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">Address:</span>
            <br />
            Office 28, Sn-120, AB Ajinkya, Apt, Pl-545/14B, Sinhagad,
            Lokmanyanagar, Pune City, Pune- 411030, Maharashtra, India{" "}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            <span className="font-semibold">Email:</span>
            <br />
            <a
              href="mailto:contact@edusageai.com"
              className="text-blue-600 hover:underline"
            >
              contact@edusageai.com
            </a>
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full z-10">
        <FooterSection />
      </div>
    </div>
  );
}
