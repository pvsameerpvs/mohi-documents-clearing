import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-charcoal/10 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-charcoal">MOHAMMAD MOHI UDDIN KARIM</h3>
            <p className="mt-2 text-sm text-charcoal/70">
              Documents Clearing Services – Dubai, UAE
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-charcoal">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
              <li>
                <a className="hover:text-charcoal" href="tel:+971563315670">Mobile: +971 56 331 5670</a>
              </li>
              <li>
                <a className="hover:text-charcoal" href="tel:+97142279566">Telephone: +971 4 227 9566</a>
              </li>
              <li>
                <a className="hover:text-charcoal" href="tel:+971544432745">Alternative: +971 54 443 2745</a>
              </li>
              <li>
                <a className="hover:text-charcoal" href="mailto:mohi.luc@gmail.com">Email: mohi.luc@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-charcoal">Address</h4>
            <p className="mt-3 text-sm text-charcoal/70">
              Hor Al Anz Near Salah Bilal Studio, Deira, Dubai – UAE
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-brand-red hover:underline" href="/services">Services</Link>
              <Link className="text-brand-red hover:underline" href="/faq">FAQ</Link>
              <Link className="text-brand-red hover:underline" href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-charcoal/60">
          © {new Date().getFullYear()} MOHAMMAD MOHI UDDIN KARIM – Documents Clearing Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
