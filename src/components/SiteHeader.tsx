import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/quantum-leap-logo.png";

const serviceLinks = [
  { to: "/services/oem-manufacturing", label: "OEM Manufacturing" },
  { to: "/services/odm-solutions", label: "ODM Solutions" },
  { to: "/services/production-capabilities", label: "Production Capabilities" },
  { to: "/services/product-development", label: "Product Development" },
  { to: "/services/factory-facilities", label: "Factory & Facilities" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

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

          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground/75 hover:text-foreground rounded-md transition-colors"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full pt-2 w-64"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div className="rounded-xl border border-border bg-background shadow-glow p-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      activeProps={{ className: "bg-primary/10 text-primary" }}
                      className="block px-3 py-2 text-sm rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-accent-foreground shadow-soft hover:brightness-110 transition"
          >
            Get a Quotation
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            <Link to="/" onClick={() => setOpen(false)} activeOptions={{ exact: true }} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">About</Link>
            <Link to="/products" onClick={() => setOpen(false)} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">Products</Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-left"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col border-l border-border pl-3 gap-0.5">
                
                {serviceLinks.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} activeProps={{ className: "text-primary" }} className="px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">{s.label}</Link>
                ))}
              </div>
            )}

            <Link to="/faq" onClick={() => setOpen(false)} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">FAQ</Link>
            <Link to="/contact" onClick={() => setOpen(false)} activeProps={{ className: "bg-primary/10 text-primary" }} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">Contact</Link>
            <div className="px-3 py-2"><LanguageToggle /></div>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/60 p-0.5 text-xs font-semibold">
      <Globe className="h-3.5 w-3.5 mx-1.5 text-muted-foreground" />
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("my")}
        className={`px-2.5 py-1 rounded-full transition ${lang === "my" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
        aria-pressed={lang === "my"}
      >
        မြန်မာ
      </button>
    </div>
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
