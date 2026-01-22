import Link from "next/link";
import Image from "next/image";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  ShieldCheck,
  MessageCircle
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "Emirates ID Typing", href: "/services" },
    { label: "Visa Services", href: "/services" },
    { label: "Immigration Support", href: "/services" },
    { label: "Tas-Heel Services", href: "/services" },
    { label: "Business Set-up", href: "/services" },
    { label: "PRO Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ]
};

export function SiteFooter() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] -mr-48 -mt-48" />

      <div className="mx-auto w-full max-w-7xl px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-red shadow-lg shadow-brand-red/20 transition-transform group-hover:scale-110">
                  <ShieldCheck className="text-white h-6 w-6" />
                </div>
                <span className="text-lg font-black tracking-tight leading-none italic uppercase">
                  MOHI <span className="text-brand-red italic block text-[10px] tracking-[0.2em] font-black mt-1 not-italic opacity-80 uppercase leading-none">Documents Clearing</span>
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px] font-normal">
              Premium document clearing and government liaison services in Dubai. We simplify your legal journeys with precision and speed.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-brand-red hover:text-white hover:border-brand-red hover:scale-110 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-red"></span>
              Our Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-white/60 hover:text-brand-red hover:translate-x-1 transition-all flex items-center gap-2 text-sm font-medium group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-red"></span>
              Useful Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-white/60 hover:text-brand-red hover:translate-x-1 transition-all flex items-center gap-2 text-sm font-medium group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-red"></span>
              Contact Info
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Location</p>
                  <p className="text-sm text-white/80 font-bold leading-tight">
                    Hor Al Anz Near Salah Bilal Studio, Deira, Dubai – UAE
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red shrink-0">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Call Support</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971563315670" className="text-sm text-white/80 font-bold hover:text-white transition-colors">
                      +971 56 331 5670
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Working Hours</p>
                  <p className="text-sm text-white/80 font-bold">Mon - Sat: 9:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="mt-20 mb-10 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()} <span className="text-white/60">Mohammad Mohi Uddin Karim</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 grayscale opacity-50 contrast-125">
             {/* Payment/Logo badges could go here if needed */}
             <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Quality Since 2012</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
