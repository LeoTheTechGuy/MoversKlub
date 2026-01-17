"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="glass-panel border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2 group" href="/">
            <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="material-symbols-outlined text-[20px]">
                local_shipping
              </span>
            </div>
            <span className="text-primary text-xl font-bold tracking-tight">
              MoversKlub
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </Link>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-primary hover:bg-primary-90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              Request Quote
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-gray-100 animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              className="text-lg font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-lg font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="text-lg font-semibold text-primary/70 hover:text-primary transition-colors"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-center text-white text-lg font-bold px-6 py-3 rounded-xl shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
