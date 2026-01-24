import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.moversklub.co.za'),
  title: {
    default: "MoversKlub | Professional Moving Services & Removals in South Africa",
    template: "%s | MoversKlub - Premium Logistics South Africa"
  },
  description: "South Africa's trusted moving company. Professional home & office removals, furniture moving, rubble removal, refrigerated transport & event logistics. Serving Cape Town & nationwide. Get a free quote today!",
  keywords: [
    "moving services South Africa",
    "movers Cape Town",
    "home removals South Africa",
    "office removals Cape Town",
    "furniture moving company",
    "local movers South Africa",
    "long distance movers",
    "relocation services South Africa",
    "packing services Cape Town",
    "rubble removal Cape Town",
    "refrigerated transport South Africa",
    "event logistics South Africa",
    "professional movers",
    "affordable moving company",
    "MoversKlub",
    "moving company near me",
    "best movers Cape Town",
    "furniture transport",
    "house moving services",
    "commercial removals South Africa"
  ],
  authors: [{ name: "MoversKlub", url: "https://www.moversklub.co.za" }],
  creator: "MoversKlub",
  publisher: "MoversKlub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.moversklub.co.za",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.moversklub.co.za",
    siteName: "MoversKlub",
    title: "MoversKlub | Professional Moving Services & Removals in South Africa",
    description: "South Africa's trusted moving company. Professional home & office removals, furniture moving, rubble removal & refrigerated transport. Serving Cape Town & nationwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MoversKlub - Professional Moving Services South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoversKlub | Professional Moving Services South Africa",
    description: "South Africa's trusted moving company. Home & office removals, furniture moving, refrigerated transport. Get a free quote!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  category: "Moving Services",
};

// LocalBusiness + MovingCompany Schema (JSON-LD)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": "https://www.moversklub.co.za/#organization",
  name: "MoversKlub",
  alternateName: "Movers Klub",
  description: "Professional moving and logistics company offering home & office removals, furniture moving, rubble removal, refrigerated transport, and event logistics across South Africa.",
  url: "https://www.moversklub.co.za",
  logo: "https://www.moversklub.co.za/logo.png",
  image: "https://www.moversklub.co.za/logo.png",
  telephone: "+27712126278",
  email: "moversklub@gmail.com",
  foundingDate: "2025",
  priceRange: "$$",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, Credit Card, EFT, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "City", name: "Cape Town" },
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Durban" },
    { "@type": "City", name: "Pretoria" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/17QzqmZ1b9/",
    "https://www.instagram.com/moversklub",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Moving Services",
  provider: {
    "@type": "LocalBusiness",
    name: "MoversKlub",
    url: "https://www.moversklub.co.za",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving & Logistics Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "White-Glove Removals", description: "Professional removal services for homes and businesses with utmost care." }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rubble Removal", description: "Efficient site clearing and waste removal for construction and residential projects." }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pick up and Delivery", description: "Reliable pick-up and delivery services for packages of all sizes." }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Logistics", description: "Specialized vehicle hire and logistics support for events and exhibitions." }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerated Transport", description: "Temperature-controlled transport maintained between -20°C to +15°C." }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Truck Services", description: "Heavy-duty logistics for substantial transport requirements." }},
    ],
  },
};

// FAQ Schema for Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What moving services does MoversKlub offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MoversKlub offers comprehensive moving services including white-glove home and office removals, furniture moving, rubble removal, pick-up and delivery, event logistics, refrigerated transport, and heavy truck services across South Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Does MoversKlub operate nationwide in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MoversKlub is based in Cape Town and provides moving and logistics services nationwide across South Africa, including Johannesburg, Durban, Pretoria, and all major cities.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote from MoversKlub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get a free quote by calling +27 71 212 6278, emailing moversklub@gmail.com, or filling out the contact form on our website. We typically respond within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is MoversKlub available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MoversKlub operates 24/7 to accommodate your logistics needs. Our team is available around the clock for urgent moving and transport requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Does MoversKlub offer refrigerated transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer temperature-controlled refrigerated transport maintained between -20°C to +15°C, perfect for fine art, sensitive goods, and perishable items.",
      },
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoversKlub",
  url: "https://www.moversklub.co.za",
  logo: "https://www.moversklub.co.za/logo.png",
  description: "Professional moving and logistics company in South Africa",
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27712126278",
    contactType: "Customer Service",
    areaServed: "ZA",
    availableLanguage: ["English", "Afrikaans"],
  },
  sameAs: [
    "https://www.facebook.com/share/17QzqmZ1b9/",
    "https://www.instagram.com/moversklub",
  ],
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.moversklub.co.za" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.moversklub.co.za/services" },
    { "@type": "ListItem", position: 3, name: "About", item: "https://www.moversklub.co.za/about" },
    { "@type": "ListItem", position: 4, name: "Contact", item: "https://www.moversklub.co.za/contact" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.moversklub.co.za" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="ZA-WC" />
        <meta name="geo.placename" content="Cape Town" />
        <meta name="geo.position" content="-33.9249;18.4241" />
        <meta name="ICBM" content="-33.9249, 18.4241" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#041100" />
        <meta name="msapplication-TileColor" content="#041100" />
        <meta name="application-name" content="MoversKlub" />
        <meta name="apple-mobile-web-app-title" content="MoversKlub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${manrope.className} antialiased bg-background-light text-primary transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

