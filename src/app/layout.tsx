import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduSageAI",
  description: "AI-powered automated answer sheet grading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${PlusJakartaSans.className} antialiased`}>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
