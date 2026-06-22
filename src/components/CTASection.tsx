"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-pitch-black border-y border-white/5">
      {/* Background Neon Glows & Patterns */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 top-0 w-80 h-80 rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      {/* Decorative Floating Frame */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-white/10 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-white/10 hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo Symbol */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl border border-primary/30 bg-white/5 text-primary">
            <Layers className="w-6 h-6" />
            <div className="absolute inset-0 rounded-xl bg-primary/15 blur-md" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Planning a Facade, Glazing, or <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-green">
                Sliding Window Project?
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Get in touch with Pune’s premier aluminium glazing engineers. We discuss layouts, create structural design blueprints, select materials, and provide custom fabrication for your commercial or residential spaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-primary text-pitch-black font-bold tracking-wide hover:bg-primary-hover shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2 group neon-glow"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Explore Our Portfolio
            </Link>
          </div>

          {/* Location Badge */}
          <span className="text-xs text-white/40 tracking-widest uppercase mt-4">
            Custom Fabrication & Installation • Pune Region
          </span>
        </motion.div>
      </div>
    </section>
  );
}
