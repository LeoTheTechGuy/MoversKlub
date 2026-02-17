export type Service = {
  slug: string;
  title: string;
  short: string;
  hero?: string;
  overview: string;
  included?: string[];
  why?: string;
  who?: string[];
  capabilities?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "refrigerated-transport",
    title: "Refrigerated Transport",
    short: "Temperature-Controlled Logistics",
    hero: "/Refrigerated Delivery.png",
    overview:
      "A specialised transport service designed to maintain precise temperatures during transit — from freezing to cool conditions. MoversKlub’s fleet can control conditions for goods that need cold or stable environments.",
    included: [
      "Temperature control: maintains the right temperature throughout the journey.",
      "Real-time monitoring so clients can view temperature data in transit.",
      "Insulated vehicles with specialised refrigeration units to protect shipments.",
    ],
    why:
      "Protects food, flowers, art, and sensitive products from temperature changes to ensure quality and safety from pickup to delivery.",
    who: ["Food producers & caterers", "Florists", "Art transport", "Pharmaceuticals"],
    capabilities: [
      "Real-time monitoring & reporting",
      "Insulated vehicles with specialised refrigeration units",
      "Insured handling & secure transport",
    ],
  },
  {
    slug: "event-logistics",
    title: "Event Logistics",
    short: "Time-Critical Planning & Delivery",
    hero: "/Event logistics .jpeg",
    overview:
      "Coordinating and transporting equipment for events — corporate functions, concerts, exhibitions, and production setups — with time-critical planning and reliable delivery.",
    included: [
      "Scheduled delivery to arrive exactly when setup requires.",
      "Handling specialised equipment: staging, lighting, AV, and rigging.",
      "Coordination with event organisers to align logistics with timelines.",
    ],
    why:
      "Events have tight schedules — MoversKlub ensures punctuality and professional handling of valuable and bulky equipment to prevent disruptions.",
    who: ["Event producers", "Concerts & venues", "Exhibitions", "Corporate events"],
    capabilities: [
      "Scheduled, time-critical delivery",
      "Specialist handling for staging and AV equipment",
      "Coordination with event organisers and venues",
    ],
  },
  {
    slug: "white-glove-removals",
    title: "Local White-Glove Removal",
    short: "Premium Care for Your Move",
    hero: "/house_moving.jpeg",
    overview:
      "A top-tier moving service designed to make your move stress-free, precise, and highly personalised. Full packing, unpacking, placement, and cleanup included.",
    included: [
      "Hands-on handling of every item with specialised care.",
      "Packing, unpacking, assembly and setup included.",
      "Inside placement and final touches — delivered to the room you choose.",
      "All packing materials and debris removed after the move.",
    ],
    why:
      "Provides a full-service experience so your new space is ready from the moment you arrive — ideal for fragile, valuable or complex items.",
    who: ["High-value households", "Clients needing full-service moves", "Fragile or complex item owners"],
    capabilities: [
      "Full packing, unpacking and inside placement",
      "Assembly and setup services",
      "Specialist handling for fragile and high-value items",
    ],
  },
  {
    slug: "rubble-removal",
    title: "Rubble & Waste Removal",
    short: "Property Clearance Service",
    hero: "/Rubble Removal.png",
    overview:
      "Clear construction debris, renovation rubble, garden waste, and unwanted items quickly and safely from homes, businesses, or sites.",
    included: [
      "Efficient site clearance and quick removal.",
      "Safe disposal and proper handling of waste.",
      "Versatile applications including renovation and office clearouts.",
    ],
    why:
      "Clears space after construction, renovation or moving so clients can focus on next steps with a clean slate.",
    who: ["Contractors", "Homeowners after renovation", "Businesses clearing sites"],
  },
  {
    slug: "pick-up-deliver",
    title: "Pick-Up & Deliver Service",
    short: "Seamless Door-to-Door Transport",
    hero: "/Pick up and Deliver.png",
    overview:
      "A door-to-door logistics solution for bulky furniture, appliances, business goods or personal items — we collect, secure, transport and deliver to the destination you choose.",
    included: [
      "Scheduled pick-up windows at a time that suits you.",
      "Secure handling and appropriate vehicle selection.",
      "Confirmation on delivery completion.",
    ],
    why:
      "Saves time and effort — eliminates the need to arrange your own transport while providing professional handling and secure transit.",
    who: ["Homeowners", "Online sellers", "Small businesses"],
  },
  {
    slug: "heavy-truck-services",
    title: "Heavy Truck Services",
    short: "Heavy-Duty & Contract Logistics",
    hero: "/Heavy Truck.png",
    overview:
      "Heavy-duty logistics for substantial transport requirements, available via negotiated contracts for exclusive clients.",
    included: ["Large-capacity vehicles", "Contracted schedules and dedicated service"],
    why:
      "Provides the capacity and planning required for large commercial or industrial moves.",
    who: ["Commercial clients", "Industrial deliveries", "Large-scale moves"],
  },
];

export function getServiceBySlug(slug: string) {
  if (!slug) return null;
  const needle = decodeURIComponent(slug).toLowerCase();
  return (
    SERVICES.find((s) => (s.slug || "").toLowerCase() === needle) || null
  );
}
