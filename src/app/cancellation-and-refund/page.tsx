"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import FooterSection from "@/components/sections/Footer";

export default function RefundPolicyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="">
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

          {/* Desktop Navbar */}
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            Cancellation &amp; Refund Policy
          </h2>

          <div className="space-y-6 text-gray-700 text-base md:text-lg">
            <p>
              Thank you for choosing{" "}
              <span className="font-semibold">EduSageAI</span>. We value your
              trust and aim to provide excellent service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              14‑Day Cancellation &amp; Refund Window
            </h3>
            <p>
              If you're not completely satisfied, you may cancel your
              subscription within <span className="font-semibold">14 days</span>{" "}
              from the date of purchase. Upon cancellation, you'll receive a
              full refund to your original payment method.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              After 14‑Day Period
            </h3>
            <p>
              No refunds will be provided if you cancel after the initial 14‑day
              period. Your subscription will remain active until the end of the
              current billing cycle.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              How to Request a Refund
            </h3>
            <p>
              To initiate your cancellation or request a refund, please email us
              at:{" "}
              <a
                href="mailto:contact@edusageai.com"
                className="text-blue-600 hover:underline"
              >
                contact@edusageai.com
              </a>
              <br />
              Provide your full name, registered email, and reason for
              cancellation. Our team will process your request promptly,
              typically within 5‑7 business days.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Exceptions</h3>
            <p>
              We reserve the right to decline refund requests in cases of
              suspected abuse, fraud, or violation of our Terms of Service. For
              questions or assistance, please reach out to our support
              team—we're here to help!
            </p>

            <p className="text-right text-sm text-gray-500">
              Last updated: 18th April, 2025
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
