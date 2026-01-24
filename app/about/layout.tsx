import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MoversKlub - Trusted Moving Company Since 2025",
  description: "Learn about MoversKlub, Cape Town's trusted moving company. Founded in 2025, we provide reliable home & office removals, logistics services nationwide across South Africa.",
  alternates: {
    canonical: "https://www.moversklub.co.za/about",
  },
  openGraph: {
    title: "About MoversKlub | Cape Town Moving Company",
    description: "Professional moving company based in Cape Town, serving all of South Africa with reliable logistics solutions since 2025.",
    url: "https://www.moversklub.co.za/about",
  },
  keywords: [
    "about MoversKlub",
    "Cape Town moving company",
    "South Africa movers",
    "professional logistics company",
    "reliable moving services",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
