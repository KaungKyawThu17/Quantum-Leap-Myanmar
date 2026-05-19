import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/quantum-leap-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="QUANTUM LEAP" className="h-16 w-16 object-contain bg-white rounded-lg p-1" />
            <div className="font-display text-lg font-bold">QUANTUM LEAP</div>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            Myanmar's next generation OEM beverage manufacturing partner.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/60">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-background/80 hover:text-accent transition">About Us</Link></li>
            <li><Link to="/products" className="text-background/80 hover:text-accent transition">Products</Link></li>
            <li><Link to="/faq" className="text-background/80 hover:text-accent transition">FAQ</Link></li>
            <li><Link to="/contact" className="text-background/80 hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/60">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/oem-manufacturing" className="text-background/80 hover:text-accent transition">OEM Manufacturing</Link></li>
            <li><Link to="/services/odm-solutions" className="text-background/80 hover:text-accent transition">ODM Solutions</Link></li>
            <li><Link to="/services/production-capabilities" className="text-background/80 hover:text-accent transition">Production</Link></li>
            
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/60">Contact</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>No.351–352, R-11 Mingalardon Garden City, Yangon, Myanmar</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>+95 95001439</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>info@quantumleap.com.mm</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} QUANTUM LEAP Beverage Manufacturing Co. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
