import type { Metadata } from "next";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Mohammad Mohi Uddin Karim Documents Clearing Services.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-charcoal py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 h-96 w-96 bg-brand-red/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
            <h1 className="text-4xl font-black md:text-6xl mb-6">Privacy <span className="text-brand-red italic uppercase">Policy</span></h1>
            <p className="text-white/60 text-lg">Your data security and privacy are our top priorities.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              At Mohammad Mohi Uddin Karim Documents Clearing Services, we are committed to protecting the privacy and security of our clients' information. This Privacy Policy describes how we collect, use, and handle your information.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">1. Information Collection</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              We collect information that you provide to us when you inquire about our services, including your name, contact details, and any documentation required for your legal and government applications in the UAE.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">2. Use of Information</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              The information we collect is used solely for the purpose of processing your government applications, visas, trade licenses, and other related services as requested by you.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">3. Data Security</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              We implement high-level security measures to protect your documents and personal information. Only authorized personnel have access to your data for processing purposes.
            </p>

            <div className="mt-16 p-8 rounded-[2rem] bg-charcoal/5 border border-charcoal/5 flex flex-col md:flex-row items-center gap-6">
                <ShieldAlert className="h-10 w-10 text-brand-red" />
                <p className="text-sm font-bold text-charcoal/60">
                    If you have any questions about our privacy practices, please contact us directly at <span className="text-brand-red">mohi.luc@gmail.com</span>.
                </p>
            </div>

            <div className="mt-20 text-center">
                <Button asChild variant="outline" className="rounded-2xl h-14 px-8 border-charcoal/10 hover:bg-charcoal/5 hover:text-charcoal transition-all">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
