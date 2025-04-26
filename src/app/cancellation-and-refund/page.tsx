import React from "react";
import FooterSection from "@/components/sections/Footer";
import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | EduSageAI",
  description:
    "Learn about our simple and transparent cancellation and refund process.",
  keywords: [
    "Cancellation Policy",
    "Refund Policy",
    "EduSageAI Refunds",
    "Order Cancellation",
    "Money-back Policy",
  ],
  robots: "index, follow",
};

export default function RefundPolicyPage() {
  return (
    <div>
      <Navbar />
      <section className="px-6 py-16 md:px-20 mt-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            Cancellation &amp; Refund Policy
          </h2>
          <br />
          <div className="bg-gray-50 px-2 py-4 md:px-8 md:py-8 space-y-6 text-gray-700 text-base md:text-lg">
            <p>
              Thank you for choosing{" "}
              <span className="font-semibold">EduSageAI</span>. We value your
              trust and aim to provide excellent service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              14‑Day Cancellation &amp; Refund Window
            </h3>
            <p>
              If you&apos;re not completely satisfied, you may cancel your
              subscription within <span className="font-semibold">14 days</span>{" "}
              from the date of purchase. Upon cancellation, you&apos;ll receive
              a full refund to your original payment method.
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
              team—we&apos;re here to help!
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
