import { BadgeCheck, Building2, FileText, Globe, Handshake, IdCard, ShieldCheck, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights: { title: string; icon: LucideIcon }[] = [
  { title: "Emirates ID Typing", icon: IdCard },
  { title: "All Kinds of Visa Services", icon: FileText },
  { title: "Immigration Services", icon: Globe },
  { title: "Tas-Heel Services", icon: Handshake },
  { title: "Trade License & Economic Services", icon: Building2 },
  { title: "Business Set-up Support", icon: BadgeCheck },
  { title: "PRO & Sponsor Services", icon: ShieldCheck },
];

export function HighlightsSection() {
  return (
    <section className="bg-charcoal/5">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">Key Highlights</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ title, icon: Icon }) => (
            <Card key={title} className="hover:-translate-y-0.5 transition-transform">
              <CardContent className="flex items-start gap-3 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
