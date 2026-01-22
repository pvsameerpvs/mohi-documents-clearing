import { 
  Building2, 
  CheckCircle2, 
  FileText, 
  IdCard, 
  MapPin, 
  ShieldCheck, 
  Stethoscope, 
  Users
} from "lucide-react";

const supportItems = [
  { label: "Medical Fitness", icon: Stethoscope },
  { label: "Emirates ID", icon: IdCard },
  { label: "Health Insurance", icon: ShieldCheck },
  { label: "Trade License", icon: Building2 },
  { label: "Visa Processing", icon: FileText },
  { label: "PRO Services", icon: Users },
  { label: "Tas-Heel Portals", icon: CheckCircle2 },
  { label: "Dubai Branch", icon: MapPin },
];

export function ServiceSupportStrip() {
  return (
    <section className="bg-charcoal border-y border-white/5 py-12 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Title for the strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
             <div className="h-2 w-10 bg-brand-red rounded-full" />
             <h3 className="text-white text-lg font-black uppercase tracking-widest italic">Authorized Portals & Support</h3>
          </div>
          <p className="text-white/40 text-xs font-medium max-w-md text-center md:text-right">
            We operate directly through authorized UAE government portals providing 100% legal and verified documentation services.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {supportItems.map((item, i) => (
            <div 
              key={i} 
              className="group flex items-center gap-4 rounded-3xl bg-white/[0.03] border border-white/5 p-4 transition-all hover:bg-white/[0.08] hover:border-brand-red/30 hover:scale-[1.02] cursor-default"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-black text-white/80 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
