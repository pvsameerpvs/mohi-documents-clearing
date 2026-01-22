import type { Metadata } from "next";

import { 
  HeroSection, 
  IntroSection, 
  HighlightsSection, 
  WhyChooseUsSection, 
  ServiceSupportStrip 
} from "@/components/home";

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
