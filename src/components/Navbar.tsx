"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers } from "lucide-react";

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

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-primary/30 bg-white/5 group-hover:border-primary/80 transition-all duration-300">
            <Layers className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ALWEE<span className="text-primary font-light">MUNIUM</span>
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
