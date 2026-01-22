import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Users2, 
  Target, 
  Award, 
  ShieldCheck, 
  Globe2, 
  Languages, 
  ArrowRight,
  Plus,
  BadgeCheck,
  Zap,
  CheckCircle2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mohammad Mohi Uddin Karim Documents Clearing Services – your trusted partner for government documentation in Deira, Dubai.",
};

const values = [
  {
    title: "Uncompromising Accuracy",
    description: "In the world of government documentation, a single error can lead to rejections. We guarantee 100% precision in every application we process.",
    icon: Target,
    color: "bg-blue-500"
  },
  {
    title: "Fast-Track Mentality",
    description: "Time is money. Our direct access to government portals allows us to process your documents with industry-leading speed.",
    icon: Zap,
    color: "bg-brand-red"
  },
  {
    title: "Client-Centric Trust",
    description: "Transparency is our foundation. We keep you updated at every step, ensuring you have complete peace of mind.",
    icon: ShieldCheck,
    color: "bg-emerald-500"
  }
];

const management = [
  {
    name: "MOHI UDDIN",
    role: "Managing Director",
    initials: "MU"
  },
  {
    name: "SAHAB UDDIN",
    role: "Director of Operations",
    initials: "SU"
  }
];

const languages = [
  { name: "English", code: "EN" },
  { name: "Arabic", code: "AR" },
  { name: "Bangla", code: "BN" },
  { name: "Hindi", code: "HI" },
  { name: "Urdu", code: "UR" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image 
            src="/about-hero.png" 
            alt="Professional Office Dubai" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-sm font-bold text-brand-red backdrop-blur-md mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <BadgeCheck className="h-4 w-4" />
              <span>ESTABLISHED SINCE 2012</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
              Your Trusted Bridge to <br />
              <span className="text-brand-red">UAE Government Services</span>
            </h1>
            <p className="mt-8 text-lg text-white/70 max-w-2xl font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Mohammad Mohi Uddin Karim Documents Clearing Services is a top-tier PRO agency based in Deira, Dubai. We specialize in navigating the complexities of UAE's legal landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-charcoal/5 shadow-2xl">
                <Image 
                  src="/about-mission.png" 
                  alt="Precision and Trust Handshake" 
                  width={600} 
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-brand-red p-6 rounded-3xl shadow-xl text-white max-w-[200px]">
                <Award className="h-8 w-8 text-yellow-300 mb-2" />
                <p className="text-sm font-black leading-tight italic uppercase">12+ YEARS OF EXCELLENCE</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/5 px-4 py-2 text-sm font-bold text-brand-red">
                <Plus className="h-4 w-4" />
                <span>OUR CORE MOTIVATION</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl leading-tight">
                Empowering Businesses <br />
                Through <span className="text-brand-red uppercase italic">Precision</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed font-normal">
                Based in the heart of Hor Al Anz, Deira, we provide comprehensive document clearing and typing support. Our journey began with a single mission: to provide the most reliable government liaison services to both individuals and businesses in Dubai.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-charcoal/5 border border-charcoal/5">
                  <CheckCircle2 className="h-6 w-6 text-brand-red" />
                  <span className="font-black text-charcoal">Authorized Typists</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-charcoal/5 border border-charcoal/5">
                  <Globe2 className="h-6 w-6 text-brand-red" />
                  <span className="font-black text-charcoal">Multilingual Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl">
              Principles That <br />
              <span className="text-brand-red">Drive Our Success</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div key={i} className="group relative bg-white p-10 rounded-[3rem] shadow-sm border border-charcoal/5 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center text-white mb-8 transition-transform group-hover:rotate-12 shadow-lg",
                  value.color
                )}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-4 group-hover:text-brand-red transition-colors">
                  {value.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed font-normal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/5 px-4 py-2 text-sm font-bold text-brand-red mb-6">
                <Plus className="h-4 w-4" />
                <span>MEET THE LEADERSHIP</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl mb-6">
                Decades of Combined <br />
                <span className="text-brand-red italic uppercase">Expertise</span>
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed font-normal mb-8">
                Our leadership team brings together deep industry knowledge and a commitment to operational excellence. We personally oversee all critical government filings to ensure absolute accuracy.
              </p>

              {/* Language Section integrated */}
              <div className="pt-8 border-t border-charcoal/10">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="h-5 w-5 text-brand-red" />
                  <span className="text-sm font-black uppercase tracking-widest text-charcoal/40">Communication Mastery</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-charcoal/5 border border-charcoal/5 text-sm font-bold text-charcoal flex items-center gap-2 hover:bg-brand-red hover:text-white transition-colors cursor-default">
                      <span className="text-[10px] opacity-40">{lang.code}</span> {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {management.map((person, i) => (
                <div key={i} className="group flex items-center gap-6 p-8 rounded-[2.5rem] bg-charcoal/5 border border-charcoal/5 transition-all hover:bg-brand-red hover:scale-[1.02]">
                  <div className="h-20 w-20 shrink-0 flex items-center justify-center rounded-2xl bg-white text-brand-red text-2xl font-black shadow-lg shadow-brand-red/10 group-hover:rotate-6 transition-transform">
                    {person.initials}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-charcoal group-hover:text-white transition-colors">{person.name}</h4>
                    <p className="text-charcoal/60 font-bold group-hover:text-white/80 transition-colors">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="pb-24 bg-white px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-charcoal p-8 md:p-16 text-center shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-red/10 blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-red/5 blur-[100px] -ml-48 -mb-48" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-white md:text-5xl mb-6">
                Ready to Simplify Your <br />
                <span className="text-brand-red uppercase italic">Documentation?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed font-normal">
                Join thousands of satisfied clients who trust us for their legal paperwork in the UAE. Let's get started on your application today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-brand-red hover:bg-red-700 shadow-xl shadow-brand-red/20 text-md font-black group">
                  <Link href="/contact">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 text-sm font-bold">
                  <ShieldCheck className="h-5 w-5 text-brand-red" />
                  Authorized & Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
