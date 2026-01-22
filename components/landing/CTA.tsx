export default function CTA() {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#041100] tracking-tight mb-6">
          Looking to connect with clients?
        </h2>
        <p className="text-lg text-[#041100]/60 mb-10">
          Join thousands of satisfied clients who trust MoversKlub for their
          critical logistics.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#041100] hover:bg-[#041100]/90 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
            Get Started Now
          </button>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#041100]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#041100]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}

