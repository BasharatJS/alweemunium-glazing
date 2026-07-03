"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

const filters = [
  { name: "All", id: "all" },
  { name: "Residential", id: "residential" },
  { name: "Commercial", id: "commercial" },
  { name: "Facade", id: "facade" },
  { name: "Glazing", id: "glazing" },
  { name: "ACP Cladding", id: "acp" },
];

const projectsData = [
  {
    title: "Premium Balcony Sliding Windows",
    category: "Residential",
    tags: ["residential", "glazing"],
    location: "Koregaon Park, Pune",
    description: "Heavy-gauge 3-track sliding window system with integrated high-tensile mosquito mesh, sliding friction locks, and argon gas double glazing.",
    imageUrl:
      "https://mccoymart.com/post/wp-content/uploads/30-Sep-24-Aluminium-Sliding-Windows-FI.jpg",
  },
  {
    title: "Commercial Curtain Wall Facade",
    category: "Commercial / Facade",
    tags: ["commercial", "facade", "glazing"],
    location: "Baner, Pune",
    description: "A semi-unitized glass curtain wall system with thermal break design, high heat reflection coatings, and sleek vertical profile caps.",
    imageUrl:
      "https://images.unsplash.com/photo-1642591150884-3ea64e368a4e?q=80&w=1074",
  },
  {
    title: "Retail Showroom ACP Cladding",
    category: "Commercial / ACP",
    tags: ["commercial", "acp"],
    location: "Wakad, Pune",
    description: "Aluminium composite panel cladding for a premium automobile showroom frontage including customized brand color-matching and lighting slots.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
  },
  {
    title: "Corporate Office Glass Partitions",
    category: "Commercial",
    tags: ["commercial", "glazing"],
    location: "Kharadi IT Park, Pune",
    description: "Minimalist interior glass partitions and modular cabin enclosures utilizing slim black-anodized channels and acoustic sealing gasket systems.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681487188656-bc309f7f7b7c?w=900",
  },
  {
    title: "High-Rise Structural Glazing",
    category: "Commercial / Facade",
    tags: ["commercial", "facade", "glazing"],
    location: "Kalyani Nagar, Pune",
    description: "Fully frameless structural glass facade execution utilizing structural silicone glazing joints for a stunning smooth glass tower.",
    imageUrl:
      "https://images.unsplash.com/photo-1644251787786-7900294784af?q=80&w=734",
  },
  {
    title: "Luxury Villa Sliding Doors",
    category: "Residential",
    tags: ["residential", "glazing"],
    location: "Aundh, Pune",
    description: "Large opening architectural lift-and-slide door systems merging internal living spaces with outdoor landscaped pools.",
    imageUrl:
      "https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170",
  },
  {
    title: "IT Hub Facade ACP Cladding",
    category: "Commercial / ACP",
    tags: ["commercial", "acp", "facade"],
    location: "Hinjawadi IT Park, Pune",
    description: "Multi-layered exterior ACP panel layout for an IT park facade, utilizing fire-resistant panels and integrated ventilation vents.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1170",
  },
  {
    title: "Balcony Glass Railings & Sliding",
    category: "Residential",
    tags: ["residential", "glazing"],
    location: "Hadapsar, Pune",
    description: "Heavy soundproof sliding doors combined with frameless safety laminated glass railings for top-floor penthouse balcony enclosures.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1170",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <div className="relative min-h-screen bg-dark-bg py-16">
      {/* Background grids */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Designed & Executed Projects"
          subtitle="A handpicked collection of aluminium windows, commercial glass elevations, structural facades, railings, cubicles, and ACP panels."
        />

        {/* Filter Navigation */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-16 scrollbar-hide">
          <div className="flex gap-2 p-1.5 rounded-xl border border-white/5 bg-pitch-black/40 backdrop-blur-md max-w-max shrink-0">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                    isActive ? "text-pitch-black" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{filter.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-primary rounded-lg neon-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  index={index}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  description={project.description}
                  imageUrl={project.imageUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/50">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      <div className="mt-32">
        <CTASection />
      </div>
    </div>
  );
}
