import Link from "next/link";
import { Layers, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-primary/30 bg-white/5">
                <Layers className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ALWEE<span className="text-primary font-light">MUNIUM</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Pioneering high-performance aluminium facades, glazing systems, and sliding window solutions for modern architectural projects in Pune.
            </p>
            <div className="flex items-center gap-4 text-white/50 text-xs">
              <span>RERA Registered</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>40+ Years Experience</span>
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
                { name: "Sliding Windows", href: "/services#sliding-windows" },
                { name: "Sliding Doors", href: "/services#sliding-doors" },
                { name: "Curtain Wall Systems", href: "/services#curtain-walls" },
                { name: "ACP Cladding", href: "/services#acp-cladding" },
                { name: "Structural Glazing", href: "/services#structural-glazing" },
                { name: "Aluminium Glass Partitions", href: "/services#partitions" },
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
                  Adarsh Nagar, Ururli Devachi, Pune, Maharashtra 412308
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919492976113" className="hover:text-primary transition-colors">
                    +91 94929 76113
                  </a>
                  <a href="tel:+919324521022" className="hover:text-primary transition-colors">
                    +91 93245 21022
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:mdbasharattaquee@gmail.com" className="hover:text-primary transition-colors break-all">
                  mdbasharattaquee@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} Alweemunium Glazing Pune. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
