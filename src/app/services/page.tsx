"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wind,
  Move,
  Grid,
  Layers,
  LayoutGrid,
  Building,
  Check,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const serviceDetails = [
  {
    id: "sliding-windows",
    title: "Sliding Windows",
    icon: Wind,
    description: "High-precision sliding window systems engineered for seamless sliding tracks, heavy wind-load resistance, sound isolation, and high weather performance.",
    features: [
      "2-Track & 3-Track Configurations: Compact frames tailored to sill sizes.",
      "Mosquito Mesh Integration: Stainless steel or high-tensile fiberglass mesh tracks.",
      "Soundproof Glass: Double-glazed units (DGU) with argon gas filling for sound insulation.",
      "Balcony Sliding Windows: Reinforced frames to withstand upper-floor wind pressure.",
      "Premium Powder Coating: Anodized or RAL custom color options."
    ],
    bestFor: "Residential balconies, high-rise apartments, and modern apartments looking for unobstructed views.",
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors",
    icon: Move,
    description: "Premium large-span aluminium sliding doors designed to merge internal living areas with outer balconies and terraces without structural clutter.",
    features: [
      "Heavy-Duty Roller Bearings: Smooth, effort-free sliding of heavy glass sash weights.",
      "Glass Sliding Doors: Clean frameless side looks and wide glass panels.",
      "Large Opening Systems: Lift-and-slide layouts for architectural openings up to 6 meters wide.",
      "Multi-point Locking Systems: Premium heavy latch locks for high residential security.",
      "Zero-threshold Options: Flush tracks to prevent tripping accidents."
    ],
    bestFor: "Luxury apartments, villas, terrace entry points, and hotels.",
  },
  {
    id: "curtain-walls",
    title: "Curtain Wall Systems",
    icon: Grid,
    description: "External non-structural building envelopes designed to protect structural pillars and maximize natural daylighting in commercial properties.",
    features: [
      "Stick Curtain Walls: On-site custom tailored and assembled glass facades.",
      "Unitized Curtain Walls: Pre-fabricated modules for fast on-site installation in high-rises.",
      "Thermal Break Systems: Highly insulated aluminium profiles to reduce HVAC loads.",
      "Pressure Plate Design: Visible grids or clean shadow-line exterior joints.",
      "Pune Climate Proofing: Tested against heavy rain pressure and summer heat expands."
    ],
    bestFor: "Commercial office towers, IT parks, hotel elevations, and retail showrooms.",
  },
  {
    id: "acp-cladding",
    title: "ACP Cladding",
    icon: Layers,
    description: "Modern, high-durability Aluminium Composite Panel (ACP) installations that provide flat, rustproof, and fire-resistant external wall elevations.",
    features: [
      "Fire-Retardant Panels: mineral-core or aluminum honeycomb core panels.",
      "CNC Panel Routing: Precise sheet bending and seamless mechanical groove folding.",
      "Weather-Resistant PVDF Coating: Colors do not fade under direct tropical UV rays.",
      "Shop Front Elevation: Bold colors, corporate brand panel designs, and LED slot integrations.",
      "Low Maintenance: Dust-repellent sheet structures that clean easily with rainwater."
    ],
    bestFor: "Corporate showrooms, commercial buildings, hospital facades, and exterior elevations.",
  },
  {
    id: "structural-glazing",
    title: "Structural Glazing",
    icon: LayoutGrid,
    description: "Frameless exterior glass facade technology where glass panels are directly bonded to sub-frames using high-tensile structural silicone.",
    features: [
      "Flush Glass Appearance: Zero visible aluminium frames on the exterior face.",
      "High-Performance Silicones: Dow Corning / structural sealants for wind load transfer.",
      "Spider Glazing Support: Point-fixed stainless steel spider fittings for open entryways.",
      "Double & Triple Glazed Units: High energy efficiency with low-emissivity glass.",
      "Safety First: Fully toughened, heat-strengthened, or laminated safety glasses."
    ],
    bestFor: "Premium corporate entrances, shopping mall facades, and modern landmark structures.",
  },
  {
    id: "partitions",
    title: "Aluminium Partitions & Glass Work",
    icon: Building,
    description: "Clean interior glass partitions and modular office cabins designed to maximize office light transmission and acoustic privacy.",
    features: [
      "Office Partitions: Sleek black, anodized silver, or custom color frames.",
      "Sound Dampening: Soundproof acoustic laminates and gaskets to block cabin noise.",
      "Slimline Profiles: 45mm x 45mm profile designs for a minimalist interior look.",
      "Glass Doors: Framed swing glass doors, sliding doors, or patch-fitting glass gates.",
      "Privacy Finishes: Frosted, sandblasted, smart-glass, or custom vinyl film applications."
    ],
    bestFor: "Office workspaces, conference rooms, cabin enclosures, and interior retail segmentations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Solutions"
          title="Architectural Aluminium & Glazing Services"
          subtitle="Explore our detailed technical offerings designed for modern residential blocks, commercial offices, and retail fronts in Pune."
        />

        {/* Detailed Services Sections */}
        <div className="flex flex-col gap-24 mt-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-16 last:border-0 scroll-mt-28`}
              >
                {/* Image Placeholder / Architectural Wireframe Representation */}
                <div
                  className={`lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden glassmorphism flex items-center justify-center border border-white/10 group ${
                    !isEven ? "lg:order-last" : ""
                  }`}
                >
                  <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
                  {/* Neon Glowing Glass Pane inside card */}
                  <div className="w-[85%] h-[80%] rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent-green/10 flex flex-col justify-between p-6 relative">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-primary tracking-widest uppercase">TECHNICAL SPECIFICATIONS</span>
                      <h4 className="text-lg font-bold text-white mt-1">ALW-SYS-{service.id.toUpperCase().substring(0, 4)}</h4>
                    </div>
                    <div className="absolute right-6 top-6 flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/5 bg-pitch-black/60 text-[9px] font-mono text-white/50">
                      <span>VERIFIED PROFILE</span>
                    </div>
                  </div>
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Key Features & Technical Specs:</h4>
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/50 leading-relaxed">
                    <strong className="text-white/80 font-semibold">Best for:</strong> {service.bestFor}
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 rounded-lg bg-primary text-pitch-black font-bold text-xs tracking-wide hover:bg-primary-hover transition-colors neon-glow"
                    >
                      Inquire About {service.title}
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-white hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span>Get Free Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Preview or Small Info Box */}
        <div className="mt-32 max-w-4xl mx-auto text-center p-8 rounded-2xl glassmorphism border border-white/5">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Need a custom profile combination?</h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            We work closely with architects and developers to build customized frames, specify thermal break profiles, and select custom double glass compositions.
          </p>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-semibold"
          >
            Talk to Our Design Engineer
          </Link>
        </div>
      </div>
    </div>
  );
}
