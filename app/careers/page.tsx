"use client";

import React from "react";
import { Truck, Users, Heart, Star } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      title: "Competitive Pay",
      description: "We offer industry-leading rates and performance-based bonuses for our dedicated team.",
      icon: <Star className="size-8 text-primary" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Choose shifts that work for your lifestyle. We value work-life balance for all our partners.",
      icon: <Users className="size-8 text-primary" />,
    },
    {
      title: "Growth opportunities",
      description: "Start as a driver or mover and grow into logistics management. We promote from within.",
      icon: <Truck className="size-8 text-primary" />,
    },
    {
      title: " Supportive Environment",
      description: "Join a community that values safety, respect, and mutual support on every job.",
      icon: <Heart className="size-8 text-primary" />,
    },
  ];

  const positions = [
    {
      title: "Professional Driver (Category C1/Code 10)",
      location: "Cape Town",
      type: "Contract / Full-time",
    },
    {
      title: "Logistics Coordinator",
      location: "Cape Town",
      type: "Full-time",
    },
    {
      title: "Service Assistant (Mover)",
      location: "Cape Town / Nationwide",
      type: "Part-time / Contract",
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Join the Klub
          </h1>
          <p className="text-xl text-primary-60">
            Work with Cape Town's most reliable logistics team. We're looking for passionate, 
            disciplined individuals to help us move mountains.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Why Work with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover-lift shadow-sm text-center"
              >
                <div className="mb-6 inline-block bg-primary/5 p-4 rounded-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-primary-60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-primary mb-12">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((job, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-primary/30 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-primary-60">
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span className="flex items-center gap-1">💼 {job.type}</span>
                  </div>
                </div>
                <a 
                  href="mailto:moversklub@gmail.com?subject=Application%20for%20Position:%20"
                  className="bg-primary dark:bg-white text-white dark:text-black font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary dark:bg-white text-white dark:text-black rounded-3xl p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't see the right fit?</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send your CV to **moversklub@gmail.com** 
                and we'll keep you in mind for future openings.
              </p>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </div>
  );
}
