"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={140} height={38} priority />
          <span className="sr-only">MOHAMMAD MOHI UDDIN KARIM</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-charcoal/5 text-charcoal" : "text-charcoal/75 hover:bg-charcoal/5 hover:text-charcoal"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="red" size="sm" className="hidden md:inline-flex">
            <a href="tel:+971563315670" aria-label="Call +971 56 331 5670">
              <PhoneCall className="mr-1" />
              Call Now
            </a>
          </Button>

          {/* Mobile nav */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none rounded-xl border border-charcoal/15 bg-white px-3 py-2 text-sm font-semibold text-charcoal">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-charcoal/10 bg-white p-2 shadow-soft">
                {nav.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm font-medium",
                        active ? "bg-charcoal/5 text-charcoal" : "text-charcoal/75 hover:bg-charcoal/5 hover:text-charcoal"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
