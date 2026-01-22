"use client";

import React from "react";
import { Shield, Clock, Globe, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Reliability",
      description: "We founded MoversKlub on the promise of being there when our clients need us most, without exception.",
      icon: <Shield className="size-8 text-primary" />,
    },
    {
      title: "Precision",
      description: "From white-glove removals to hazardous rubble clearing, every job is handled with surgical precision.",
      icon: <Target className="size-8 text-primary" />,
    },
    {
      title: "Nationwide Reach",
      description: "Based in Cape Town, our network extends across South Africa, ensuring a seamless logistics chain.",
      icon: <Globe className="size-8 text-primary" />,
    },
    {
      title: "24/7 Availability",
      description: "Logistics never sleeps, and neither do we. We operate around the clock to keep your world moving.",
      icon: <Clock className="size-8 text-primary" />,
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            About MoversKlub
          </h1>
          <p className="text-xl text-primary-60">
            Founded in 2025, MoversKlub is a logistics company dedicated to providing 
            reliable, tailored services that meet the evolving needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-video relative group">
            <img 
              src="/logo.png" 
              alt="MoversKlub Branding" 
              className="w-full h-full object-contain bg-white p-12 transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            <p className="text-lg text-primary-60 leading-relaxed">
              MoversKlub was established in 2025 during a time when the logistics industry required 
              a more personalized, reliable touch. We recognized that every move, every delivery, 
              and every clearing project is unique.
            </p>
            <p className="text-lg text-primary-60 leading-relaxed">
              Based in **Cape Town, South Africa**, we have quickly grown to serve clients 
              nationwide. Our focus remains steadfast: providing high-quality logistics 
              solutions that our clients can trust with their most valuable assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover-lift shadow-sm"
            >
              <div className="mb-6 inline-block bg-primary/5 p-4 rounded-xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-primary-60 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary dark:bg-white text-white dark:text-black rounded-3xl p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to work together?</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                Connect with us today for a tailored logistics solution that fits your specific needs.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-primary dark:bg-[#041100] dark:text-white font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform"
              >
                Get a Quote
              </a>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </div>
  );
}
