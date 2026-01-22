import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#041100] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
             <img 
                src="/logo.png" 
                alt="MoversKlub Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Redefining logistics through precision, technology, and exceptional
              service.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/17QzqmZ1b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/moversklub?igsh=MWI5dWMxMmN4bWNzMQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Refrigerated Transport
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Event Logistics
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Premium Removals
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Storage Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link className="hover:text-white transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Press
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  call
                </span>
                <span>+27 71 212 6278</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                <span>moversklub@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>Cape Town, South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 MoversKlub Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
