import React from "react";
import Link from "next/link";
import FooterSection from "@/components/sections/Footer";
import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | EduSageAI",
  description:
    "Review the rules and guidelines for using our platform and services.",
  keywords: [
    "Terms of Service",
    "EduSageAI",
    "Terms and Conditions",
    "Usage Policy",
    "Service Agreement",
  ],
  robots: "index, follow",
};

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="bg-white container mt-5 mx-auto py-8 px-0 pt-[25px] md:px-[50px] md:pt-[40px]">
        <div className="mb-4 text-center text-m">
          Effective Date: 01/10/2024
        </div>
        <div className="text-4xl font-bold mb-4 text-black-800 text-center ">
          Terms of Use
        </div>
        <br />
        <div className="px-2 py-4 md:p-8 bg-gray-50">
          <div>
            Welcome to EduSageAI (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). By accessing or using our AI-based EdTech platform
            (the &quot;Platform&quot;), you agree to comply with and be bound by
            these Terms of Use. If you do not agree with these terms, please do
            not use the Platform.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Eligibility</div>
            To use the Platform, you must:
            <ul className="list-disc ml-4">
              <li>
                Be at least 18 years old or have parental/guardian consent if
                under 18.
              </li>
              <li>
                Provide accurate and complete information during registration.
              </li>
              <li> Comply with all applicable laws and regulations.</li>
            </ul>
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">User Accounts</div>
            <ul>
              <li>
                Account Creation : You may need to create an account to access
                certain features of the Platform. You are responsible for
                safeguarding your login credentials.
              </li>
              <li>
                Account Responsibility : You are responsible for all activities
                that occur under your account. Notify us immediately of any
                unauthorized use.
              </li>
              <li>
                Account Termination : We reserve the right to suspend or
                terminate accounts for violations of these Terms of Use.
              </li>
            </ul>
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2"> Use of the Platform</div>
            You agree to use the Platform only for lawful purposes and in
            accordance with these Terms of Use. Prohibited activities include:
            <ul className="list-disc ml-4">
              <li>Using the Platform to harm, threaten, or harass others.</li>
              <li>Uploading harmful, illegal, or infringing content.</li>
              <li>
                Attempting to access restricted areas of the Platform without
                authorization.
              </li>
              <li>
                Using automated tools (e.g., bots) to interact with the Platform
                without permission.
              </li>
              <li>
                Reverse-engineering or attempting to extract source code from
                the Platform.
              </li>
            </ul>
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Intellectual Property</div>
            <ul className="list-disc ml-4">
              <li>
                The Platform and its contents, including text, graphics, logos,
                and AI models, are the intellectual property of EduSageAI or its
                licensors. All rights are reserved.
              </li>
              <li>
                You may not reproduce, distribute, or create derivative works
                based on the Platform without prior written consent.
              </li>
            </ul>
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Fees and Payments</div>
            <ul className="list-disc ml-4">
              <li>
                {" "}
                Some features of the Platform may require payment. By making a
                purchase, you agree to provide accurate payment information and
                authorize us to charge the applicable fees.
              </li>
              <li>All fees are non-refundable unless otherwise stated.</li>
            </ul>
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Privacy Policy</div>
            Your use of the Platform is also governed by our Privacy Policy,
            which outlines how we collect, use, and protect your information.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">
              Disclaimer of Warranties
            </div>
            The Platform is provided &quot;as&quot; is&quot; and &quot;as
            available.&quot; We do not guarantee that the Platform will be
            error-free, uninterrupted, or secure. To the maximum extent
            permitted by law, we disclaim all warranties, express or implied,
            including warranties of merchantability and fitness for a particular
            purpose.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">
              Limitation of Liability
            </div>
            To the maximum extent permitted by law, EduSageAI and its affiliates
            shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of your use of the Platform.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Indemnification</div>
            You agree to indemnify and hold EduSageAI harmless from any claims,
            damages, or expenses arising from your use of the Platform or
            violation of these Terms of Use
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">
              Modifications to Terms
            </div>
            We may update these Terms of Use from time to time. Changes will be
            effective upon posting, and your continued use of the Platform
            constitutes acceptance of the updated terms.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Governing Law</div>
            These Terms of Use are governed by the laws of India. Any disputes
            arising under these terms shall be resolved in the courts of Pune,
            India.
          </div>
          <div className="mt-5 ml-4 text-base">
            <div className="text-2xl font-bold mb-2">Contact Us</div>
            If you have questions about these Terms of Use, please contact us:{" "}
            <br />
            GreyAlpha Technologies Private Limited <br />
            Email:
            <Link
              href={"mailto:contact@greyalphatech.com"}
              className="text-blue-500 hover:underline ml-1"
            >
              contact@greyalphatech.com
            </Link>
          </div>
          <div className="mt-10 text-center text-base mb-0">
            By using the Platform, you acknowledge that you have read,
            understood, and agree to these Terms of Use.
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default TermsAndConditions;
