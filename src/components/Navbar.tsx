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
      className="fixed left-0 right-0 top-4 z-50 px-3 transition-all duration-300 sm:px-6"
    >
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#05070c]/90 shadow-[0_18px_60px_rgba(2,3,5,0.24)] backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-[#05070c]/95 shadow-[0_14px_46px_rgba(2,3,5,0.28)]" : ""
        }`}
      >
        <div className={`flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-3.5" : "py-4"
        }`}>
          {/* Logo */}
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${business.name} home`}>
            <BrandMark className="h-11 w-11 ring-1 ring-primary/35 transition-all duration-300 group-hover:ring-primary/80 group-hover:shadow-[0_0_32px_rgba(163,230,53,0.25)]" />
            <span className="flex min-w-0 max-w-[13rem] flex-col leading-tight sm:max-w-none">
              <span className="text-sm font-bold leading-tight tracking-tight text-[#f8fafc] sm:text-lg">
                {business.name}
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.18em]">
                {business.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative py-2 text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.62)" }}
                >
                  <span className="transition-colors duration-200 hover:text-[#f8fafc]">
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
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-ink transition-all duration-300 neon-glow"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden shrink-0 p-2 rounded-lg border border-white/10 bg-white/5 text-white hover:text-primary hover:border-primary/40 transition-colors duration-200"
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
              className="lg:hidden border-t border-white/10 bg-[#05070c]/95 backdrop-blur-lg overflow-hidden"
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
                        isActive ? "text-primary border-l-2 border-primary pl-3" : "text-[#f8fafc]/70 hover:text-[#f8fafc]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full py-3 text-center rounded-lg bg-primary text-ink font-semibold text-sm hover:bg-primary-hover transition-colors duration-300 text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
