import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Moving, Removals & Logistics",
  description: "Professional moving services in South Africa: White-glove removals, rubble removal, furniture transport, event logistics, refrigerated transport & heavy truck services. Cape Town & nationwide.",
  alternates: {
    canonical: "https://www.moversklub.co.za/services",
  },
  openGraph: {
    title: "Moving Services | MoversKlub South Africa",
    description: "Complete logistics solutions: home removals, office relocations, rubble clearing, refrigerated transport & event logistics across South Africa.",
    url: "https://www.moversklub.co.za/services",
  },
  keywords: [
    "moving services Cape Town",
    "home removals South Africa",
    "office removals",
    "furniture moving",
    "rubble removal Cape Town",
    "refrigerated transport",
    "event logistics South Africa",
    "professional movers",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
