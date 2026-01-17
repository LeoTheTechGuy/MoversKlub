import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="space-y-6 max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
            Moving mountains <span className="text-gradient">for you.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-60 font-medium max-w-2xl mx-auto leading-relaxed">
            Reliable logistics to suit your needs. From removals to heavy truck services, we deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/contact"
              className="glass-panel group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full text-primary font-bold shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 cursor-pointer"
            >
              <span className="material-symbols-outlined">request_quote</span>
              <span>Request Quote</span>
              <div className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link 
              href="#process"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-primary-70 font-semibold hover:text-primary transition-colors hover:bg-gray-50 cursor-pointer"
            >
              <span>How it works</span>
              <span className="material-symbols-outlined text-sm">
                arrow_downward
              </span>
            </Link>
          </div>
        </div>
        {/* Hero Image with subtle floating animation */}
        <div className="mt-16 relative w-full max-w-5xl animate-fade-in-up group perspective-1000">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-50 blur-3xl -z-10 transform translate-y-20"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-x-2">
            <img
              alt="Pristine white delivery truck in a clean studio environment"
              className="w-full h-auto aspect-[16/9] object-cover hover:scale-105 transition-transform duration-1000"
              src="/Heavy Truck.png"
            />
            {/* Overlay gradient for text readability if needed, kept subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg">
              <div className="bg-green-500/20 text-green-700 p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">
                  thermostat
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-primary">
                  Temp. Controlled
                </p>
                <p className="text-[10px] font-medium text-primary-60">
                  -20°C to +15°C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
