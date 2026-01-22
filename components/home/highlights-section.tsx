"use client";

import { useState, useEffect } from "react";
import { 
  IdCard, 
  FileText, 
  Globe, 
  Handshake, 
  Building2, 
  BadgeCheck, 
  ShieldCheck, 
  Stethoscope,
  ArrowRight,
  Plus
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const highlights = [
  { 
    title: "Emirates ID Typing", 
    description: "New registration, renewals, and accurate data entry for all UAE residents.",
    icon: IdCard,
    color: "bg-red-50",
    iconColor: "text-brand-red"
  },
  { 
    title: "Visa Services", 
    description: "Expert assistance for Tourist, Residence, Family, and Golden Visa applications.",
    icon: FileText,
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  { 
    title: "Immigration Support", 
    description: "Fast-track processing for entry permits and residence status changes.",
    icon: Globe,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Tas-Heel Services", 
    description: "Authorized typing for MOHRE contracts and labor-related document clears.",
    icon: Handshake,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  { 
    title: "Trade License", 
    description: "DED services for new license issuance, renewals, and legal amendments.",
    icon: Building2,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  { 
    title: "Business Set-up", 
    description: "Turnkey solutions for company formation in Mainland and Free Zones.",
    icon: BadgeCheck,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  { 
    title: "PRO Services", 
    description: "Reliable government liaison for all corporate and individual PRO requirements.",
    icon: ShieldCheck,
    color: "bg-rose-50",
    iconColor: "text-rose-600"
  },
  { 
    title: "Medical & Insurance", 
    description: "Coordination for medical fitness tests and health insurance processing.",
    icon: Stethoscope,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
];

export function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-red/5 rounded-full blur-[100px] -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="relative mx-auto w-full max-w-7xl px-4">
        {/* Header Section */}
        <div className={cn(
          "max-w-3xl mx-auto text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-red shadow-sm border border-charcoal/5 mb-4">
            <Plus className="h-4 w-4" />
            <span>OUR CORE EXPERTISE</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl">
            Major Services We Offer <br />
            <span className="text-brand-red">With Precision</span>
          </h2>
          <p className="mt-6 text-lg text-charcoal/60 font-normal leading-relaxed">
            From individual residency papers to complex corporate registrations, we provide 
            end-to-end support for all your government portal requirements in the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className={cn(
                "group relative bg-white rounded-[2rem] p-8 border border-charcoal/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon Container */}
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12",
                item.color,
                item.iconColor
              )}>
                <item.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-black text-charcoal group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Decorative Element */}
              <div className="mt-6 pt-6 border-t border-charcoal/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">Authorized Service</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-brand-red" />
                </span>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-transparent rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "mt-20 text-center transition-all duration-1000 delay-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="inline-block p-1 rounded-2xl bg-white shadow-xl shadow-brand-red/5 border border-charcoal/5 transform hover:scale-105 transition-transform">
            <div className="px-8 py-4 flex flex-col md:flex-row items-center gap-4 bg-charcoal/5 rounded-xl">
              <span className="text-charcoal/60 font-medium">Looking for a service not listed here?</span>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 text-brand-red font-black hover:underline"
              >
                Inquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
