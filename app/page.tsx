import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light text-primary font-display antialiased overflow-x-hidden selection:bg-primary/20">
      <main className="relative pt-20">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <CTA />
      </main>
    </div>
  );
}
