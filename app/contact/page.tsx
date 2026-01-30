import type { Metadata } from "next";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  Send,
  Phone
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mohammad Mohi Uddin Karim Documents Clearing Services in Deira, Dubai for expert government liaison and document clearing support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Premium Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image 
            src="/contact-hero.png" 
            alt="Dubai Office Contact" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-sm font-bold text-brand-red backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <Mail className="h-4 w-4" />
            <span>GET IN TOUCH WITH EXPERTS</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Let&apos;s Start Your <br />
            <span className="text-brand-red uppercase italic">Application</span>
          </h1>
          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Have questions about your visa, trade license, or Emirates ID? Our team is ready to provide the answers and support you need.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-black text-charcoal md:text-4xl leading-tight">
                        Direct <span className="text-brand-red">Communication</span> <br />
                        Channels
                    </h2>
                    <p className="text-charcoal/60 leading-relaxed font-normal">
                        Reach out to us through any of the following methods. We typically respond to WhatsApp inquiries within minutes during business hours.
                    </p>
                </div>

                <div className="grid gap-6">
                    <div className="group relative overflow-hidden rounded-[2rem] bg-white p-8 border border-charcoal/5 shadow-sm transition-all hover:shadow-xl">
                        <div className="flex items-start gap-6">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-transform group-hover:rotate-12">
                                <PhoneCall className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-1">Primary Support</p>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-charcoal">+971 56 331 5670</h3>
                                    <h3 className="text-xl font-black text-charcoal">+971 54 443 2745</h3>
                                    <h3 className="text-xl font-black text-charcoal">04 349 5163</h3>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <a href="tel:+971563315670" className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold hover:bg-red-700 transition-colors">Call Mobile 1</a>
                                    <a href="tel:+971544432745" className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold hover:bg-red-700 transition-colors">Call Mobile 2</a>
                                    <a href="tel:+97143495163" className="px-4 py-2 rounded-xl bg-charcoal text-white text-xs font-bold hover:bg-black transition-colors">Call Landline</a>
                                    <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-all flex items-center gap-2">
                                        <WhatsAppIcon className="h-4 w-4" />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-[2rem] bg-white p-8 border border-charcoal/5 shadow-sm transition-all hover:shadow-xl">
                        <div className="flex items-start gap-6">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-transform group-hover:rotate-12">
                                <Mail className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-1">Email Inquiries</p>
                                <h3 className="text-xl font-black text-charcoal">mohi.luc@gmail.com</h3>
                                <p className="text-sm text-charcoal/50 mt-1 font-medium italic">We respond within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-[2rem] bg-white p-8 border border-charcoal/5 shadow-sm transition-all hover:shadow-xl">
                        <div className="flex items-start gap-6">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-transform group-hover:rotate-12">
                                <MapPin className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-1">Office Location</p>
                                <h3 className="text-lg font-black text-charcoal leading-tight">
                                    Dubai Deira hor al anz near salal bilal studio <br />
                                    30A Street, shop no 1 – UAE
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Working Hours Integration */}
                <div className="p-8 rounded-[2rem] bg-charcoal text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                    <div className="relative z-10 flex items-center gap-4">
                        <Clock className="h-10 w-10 text-brand-red" />
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Business Hours</p>
                            <p className="text-lg font-bold">Mon - Sat: 9:00 AM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 md:p-12 shadow-2xl shadow-charcoal/5 border border-charcoal/5">
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/5 px-4 py-1 text-xs font-bold text-brand-red mb-4">
                            <Send className="h-3 w-3" />
                            <span>ONLINE FORM</span>
                        </div>
                        <h3 className="text-2xl font-black text-charcoal md:text-3xl mb-4">Send us a Message</h3>
                        <p className="text-charcoal/60 text-sm font-medium">Please fill out the form below and our specialists will get back to you shortly.</p>
                    </div>
                    
                    <ContactForm />

                    <div className="mt-12 pt-8 border-t border-charcoal/5 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="h-5 w-5 text-brand-red" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/40">Secure Submission</span>
                        </div>
                        <div className="flex items-center gap-3 justify-end">
                            <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/40">Authorized PRO</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Strip - Placeholder visual */}
      <section className="h-[400px] w-full bg-charcoal/10 relative overflow-hidden grayscale contrast-125 opacity-60">
        <Image 
          src="https://api.dicebear.com/7.x/initials/svg?seed=MAP" 
          alt="Map Placeholder" 
          fill 
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-charcoal/5 flex flex-col items-center">
                <MapPin className="h-10 w-10 text-brand-red mb-2" />
                <span className="text-xs font-black uppercase tracking-widest text-charcoal">DEIRA, DUBAI</span>
            </div>
        </div>
      </section>
    </div>
  );
}
