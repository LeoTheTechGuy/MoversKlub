"use client";

import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "White-Glove Removals",
      description: "Professional removal services for homes and businesses. We handle your belongings with the utmost care, ensuring a stress-free moving experience.",
      icon: "inventory_2",
      image: "/Removals.png"
    },
    {
      title: "Rubble Removal",
      description: "Efficient site clearing and waste removal services for construction, residential, and commercial projects.",
      icon: "delete_sweep",
      image: "/Rubble Removal.png"
    },
    {
      title: "Pick up and Deliver",
      description: "Reliable pick-up and delivery services for packages of all sizes. We ensure timely and secure delivery to your specified destination.",
      icon: "local_shipping",
      image: "/Pick up and Deliver.png"
    },
    {
      title: "Event Logistics",
      description: "Specialized vehicle hire for events. Whether you need logistics support for a concert, exhibition, or private function, we have the fleet for you.",
      icon: "event_seat",
      image: "/Vehicle Event Hire.png"
    },
    {
      title: "Refrigerated Transport",
      description: "Temperature-controlled transport for fine art, and sensitive goods. Maintained between -20°C to +15°C.",
      icon: "ac_unit",
      image: "/Refrigerated Delivery.png"
    },
    {
      title: "Heavy Truck Services",
      description: "Available for exclusive contract negotiated clients. Heavy-duty logistics for substantial transport requirements.",
      icon: "factory",
      image: "/Heavy Truck.png"
    },
  ];

  return (
    <div className="pt-24 pb-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-60">
            Comprehensive logistics solutions tailored to your unique requirements.
            Moving mountains for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => window.location.href = `/contact?service=${encodeURIComponent(service.title)}`}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 cursor-pointer group hover:opacity-90 transition-opacity ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                <img
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-primary-60 leading-relaxed">
                  {service.description}
                </p>
                {service.title.includes("Heavy Truck") && (
                   <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mt-2">
                     Exclusive Contract Only
                   </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
