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
  Sparkles,
  FileCheck,
  Verified
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import Typewriter from "typewriter-effect";


const BACKGROUND_IMAGES = [
  "/hero-professional.png",
  "/hero-trust.png",
  "/services-hero.png",
  "/about-hero.png"
];

const STAMPS = [
  { id: 1, text: "OFFICIAL SEAL", top: "10%", left: "5%", rotate: "-15deg", color: "text-brand-red/30" },
  { id: 2, text: "VERIFIED", bottom: "15%", right: "8%", rotate: "10deg", color: "text-brand-yellow/30" },
  { id: 3, text: "FAST TRACK", top: "20%", right: "12%", rotate: "-5deg", color: "text-green-500/20" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-charcoal min-h-[calc(100vh-73px)] lg:h-[calc(100vh-80px)] flex items-center py-12 md:py-0">
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Background"
              fill
              className="object-cover scale-105 animate-slow-zoom"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay Gradients */}
        
      </div>

      {/* Decorative Stamps - Hidden or simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none hidden md:block">
        {STAMPS.map((stamp) => (
          <div
            key={stamp.id}
            style={{ 
              top: stamp.top, 
              left: stamp.left, 
              right: stamp.right, 
              bottom: stamp.bottom,
              transform: `rotate(${stamp.rotate})`
            }}
            className={`absolute border-4 rounded-full p-4 flex items-center justify-center font-black tracking-widest text-2xl md:text-4xl opacity-20 ${stamp.color} border-current border-dashed animate-pulse`}
          >
            {stamp.text}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 md:py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center lg:text-left`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-semibold border border-brand-red/20 text-brand-red shadow-xl mb-6">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Government Approved Typing Center</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
              MOHAMMAD <span className="text-brand-red">MOHI UDDIN</span> KARIM
              <span className="block text-xl md:text-3xl lg:text-4xl mt-2 text-white/80 font-bold uppercase tracking-widest min-h-[1.5em]">
                <Typewriter
                  options={{
                    strings: [
                      "TYPING SERVICES",
                      "VISA SERVICES",
                      "EMIRATES ID",
                      "IMMIGRATION SERVICES",
                      "PRO SERVICES",
                      "TRADE LICENSE",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                    wrapperClassName: "text-brand-red",
                    cursorClassName: "text-white/60 animate-pulse",
                  }}
                />
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 md:mt-8 text-base md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dubai&apos;s premier destination for fast, reliable document processing. We specialize in{" "}
              <span className="text-white font-semibold">Emirates ID, Visa Services, and Immigration</span>.
            </p>

            {/* Features/Stats - More compact on mobile */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              {[
                { icon: Clock, label: "Fast Approval" },
                { icon: Shield, label: "Secure" },
                { icon: Award, label: "Expert Support" },
                { icon: FileCheck, label: "100% Success" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <item.icon className="h-4 w-4 text-brand-red transition-transform group-hover:scale-110" />
                  <span className="text-[10px] md:text-sm font-bold text-white whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                asChild 
                size="lg" 
                className="h-12 md:h-14 px-6 md:px-8 bg-brand-red hover:bg-red-700 text-white rounded-full shadow-2xl shadow-brand-red/20 transition-all hover:scale-105"
              >
                <a href="tel:+971563315670" className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 md:h-5 md:w-5" />
                  <div className="text-left">
                    <div className="text-[8px] md:text-[10px] uppercase font-bold opacity-70 leading-none">Contact Now</div>
                    <div className="text-xs md:text-sm font-bold leading-tight">+971 56 331 5670</div>
                  </div>
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="h-12 md:h-14 px-6 md:px-8 border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 rounded-full transition-all hover:scale-105"
              >
                <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 md:h-5 md:w-5 text-[#25D366]" />
                  <span className="text-sm md:text-base">Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Document & Passport Slider */}
          <div className={`relative w-full lg:w-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} mt-8 lg:mt-0`}>
            <div className="relative h-[300px] md:h-[500px] lg:h-[70vh] min-h-[300px] w-full max-w-[450px] mx-auto lg:ml-auto overflow-hidden rounded-[40px] border-8 border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl">
              {/* Document Slider Track */}
              <div className="absolute inset-0 flex flex-col gap-4 md:gap-6 p-4 md:p-6 animate-vertical-slide">
                {[
                  { title: "UAE RESIDENCE VISA", img: "/services-hero.png", stamp: "ENTRY PERMIT", color: "border-brand-yellow/30" },
                  { title: "EMIRATES ID CARD", img: "/hero-professional.png", stamp: "IDENTITY VERIFIED", color: "border-blue-500/30" },
                  { title: "TRADE LICENSE", img: "/services-business.png", stamp: "BUSINESS GRANTED", color: "border-green-500/30" },
                  { title: "PRO SERVICES", img: "/hero-trust.png", stamp: "IMMIGRATION", color: "border-brand-red/30" },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className={`relative shrink-0 w-full h-[180px] md:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 ${item.color} group bg-charcoal/50 backdrop-blur-md`}
                  >
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />
                    
                    {/* Passport Foiling Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />

                    {/* Official Document Header */}
                    <div className="absolute top-0 left-0 right-0 p-3 md:p-5 flex justify-between items-start">
                      <div>
                        <div className="text-[6px] md:text-[8px] font-black tracking-[0.2em] text-brand-yellow mb-1">UNITED ARAB EMIRATES</div>
                        <div className="text-[10px] md:text-sm font-black text-white leading-tight uppercase">{item.title}</div>
                      </div>
                      <div className="bg-brand-yellow/20 p-1 md:p-2 rounded-lg border border-brand-yellow/50">
                        <Verified className="h-3 w-3 md:h-5 md:w-5 text-brand-yellow" />
                      </div>
                    </div>

                    {/* Barcode Element */}
                    <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 opacity-40">
                      <div className="flex gap-0.5 items-end h-4 md:h-8">
                        {[2, 4, 1, 3, 2, 5, 1, 4, 2].map((h, j) => (
                          <div key={j} className="bg-white w-0.5 md:w-1" style={{ height: `${h * 2}px` }} />
                        ))}
                      </div>
                      <div className="text-[6px] md:text-[8px] font-mono text-white mt-1">AED-7892...</div>
                    </div>

                    {/* Ink Stamp Overlay */}
                    <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 transform -rotate-12">
                      <div className="border-2 md:border-4 border-brand-red/60 rounded-full w-12 h-12 md:w-24 md:h-24 flex items-center justify-center p-0.5 md:p-2 text-center text-[5px] md:text-[10px] font-black text-brand-red/60 select-none border-dashed uppercase scale-125 md:scale-150 rotate-12 opacity-80">
                        <div className="border-[1px] md:border-2 border-brand-red/40 rounded-full w-full h-full flex items-center justify-center">
                          {item.stamp}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-40" />
                  </div>
                ))}
                {/* Duplicate for infinite feel */}
                {[
                  { title: "UAE RESIDENCE VISA", img: "/services-hero.png", stamp: "ENTRY PERMIT", color: "border-brand-yellow/30" },
                  { title: "EMIRATES ID CARD", img: "/hero-professional.png", stamp: "IDENTITY VERIFIED", color: "border-blue-500/30" },
                  { title: "TRADE LICENSE", img: "/services-business.png", stamp: "BUSINESS GRANTED", color: "border-green-500/30" },
                  { title: "PRO SERVICES", img: "/hero-trust.png", stamp: "IMMIGRATION", color: "border-brand-red/30" },
                ].map((item, i) => (
                  <div 
                    key={`dup-${i}`}
                    className={`relative shrink-0 w-full h-[180px] md:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 ${item.color} group bg-charcoal/50 backdrop-blur-md`}
                  >
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />
                    
                    {/* Passport Foiling Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />

                    {/* Official Document Header */}
                    <div className="absolute top-0 left-0 right-0 p-3 md:p-5 flex justify-between items-start">
                      <div>
                        <div className="text-[6px] md:text-[8px] font-black tracking-[0.2em] text-brand-yellow mb-1">UNITED ARAB EMIRATES</div>
                        <div className="text-[10px] md:text-sm font-black text-white leading-tight uppercase">{item.title}</div>
                      </div>
                      <div className="bg-brand-yellow/20 p-1 md:p-2 rounded-lg border border-brand-yellow/50">
                        <Verified className="h-3 w-3 md:h-5 md:w-5 text-brand-yellow" />
                      </div>
                    </div>

                    {/* Barcode Element */}
                    <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 opacity-40">
                      <div className="flex gap-0.5 items-end h-4 md:h-8">
                        {[2, 4, 1, 3, 2, 5, 1, 4, 2].map((h, j) => (
                          <div key={j} className="bg-white w-0.5 md:w-1" style={{ height: `${h * 2}px` }} />
                        ))}
                      </div>
                      <div className="text-[6px] md:text-[8px] font-mono text-white mt-1">AED-7892...</div>
                    </div>

                    {/* Ink Stamp Overlay */}
                    <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 transform -rotate-12">
                      <div className="border-2 md:border-4 border-brand-red/60 rounded-full w-12 h-12 md:w-24 md:h-24 flex items-center justify-center p-0.5 md:p-2 text-center text-[5px] md:text-[10px] font-black text-brand-red/60 select-none border-dashed uppercase scale-125 md:scale-150 rotate-12 opacity-80">
                        <div className="border-[1px] md:border-2 border-brand-red/40 rounded-full w-full h-full flex items-center justify-center">
                          {item.stamp}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-40" />
                  </div>
                ))}
              </div>

              {/* Decorative Corner Seals */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-brand-yellow/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl" />
              
              {/* Overlay Glass Effect at Top and Bottom */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-charcoal to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <div className="text-[120px] font-black text-white leading-none inline-block animate-marquee uppercase">
          EMIRATES ID • VISA • IMMIGRATION • TASHEEL • TRADE LICENSE • PRO SERVICES • 
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes vertical-slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-vertical-slide {
          animation: vertical-slide 30s linear infinite;
        }
        .animate-vertical-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
