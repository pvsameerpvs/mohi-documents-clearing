import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { ServiceSupportStrip } from "@/components/home/service-support-strip";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Fast, reliable typing & government service support for Emirates ID, Visa, Immigration, Tas-Heel, Trade License, PRO, Medical & Insurance in Dubai, UAE.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <WhyChooseUsSection />
      <ServiceSupportStrip />
    </>
  );
}
