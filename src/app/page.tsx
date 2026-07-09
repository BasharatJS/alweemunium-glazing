"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Compass,
  Hammer,
  ShieldCheck,
  ClipboardList,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { business, serviceSummaries } from "@/lib/business";

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
    imageUrl:
      "https://mccoymart.com/post/wp-content/uploads/30-Sep-24-Aluminium-Sliding-Windows-FI.jpg",
  },
  {
    title: "Commercial Curtain Wall Facade",
    category: "Commercial / Facade",
    location: "Baner, Pune",
    description: "Semi-unitized curtain wall system utilizing structural silicone glazing and high-performance energy-saving glass.",
    imageUrl:
      "https://images.unsplash.com/photo-1642591150884-3ea64e368a4e?q=80&w=1074",
  },
  {
    title: "Office Glass Partition",
    category: "Glazing / Interiors",
    location: "Kharadi IT Park, Pune",
    description: "Minimalist floor-to-ceiling glass partition walls with powder-coated sleek black aluminium tracks.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681487188656-bc309f7f7b7c?w=900",
  },
  {
    title: "ACP Cladding Elevation",
    category: "ACP / Cladding",
    location: "Wakad, Pune",
    description: "Modern retail exterior clad with fire-retardant aluminium composite panels and custom LED channel styling.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
  },
];

const heroSlides = [
  {
    src: "/hero/sliding-glass-door.jpg",
    label: "sliding glass door",
  },
  {
    src: "/hero/glass-panel-doors.jpg",
    label: "glass panel doors",
  },
  {
    src: "/hero/curtain-wall-building.jpg",
    label: "curtain wall building",
  },
  {
    src: "/hero/glass-building-facade.jpg",
    label: "glass building facade",
  },
  {
    src: "/hero/office-glass-partition.jpg",
    label: "office glass partition",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Site Visit",
    description: "We visit your site for precision measurements and structural feasibility checks.",
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
    description: "Millimetre-accurate cuts and structural assembly at our workshop facility.",
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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative -mt-24 overflow-hidden min-h-screen bg-dark-bg">
      {/* Structural Grid lines background */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-30 z-0" />

      {/* Background radial highlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden border-b border-white/5 px-6 pb-20 pt-40 sm:pt-44">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => {
            const isActive = activeHeroSlide === index;

            return (
              <motion.div
                key={slide.src}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.04,
                }}
                transition={{
                  opacity: { duration: 1.2, ease: "easeInOut" },
                  scale: { duration: 6.5, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  preload={index === 0}
                  quality={92}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            );
          })}
          <div className="absolute inset-0 bg-pitch-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-pitch-black/40 via-pitch-black/10 to-pitch-black/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,163,13,0.12),transparent_44%)]" />
          <div className="absolute inset-0 grid-lines opacity-20" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-primary/25 bg-pitch-black/70 px-3 py-1 text-xs font-semibold text-primary shadow-lg shadow-black/10 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            <span>{business.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            {business.name}
            <span className="mt-4 block text-primary glow-filter">
              {business.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-white/78 sm:text-lg"
          >
            We design, fabricate, and install aluminium system windows, door partitions, bathroom doors, W/C louvers, curtain wall, structural glazing, ACP, shower cubicles, glass railings, and skylight canopy work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-ink shadow-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-primary/25 neon-glow"
            >
              Explore Services
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-white/15 bg-pitch-black/75 px-6 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3"
          >
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-white/60">Custom Design</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">Double</span>
              <span className="text-xs text-white/60">Window Systems</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">RERA</span>
              <span className="text-xs text-white/60">Standards Compliant</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-2 pt-1">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveHeroSlide(index)}
                aria-label={`Show ${slide.label} hero image`}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-pitch-black ${
                  activeHeroSlide === index ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section id="services" className="relative py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Solutions"
            title="Aluminium Architectural Services"
            subtitle="A complete service list from system windows and door partitions to ACP, shower cubicles, glass railings, skylights, domes, and canopies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceSummaries.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                link={`/services#${service.id}`}
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
            title={`Why Choose ${business.name}?`}
            subtitle={`Delivering aluminium architectural work with clean fabrication, practical detailing, and reliable installation from ${business.shortAddress}.`}
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
            subtitle="Explore our aluminium architectural work across homes, shops, offices, and commercial frontages."
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
