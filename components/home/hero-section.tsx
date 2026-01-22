import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-brand-red text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            Documents Clearing Services – Dubai, UAE
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            MOHAMMAD MOHI UDDIN KARIM
          </h1>
          <p className="mt-5 text-base text-white/90 md:text-lg">
            Fast, reliable typing &amp; government service support for Emirates ID, Visa, Immigration, Tas-Heel, Trade License, PRO, Medical &amp; Insurance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+971563315670" aria-label="Call Now +971 56 331 5670">
                Call Now: +971 56 331 5670
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/15 sm:w-auto">
              <a href="https://wa.me/971563315670" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 56 331 5670">
                WhatsApp: +971 56 331 5670
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/15 sm:w-auto">
              <a href="tel:+97142279566" aria-label="Office +971 4 227 9566">
                Office: +971 4 227 9566
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/15 sm:w-auto">
              <a href="mailto:mohi.luc@gmail.com" aria-label="Email mohi.luc@gmail.com">
                Email: mohi.luc@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
