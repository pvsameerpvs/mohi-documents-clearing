"use client";

import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppFab({ className }: { className?: string }) {
  return (
    <a
      href="https://wa.me/971563315670"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp: +971 56 331 5670"
      className={cn(
        "fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/40 group",
        className
      )}
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
      
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  );
}
