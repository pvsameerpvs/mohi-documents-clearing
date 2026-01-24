"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={100} height={27} priority className="h-auto w-16 md:w-20" />
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
              <PhoneCall className="mr-1 h-4 w-4" />
              Call Now
            </a>
          </Button>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-2">
                  {nav.map((item) => {
                    const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active ? "bg-brand-red text-white" : "text-charcoal/75 hover:bg-charcoal/5 hover:text-charcoal"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-6 space-y-3 border-t border-charcoal/10 pt-6">
                  <div className="grid gap-2">
                    <Button asChild variant="red" className="w-full h-11" onClick={() => setOpen(false)}>
                      <a href="tel:+971563315670">
                        <PhoneCall className="mr-2 h-4 w-4" />
                        Call: +971 56 331 5670
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full h-11 border-charcoal/20" onClick={() => setOpen(false)}>
                      <a href="tel:+97143495163">
                        <PhoneCall className="mr-2 h-4 w-4" />
                        Call: 04 349 5163
                      </a>
                    </Button>
                  </div>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl group hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all" onClick={() => setOpen(false)}>
                    <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <WhatsAppIcon className="h-5 w-5 text-[#25D366] group-hover:text-white transition-colors" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

