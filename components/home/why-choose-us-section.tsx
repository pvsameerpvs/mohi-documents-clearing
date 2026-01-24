"use client";

import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  PhoneCall, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

const reasons = [
  {
    title: "Expert & Accurate Typing",
    description: "Our certified typists ensure 100% accuracy in all government forms to avoid delays.",
    icon: Target,
    color: "bg-blue-500"
  },
  {
    title: "Fast Track Processing",
    description: "We prioritize urgent requests with same-day submission for most government services.",
    icon: Zap,
    color: "bg-brand-red"
  },
  {
    title: "Authorized PRO Support",
    description: "Direct liaison with UAE government departments with over 12 years of experience.",
    icon: ShieldCheck,
    color: "bg-emerald-500"
  },
  {
    title: "Convenient Location",
    description: "Based in the heart of Deira, Dubai for easy access and physical document handling.",
    icon: MapPin,
    color: "bg-amber-500"
  },
];

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Why Choose Us Content */}
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          )}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/5 px-4 py-2 text-sm font-bold text-brand-red mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>THE MOST TRUSTED PRO IN DUBAI</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl lg:leading-[1.15]">
              Seamless Government <br />
              <span className="text-brand-red font-black">Support for Everyone</span>
            </h2>

            <p className="mt-8 text-lg text-charcoal/60 leading-relaxed font-normal">
              Whether you are an individual needing an Emirates ID or a corporation setting up 
              new trade licenses, we provide the precision and speed you deserve.
            </p>

            {/* Premium Reason List */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {reasons.map((item, idx) => (
                <div key={idx} className="group flex flex-col items-start">
                  <div className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110",
                    item.color
                  )}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Quick Contact Premium Card */}
          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal p-1 shadow-2xl">
              <div className="relative z-10 overflow-hidden rounded-[2.3rem] bg-white p-8 md:p-12">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-black text-charcoal md:text-3xl">Get Direct Support</h3>
                  <p className="mt-3 text-sm text-charcoal/60 font-medium">Fast, reliable, and expert guidance is just a call away.</p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4 rounded-3xl bg-charcoal/5 p-5 transition-colors hover:bg-charcoal/10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-red shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Our Office</p>
                      <p className="text-sm font-bold text-charcoal leading-tight mt-1">
                        Dubai Deira hor al anz near salal bilal studio 30A Street,shop no 1
                      </p>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a href="tel:+971563315670" className="flex items-center gap-4 rounded-3xl bg-brand-red/5 p-4 transition-all hover:bg-brand-red hover:text-white group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-red shadow-sm group-hover:bg-white/20 group-hover:text-white">
                        <PhoneCall className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black truncate">+971 56 331 5670</span>
                    </a>
                    <a href="tel:+97143495163" className="flex items-center gap-4 rounded-3xl bg-amber-500/5 p-4 transition-all hover:bg-amber-500 hover:text-white group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-500 shadow-sm group-hover:bg-white/20 group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black truncate">04 349 5163</span>
                    </a>
                  </div>

                  {/* WhatsApp & Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl bg-emerald-500/5 p-4 transition-all hover:bg-[#25D366] hover:text-white group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#25D366] shadow-sm group-hover:bg-white/20 group-hover:text-white">
                        <WhatsAppIcon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black">WhatsApp Now</span>
                    </a>
                    <a href="mailto:mohi.luc@gmail.com" className="flex items-center gap-4 rounded-3xl bg-blue-500/5 p-4 transition-all hover:bg-blue-500 hover:text-white group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm group-hover:bg-white/20 group-hover:text-white">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-black truncate">Email Us</span>
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <Button asChild size="lg" className="h-16 w-full rounded-3xl bg-brand-red text-md font-black shadow-xl shadow-brand-red/20 group">
                    <Link href="/contact">
                      View Full Contact Details
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Decorative Card Background elements */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl" />
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
