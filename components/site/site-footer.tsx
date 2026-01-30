import Link from "next/link";
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
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

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
            <Link href="/" className="">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={150} 
                height={40} 
                className="h-auto w-32 md:w-40 " 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px] font-normal">
              Premium document clearing and government liaison services in Dubai. We simplify your legal journeys with precision and speed.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1AFuwXiUKr/?mibextid=wwXIfr" },
                { Icon: Instagram, href: "https://www.instagram.com/muk20_23?igsh=ZjZsMXppaWY1emNx" },
                { Icon: WhatsAppIcon, href: "https://wa.me/971563315670" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.Icon === WhatsAppIcon ? "_blank" : undefined}
                  rel={item.Icon === WhatsAppIcon ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-brand-red hover:text-white hover:border-brand-red hover:scale-110 transition-all"
                >
                  <item.Icon className="h-4 w-4" />
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
                    Dubai Deira hor al anz near salal bilal studio 30A Street,shop no 1
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
                    <a href="tel:+971544432745" className="text-sm text-white/80 font-bold hover:text-white transition-colors">
                      +971 54 443 2745
                    </a>
                    <a href="tel:+97143495163" className="text-sm text-white/80 font-bold hover:text-white transition-colors">
                      04 349 5163
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Email Address</p>
                  <a href="mailto:mohi.luc@gmail.com" className="text-sm text-white/80 font-bold hover:text-white transition-colors">
                    mohi.luc@gmail.com
                  </a>
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

       
      </div>
    </footer>
  );
}
