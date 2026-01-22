import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mohammad Mohi Uddin Karim Documents Clearing Services in Deira, Dubai.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-red text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
          <p className="text-sm font-semibold text-white/90">Contact Us</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">
            WhatsApp or call us for quick support.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-charcoal/75">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-red" />
                  <a className="text-brand-red hover:underline" href="tel:+971563315670">Mobile (WhatsApp): +971 56 331 5670</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-red" />
                  <a className="text-brand-red hover:underline" href="tel:+97142279566">Telephone: +971 4 227 9566</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-red" />
                  <a className="text-brand-red hover:underline" href="tel:+971544432745">Alternative Mobile: +971 54 443 2745</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-red" />
                  <a className="text-brand-red hover:underline" href="mailto:mohi.luc@gmail.com">Email: mohi.luc@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-red" />
                  Hor Al Anz Near Salah Bilal Studio,
                  <br />
                  Deira, Dubai – UAE
                </p>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button asChild className="w-full sm:w-auto">
                    <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="red" className="w-full sm:w-auto">
                    <a href="tel:+971563315670">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
