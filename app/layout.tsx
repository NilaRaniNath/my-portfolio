import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nila Rani Nath | Web Developer Portfolio",
  description: "Professional portfolio of Nila Rani Nath, a Web Developer specializing in modern digital experiences.",
  icons: {
    icon: "/nila logo.png",
    apple: "/nila logo.png",
  }
};

import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-bg-dark text-white`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
