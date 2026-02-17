import React from "react";
import Link from "next/link";
import { getServiceBySlug, SERVICES } from "../data";

type Props = { params: { service: string } };

export default async function ServicePage({ params }: Props) {
  const p = await params as any;
  const slug = p?.service;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">Service not found</h1>
          <p className="text-black/60 dark:text-white/60 mt-4">We couldn't find the requested service: <strong>{slug}</strong></p>
          <p className="text-black/60 dark:text-white/60 mt-4">Available services:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {Array.from(new Set(SERVICES.map((s: any) => s.slug))).map((s: string) => (
              <Link key={s} href={`/services/${s}`} className="inline-block px-3 py-1 bg-black/5 dark:bg-white/10 text-black dark:text-white text-sm rounded-full">{s}</Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-sm font-medium text-black/60 dark:text-white/60 uppercase tracking-wide">{service.short}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">{service.title}</h1>
            <p className="mt-6 text-lg text-black/70 dark:text-white/70 max-w-3xl">{service.overview}</p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-lg font-medium shadow-sm hover:opacity-95 transition">
                Get a quote
              </Link>
              <a href="#features" className="text-sm text-black/70 dark:text-white/70 hover:underline">See features</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            {service.hero ? (
              <img src={service.hero} alt={service.title} className="w-full h-60 md:h-72 object-cover" />
            ) : (
              <div className="w-full h-60 md:h-72 bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/40 dark:text-white/30">No image</div>
            )}
          </div>
        </header>

        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">What's included</h3>
              <ul className="space-y-2 text-black/70 dark:text-white/70 list-disc pl-5">
                {service.included?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <h4 className="font-bold text-black dark:text-white">Why it matters</h4>
                <p className="mt-3 text-black/70 dark:text-white/70">{service.why}</p>
              </div>

              <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <h4 className="font-bold text-black dark:text-white">Use cases</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.who?.map((w, i) => (
                    <span key={i} className="inline-block px-3 py-1 bg-black/5 dark:bg-white/5 text-black dark:text-white text-sm rounded-full">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h4 className="font-bold text-black dark:text-white">Enterprise-ready</h4>
              <p className="mt-2 text-black/70 dark:text-white/70 text-sm">Dedicated account management, SLA options, and fleet scalability for large-volume customers.</p>
            </div>

            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5">
              <h4 className="font-bold text-black dark:text-white">Capabilities</h4>
              <ul className="mt-3 text-black/70 dark:text-white/70 space-y-2 list-none">
                {service.capabilities?.length ? (
                  service.capabilities.map((c, i) => <li key={i}>• {c}</li>)
                ) : (
                  <>
                    <li>• Real-time monitoring & reporting</li>
                    <li>• Insured handling & secure transport</li>
                  </>
                )}
              </ul>
            </div>
          </aside>
        </section>

        <footer className="mt-12 p-6 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="font-bold text-black dark:text-white">Ready to move forward?</h4>
              <p className="text-black/70 dark:text-white/70 text-sm">Contact our logistics team to build a tailored plan and receive a formal quote.</p>
            </div>
            <div className="flex gap-3">
              <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium">Contact Sales</Link>
              <a href="#" className="inline-block px-4 py-2 rounded-lg border border-black/5 dark:border-white/10 text-black/70 dark:text-white/70">Request SLA</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
