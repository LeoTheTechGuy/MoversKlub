"use client";

export default function Services() {
  return (
    <section className="py-24 bg-white dark:bg-background-light" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Tailored for Perfection
          </h2>
          <p className="text-lg text-primary-60">
            Our fleet and team are equipped to handle the most delicate and
            demanding logistics challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Large Card: Refrigerated */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-50 dark:bg-transparent hover-lift shadow-sm border border-gray-100 dark:border-white/10">
            <img
              alt="Interior view of a clean, modern warehouse with packages"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/Refrigerated Delivery.png"
            />
            <div 
              onClick={() => window.location.href = '/contact?service=Refrigerated%20Transport'}
              className="absolute inset-0 cursor-pointer"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#041100]/90 via-[#041100]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <div className="mb-4 inline-flex items-center justify-center size-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                <span className="material-symbols-outlined">ac_unit</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Refrigerated Transport
              </h3>
              <p className="text-white/80 max-w-md text-base md:text-lg">
                Studio-grade temperature control for fine art,
                and perishables. Real-time monitoring included.
              </p>
            </div>
          </div>
          {/* Medium Card: Event Hire */}
          <div className="relative group overflow-hidden rounded-2xl bg-gray-50 dark:bg-transparent hover-lift shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-end">
            <img
              alt="Concert stage lighting equipment being set up"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/Vehicle Event Hire.png"
            />
            <div 
              onClick={() => window.location.href = '/contact?service=Event%20Logistics'}
              className="absolute inset-0 cursor-pointer"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#041100]/90 via-[#041100]/20 to-transparent pointer-events-none"></div>
            <div className="relative p-8 z-10">
              <div className="mb-4 inline-flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                <span className="material-symbols-outlined">event_seat</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Event Logistics
              </h3>
              <p className="text-white/70 text-sm">
                Time-critical delivery for world-class events.
              </p>
            </div>
          </div>
          {/* Medium Card: Removals */}
          <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-background-light hover-lift shadow-sm border border-gray-100 dark:border-white/10 flex flex-col p-8">
            <div className="flex-1 flex items-center justify-center mb-6">
              <img
                alt="Modern clean kitchen interior representing home removals"
                className="w-full h-48 object-cover rounded-xl shadow-md"
                src="/Removals.png"
              />
            </div>
            <div 
              onClick={() => window.location.href = '/contact?service=White-Glove%20Removals'}
              className="absolute inset-0 cursor-pointer"
            ></div>
            <div>
              <div className="mb-3 inline-flex items-center justify-center size-10 rounded-full bg-primary/5 text-primary">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">
                White-Glove Removals
              </h3>
              <p className="text-primary-60 text-sm">
                Residential moving service with meticulous attention to detail.
              </p>
            </div>
          </div>
          {/* Medium Card: Rubble Removal */}
          <div 
            onClick={() => window.location.href = '/contact?service=Rubble%20Removal'}
            className="relative group overflow-hidden rounded-2xl bg-white dark:bg-background-light hover-lift shadow-sm border border-gray-100 dark:border-white/10 flex flex-col p-8 cursor-pointer"
          >
            <div className="flex-1 flex items-center justify-center mb-6">
              <img
                alt="Construction site rubble being cleared"
                className="w-full h-48 object-cover rounded-xl shadow-md"
                src="/Rubble Removal.png"
              />
            </div>
            <div>
              <div className="mb-3 inline-flex items-center justify-center size-10 rounded-full bg-primary/5 text-primary">
                <span className="material-symbols-outlined">delete_sweep</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">
                Rubble Removal
              </h3>
              <p className="text-primary-60 text-sm">
                Efficient site clearing and waste removal services.
              </p>
            </div>
          </div>
          {/* Wide Short Card: Custom Solutions */}
          <div className="md:col-span-3 relative group overflow-hidden rounded-2xl bg-primary dark:bg-white text-white dark:text-black hover-lift shadow-soft p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 md:mb-2">
                Need a custom solution?
              </h3>
              <p className="text-white/70 dark:text-black/70 max-w-xl mx-auto md:mx-0">
                We specialize in solving complex logistical puzzles. From
                multi-drop routes to international freight.
              </p>
            </div>
            <a 
              href="https://wa.me/27712126278?text=Hello%20MoversKlub,%20I%20would%20like%20to%20speak%20to%20an%20expert%20about%20a%20custom%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-primary dark:bg-[#041100] dark:text-white hover:bg-gray-100 dark:hover:bg-black/80 font-bold px-8 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
