import type { Metadata } from "next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions for Mohammad Mohi Uddin Karim Documents Clearing Services.",
};

const faqs = [
  {
    q: "Do you provide Emirates ID typing?",
    a: "Yes, we provide Emirates ID typing services.",
  },
  {
    q: "Do you handle visa services?",
    a: "Yes, we provide all kinds of visa services.",
  },
  {
    q: "Do you provide immigration and Tas-Heel services?",
    a: "Yes, both services are available.",
  },
  {
    q: "Do you help with trade license and business setup?",
    a: "Yes, we assist with trade license, economic services, and business set-up.",
  },
  {
    q: "Do you provide PRO and sponsor services?",
    a: "Yes, both services are included.",
  },
  {
    q: "Where are you located?",
    a: "Hor Al Anz Near Salah Bilal Studio, Deira, Dubai – UAE.",
  },
  {
    q: "How can I contact you quickly?",
    a: "WhatsApp or Call: +971 56 331 5670\nLandline: +971 4 227 9566",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
          <p className="text-sm font-semibold text-white/90">FAQ</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Quick answers about our documents clearing and typing services.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 md:py-16">
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-charcoal/10 bg-white p-4 shadow-soft">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="whitespace-pre-line">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
