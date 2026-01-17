import React from "react";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-60">
            Ready to move? Contact us for a quote or schedule a call to discuss your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Phone & WhatsApp</h3>
                    <p className="text-primary-60 font-medium">+27 71 212 6278</p>
                    <p className="text-sm text-primary-60/80">Available Mon-Fri, 24hr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Email</h3>
                    <p className="text-primary-60 font-medium">moversklub@gmail.com</p>
                    <p className="text-sm text-primary-60/80">We typically respond within 24 hours.</p>
                  </div>
                </div>
                 
                  <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Location</h3>
                    <p className="text-primary-60 font-medium">cape town, South Africa</p>
                    <p className="text-sm text-primary-60/80">Serving nationwide.</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Schedule Call Section */}
             <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Schedule a Consultation</h3>
                <p className="text-white/80 mb-6 relative z-10">
                    Prefer to talk at a specific time? Book a slot with our logistics experts.
                </p>
                <a 
                    href="https://wa.me/27712126278?text=Hello%20MoversKlub,%20I%20would%20like%20to%20book%20a%20scheduled%20call."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-brand-blue font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer relative z-10 shadow-lg"
                >
                    Book a Call
                </a>
             </div>
          </div>

          {/* Form Side */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
