import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Moving Quote",
  description: "Contact MoversKlub for a free moving quote. Call +27 71 212 6278 or email moversklub@gmail.com. Professional moving services in Cape Town & across South Africa. Available 24/7.",
  alternates: {
    canonical: "https://www.moversklub.co.za/contact",
  },
  openGraph: {
    title: "Contact MoversKlub | Get a Free Quote",
    description: "Request a free moving quote. Available 24/7 for home removals, office relocations & logistics in South Africa.",
    url: "https://www.moversklub.co.za/contact",
  },
  keywords: [
    "contact MoversKlub",
    "moving quote South Africa",
    "free moving estimate",
    "Cape Town movers contact",
    "moving company phone number",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
