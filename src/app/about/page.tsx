"use client";

import { motion } from "framer-motion";
import { Compass, ShieldCheck, Cpu, CheckSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const values = [
  {
    title: "Millimetre Precision",
    description: "Our local Pune fabrication facility works with high-accuracy cutting grids ensuring profiles join seamlessly and tracks operate with minimal friction.",
    icon: Cpu,
  },
  {
    title: "Climatic Engineering",
    description: "All products are custom-configured to Pune's local wind loads and heavy summer/monsoon cycles, preventing leaks and whistling sounds.",
    icon: Compass,
  },
  {
    title: "Toughened Gaskets & Sealants",
    description: "We use high-grade EPDM rubber seals and premium structural silicone sealants to guarantee long-term air, dust, and water isolation.",
    icon: ShieldCheck,
  },
  {
    title: "100% Quality Assurance",
    description: "Every sliding track, lock alignment, and corner bracket undergoes strict inspection before the fabrication leaves our workshop.",
    icon: CheckSquare,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg py-16">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="About Us"
          title="Engineering Premium Facades"
          subtitle="Learn more about Alweemunium Glazing, bringing 40+ years of industry-leading facade engineering and architectural glass solutions to premium projects."
        />

        {/* Company Intro & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 mb-32">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              40+ Years of Dedication to <br />
              <span className="text-primary font-normal">Architectural Glazing Excellence</span>
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              With over **40 years of core industry expertise**, the team at **Alweemunium Glazing** represents a rich heritage of precision engineering. Our focus is to bridge the gap between premium design requirements and millimetre-accurate on-site execution in Pune's residential and commercial spaces.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              We specialize in custom sliding windows, architectural sliding doors, soundproof glass systems, ACP cladding elevations, and curtain walls for residential high-rises and commercial retail setups. We prioritize clean finishing, dust-proof sealing, double soundproofing, and RERA-compliant setups.
            </p>

            {/* Micro Grid Metrics */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="p-4 rounded-xl border border-white/5 bg-pitch-black/30">
                <span className="block text-3xl font-bold text-primary font-mono">100%</span>
                <span className="text-xs text-white/50 font-semibold uppercase tracking-wider">Local Fabrication</span>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-pitch-black/30">
                <span className="block text-3xl font-bold text-primary font-mono">0.0mm</span>
                <span className="text-xs text-white/50 font-semibold uppercase tracking-wider">Laser Precision Fit</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl glassmorphism overflow-hidden border border-white/10 flex items-center justify-center p-8 group"
          >
            <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
            
            <div className="text-center flex flex-col gap-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Pune Workshop</h4>
              <p className="text-white/50 text-xs max-w-[200px] mx-auto">
                Equipped with cutting tools and precision assembly jigs for custom frame fabrication.
              </p>
            </div>
            
            <div className="absolute bottom-4 right-4 px-3 py-1 text-[10px] font-mono text-primary bg-primary/5 border border-primary/20 rounded">
              EST. PUNE, MH
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl glassmorphism border border-white/5 relative flex flex-col gap-4 text-left"
          >
            <div className="absolute top-6 right-8 text-6xl font-bold text-white/5 font-mono">MISSION</div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Mission
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              To provide architects, building developers, and homeowners with high-performance window, glazing, and cladding solutions. We combine premium design aesthetics with structural durability, ensuring that every project is insulated against sound, wind, dust, and weather variables.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl glassmorphism border border-white/5 relative flex flex-col gap-4 text-left"
          >
            <div className="absolute top-6 right-8 text-6xl font-bold text-white/5 font-mono">VISION</div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Vision
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              To become Pune’s most trusted partner for premium aluminium facade and glass architectural engineering. We strive to pioneer sustainable, thermally broken profiles that reduce energy costs while providing expansive, beautiful views.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Architectural Pillars</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => {
              const ValueIcon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glassmorphism p-6 rounded-xl border border-white/5 text-left flex flex-col gap-4 justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="mt-32">
        <CTASection />
      </div>
    </div>
  );
}
