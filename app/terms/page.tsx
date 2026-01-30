import type { Metadata } from "next";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Mohammad Mohi Uddin Karim Documents Clearing Services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-charcoal py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 h-96 w-96 bg-brand-red/10 rounded-full blur-[100px] -ml-48 -mt-48" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
            <h1 className="text-4xl font-black md:text-6xl mb-6">Terms of <span className="text-brand-red italic uppercase">Service</span></h1>
            <p className="text-white/60 text-lg">Detailed guidelines for our professional engagement.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              By engaging our services, you agree to the following terms and conditions. These terms ensure a smooth and transparent working relationship for all parties involved.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">1. Service Scope</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              Mohammad Mohi Uddin Karim Documents Clearing Services provides liaison support between clients and UAE government departments. We do not guarantee outcomes as those are subject to government final approval, but we guarantee correct processing.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">2. Client Responsibility</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              Clients are responsible for providing accurate and genuine documents as requested for their applications. Any delays or rejections due to forged or incorrect documentation are the client&apos;s responsibility.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">3. Payment Terms</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              Government fees are subject to change by the authorities. Our service fees are agreed upon before commencement and must be settled as per the agreed schedule.
            </p>

            <h2 className="text-2xl font-black text-charcoal mt-12 mb-4">4. Delivery Times</h2>
            <p className="text-charcoal/60 leading-relaxed mb-8 font-normal">
              While we offer fast-track processing, the total processing time depends on government portal responsiveness and department review periods.
            </p>

            <div className="mt-16 p-8 rounded-[2rem] bg-charcoal/5 border border-charcoal/5 flex flex-col md:flex-row items-center gap-6">
                <FileText className="h-10 w-10 text-brand-red" />
                <p className="text-sm font-bold text-charcoal/60">
                    If you require more clarification on our service terms, please contact us directly.
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
