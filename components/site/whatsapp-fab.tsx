"use client";

import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export function WhatsAppFab({ className }: { className?: string }) {
  return (
    <a
      href="https://wa.me/971563315670"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp: +971 56 331 5670"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white shadow-soft transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2",
        className
      )}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
