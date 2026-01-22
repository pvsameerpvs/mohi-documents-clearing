"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Users2, 
  Sparkles,
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Successful Cleared", value: "10k+", icon: ShieldCheck },
  { label: "Happy Clients", value: "5k+", icon: Users2 },
  { label: "Years Experience", value: "12+", icon: Target },
];

const features = [
  {
    title: "100% Success Rate",
    description: "Expert handling of all government portals ensuring ZERO rejections."
  },
  {
    title: "Fast-Track Processing",
    description: "Same-day submission for Emirates ID and Urgent Visa services."
  },
  {
    title: "Direct PRO Support",
    description: "Work directly with experts, no middle-men or hidden charges."
  }
];

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Image Side */}
          <div className={cn(
            "relative transition-all duration-1000 transform",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          )}>
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
              <Image 
                src="/hero-trust.png" 
                alt="Expert Document Clearing Service" 
                width={600} 
                height={700}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 bg-brand-red p-6 rounded-3xl shadow-xl text-white max-w-[200px] animate-bounce-subtle">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-6 w-6 text-yellow-300" />
                <span className="text-2xl font-black italic">TOP</span>
              </div>
              <p className="text-sm font-bold leading-tight">Trusted PRO Agency in Dubai</p>
            </div>

            {/* Background Accent */}
            <div className="absolute -left-8 -top-8 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl" />
          </div>

          {/* Right: Content Side */}
          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-sm font-bold text-brand-red mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>OVER 12 YEARS OF EXCELLENCE</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl lg:leading-[1.15]">
              Expert Solutions for Your <br />
              <span className="text-brand-red">Government Documentation</span>
            </h2>

            <p className="mt-8 text-lg text-charcoal/80 leading-relaxed font-normal">
              At Mohammad Mohi Uddin Karim, we bridge the gap between complex legal requirements and your peace of mind. Our specialized team handles everything from Emirates ID typing to comprehensive Trade License support.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {features.map((feature, i) => (
                <div key={i} className="group relative flex gap-4 rounded-2xl border border-charcoal/5 bg-white p-5 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/5 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-charcoal">{feature.title}</h3>
                    <p className="mt-1 text-sm text-charcoal/60 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 border-t border-charcoal/10 pt-10">
              <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/20 text-md font-bold group">
                <Link href="/contact">
                  Contact Specialist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-charcoal/10 overflow-hidden">
                    <Image 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} 
                      alt="User" 
                      width={48} 
                      height={48} 
                      unoptimized
                    />
                  </div>
                ))}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-yellow-400 text-xs font-black text-charcoal">
                  +5k
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section Bottom */}
        <div className="mt-20 lg:mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="group flex items-center gap-6 rounded-[2rem] bg-charcoal/5 p-8 transition-all hover:bg-brand-red hover:scale-105 cursor-default">
              <div className="h-16 w-16 shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-lg text-brand-red transition-transform group-hover:rotate-12">
                <stat.icon className="h-8 w-8" />
              </div>
              <div>
                <div className="text-3xl font-black text-charcoal group-hover:text-white">{stat.value}</div>
                <div className="text-sm font-bold text-charcoal/60 group-hover:text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
