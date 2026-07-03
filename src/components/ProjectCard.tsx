"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  location,
  description,
  imageUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden glassmorphism aspect-[4/3] border border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Background Media/Gradient Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-pitch-black">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-40 opacity-70"
          />
        ) : (
          /* Premium Architectural Blueprint Mockup Background */
          <div className="w-full h-full relative grid-lines flex items-center justify-center bg-gradient-to-br from-dark-bg via-pitch-black to-dark-bg">
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-white/5 group-hover:border-primary/20 transition-colors duration-500" />
            <div className="absolute top-1/3 left-1/3 right-1/3 bottom-1/3 border border-white/5 group-hover:border-primary/30 transition-colors duration-500" />
            
            {/* Glowing neon glass pane */}
            <div className="w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-accent-green/10 rounded-lg border border-primary/10 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-500 flex items-center justify-center">
              <span className="text-white/20 text-xs tracking-widest font-mono">FACADE STRUCTURAL</span>
            </div>
            
            {/* Subtle glow sphere */}
            <div className="absolute w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition-all duration-500" />
          </div>
        )}
      </div>

      {/* Glass overlay at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/60 to-transparent flex flex-col justify-end p-6 md:p-8 z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {/* Category & Location */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
              {category}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/50">
              <MapPin className="w-3.5 h-3.5 text-primary/70" />
              <span>{location}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 flex items-center justify-between">
            <span>{title}</span>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </h3>

          {/* Short description - fades in on hover */}
          <p className="text-sm text-white/60 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
