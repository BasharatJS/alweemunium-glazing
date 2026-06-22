"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  link: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  iconName,
  link,
  index,
}: ServiceCardProps) {
  // Dynamically resolve icon component
  const IconComponent = Icons[iconName] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={link} className="block group">
        <div className="glassmorphism glassmorphism-hover p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Glow behind icon */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
          
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 mb-6 relative">
              {IconComponent && <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            <p className="text-sm text-white/60 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors duration-300">
            <span>Learn More</span>
            <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
