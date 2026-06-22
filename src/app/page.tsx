"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wind,
  Move,
  Grid,
  Layers,
  LayoutGrid,
  Building,
  CheckCircle2,
  Compass,
  Hammer,
  ShieldCheck,
  ClipboardList,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  MapPin
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Sliding Windows",
    description: "Premium soundproof and weather-resistant sliding windows tailored for home balconies and rooms.",
    iconName: "Wind" as const,
    link: "/services#sliding-windows",
  },
  {
    title: "Sliding Doors",
    description: "Large opening architectural aluminium sliding doors offering seamless indoor-outdoor transitions.",
    iconName: "Move" as const,
    link: "/services#sliding-doors",
  },
  {
    title: "Curtain Wall Systems",
    description: "Architectural stick and unitized curtain walls designed to elevate commercial building exterior aesthetics.",
    iconName: "Grid" as const,
    link: "/services#curtain-walls",
  },
  {
    title: "ACP Cladding",
    description: "Aluminium Composite Panel cladding for modern, high-durability commercial building front elevations.",
    iconName: "Layers" as const,
    link: "/services#acp-cladding",
  },
  {
    title: "Structural Glazing",
    description: "Premium frameless structural glass facades providing stunning flush exterior glass elevations.",
    iconName: "LayoutGrid" as const,
    link: "/services#structural-glazing",
  },
  {
    title: "Aluminium Facades",
    description: "Comprehensive end-to-end aluminium exterior solutions engineered for Pune's climatic conditions.",
    iconName: "Building" as const,
    link: "/services#facades",
  },
];

const features = [
  {
    title: "Modern Design",
    description: "Sleek, minimalist, and energy-efficient profiles adhering to premium international designs.",
    icon: Compass,
    num: "01",
  },
  {
    title: "Quality Materials",
    description: "High-grade architectural aluminium alloy and soundproof double-glazed insulated glasses.",
    icon: ShieldCheck,
    num: "02",
  },
  {
    title: "Skilled Installation",
    description: "Highly trained local fabrication engineers guaranteeing millimetre-accurate on-site execution.",
    icon: Hammer,
    num: "03",
  },
  {
    title: "Custom Solutions",
    description: "Bespoke sliding system configurations, custom mosquito meshes, and RAL powder coatings.",
    icon: ClipboardList,
    num: "04",
  },
  {
    title: "Commercial & Residential",
    description: "Catering to residential high-rises in Balewadi/Kharadi as well as premium IT parks and retail shops.",
    icon: Users,
    num: "05",
  },
  {
    title: "40+ Years of Expertise",
    description: "Decades of engineering mastery, swift local site visits, zero delays, and trusted responsive support.",
    icon: Award,
    num: "06",
  },
];

