import { MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function IntroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
              Complete documents clearing &amp; typing support in Dubai
            </h2>
            <p className="mt-4 text-charcoal/75">
              We provide complete documents clearing and typing support in Dubai. Our team helps individuals and businesses with visa services, Emirates ID typing, immigration services, Tas-Heel, medical, insurance, trade license, and PRO services—quickly and correctly.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-charcoal/80">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-red" /> Hor Al Anz Near Salah Bilal Studio, Deira, Dubai – UAE</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-red" /> <a className="hover:text-charcoal" href="tel:+971563315670">+971 56 331 5670</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-red" /> <a className="hover:text-charcoal" href="tel:+97142279566">+971 4 227 9566</a></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
