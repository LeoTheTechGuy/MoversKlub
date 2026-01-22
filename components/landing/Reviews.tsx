"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Art Curator",
    rating: 5,
    content: "MoversKlub handled our gallery relocation with extreme care. Their refrigerated transport for our temperature-sensitive pieces was top-notch.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Home Owner",
    rating: 5,
    content: "Professional, punctual, and very careful with my furniture. The white-glove service really made a difference in my move to Constantia.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Event Planner",
    rating: 4,
    content: "Great event logistics. They delivered all our lighting and staging equipment right on time. Highly recommend for any corporate events.",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white dark:bg-background-light" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Trusted by Clients
          </h2>
          <p className="text-lg text-primary-60 max-w-2xl mx-auto">
            See what our clients have to say about their experience with MoversKlub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`size-4 ${i < review.rating ? "fill-brand-blue text-brand-blue" : "text-gray-300 dark:text-white/10"}`}
                  />
                ))}
              </div>
              <p className="text-primary/80 mb-6 flex-1 italic">
                "{review.content}"
              </p>
              <div>
                <p className="font-bold text-primary">{review.name}</p>
                <p className="text-sm text-primary-60">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary dark:bg-white text-white dark:text-black text-center">
          <h3 className="text-2xl font-bold mb-2">Leave a Review</h3>
          <p className="opacity-70 mb-6">Your feedback helps us maintain our high standards.</p>
          <button className="bg-white text-primary dark:bg-[#041100] dark:text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}
