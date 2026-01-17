"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Removals",
    referralSource: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Quote Request*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.serviceType}
*Referral:* ${formData.referralSource || 'N/A'}

*Message:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/27712126278?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
      <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-primary">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
             <label htmlFor="phone" className="text-sm font-semibold text-primary">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="+27 71 212 6278"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="serviceType" className="text-sm font-semibold text-primary">
              Service Interested In
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            >
              <option value="Removals">Removals</option>
              <option value="Pick up and Deliver">Pick up and Deliver</option>
              <option value="Vehicle Event Hire">Vehicle Event Hire</option>
              <option value="Refrigerated Delivery">Refrigerated Delivery</option>
              <option value="Heavy Truck Services">Heavy Truck Services</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="referralSource" className="text-sm font-semibold text-primary">
            How did you hear about us?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          >
            <option value="" disabled>Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Family">Friend/Family Recommendation</option>
            <option value="Advertisement">Advertisement</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-primary">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            placeholder="Tell us more about your logistics needs..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary dark:bg-[#041100] hover:bg-primary-90 dark:hover:bg-black/80 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
