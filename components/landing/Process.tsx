export default function Process() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-light border-t border-gray-100 dark:border-white/10" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Effortless Movement
          </h2>
          <p className="text-primary-60">
            From quote to delivery in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="size-24 rounded-full bg-white dark:bg-background-light border border-gray-100 dark:border-white/10 shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary">
                calculate
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              1. Get a Quote
            </h3>
            <p className="text-primary-60 text-sm max-w-[240px]">
              Receive a tailored estimate instantly based on your specific
              inventory.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="size-24 rounded-full bg-white dark:bg-background-light border border-gray-100 dark:border-white/10 shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary">
                calendar_month
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              2. Schedule
            </h3>
            <p className="text-primary-60 text-sm max-w-[240px]">
              Select a time slot that works for you. We operate 24/7/365.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="size-24 rounded-full bg-primary text-white dark:text-[#041100] shadow-lg shadow-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <span className="material-symbols-outlined text-4xl">
                local_shipping
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">3. Move</h3>
            <p className="text-primary-60 text-sm max-w-[240px]">
              Sit back. Our uniformed professionals handle the rest with
              precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
