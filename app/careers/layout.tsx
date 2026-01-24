import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at MoversKlub - Join Our Team",
  description: "Join MoversKlub! We're hiring professional drivers, logistics coordinators & service assistants in Cape Town. Competitive pay, flexible scheduling & growth opportunities.",
  alternates: {
    canonical: "https://www.moversklub.co.za/careers",
  },
  openGraph: {
    title: "Careers at MoversKlub | Join Our Team",
    description: "Career opportunities at South Africa's growing logistics company. Drivers, coordinators & movers wanted.",
    url: "https://www.moversklub.co.za/careers",
  },
  keywords: [
    "moving company jobs Cape Town",
    "logistics jobs South Africa",
    "driver jobs Cape Town",
    "MoversKlub careers",
    "mover jobs",
  ],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
