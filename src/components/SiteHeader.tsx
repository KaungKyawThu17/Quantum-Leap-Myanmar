import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/quantum-leap-logo.png";

const headerCopy = {
  en: {
    tagline: "Co., Ltd.",
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services",
    contact: "Contact",
    quote: "Get a Quotation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    serviceLinks: [
      { to: "/services/oem-manufacturing", label: "OEM and ODM Manufacturing" },
      { to: "/services/production-capabilities", label: "Production Capabilities" },
      { to: "/services/product-development", label: "Product Development" },
      { to: "/services/factory-facilities", label: "Factory & Facilities" },
    ],
  },
  my: {
    tagline: "Co., Ltd.",
    home: "ပင်မ",
    about: "အကြောင်း",
    products: "ထုတ်ကုန်",
    services: "ဝန်ဆောင်မှု",
    contact: "ဆက်သွယ်ရန်",
    quote: "ဈေးနှုန်းမေးရန်",
    openMenu: "မီနူးဖွင့်ရန်",
    closeMenu: "မီနူးပိတ်ရန်",
    serviceLinks: [
      { to: "/services/oem-manufacturing", label: "OEM နှင့် ODM ထုတ်လုပ်မှု" },
      { to: "/services/production-capabilities", label: "ထုတ်လုပ်မှု စွမ်းဆောင်ရည်များ" },
      { to: "/services/product-development", label: "ထုတ်ကုန် ဖွံ့ဖြိုးတိုးတက်မှု" },
      { to: "/services/factory-facilities", label: "စက်ရုံနှင့် အခြေခံအဆောက်အအုံများ" },
    ],
  },
} as const;

const DESKTOP_SERVICES_MENU_ID = "desktop-services-menu";
const MOBILE_MENU_ID = "mobile-menu";
const MOBILE_SERVICES_MENU_ID = "mobile-services-menu";

export function SiteHeader() {
  const { lang } = useLanguage();
  const copy = headerCopy[lang];
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 md:px-8 lg:px-10 h-24 md:h-32">
        <Link to="/" className="focus-ring flex items-center gap-3 group shrink-0 rounded-xl">
          <img
            src={logo}
            alt="QUANTUM LEAP"
            className="object-contain h-20 w-20 md:h-28 md:w-28 drop-shadow-sm motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight text-lg md:text-xl">
              QUANTUM LEAP
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {copy.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          <NavLink to="/">{copy.home}</NavLink>
          <NavLink to="/about">{copy.about}</NavLink>
          <NavLink to="/products">{copy.products}</NavLink>

          <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls={DESKTOP_SERVICES_MENU_ID}
              className="focus-ring relative inline-flex min-h-11 items-center gap-1 px-3 py-2 text-[15px] font-medium text-foreground/75 hover:text-foreground rounded-md transition-colors"
            >
              {copy.services}
              <ChevronDown
                className={`h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div
                id={DESKTOP_SERVICES_MENU_ID}
                className="absolute left-0 top-full pt-2 w-64"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div className="rounded-xl border border-border bg-background shadow-glow p-2">
                  {copy.serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      activeProps={{ className: "bg-primary/10 text-primary" }}
                      className="focus-ring flex min-h-11 items-center px-3 py-2 text-[15px] rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors duration-200"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">{copy.contact}</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link
            to="/contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:brightness-110 transition-[filter] duration-200 whitespace-nowrap"
          >
            {copy.quote}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {
            if (open) setMobileServicesOpen(false);
            setOpen((v) => !v);
          }}
          className="focus-ring md:hidden flex min-h-11 min-w-11 items-center justify-center rounded-md p-2"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id={MOBILE_MENU_ID}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col p-4 gap-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
            >
              {copy.home}
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
            >
              {copy.about}
            </Link>
            <Link
              to="/products"
              onClick={closeMobileMenu}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
            >
              {copy.products}
            </Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              aria-controls={MOBILE_SERVICES_MENU_ID}
              className="focus-ring flex min-h-11 items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-left"
            >
              {copy.services}
              <ChevronDown
                className={`h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div
                id={MOBILE_SERVICES_MENU_ID}
                className="ml-3 flex flex-col border-l border-border pl-3 gap-0.5"
              >
                {copy.serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={closeMobileMenu}
                    activeProps={{ className: "text-primary" }}
                    className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/faq"
              onClick={closeMobileMenu}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              activeProps={{ className: "bg-primary/10 text-primary" }}
              className="focus-ring flex min-h-11 items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
            >
              {copy.contact}
            </Link>
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
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
        className={`focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2.5 py-1 transition-colors duration-200 ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("my")}
        className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-2.5 py-1 transition-colors duration-200 ${
          lang === "my" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
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
      className="focus-ring relative inline-flex min-h-11 items-center px-3 py-2 text-[15px] font-medium text-foreground/75 hover:text-foreground rounded-md transition-colors whitespace-nowrap after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-accent after:rounded-full after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}
