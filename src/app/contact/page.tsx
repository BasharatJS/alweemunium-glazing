"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// Sub-component to process search params safely inside a Suspense boundary
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "sliding-windows",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, projectType: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "sliding-windows",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden">
      {/* Background glow in form */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12 gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
          <p className="text-sm text-white/60 max-w-sm">
            Thank you for reaching out to Alweemunium Glazing. Our design team will contact you within 24 hours to schedule a site visit.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/70">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/70">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/70">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors w-full"
            />
          </div>

          {/* Project Type */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-white/70">
              Project Type / Solution *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black text-sm text-white focus:outline-none focus:border-primary/50 transition-colors w-full appearance-none cursor-pointer"
            >
              <option value="sliding-windows">Sliding Windows</option>
              <option value="sliding-doors">Sliding Doors</option>
              <option value="curtain-walls">Curtain Wall Systems</option>
              <option value="acp-cladding">ACP Cladding</option>
              <option value="structural-glazing">Structural Glazing</option>
              <option value="partitions">Aluminium Glass Partition Work</option>
              <option value="others">Other Exterior/Interior Glazing</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/70">
              Project Description & Requirements *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your balcony, facade dimensions, sound insulation goals, or overall building layout..."
              className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors w-full resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-lg bg-primary text-pitch-black font-bold tracking-wide hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 neon-glow"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-pitch-black border-t-transparent rounded-full animate-spin" />
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Consultation Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg py-16">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Contact Us"
          title="Let's Build Your Facade"
          subtitle="Get a free design consult, site measurement visit, and fabrication estimation for your Pune projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12 items-start">
          {/* Left Column: Form (wrapped in Suspense) */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="glassmorphism p-8 rounded-2xl border border-white/5 flex items-center justify-center min-h-[400px]">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <ContactFormContent />
            </Suspense>
          </div>

          {/* Right Column: Address Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="glassmorphism p-8 rounded-2xl border border-white/5 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white mb-2">Pune Office & Workshop</h3>
              
              <ul className="flex flex-col gap-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Address Location</h4>
                    <p className="text-white/60 leading-relaxed">
                      Baner Road, near Balewadi High Street, Pune, Maharashtra 411045
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Call Representative</h4>
                    <a href="tel:+919876543210" className="text-white/60 hover:text-primary transition-colors block">
                      +91 98765 43210 (Sales & Site Visits)
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Inquiry</h4>
                    <a href="mailto:info@alweemuniumglazing.com" className="text-white/60 hover:text-primary transition-colors block">
                      info@alweemuniumglazing.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Operational Hours</h4>
                    <p className="text-white/60 leading-relaxed">
                      Monday – Saturday: 9:30 AM – 6:30 PM <br />
                      Sunday: Closed (Prior appointment only)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stylized Mock Map showing Baner / Balewadi location */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-pitch-black border border-white/5 flex items-center justify-center group">
              <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
              
              {/* Pulsing Location Dot */}
              <div className="relative flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-primary/80 flex items-center justify-center border border-white glow-filter shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-pitch-black" />
                </div>
                <div className="absolute w-10 h-10 rounded-full bg-primary/20 animate-ping pointer-events-none" />
              </div>

              {/* Map Layout Mock Details */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-pitch-black/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white/50 text-left">
                <span className="text-primary font-semibold">TARGET COORDINATE</span> <br />
                <span>18.5590° N, 73.7797° E (Baner, Pune)</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/70 to-transparent pointer-events-none" />
              <span className="absolute bottom-4 text-xs font-semibold text-white/40 tracking-wider">
                Alweemunium Glazing Pune Area Map
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
