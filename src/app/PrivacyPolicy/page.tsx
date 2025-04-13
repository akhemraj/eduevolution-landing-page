"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import FooterSection from "@/components/sections/Footer";

function PrivacyPolicyPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
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
            <span className="text-lg md:text-[2rem] text-blue-600 font-bold">
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
              <Link href="https://demo.edusageai.com/" target="_blank">
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
              <Link href="https://demo.edusageai.com/" target="_blank">
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
      <div className="bg-white text-black dark:bg-black px-[20px] pt-[25px] md:px-[50px] md:pt-[40px] dark:text-white">
        <div className="container mx-auto px-4 py-8 dark:text-gray-400">
          <div className="mb-4 text-center text-m">
            Effective Date: 01/10/2024
          </div>
          <div className="text-4xl font-bold mb-4 text-black-800 text-center ">
            Privacy and Policy
          </div>
          <br />
          <span className="mb-4 text-base">
            Welcome to EduSageAI (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our AI-based EdTech platform (the
            &quot;Platform&quot;). By accessing or using the Platform, you agree
            to the terms of this Privacy Policy. If you do not agree, please do
            not use the Platform.
          </span>
          <br />
          <div className="pb-5">
            <br />
            <div>
              <div className=" ml-4">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 dark:text-gray-300 ">
                    Information We Collect
                  </div>{" "}
                  <br />
                  We collect various types of information to improve the user
                  experience and provide our services effectively: <br />
                  <ul className="list-disc list-inside ">
                    <li>
                      Personal Information: Name, email address, phone number,
                      age, educational details, or any other information you
                      provide when registering or using the Platform.
                    </li>
                    <li>
                      {" "}
                      Usage Data: Information about how you interact with the
                      Platform, including access times, pages viewed, IP
                      address, and browser type.
                    </li>
                    <li>
                      Student Data If you are an educational institute or
                      teacher, this may include student names, roll numbers,
                      grades, and answer sheets. We ensure compliance with
                      applicable laws when processing student data.
                    </li>
                    <li>
                      - Payment Information: Details necessary for processing
                      payments, such as billing address and payment card
                      details.{" "}
                    </li>
                    <li>
                      Device Information: Information about the device you use
                      to access the Platform, such as hardware model and
                      operating system.
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="  ml-4">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 dark:text-gray-300 ">
                    How We Use Your Information
                  </div>{" "}
                  We use the information we collect for the following purposes:
                  <br />
                  <ul className="list-disc list-inside ">
                    <li> To provide, operate, and improve the Platform.</li>
                    <li>To analyze and grade answer sheets using AI models.</li>
                    <li>
                      To communicate with you, including sending updates,
                      notifications, and support messages.
                    </li>
                    <li>
                      To process payments and ensure transactional security.
                    </li>
                    <li>
                      To comply with legal obligations and enforce our terms.
                    </li>
                    <li>
                      To personalize your experience and improve our services.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ml-4 mt-5">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 dark:text-gray-300 ">
                    Sharing Your Information
                  </div>
                  We may share your information in the following circumstances:
                  <ul className="list-disc list-inside ">
                    <li>
                      With Service Providers : Third-party companies assisting
                      in payment processing, data storage, or analytics, bound
                      by confidentiality agreements.
                    </li>
                    <li>
                      Legal Compliance : If required by law or to protect our
                      rights, users, or property.
                    </li>
                    <li>
                      Business Transfers : In case of a merger, acquisition, or
                      sale of assets.
                    </li>
                    <li>
                      With Your Consent : Where you explicitly allow sharing of
                      your information.
                    </li>
                  </ul>
                  We do not sell or rent your personal information to third
                  parties.
                </div>
              </div>

              <div className="ml-4 mt-5">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 dark:text-gray-300 ">
                    Data Security
                  </div>
                  <span>
                    We take reasonable precautions to protect your data from
                    unauthorized access, alteration, or disclosure. Measures
                    include encryption, secure servers, and regular audits.
                    However, no system is entirely secure, and we cannot
                    guarantee absolute security.
                  </span>
                </div>
              </div>

              <div className="ml-4 mt-5">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 dark:text-gray-300 ">
                    Retention of Information
                  </div>
                  We retain your information only as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy, comply
                  with legal obligations, resolve disputes, and enforce our
                  agreements.
                </div>
              </div>

              <div className="ml-4 mt-5">
                <div className="text-base">
                  <div className="text-2xl font-bold mb-2 ">Your Rights</div>
                  You have the following rights regarding your data:
                  <ul className="list-disc list-inside ">
                    <li>
                      Access, update, or delete your personal information.
                    </li>
                    <li>
                      {" "}
                      Withdraw consent for data processing (where applicable).
                    </li>
                    <li>Opt-out of marketing communications.</li>
                    <li>
                      {" "}
                      File a complaint with a data protection authority if you
                      believe your rights have been violated.
                    </li>
                  </ul>
                  To exercise your rights, please contact us at
                  <Link
                    href={"mailto:contact@greyalphatech.com"}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    contact@greyalphatech.com .
                  </Link>
                </div>
              </div>

              <div className="mt-5 ml-4 text-base">
                <div className="text-2xl font-bold mb-2">
                  Cookies and Tracking Technologies
                </div>
                We use cookies and similar technologies to improve user
                experience and gather usage data. You can control cookie
                preferences through your browser settings.
              </div>
              <div className="mt-5 ml-4 text-base">
                <div className="text-2xl font-bold mb-2">Third-Party Links</div>
                Our Platform may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                websites. Please review their privacy policies before submitting
                your information
              </div>

              <div className="mt-5 ml-4 text-base">
                <div className="text-2xl font-bold mb-2">
                  Changes to This Privacy Policy
                </div>
                We may update this Privacy Policy periodically. Changes will be
                effective upon posting on our Platform, with the &quot;Effective
                Date&quot; updated. We encourage you to review this policy
                regularly.
              </div>

              <div className="mt-5 ml-4 text-base">
                <div className="text-2xl font-bold mb-2">Contact Us</div>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
                <div>
                  GreyAlpha Technologies Private Limited <br /> Email:
                  <Link
                    href={"mailto:contact@greyalphatech.com"}
                    className="text-blue-500 hover:underline ml-1"
                  >
                    contact@greyalphatech.com
                  </Link>
                  <br />
                  By using our Platform, you acknowledge that you have read and
                  understood this Privacy Policy and agree to its terms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default PrivacyPolicyPage;