const projects = [
  {
    title: "Residential Balcony Sliding Window",
    category: "Residential",
    location: "Koregaon Park, Pune",
    description: "Heavy-duty 3-track sliding window system with integrated mosquito mesh and soundproof double-glazing.",
    imageUrl: "",
  },
  {
    title: "Commercial Curtain Wall Facade",
    category: "Commercial / Facade",
    location: "Baner, Pune",
    description: "Semi-unitized curtain wall system utilizing structural silicone glazing and high-performance energy-saving glass.",
    imageUrl: "",
  },
  {
    title: "Office Glass Partition",
    category: "Glazing / Interiors",
    location: "Kharadi IT Park, Pune",
    description: "Minimalist floor-to-ceiling glass partition walls with powder-coated sleek black aluminium tracks.",
    imageUrl: "",
  },
  {
    title: "ACP Cladding Elevation",
    category: "ACP / Cladding",
    location: "Wakad, Pune",
    description: "Modern retail exterior clad with fire-retardant aluminium composite panels and custom LED channel styling.",
    imageUrl: "",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Visit",
    description: "We visit your site in Pune for precision laser measurements and structural feasibility checks.",
  },
  {
    step: "02",
    title: "Requirement Discussion",
    description: "We discuss profile sizes, wind load parameters, glass performance needs, and budget alignments.",
  },
  {
    step: "03",
    title: "Design & Material Selection",
    description: "You select from premium sliding profiles, soundproof glass options, and standard RAL powder coatings.",
  },
  {
    step: "04",
    title: "Fabrication",
    description: "Millimetre-accurate cuts and structural assembly at our state-of-the-art Pune workshop facility.",
  },
  {
    step: "05",
    title: "Installation",
    description: "On-site installation using anchor fasteners, structural silicones, and professional leveling systems.",
  },
  {
    step: "06",
    title: "Final Quality Check",
    description: "Full check on sliding track smoothness, lock alignment, waterproof sealants, and sound dampening.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-dark-bg">
      {/* Structural Grid lines background */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-30 z-0" />

      {/* Background radial highlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-96px)] flex items-center justify-center py-20 px-6 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary max-w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>40+ Years of Premium Facade & Glazing Experience</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Premium Aluminium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-hover to-accent-green glow-filter">
                Glazing & Facade
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              We design and execute modern sliding windows, glazing systems, curtain walls, ACP cladding, and aluminium facade solutions for residential and commercial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-xl bg-primary text-pitch-black font-bold text-sm tracking-wide hover:bg-primary-hover shadow-lg hover:shadow-primary/25 transition-all duration-300 neon-glow"
              >
                Explore Services
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm tracking-wide hover:bg-white/15 transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-4 max-w-lg"
            >
              <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-white/50">Custom Design</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">Double</span>
                <span className="text-xs text-white/50">Sound Glazing</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">RERA</span>
                <span className="text-xs text-white/50">Standards Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Graphic */}
          <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              {/* Spinning / Glowing Outer Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full scale-95 pointer-events-none" />
              <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
              
              {/* Glassmorphic Facade Frame Mockup */}
              <div className="absolute inset-12 glassmorphism rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                {/* Horizontal Architectural divisions */}
                <div className="flex-1 border-b border-white/10 relative overflow-hidden grid grid-cols-3">
                  <div className="border-r border-white/10 relative bg-gradient-to-br from-primary/5 to-transparent">
                    {/* Animated grid line accent */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30 glow-filter" />
                  </div>
                  <div className="border-r border-white/10 relative bg-pitch-black/20" />
                  <div className="relative bg-gradient-to-tr from-accent-green/5 to-transparent">
                    <div className="absolute top-0 right-0 h-full w-[2px] bg-accent-green/30" />
                  </div>
                </div>

                <div className="flex-1 border-b border-white/10 grid grid-cols-2 relative">
                  {/* Glowing facade node */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-primary bg-pitch-black flex items-center justify-center glow-filter z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  </div>
                  <div className="border-r border-white/10 relative bg-pitch-black/40" />
                  <div className="relative bg-white/5" />
                </div>

                <div className="flex-1 grid grid-cols-3">
                  <div className="border-r border-white/10 relative" />
                  <div className="border-r border-white/10 relative bg-gradient-to-b from-primary/10 to-transparent" />
                  <div className="relative" />
                </div>

                {/* Glass reflection gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating Architectural Labels */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-0 px-3 py-1.5 rounded-lg border border-white/10 bg-pitch-black/85 backdrop-blur-sm text-[10px] font-mono text-white/70 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Structural Glass Elevation</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-2 px-3 py-1.5 rounded-lg border border-white/10 bg-pitch-black/85 backdrop-blur-sm text-[10px] font-mono text-white/70 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span>Soundproof Sliding Windows</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section id="services" className="relative py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Solutions"
            title="Engineered Glazing Systems"
            subtitle="We fabricate and assemble premium aluminium glass applications conforming to the highest structural and aesthetic standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                link={service.link}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group transition-colors"
            >
              <span>Explore Detailed Specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Advantages"
            title="Why Choose Alweemunium Glazing?"
            subtitle="Delivering structural excellence, precision design layouts, and weather-proof installations across Pune."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glassmorphism p-8 rounded-2xl relative border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: icon & index number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-3xl font-bold text-white/10 font-mono tracking-widest">
                        {feature.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="portfolio" className="relative py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Portfolio"
            title="Premium Projects Showcase"
            subtitle="Explore our structural work across residential towers, IT hubs, and retail frontages in Pune."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                index={index}
                title={project.title}
                category={project.category}
                location={project.location}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all font-semibold text-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Workflow"
            title="Our execution process"
            subtitle="From site assessment to millimetre-accurate on-site execution, we ensure seamless engineering delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-12">
            {/* Timeline line decoration */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block z-0 pointer-events-none" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl relative border border-white/5 z-10 flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                      STEP {step.step}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-primary/30" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
