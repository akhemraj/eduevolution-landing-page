"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, List } from "@phosphor-icons/react/dist/ssr";
import FooterSection from "@/components/sections/Footer";

export default function PricingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const pricingPlans = [
    {
      title: "Free Plan",
      emoji: "🆓",
      price: "Free",
      description:
        "Ideal for individual teachers or educators trying out our services.",
      features: [
        "50 Evaluations per Month",
        "Grading Theory Assignments",
        "Grading Coding Assignments",
        "Exam Grading",
        "AI Plagiarism Checker (Limited)",
        "Basic Rubric Generator",
        "Basic Reports",
      ],
    },
    {
      title: "Basic Plan",
      emoji: "📘",
      price: "$10/user/month",
      description: "Perfect for small classes and individual tutors.",
      features: [
        "200 Evaluations per Month",
        "Grading Theory Assignments",
        "Grading Coding Assignments",
        "Exam Grading",
        "AI Plagiarism Checker",
        "Advanced Rubric Generator",
        "Google Classroom Integration",
      ],
    },
    {
      title: "Premium Plan",
      emoji: "🎓",
      price: "$39/user/month",
      description:
        "Designed for larger classes, coaching institutes, and educational organizations.",
      features: [
        "1000 Evaluations per Month",
        "Grading Theory Assignments",
        "Grading Coding Assignments",
        "Exam Grading",
        "Advanced AI Plagiarism Checker",
        "Advanced Rubric Generator",
        "Detailed & Comprehensive Reports",
        "Google Classroom Integration",
        "Dedicated Support (Email & Chat)",
        "Monthly Usage Analytics",
      ],
    },
    {
      title: "School/University Plan",
      emoji: "🏫",
      price: "Custom Pricing",
      description:
        "Tailored to institutions seeking comprehensive, high-volume evaluations and reporting.",
      features: [
        "Custom Evaluation Limits",
        "Grading Theory Assignments",
        "Grading Coding Assignments",
        "Exam Grading",
        "Advanced AI Plagiarism Checker",
        "Customized Rubric Generator",
        "Highly Comprehensive, Custom Reports",
        "Advanced Google Classroom Integration",
        "Dedicated Account Manager",
        "Premium Support (Phone, Email, Chat)",
        "Institutional Analytics Dashboard",
        "Training & Onboarding",
      ],
    },
  ];

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
      <section className="px-6 md:px-16 lg:px-32 pt-20 pb-32 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Whether you&apos;re a solo educator or an institution, we&apos;ve got
          a plan tailored for you.
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl border p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{plan.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-2xl font-semibold text-blue-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-gray-500">
          ⭐ All plans include secure evaluations, cloud storage, updates &
          scalable infrastructure.
        </p>
      </section>
      <FooterSection />
    </div>
  );
}
