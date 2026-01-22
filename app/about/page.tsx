import type { Metadata } from "next";
import { Languages, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Mohammad Mohi Uddin Karim – Documents Clearing Services in Deira, Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
          <p className="text-sm font-semibold text-white/90">About Us</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            About Mohammad Mohi Uddin Karim – Documents Clearing Services
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Mohammad Mohi Uddin Karim Documents Clearing Services is based in Deira, Dubai, providing reliable support for government-related typing and documentation services. We assist customers with Emirates ID typing, visa processing, immigration services, Tas-Heel services, trade license support, business set-up services, and PRO services.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Our Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-charcoal/75">
                Our focus is simple: fast service, correct documentation, and clear communication so customers can complete their work without delays.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-charcoal/75">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-yellow text-charcoal">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">MOHI UDDIN</p>
                    <p>Managing Director</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-yellow text-charcoal">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">SAHAB UDDIN</p>
                    <p>Customer Support / Operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3 text-sm text-charcoal/75">
                <span className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 px-4 py-2">
                  <Languages className="h-4 w-4 text-brand-red" /> English
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 px-4 py-2">
                  <Languages className="h-4 w-4 text-brand-red" /> Arabic
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-charcoal/5 px-4 py-2">
                  <Languages className="h-4 w-4 text-brand-red" /> Bangla
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
