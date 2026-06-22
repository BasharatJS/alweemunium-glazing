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
  HelpCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const serviceDetails = [
  {
    id: "sliding-windows",
    title: "Sliding Windows",
    icon: Wind,
    image:
      "https://mccoymart.com/post/wp-content/uploads/30-Sep-24-Aluminium-Sliding-Windows-FI.jpg",
    description:
      "High-precision sliding window systems engineered for seamless sliding tracks, heavy wind-load resistance, sound isolation, and high weather performance.",
    features: [
      "2-Track & 3-Track Configurations: Compact frames tailored to sill sizes.",
      "Mosquito Mesh Integration: Stainless steel or high-tensile fiberglass mesh tracks.",
      "Soundproof Glass: Double-glazed units (DGU) with argon gas filling for sound insulation.",
      "Balcony Sliding Windows: Reinforced frames to withstand upper-floor wind pressure.",
      "Premium Powder Coating: Anodized or RAL custom color options.",
    ],
    bestFor:
      "Residential balconies, high-rise apartments, and modern apartments looking for unobstructed views.",
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors",
    icon: Move,
    image:
      "https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170",
    description:
      "Premium large-span aluminium sliding doors designed to merge internal living areas with outer balconies and terraces without structural clutter.",
    features: [
      "Heavy-Duty Roller Bearings: Smooth, effort-free sliding of heavy glass sash weights.",
      "Glass Sliding Doors: Clean frameless side looks and wide glass panels.",
      "Large Opening Systems: Lift-and-slide layouts for architectural openings up to 6 meters wide.",
      "Multi-point Locking Systems: Premium heavy latch locks for high residential security.",
      "Zero-threshold Options: Flush tracks to prevent tripping accidents.",
    ],
    bestFor: "Luxury apartments, villas, terrace entry points, and hotels.",
  },
  {
    id: "curtain-walls",
    title: "Curtain Wall Systems",
    icon: Grid,
    image:
      "https://images.unsplash.com/photo-1642591150884-3ea64e368a4e?q=80&w=1074",
    description:
      "External non-structural building envelopes designed to protect structural pillars and maximize natural daylighting in commercial properties.",
    features: [
      "Stick Curtain Walls: On-site custom tailored and assembled glass facades.",
      "Unitized Curtain Walls: Pre-fabricated modules for fast on-site installation in high-rises.",
      "Thermal Break Systems: Highly insulated aluminium profiles to reduce HVAC loads.",
      "Pressure Plate Design: Visible grids or clean shadow-line exterior joints.",
      "Pune Climate Proofing: Tested against heavy rain pressure and summer heat expansion.",
    ],
    bestFor:
      "Commercial office towers, IT parks, hotel elevations, and retail showrooms.",
  },
  {
    id: "acp-cladding",
    title: "ACP Cladding",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    description:
      "Modern, high-durability Aluminium Composite Panel (ACP) installations that provide flat, rustproof, and fire-resistant external wall elevations.",
    features: [
      "Fire-Retardant Panels: Mineral-core or aluminum honeycomb core panels.",
      "CNC Panel Routing: Precise sheet bending and seamless mechanical groove folding.",
      "Weather-Resistant PVDF Coating: Colors do not fade under direct tropical UV rays.",
      "Shop Front Elevation: Bold colors, corporate brand panel designs, and LED slot integrations.",
      "Low Maintenance: Dust-repellent sheet structures that clean easily with rainwater.",
    ],
    bestFor:
      "Corporate showrooms, commercial buildings, hospital facades, and exterior elevations.",
  },
  {
    id: "structural-glazing",
    title: "Structural Glazing",
    icon: LayoutGrid,
    image:
      "https://images.unsplash.com/photo-1644251787786-7900294784af?q=80&w=734",
    description:
      "Frameless exterior glass facade technology where glass panels are directly bonded to sub-frames using high-tensile structural silicone.",
    features: [
      "Flush Glass Appearance: Zero visible aluminium frames on the exterior face.",
      "High-Performance Silicones: Dow Corning / structural sealants for wind load transfer.",
      "Spider Glazing Support: Point-fixed stainless steel spider fittings for open entryways.",
      "Double & Triple Glazed Units: High energy efficiency with low-emissivity glass.",
      "Safety First: Fully toughened, heat-strengthened, or laminated safety glasses.",
    ],
    bestFor:
      "Premium corporate entrances, shopping mall facades, and modern landmark structures.",
  },
  {
    id: "partitions",
    title: "Aluminium Partitions & Glass Work",
    icon: Building,
    image:
      "https://plus.unsplash.com/premium_photo-1681487188656-bc309f7f7b7c?w=600",
    description:
      "Clean interior glass partitions and modular office cabins designed to maximize office light transmission and acoustic privacy.",
    features: [
      "Office Partitions: Sleek black, anodized silver, or custom color frames.",
      "Sound Dampening: Soundproof acoustic laminates and gaskets to block cabin noise.",
      "Slimline Profiles: 45mm × 45mm profile designs for a minimalist interior look.",
      "Glass Doors: Framed swing glass doors, sliding doors, or patch-fitting glass gates.",
      "Privacy Finishes: Frosted, sandblasted, smart-glass, or custom vinyl film applications.",
    ],
    bestFor:
      "Office workspaces, conference rooms, cabin enclosures, and interior retail segmentations.",
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-16 last:border-0 scroll-mt-28"
              >
                {/* Real Image */}
                <div
                  className={`lg:col-span-5 relative w-full overflow-hidden rounded-2xl border border-white/10 group shadow-2xl ${
                    !isEven ? "lg:order-last" : ""
                  }`}
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/70 via-pitch-black/20 to-transparent pointer-events-none" />
                  {/* Category badge on image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pitch-black/80 backdrop-blur-sm border border-white/10">
                    <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                      {service.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">
                      Key Features & Technical Specs:
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-white/60"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/50 leading-relaxed">
                    <strong className="text-white/80 font-semibold">
                      Best for:
                    </strong>{" "}
                    {service.bestFor}
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

        {/* FAQ / Contact Info Box */}
        <div className="mt-32 max-w-4xl mx-auto text-center p-8 rounded-2xl glassmorphism border border-white/5">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Need a custom profile combination?
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            We work closely with architects and developers to build customized
            frames, specify thermal break profiles, and select custom double
            glass compositions.
          </p>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-semibold transition-colors"
          >
            Talk to Our Design Engineer
          </Link>
        </div>
      </div>
    </div>
  );
}
