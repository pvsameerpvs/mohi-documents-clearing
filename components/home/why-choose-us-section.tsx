import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  "Quick processing & accurate typing",
  "Support for individuals and companies",
  "Clear guidance and updated requirements",
  "Convenient location in Deira, Dubai",
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">Why Choose Us</h2>
            <ul className="mt-5 space-y-3 text-charcoal/75">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-charcoal">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="overflow-hidden">
            <div className="bg-brand-red p-6 text-white">
              <p className="text-sm font-semibold">Home Contact</p>
              <h3 className="mt-2 text-xl font-bold">Get support quickly</h3>
            </div>
            <CardContent className="space-y-3 p-6 text-sm text-charcoal/80">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-red" /> Hor Al Anz Near Salah Bilal Studio, Deira, Dubai – UAE</p>
              <p><span className="font-semibold text-charcoal">Mobile:</span> <a className="text-brand-red hover:underline" href="tel:+971563315670">+971 56 331 5670</a></p>
              <p><span className="font-semibold text-charcoal">Telephone:</span> <a className="text-brand-red hover:underline" href="tel:+97142279566">+971 4 227 9566</a></p>
              <p><span className="font-semibold text-charcoal">Alternative Contact:</span> <a className="text-brand-red hover:underline" href="tel:+971544432745">+971 54 443 2745</a></p>
              <p><span className="font-semibold text-charcoal">Email:</span> <a className="text-brand-red hover:underline" href="mailto:mohi.luc@gmail.com">mohi.luc@gmail.com</a></p>
              <div className="pt-2">
                <Button asChild variant="red" className="w-full">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
