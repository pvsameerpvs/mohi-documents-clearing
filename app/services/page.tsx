import type { Metadata } from "next";
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
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual and business services including medical, Emirates ID typing, visa, immigration, Tas-Heel, trade license, PRO and more.",
};

const sections = [
  {
    title: "Individual Services",
    items: [
      { title: "Medical Services", icon: Stethoscope },
      { title: "Emirates ID Typing", icon: IdCard },
      { title: "All Kinds of Visa Services", icon: FileText },
      { title: "Immigration Services", icon: ClipboardList },
      { title: "Tas-Heel Services", icon: Users },
      { title: "Health Insurance", icon: ShieldCheck },
    ],
  },
  {
    title: "Business & Company Services",
    items: [
      { title: "Trade License", icon: Building2 },
      { title: "Economic Services", icon: BriefcaseBusiness },
      { title: "Business Set-up Services", icon: BadgeCheck },
      { title: "Sponsor Services", icon: HeartPulse },
      { title: "P.R.O Services", icon: Users },
    ],
  },
  {
    title: "Support Services",
    items: [{ title: "Photocopy Services", icon: Copy }],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
          <p className="text-sm font-semibold text-white/90">Services</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Documents clearing & government service support
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">
            We provide typing and documentation support for individuals and businesses in Dubai.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="space-y-12">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="text-2xl font-bold tracking-tight text-charcoal">{sec.title}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.items.map(({ title, icon: Icon }) => (
                    <Card key={title} className="hover:-translate-y-0.5 transition-transform">
                      <CardHeader className="flex-row items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-yellow text-charcoal">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm text-charcoal/70">
                        {/* Intentionally no extra claims; content provided only. */}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal/5">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <Card className="overflow-hidden">
            <div className="bg-brand-red p-6 text-white">
              <h3 className="text-xl font-bold">Need help choosing a service?</h3>
              <p className="mt-1 text-sm text-white/90">Contact us and tell us what you need.</p>
            </div>
            <CardContent className="flex flex-col gap-3 p-6 text-sm text-charcoal/80 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-red" />
                <a className="text-brand-red hover:underline" href="tel:+971563315670">+971 56 331 5670</a>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-red" />
                <a className="text-brand-red hover:underline" href="mailto:mohi.luc@gmail.com">mohi.luc@gmail.com</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
