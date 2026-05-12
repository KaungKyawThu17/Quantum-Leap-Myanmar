import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Droplets } from "lucide-react";

const services = [
  { to: "/services/production-capabilities", label: "Production Capabilities" },
  { to: "/services/product-development", label: "Product Development" },
  { to: "/services/factory-facilities", label: "Factory & Facilities" },
  { to: "/services/certifications", label: "Certifications" },
  { to: "/services/oem-manufacturing", label: "OEM Manufacturing" },
  { to: "/services/odm-solutions", label: "ODM Solutions" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
            <Droplets className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight">Quantum Leap</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Beverage Mfg.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition rounded-md">
              Services <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-72 rounded-2xl border border-border bg-popover p-2 shadow-glow">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block rounded-lg px-3 py-2.5 text-sm text-popover-foreground hover:bg-accent/30 transition"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition"
        >
          Get a Quote
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {[["/", "Home"], ["/about", "About Us"], ["/products", "Products"]].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30">{label}</Link>
            ))}
            <button onClick={() => setMobileServices(!mobileServices)} className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30">
              Services <ChevronDown className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="ml-3 border-l border-border pl-3 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent/30">{s.label}</Link>
                ))}
              </div>
            )}
            {[["/faq", "FAQ"], ["/contact", "Contact Us"]].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30">{label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-foreground bg-accent/20" }}
      className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition"
    >
      {children}
    </Link>
  );
}
