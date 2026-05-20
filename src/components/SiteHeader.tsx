import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/quantum-leap-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-16" : "h-24 md:h-32"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="QUANTUM LEAP"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-12 w-12" : "h-20 w-20 md:h-28 md:w-28"
            }`}
          />
          <div className="leading-tight">
            <div
              className={`font-display font-bold tracking-tight transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg md:text-xl"
              }`}
            >
              QUANTUM LEAP
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Beverage Mfg.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-accent-foreground shadow-soft hover:brightness-110 transition"
        >
          Get a Quotation
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {[["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/services", "Services"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} activeOptions={{ exact: to === "/" }} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">{label}</Link>
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
      activeProps={{ className: "!text-primary after:scale-x-100" }}
      className="relative px-3 py-2 text-[13px] font-medium text-foreground/75 hover:text-foreground rounded-md transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-accent after:rounded-full after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}
