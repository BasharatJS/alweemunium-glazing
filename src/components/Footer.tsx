import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { business, serviceSummaries } from "@/lib/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pitch-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-[250px] h-[250px] rounded-full bg-accent-green/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <BrandMark className="h-10 w-10 ring-1 ring-primary/30 transition-all duration-300 group-hover:ring-primary/70" />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">
                  {business.name}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {business.tagline}
                </span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Aluminium architectural work for windows, doors, partitions, glazing, ACP, railings, shower cubicles, and canopy systems.
            </p>
            <div className="flex items-center gap-4 text-white/50 text-xs">
              <span>Proprietor: {business.proprietor}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{business.shortAddress}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "About Us", href: "/about" },
                { name: "Contact & Query", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary flex items-center gap-1 group transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                ...serviceSummaries.slice(0, 6).map((service) => ({
                  name: service.title,
                  href: `/services#${service.id}`,
                })),
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {business.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${business.phoneHref}`} className="hover:text-primary transition-colors">
                    {business.phone}
                  </a>
                  <a href={`tel:${business.secondaryPhoneHref}`} className="hover:text-primary transition-colors">
                    {business.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-primary transition-colors break-all">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} {business.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
