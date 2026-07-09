"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { serviceSummaries } from "@/lib/business";

type ServiceId = (typeof serviceSummaries)[number]["id"];

const detailById: Record<
  ServiceId,
  {
    image: string;
    features: string[];
    bestFor: string;
  }
> = {
  "sliding-windows": {
    image:
      "https://mccoymart.com/post/wp-content/uploads/30-Sep-24-Aluminium-Sliding-Windows-FI.jpg",
    features: [
      "Indian & imported aluminium system windows.",
      "Sliding window systems with 2-track and 3-track options.",
      "Sliding folding sound proof windows for wider openings.",
      "Casement windows with strong hinges, locks, and weather sealing.",
      "Frameless windows for clean glass views and modern interiors.",
      "Clear, tinted, toughened, laminated, and sound-reducing glass choices.",
      "Mosquito mesh, smooth rollers, handles, locks, and powder-coated finishes.",
    ],
    bestFor:
      "Balconies, bedrooms, kitchens, offices, shops, apartments, and commercial window openings.",
  },
  "sliding-doors": {
    image:
      "https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170",
    features: [
      "Large aluminium sliding doors for balconies, terraces, and entrances.",
      "Door partition work for offices, shops, cabins, and interior separations.",
      "Bathroom doors with moisture-resistant aluminium framing.",
      "Glass sliding doors, framed doors, and aluminium panel door combinations.",
      "Frosted, tinted, clear, or patterned glass options.",
      "Heavy-duty rollers, handles, locks, stoppers, hinges, and clean frame detailing.",
    ],
    bestFor:
      "Balcony entries, shop partitions, office cabins, bathroom doors, showrooms, and home interiors.",
  },
  "curtain-wall-structural-glazing": {
    image:
      "https://images.unsplash.com/photo-1642591150884-3ea64e368a4e?q=80&w=1074",
    features: [
      "Curtain wall aluminium grid systems for commercial elevations.",
      "Structural glazing for clean glass-front appearance.",
      "Shop-front glazing, entrance glass, and building facade work.",
      "Toughened, laminated, tinted, reflective, and insulated glass options.",
      "Gasket and sealant detailing for exterior weather exposure.",
      "Spider glazing and point-fixed glass support where suitable.",
    ],
    bestFor:
      "Showrooms, offices, commercial buildings, institutions, malls, and front elevations.",
  },
  "acp-cladding": {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    features: [
      "ACP shop-front and commercial elevation work.",
      "Exterior cladding for walls, fascia, signage, and feature areas.",
      "Accurate panel cutting, grooving, folding, and corner finishing.",
      "Colour selection to match business branding and building design.",
      "Canopy fascia and mixed ACP-glass-aluminium front work.",
      "Weather-resistant surfaces with simple maintenance.",
    ],
    bestFor:
      "Shops, showrooms, commercial buildings, hospitals, schools, offices, and exterior fronts.",
  },
  "louvers": {
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=1170",
    features: [
      "W/C window louvers for privacy and ventilation.",
      "Bathroom, utility, staircase, and service-area louver windows.",
      "Fixed louver systems with glass or aluminium blades.",
      "Mosquito mesh integration where required.",
      "Custom sizing for compact and non-standard openings.",
      "Angled blade placement to reduce direct visibility and rain splash.",
    ],
    bestFor: "W/C windows, bathrooms, toilets, utility rooms, staircases, and ventilation openings.",
  },
  "shower-cubicles": {
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1074",
    features: [
      "Toughened glass shower cubicles and partitions.",
      "Sliding, hinged, fixed-panel, and corner bathroom layouts.",
      "Patch fittings, handles, channels, and waterproof seals.",
      "Clear, frosted, tinted, or patterned glass options.",
      "Clean finishing for modern bathroom interiors.",
    ],
    bestFor: "Homes, hotels, guest houses, apartments, and premium bathroom renovations.",
  },
  "glass-railings": {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1170",
    features: [
      "Balcony, staircase, terrace, and landing railing work.",
      "Toughened or laminated safety glass selection.",
      "Aluminium, stainless steel, or channel support options.",
      "Top-rail, side-mounted, or cleaner frameless-style detailing.",
      "Site-specific measurement and safe installation.",
    ],
    bestFor: "Homes, apartments, commercial stairs, balconies, terraces, and showrooms.",
  },
  "skylight-dome-canopy": {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170",
    features: [
      "Skylight and roof-light aluminium framing.",
      "Dome and canopy fabrication for covered areas.",
      "Glass, ACP, and aluminium profile combinations.",
      "Waterproofing and slope planning for exposed locations.",
      "Custom entrance, terrace, courtyard, and walkway coverage.",
    ],
    bestFor: "Entrances, terraces, courtyards, commercial fronts, and covered walkways.",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg py-16">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Solutions"
          title="Architectural Aluminium & Glazing Services"
          subtitle="Sequence-wise services with window and door types grouped inside their main service categories."
        />

        <div className="flex flex-col gap-24 mt-16">
          {serviceSummaries.map((service, index) => {
            const details = detailById[service.id];
            const Icon = Icons[
              service.iconName as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;
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
                <div
                  className={`lg:col-span-5 relative w-full overflow-hidden rounded-2xl border border-white/10 group shadow-2xl ${
                    !isEven ? "lg:order-last" : ""
                  }`}
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={details.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/70 via-pitch-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pitch-black/80 backdrop-blur-sm border border-white/10">
                    <div className="w-7 h-7 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                      {service.title}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      {Icon && <Icon className="w-5 h-5" />}
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
                      Key Features & Types:
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {details.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-white/60"
                        >
                          <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/50 leading-relaxed">
                    <strong className="text-white/80 font-semibold">
                      Best for:
                    </strong>{" "}
                    {details.bestFor}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 rounded-lg bg-primary text-ink font-bold text-xs tracking-wide hover:bg-primary-hover transition-colors neon-glow"
                    >
                      Inquire About {service.title}
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-white hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span>Get Free Consultation</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center p-8 rounded-2xl glassmorphism border border-white/5">
          <Icons.HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Need a custom aluminium profile combination?
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            We build customized aluminium windows, doors, partitions, glazing,
            ACP fronts, louvers, railings, cubicles, and canopy details as per
            your site.
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
