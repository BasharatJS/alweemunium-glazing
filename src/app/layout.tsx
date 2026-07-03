import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";

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
  title: `${business.name} | ${business.tagline}`,
  description: `${business.name} provides aluminium architectural work including system windows, door partitions, bathroom doors, W/C louvers, curtain wall, structural glazing, ACP, shower cubicles, glass railings, and skylight canopy work in Pune.`,
  keywords: "Bombay Alu Glaze, aluminium architectural work Pune, aluminium system windows, door partition, bathroom door, W/C window louvers, curtain wall, structural glazing, ACP work, frameless window, glass railing, skylight canopy",
  authors: [{ name: business.name }],
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
