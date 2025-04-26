import React from "react";
import Link from "next/link";
import FooterSection from "@/components/sections/Footer";
import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EduSageAI",
  description:
    "Understand how we collect, use, and protect your personal information.",
  keywords: [
    "Privacy Policy",
    "EduSageAI Privacy",
    "Data Protection",
    "User Privacy",
    "Information Security",
  ],
  robots: "index, follow",
};

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="bg-white text-black dark:bg-black px-0 pt-[25px] md:px-[50px] md:pt-[40px] dark:text-white">
        <div className="container mx-auto px-4 py-8 dark:text-gray-400">
          <div className="mb-4 text-center text-m">
            Effective Date: 01/10/2024
          </div>
          <div className="text-4xl font-bold mb-4 text-black-800 text-center ">
            Privacy and Policy
          </div>
          <br />
          <div className="px-2 py-4 md:px-8 md:py-8 bg-gray-50">
            <span className="mb-4 text-base text-gray-800">
              Welcome to EduSageAI (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;). We are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our AI-based EdTech platform (the
              &quot;Platform&quot;). By accessing or using the Platform, you
              agree to the terms of this Privacy Policy. If you do not agree,
              please do not use the Platform.
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
                    We use the information we collect for the following
                    purposes:
                    <br />
                    <ul className="list-disc list-inside ">
                      <li> To provide, operate, and improve the Platform.</li>
                      <li>
                        To analyze and grade answer sheets using AI models.
                      </li>
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
                    We may share your information in the following
                    circumstances:
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
                        Business Transfers : In case of a merger, acquisition,
                        or sale of assets.
                      </li>
                      <li>
                        With Your Consent : Where you explicitly allow sharing
                        of your information.
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
                  <div className="text-2xl font-bold mb-2">
                    Third-Party Links
                  </div>
                  Our Platform may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of those
                  websites. Please review their privacy policies before
                  submitting your information
                </div>

                <div className="mt-5 ml-4 text-base">
                  <div className="text-2xl font-bold mb-2">
                    Changes to This Privacy Policy
                  </div>
                  We may update this Privacy Policy periodically. Changes will
                  be effective upon posting on our Platform, with the
                  &quot;Effective Date&quot; updated. We encourage you to review
                  this policy regularly.
                </div>

                <div className="mt-5 ml-4 text-base">
                  <div className="text-2xl font-bold mb-2">Contact Us</div>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                  <div>
                    GreyAlpha Technologies Private Limited <br /> Email:
                    <Link
                      href={"mailto:contact@greyalphatech.com"}
                      className="text-blue-500 hover:underline ml-1"
                    >
                      contact@greyalphatech.com
                    </Link>
                    <br />
                    By using our Platform, you acknowledge that you have read
                    and understood this Privacy Policy and agree to its terms.
                  </div>
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

export default PrivacyPolicy;
