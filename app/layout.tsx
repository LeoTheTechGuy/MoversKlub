import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoversKlub - Premium Logistics",
  description: "Experience the new standard in premium removals, event hire, and temperature-controlled transport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.className} antialiased bg-background-light text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
