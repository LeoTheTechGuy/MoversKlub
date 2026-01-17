import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-white/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">
                  local_shipping
                </span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                MoversKlub
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Redefining logistics through precision, technology, and exceptional
              service.
            </p>
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
                <Link className="hover:text-white transition-colors" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
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
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                <span>hello@moversklub.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>100 Logistics Way, NY</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 MoversKlub Inc. All rights reserved.
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
