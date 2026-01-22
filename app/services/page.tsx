import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Copy,
  FileText,
  HeartPulse,
  IdCard,
  ShieldCheck,
  Stethoscope,
  Users,
  ArrowRight,
  Plus,
  Zap,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive individual and business government services in Dubai, including Medical, Emirates ID, Visa, Immigration, and Business Set-up support.",
};

const sections = [
  {
    title: "Individual Services",
    description: "Personal documentation support to make your lifestyle in the UAE hassle-free.",
    items: [
      { 
        title: "Medical Services", 
        description: "Coordination for medical fitness tests required for residence visas and occupational health.",
        icon: Stethoscope,
        color: "bg-red-50",
        iconColor: "text-brand-red"
      },
      { 
        title: "Emirates ID Typing", 
        description: "New registration and renewal services with 100% accurate data entry systems.",
        icon: IdCard,
        color: "bg-blue-50",
        iconColor: "text-blue-600"
      },
      { 
        title: "Visa Services", 
        description: "Full support for Tourist, Family, Maid, and Golden Visa application processing.",
        icon: FileText,
        color: "bg-amber-50",
        iconColor: "text-amber-600"
      },
      { 
        title: "Immigration", 
        description: "Expert handling of entry permits, residence status changes, and cancellation procedures.",
        icon: ClipboardList,
        color: "bg-emerald-50",
        iconColor: "text-emerald-600"
      },
      { 
        title: "Tas-Heel Services", 
        description: "MOHRE portal support for labor contracts, work permits, and employment offer letters.",
        icon: Users,
        color: "bg-purple-50",
        iconColor: "text-purple-600"
      },
      { 
        title: "Health Insurance", 
        description: "Partnering with top providers to ensure you meet all legal insurance requirements.",
        icon: ShieldCheck,
        color: "bg-rose-50",
        iconColor: "text-rose-600"
      },
    ],
  },
  {
    title: "Business & Corporate",
    description: "Strategic solutions for companies looking to establish or maintain their presence in Dubai.",
    items: [
      { 
        title: "Trade License", 
        description: "DED services for new license issuance, annual renewals, and license amendments.",
        icon: Building2,
        color: "bg-orange-50",
        iconColor: "text-orange-600"
      },
      { 
        title: "Economic Services", 
        description: "Assistance with Department of Economy & Tourism (DET) approvals and legalizations.",
        icon: BriefcaseBusiness,
        color: "bg-indigo-50",
        iconColor: "text-indigo-600"
      },
      { 
        title: "Business Set-up", 
        description: "Professional consultancy for Mainland and Free Zone company formation.",
        icon: BadgeCheck,
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
      },
      { 
        title: "Sponsor Services", 
        description: "Reliable sponsorship solutions ensuring 100% legal compliance and security.",
        icon: HeartPulse,
        color: "bg-pink-50",
        iconColor: "text-pink-600"
      },
      { 
        title: "P.R.O Services", 
        description: "Comprehensive corporate PRO support for document clearing at all government levels.",
        icon: Users,
        color: "bg-cyan-50",
        iconColor: "text-cyan-600"
      },
    ],
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image 
            src="/services-hero.png" 
            alt="Government Portals Support" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-sm font-bold text-brand-red backdrop-blur-md mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <Zap className="h-4 w-4" />
              <span>AUTHORIZED SERVICE CENTER</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
              Government Services <br />
              <span className="text-brand-red">Simplified for You</span>
            </h1>
            <p className="mt-8 text-lg text-white/70 max-w-2xl font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
              From individual Emirates ID typing to complex corporate trade license set-up, we handle the bureaucracy so you can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Sections */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="space-y-32">
            {sections.map((sec, idx) => (
              <div key={sec.title} className="relative">
                {/* Section Header */}
                <div className={cn(
                  "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                )}>
                  <div className="max-w-2xl">
                    <div className={cn(
                      "flex items-center gap-2 mb-4",
                      idx % 2 === 0 ? "justify-start" : "lg:justify-end"
                    )}>
                      <Plus className="h-5 w-5 text-brand-red" />
                      <span className="text-sm font-black uppercase tracking-widest text-charcoal/40">Category {idx + 1}</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-charcoal md:text-5xl">
                      {sec.title}
                    </h2>
                    <p className="mt-4 text-lg text-charcoal/60 leading-relaxed font-normal">
                      {sec.description}
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.items.map((item, i) => (
                    <div 
                      key={item.title} 
                      className="group relative bg-[#F8FAFC] rounded-[2.5rem] p-10 border border-charcoal/5 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Icon */}
                      <div className={cn(
                        "w-16 h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 mb-8 shadow-sm",
                        item.color,
                        item.iconColor
                      )}>
                        <item.icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-2xl font-black text-charcoal mb-4 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/60 leading-relaxed font-medium mb-8">
                        {item.description}
                      </p>

                      <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/20">Official Support</span>
                         <ArrowRight className="w-5 h-5 text-brand-red opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>

                      {/* Decor */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-red/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                {/* Optional Image for Business Section */}
                {sec.title === "Business & Corporate" && (
                   <div className="mt-16 relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                      <Image 
                        src="/services-business.png" 
                        alt="Business Setup Support" 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent flex items-center px-12">
                         <div className="max-w-md">
                            <h4 className="text-2xl font-black text-white mb-4 italic uppercase">Corporate Excellence</h4>
                            <p className="text-white/80 font-medium leading-relaxed">
                               We guide international investors and local entrepreneurs through the entire DED ecosystem with zero margin for error.
                            </p>
                         </div>
                      </div>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="pb-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-red p-12 md:p-20 text-center shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-black/5 blur-[100px] -ml-48 -mb-48" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-white md:text-5xl mb-6">
                Still Unsure Which <br />
                <span className="italic uppercase">Service You Need?</span>
              </h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed font-bold">
                Speak directly with one of our PRO specialists. We'll provide a free consultation and clear roadmap for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-white text-brand-red hover:bg-charcoal hover:text-white shadow-xl text-md font-black group transition-all duration-300">
                  <a href="tel:+971563315670">
                    Call: +971 56 331 5670
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-brand-red shadow-lg text-md font-black group">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
