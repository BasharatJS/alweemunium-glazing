"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { business, serviceSummaries } from "@/lib/business";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") ?? serviceSummaries[0].id;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: selectedService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `Hello ${business.name}, I would like to request a consultation.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType.replace(/-/g, " ").toUpperCase()}
*Requirements:* ${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: serviceSummaries[0].id,
        message: "",
      });
    }, 800);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Opening WhatsApp Chat...</h3>
        <p className="text-sm text-white/60 max-w-sm">
          Thank you for reaching out to {business.name}. We are redirecting you to WhatsApp to complete your consultation request.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
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
            className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

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
          className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors w-full"
        />
      </div>

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
          {serviceSummaries.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="others">Other Exterior / Interior Glazing</option>
        </select>
      </div>

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
          className="px-4 py-3 rounded-lg border border-white/10 bg-pitch-black/60 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors w-full resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-primary text-pitch-black font-bold tracking-wide hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 neon-glow mt-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-pitch-black border-t-transparent rounded-full animate-spin" />
            <span>Redirecting to WhatsApp...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Consultation Request (via WhatsApp)</span>
          </>
        )}
      </button>
    </form>
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
          title={`Contact ${business.name}`}
          subtitle="Get a consultation for aluminium windows, doors, partitions, glazing, ACP, railings, shower cubicles, and canopy work."
        />

        {/* ── Form + Contact Details side by side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-6">Send Us Your Requirements</h3>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-[300px]">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                }
              >
                <ContactFormContent />
              </Suspense>
            </div>
          </div>

          {/* Right: Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="glassmorphism p-8 rounded-2xl border border-white/5 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Office & Workshop</h3>

              <ul className="flex flex-col gap-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-white/60 leading-relaxed">
                      Adarsh Nagar, Uruli Devachi,<br />
                      Pune, Maharashtra 412308
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                    <div className="flex flex-col gap-1 text-white/60">
                      <a href={`tel:${business.phoneHref}`} className="hover:text-primary transition-colors">
                        {business.phone}
                      </a>
                      <a href={`tel:${business.secondaryPhoneHref}`} className="hover:text-primary transition-colors">
                        {business.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-white/60 hover:text-primary transition-colors break-all"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Working Hours</h4>
                    <p className="text-white/60 leading-relaxed">
                      Mon - Sat: 9:30 AM - 6:30 PM<br />
                      Sunday: By prior appointment only
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp Quick Contact */}
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Chat on WhatsApp</p>
                <p className="text-xs text-white/50">Quick replies - usually within an hour</p>
              </div>
            </a>
          </div>
        </div>

        {/* ── Full-width Google Maps Embed (below form & details) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-16"
          style={{ height: "440px" }}
        >
          <iframe
            title={`${business.name} Location - ${business.shortAddress}`}
            src="https://www.google.com/maps?q=Adarsh%20Nagar%2C%20Uruli%20Devachi%2C%20Pune%2C%20Maharashtra%20412308&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
