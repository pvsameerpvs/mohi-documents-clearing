import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  HelpCircle, 
  MessageSquare, 
  PhoneCall, 
  FileText, 
  MapPin, 
  Search,
  ArrowRight,
  Plus,
  Minus,
  ShieldCheck
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions for Mohammad Mohi Uddin Karim Documents Clearing Services.",
};

const faqs = [
  {
    q: "Do you provide Emirates ID typing?",
    a: "Yes, we are authorized typists for Emirates ID applications. We handle new registrations, renewals, and all related documentation for residents and employees in Dubai.",
  },
  {
    q: "Do you handle all kinds of visa services?",
    a: "Absolutely. We manage visit visas, family visas, maid/nanny visas, employment visas, and Golden Visas. Our team handles the entire process from application to stamping.",
  },
  {
    q: "What immigration and Tas-Heel services do you offer?",
    a: "We provide comprehensive support for immigration permits, status changes, and MOHRE (Tas-Heel) portals, including labor contracts, offer letters, and dispute resolutions.",
  },
  {
    q: "Can you help with Trade License and Business Setup?",
    a: "Yes, we specialize in DED trade license issuance, renewals, and legal amendments. We provide turnkey solutions for Mainland and Free Zone company formations.",
  },
  {
    q: "Do you provide PRO and Sponsor services?",
    a: "Yes, both corporate and individual PRO services are a core part of our business. We act as your liaison with government departments and can provide reliable sponsorship support.",
  },
  {
    q: "Where is your office located in Dubai?",
    a: "Our main service center is located at Dubai Deira hor al anz near salal bilal studio 30A Street, shop no 1 – UAE. We are centrally located for easy access and document handling.",
  },
  {
    q: "How can I get an urgent document processed?",
    a: "For urgent requests, please call us directly or visit our office. We offer fast-track processing for most government services with same-day submission for urgent files.",
  },
  {
    q: "What languages does your support team speak?",
    a: "To serve our diverse clientele, our team is multilingual and proficient in English, Arabic, Bangla, Hindi, and Urdu.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Premium Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image 
            src="/faq-hero.png" 
            alt="Support and Customer Help Desk" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/20 px-4 py-2 text-sm font-bold text-brand-red backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <HelpCircle className="h-4 w-4" />
            <span>HOW CAN WE ASSIST YOU?</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Frequently Asked <br />
            <span className="text-brand-red uppercase italic">Questions</span>
          </h1>
          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Get instant answers to common queries regarding government documentation, visa processing, and business setup in Dubai.
          </p>
        </div>
      </section>

      {/* FAQ Search & Categories Strip - Visual purely */}
      <section className="bg-white border-b border-charcoal/5 relative z-20">
        <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/30 group-focus-within:text-brand-red transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search for answers..." 
                    className="w-full h-16 pl-14 pr-6 rounded-3xl bg-charcoal/5 border-none focus:ring-2 focus:ring-brand-red/20 font-medium text-charcoal outline-none transition-all"
                />
            </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="border-none bg-white rounded-[2rem] px-8 py-2 shadow-sm transition-all hover:shadow-md data-[state=open]:shadow-xl data-[state=open]:ring-1 data-[state=open]:ring-brand-red/10"
              >
                <AccordionTrigger className="text-left text-lg font-black text-charcoal hover:text-brand-red hover:no-underline transition-colors py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <div className="flex gap-4 p-6 rounded-2xl bg-charcoal/5 border border-charcoal/5">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-brand-red/10 flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-brand-red" />
                    </div>
                    <p className="text-md text-charcoal/70 leading-relaxed font-normal whitespace-pre-line">
                        {item.a}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="pb-24 bg-[#F8FAFC] px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-charcoal p-12 md:p-20 text-center shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[100px] -mr-48 -mt-48" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-white md:text-5xl mb-6">
                Still Have <span className="text-brand-red italic uppercase">Questions?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed font-normal">
                If you didn&apos;t find the answer you were looking for, our expert team is ready to help you personally. Reach out to us via any of the channels below.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="h-16 w-full md:w-auto px-10 rounded-2xl bg-brand-red hover:bg-red-700 shadow-xl shadow-brand-red/20 text-md font-black group transition-all">
                  <Link href="/contact" className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    Chat with an Expert
                  </Link>
                </Button>
                
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                    <a href="tel:+971563315670" className="flex items-center justify-center gap-3 px-6 h-16 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-charcoal transition-all">
                        <PhoneCall className="h-5 w-5 text-brand-red" />
                        <span className="font-bold">Call Now</span>
                    </a>
                    <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 h-16 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all group">
                        <WhatsAppIcon className="h-5 w-5 text-[#25D366] group-hover:text-white" />
                        <span className="font-bold">WhatsApp</span>
                    </a>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                      <MapPin className="h-4 w-4 text-brand-red" />
                      Deira, Dubai Office
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                      <FileText className="h-4 w-4 text-brand-red" />
                      Fast Processing
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                      <ShieldCheck className="h-4 w-4 text-brand-red" />
                      100% Reliable
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


