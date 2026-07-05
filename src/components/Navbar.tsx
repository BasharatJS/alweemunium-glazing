"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { business } from "@/lib/business";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label={`${business.name} home`}>
          <BrandMark className="h-11 w-11 ring-1 ring-primary/35 transition-all duration-300 group-hover:ring-primary/80 group-hover:shadow-[0_0_32px_rgba(163,230,53,0.25)]" />
          <span className="flex flex-col leading-none">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              {business.name}
            </span>
            <span className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {business.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative py-2 text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)" }}
              >
                <span className="hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary glow-filter"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-pitch-black transition-all duration-300 neon-glow"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:text-primary hover:border-primary/40 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-lg w-full absolute left-0 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      isActive ? "text-primary border-l-2 border-primary pl-3" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-3 text-center rounded-lg bg-primary text-pitch-black font-semibold text-sm hover:bg-primary-hover transition-colors duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
