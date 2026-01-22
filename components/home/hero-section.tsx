"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-red via-brand-red to-red-700 min-h-[calc(100vh-4rem)] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/hero-pattern.png" 
          alt="" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 via-transparent to-brand-red/50" />

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl delay-1000" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold border border-white/20 shadow-lg">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span>Premium Documents Clearing Services – Dubai, UAE</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              MOHAMMAD MOHI UDDIN KARIM
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg text-white/95 md:text-xl leading-relaxed font-normal">
              Fast, reliable typing & government service support for{" "}
              <span className="font-bold text-yellow-300">Emirates ID, Visa, Immigration, Tas-Heel, Trade License, PRO, Medical & Insurance</span>.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Clock, label: "Fast Service" },
                { icon: Shield, label: "Trusted" },
                { icon: Award, label: "Expert" },
                { icon: CheckCircle2, label: "Reliable" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <item.icon className="h-6 w-6 text-yellow-300" />
                  <span className="text-xs font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                className="group bg-white text-brand-red hover:bg-yellow-300 hover:text-brand-red shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+971563315670" aria-label="Call Now +971 56 331 5670">
                  <PhoneCall className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call Now: +971 56 331 5670
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-[#25D366] hover:border-[#25D366] shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 group"
              >
                <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 56 331 5670">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Secondary Contact Options */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="tel:+97142279566" 
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Office: +971 4 227 9566
              </a>
              <span className="text-white/40">|</span>
              <a 
                href="mailto:mohi.luc@gmail.com" 
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                mohi.luc@gmail.com
              </a>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} max-w-md mx-auto lg:mx-0`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 group">
                <Image 
                  src="/hero-professional.png" 
                  alt="Professional Documents Clearing Services in Dubai" 
                  width={400} 
                  height={400}
                  className="h-auto w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Trust Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-2xl border-2 border-brand-red/20 hover:scale-110 transition-all duration-300 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">Trusted by 1000+</p>
                    <p className="text-xs text-charcoal/70">Happy Clients</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Quick Service */}
              <div className="absolute -top-6 -right-6 rounded-2xl bg-yellow-300 p-4 shadow-2xl hover:scale-110 transition-all duration-300 max-w-[180px]">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-2">
                    <Clock className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">Same Day</p>
                    <p className="text-xs text-charcoal/70">Service Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}
