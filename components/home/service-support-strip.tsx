import { IdCard, ShieldCheck, Stethoscope } from "lucide-react";

export function ServiceSupportStrip() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-5 text-white">
            <Stethoscope className="h-5 w-5 text-brand-yellow" />
            <span className="text-sm font-semibold">Medical Services</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-5 text-white">
            <IdCard className="h-5 w-5 text-brand-yellow" />
            <span className="text-sm font-semibold">Emirates ID Typing</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-5 text-white">
            <ShieldCheck className="h-5 w-5 text-brand-yellow" />
            <span className="text-sm font-semibold">Health Insurance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
