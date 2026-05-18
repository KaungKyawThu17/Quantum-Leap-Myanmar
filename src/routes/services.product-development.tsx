import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/welcome.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import {
  ArrowLeft, ArrowRight, Package, Boxes, Ruler, ShieldCheck, Globe2, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services/product-development")({
  head: () => ({ meta: [
    { title: "Product Development — Quantum Leap" },
    { name: "description", content: "Packaging solutions, formats, quality assurance, and export support for your beverage brand." },
  ]}),
  component: ProductDevelopment,
});

const packagingTypes = [
  { code: "PET", title: "PET Bottles", body: "Lightweight, shatterproof, recyclable — ideal for water, juices, and functional drinks." },
  { code: "TR",  title: "TR Packaging", body: "Versatile carton-based packaging for shelf-stable beverages." },
  { code: "TBA", title: "TBA Packaging", body: "Aseptic Tetra Brik packaging for long shelf-life dairy and plant-based drinks." },
];

const formats = [
  { type: "PET", size: "250 ml" },
  { type: "PET", size: "320 ml" },
  { type: "PET", size: "500 ml" },
  { type: "TR",  size: "Multiple sizes" },
  { type: "TBA", size: "Multiple sizes" },
];

const pillars = [
  {
    icon: Package, eyebrow: "01 — Packaging",
    title: "Packaging Solutions",
    body: "Flexible packaging support including PET bottles, standing pouches, and future glass bottle manufacturing — engineered for shelf appeal and supply-chain efficiency.",
  },
  {
    icon: ShieldCheck, eyebrow: "02 — Quality",
    title: "Quality Assurance",
    body: "Strict quality control procedures supported by FDA compliance, Halal certification, and internationally recognized food safety standards.",
  },
  {
    icon: Globe2, eyebrow: "03 — Export",
    title: "Export Support",
    body: "Operational support for local and international distribution requirements, including scalable production planning for emerging and established markets.",
  },
];

function ProductDevelopment() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[480px] flex items-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl bg-accent/40" />
          <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full blur-3xl bg-primary/40" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-[-12deg] translate-x-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-20 w-full">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/70 mb-6">
            <Link to="/services" className="group inline-flex items-center gap-1.5 hover:text-white transition">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              All Services
            </Link>
            <span>/</span>
            <span className="text-accent">Development</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            Product <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            From packaging design to export-ready quality assurance — built for brands that want to ship fast and scale globally.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Packaging, formats, and quality — all under one roof.
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Quantum Leap supports your brand from initial packaging concept to finished, export-ready product — combining flexible formats with rigorous quality assurance and global distribution support.
            </p>
            <p>
              Whether you launch with PET bottles, standing pouches, or aseptic cartons, our team helps you select the right format, size, and certification path for your market.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Three Pillars</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Built for shelf, scale, and export</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group relative bg-card rounded-3xl border border-border p-7 md:p-8 transition-all hover:-translate-y-1 hover:shadow-glow hover:border-primary/40 overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand text-white mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{p.eyebrow}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGING TYPES + FORMATS */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Types */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Packaging Types</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-8">
              Three formats, infinite possibilities
            </h2>
            <div className="space-y-4">
              {packagingTypes.map((t) => (
                <div key={t.code} className="group flex gap-5 rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-primary/40 hover:shadow-glow transition">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-xl bg-gradient-brand text-white font-display font-extrabold text-lg md:text-xl group-hover:scale-105 transition-transform">
                    {t.code}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{t.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Available Formats</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Ruler className="h-6 w-6 text-primary" /> Sizes & SKUs
              </h3>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {formats.map((f, i) => (
                  <div key={i} className={`flex items-center justify-between px-5 py-4 ${i !== 0 ? "border-t border-border" : ""}`}>
                    <div className="flex items-center gap-3">
                      <Boxes className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">{f.type}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{f.size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Custom sizes available on request — talk to our team about your SKU plan.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-hero rounded-3xl overflow-hidden text-white shadow-glow">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="grid md:grid-cols-2 items-stretch relative z-10">
              <div className="relative h-64 md:h-auto md:min-h-[360px] overflow-hidden">
                <img src={welcomeImg} alt="Quantum Leap team welcome" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/70 via-primary/20 to-transparent md:from-transparent md:via-primary/10 md:to-primary/40" />
              </div>
              <div className="p-10 md:p-14 text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Got a packaging or format challenge?</h3>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">From PET to aseptic cartons — let's pick the right format for your launch.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition group"
              >
                Talk to our development team
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
