import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/welcome.webp";
import factoryHero1 from "@/assets/factory-hero-1.webp";
import factoryHero2 from "@/assets/factory-hero-2.webp";
import factoryHero3 from "@/assets/factory-hero-3.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import {
  ArrowLeft, ArrowRight, Wind, Droplets, Tag, PackageOpen, Snowflake, Zap,
  Fuel, Gauge, Warehouse, Building2, MapPin, Ruler, Recycle,
} from "lucide-react";


export const Route = createFileRoute("/services/factory-facilities")({
  head: () => ({ meta: [
    { title: "Factory & Facilities — QUANTUM LEAP" },
    { name: "description", content: "10-acre campus with advanced production equipment, utilities, cold storage and warehousing." },
  ]}),
  component: FactoryFacilities,
});

const stats = [
  { icon: MapPin,   value: "10",     label: "Acre integrated campus" },
  { icon: Gauge,    value: "26K",    label: "Bottles/hr blowing capacity" },
  { icon: Snowflake,value: "58t",    label: "Cold storage capacity" },
];

const groups = [
  {
    title: "Production Equipment",
    eyebrow: "01 — Production",
    icon: Building2,
    items: [
      { icon: Wind,        label: "Blowing Machine",          detail: "26,000 bottles / hour" },
      { icon: Droplets,    label: "Filling Capacity",         detail: "24,000 bottles / hour" },
      { icon: Gauge,       label: "Monoblock Filling System", detail: "Integrated rinse–fill–cap" },
      { icon: Snowflake,   label: "Tunnel Cooling System",    detail: "Post-fill thermal control" },
      { icon: Tag,         label: "Automatic Labeling",       detail: "High-speed label application" },
      { icon: PackageOpen, label: "Shrink Wrapping & Packing",detail: "End-of-line packaging" },
    ],
  },
  {
    title: "Utility Systems",
    eyebrow: "02 — Utilities",
    icon: Zap,
    items: [
      { icon: Zap,     label: "2500 KVA Transformers",   detail: "Stable power infrastructure" },
      { icon: Fuel,    label: "CAT Generators",          detail: "Continuous backup power" },
      { icon: Wind,    label: "Air Compressors",         detail: "High-pressure pneumatic supply" },
      { icon: Fuel,    label: "Diesel Boiler Systems",   detail: "Process steam generation" },
      { icon: Recycle, label: "Wastewater Treatment",    detail: "Industrial wastewater purification and environmental treatment system" },
    ],
  },
  {
    title: "Cold Storage",
    eyebrow: "03 — Cold Chain",
    icon: Snowflake,
    items: [
      { icon: Snowflake, label: "Frozen Storage", detail: "39 tons capacity" },
      { icon: Snowflake, label: "Chill Room",     detail: "19 tons capacity" },
    ],
  },
];

function FactoryFacilities() {
  const heroSlides = [factoryHero1, factoryHero2, factoryHero3];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[480px] flex items-center text-white overflow-hidden">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-20 w-full">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/70 mb-6">
            <Link to="/" className="group inline-flex items-center gap-1.5 hover:text-white transition">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-accent">Facilities</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            Factory <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">& Facilities</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            A 10-acre integrated campus engineered for large-scale beverage production — from blowing to bottling, cold chain to warehouse.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative -mt-12 z-20 mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 shadow-glow flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-foreground leading-none">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Inside our integrated manufacturing campus.
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Our 10-acre facility brings every stage of beverage production under one roof — from preform blowing and high-speed filling to cold storage and outbound logistics.
            </p>
            <p>
              The site is designed for resilience: redundant utilities, dedicated warehousing, and modular floor space ready to scale with your brand.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITY GROUPS */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12 md:space-y-16">
          {groups.map((g) => {
            const GIcon = g.icon;
            return (
              <div key={g.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-brand text-white">
                    <GIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{g.eyebrow}</div>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">{g.title}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {g.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <div key={it.label} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-glow hover:-translate-y-0.5 transition-all">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-brand group-hover:text-white transition">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-display text-base font-bold text-foreground mb-1">{it.label}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{it.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WAREHOUSE — feature row */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden">
          
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">04 — Storage</div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">Warehouse Facilities</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dedicated raw material, packaging, and spare parts storage areas designed to support efficient production flow and inventory management.
            </p>
          </div>
          <div className="relative grid grid-cols-3 gap-4">
            {[
              { icon: Warehouse, label: "Raw Material" },
              { icon: PackageOpen, label: "Packaging" },
              { icon: Ruler, label: "Spare Parts" },
            ].map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.label} className="rounded-2xl bg-muted/60 border border-border p-5 text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-brand text-white mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">{w.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-hero rounded-3xl overflow-hidden text-white shadow-glow">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative z-10 min-h-[380px] md:min-h-[440px] flex items-center">
              <img src={welcomeImg} alt="QUANTUM LEAP team welcome" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
              <div className="absolute inset-0 bg-gradient-glow opacity-60" />
              <div className="relative w-full p-10 md:p-16 text-center md:text-left max-w-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Want a tour of the campus?</h3>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">Book a visit or request a virtual walkthrough of our 10-acre facility.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition group"
              >
                Schedule a facility tour
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificatesSlider />
    </Layout>
  );
}
