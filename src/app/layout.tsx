import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alweemunium Glazing | Premium Aluminium Facades & Windows in Pune",
  description: "Alweemunium Glazing Pune designs and executes premium sliding windows, glazing systems, curtain walls, ACP cladding, and aluminium facade solutions for residential and commercial spaces.",
  keywords: "aluminium glazing Pune, sliding windows Pune, curtain wall Pune, ACP cladding Pune, facade solutions Pune, structural glazing Pune, sliding doors, office glass partitions, Pune aluminium construction startup",
  authors: [{ name: "Alweemunium Glazing" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark antialiased scroll-smooth`}>
      <body className="bg-dark-bg text-white min-h-screen flex flex-col justify-between selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

