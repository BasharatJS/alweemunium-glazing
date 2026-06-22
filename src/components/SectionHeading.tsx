"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 mb-16 ${
        center ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left"
      }`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 uppercase"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[2px] bg-primary glow-filter"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-base md:text-lg leading-relaxed mt-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
