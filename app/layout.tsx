import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOHAMMAD MOHI UDDIN KARIM – Documents Clearing Services",
    template: "%s | MOHAMMAD MOHI UDDIN KARIM",
  },
  description:
    "Documents Clearing Services – Dubai, UAE. Fast, reliable typing & government service support for Emirates ID, Visa, Immigration, Tas-Heel, Trade License, PRO, Medical & Insurance.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <SiteHeader />
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
