export default function TrustStrip() {
  return (
    <div className="border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <span className="text-lg font-bold flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined">verified</span> 99.8%
          On-Time
        </span>
        <span className="text-lg font-bold flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined">shield</span> Fully
          Insured
        </span>
        <span className="text-lg font-bold flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined">support_agent</span> 24/7
          Support
        </span>
        <span className="text-lg font-bold flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined">public</span> Nationwide
        </span>
      </div>
    </div>
  );
}
