import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import CTA from "@/components/landing/CTA";
import Reviews from "@/components/landing/Reviews";

export const metadata: Metadata = {
  title: "MoversKlub | Professional Moving Services & Removals South Africa",
  description: "South Africa's trusted moving company. Professional home & office removals, furniture moving, rubble removal, refrigerated transport. Cape Town & nationwide. Free quotes!",
  alternates: {
    canonical: "https://www.moversklub.co.za",
  },
  openGraph: {
    title: "MoversKlub | Professional Moving Services South Africa",
    description: "Reliable logistics & moving services. Home removals, office relocations, furniture transport. Serving Cape Town & nationwide.",
    url: "https://www.moversklub.co.za",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light text-primary font-display antialiased overflow-x-hidden selection:bg-primary/20">
      <main className="relative pt-20">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Reviews />
        <CTA />
      </main>
    </div>
  );
}
