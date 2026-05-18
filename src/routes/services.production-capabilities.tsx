import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/welcome.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import {
  ArrowLeft, ArrowRight, Droplets, Layers, PackageOpen, Thermometer, Sparkles, Gauge, Clock, Factory,
} from "lucide-react";

export const Route = createFileRoute("/services/production-capabilities")({
  head: () => ({ meta: [
    { title: "Production Capabilities — QUANTUM LEAP" },
    { name: "description", content: "PET bottling, dual lines, standing pouches and UHT production capabilities up to 24,000 BPH." },
  ]}),
  component: ProductionCapabilities,
});

const lines = [
  {
    icon: Droplets,
    name: "PET Bottling Line",
    tag: "High-Speed",
    capacity: "400",
    unit: "bottles / minute",
    body: "High-speed PET bottling system with Ultraclean Hot-Fill technology for premium beverage filling.",
    highlights: ["Ultraclean Hot-Fill", "Automated QA", "Premium grade"],
    status: "active",
  },
  {
    icon: Layers,
    name: "Dual PET Bottling Line",
    tag: "Flexible",
    capacity: "5,000",
    unit: "bottles / hour",
    body: "Dual-purpose bottling system supporting both PET and recyclable glass packaging formats.",
    highlights: ["PET + Glass", "Quick changeover", "Sustainable"],
    status: "active",
  },
  {
    icon: PackageOpen,
    name: "Standing Pouch Line",
    tag: "Versatile",
    capacity: "10,000",
    unit: "pouches / hour",
    body: "Flexible packaging production line capable of filling 7,000 to 10,000 pouches per hour.",
    highlights: ["Flexible packaging", "Multi-format", "High output"],
    status: "active",
  },
  {
    icon: Thermometer,
    name: "UHT Production Line",
    tag: "Advanced",
    capacity: "Dairy",
    unit: "& non-dairy",
    body: "Advanced UHT beverage processing engineered for dairy and plant-based beverage products.",
    highlights: ["Long shelf life", "Aseptic process", "Dairy + plant"],
    status: "active",
  },
  {
    icon: Sparkles,
    name: "CSD & Canning Line",
    tag: "Coming Soon",
    capacity: "Soon",
    unit: "expansion phase",
    body: "Expansion into high-speed carbonated soft drink and canning systems for large-scale beverage production.",
    highlights: ["Carbonation", "Aluminum cans", "High-speed"],
    status: "soon",
  },
];

const stats = [
  { icon: Gauge, value: "24,000", label: "Max bottles per hour", suffix: "BPH" },
  { icon: Factory, value: "5", label: "Production lines", suffix: "Lines" },
  { icon: Clock, value: "24/7", label: "Operational capacity", suffix: "Uptime" },
];

function ProductionCapabilities() {
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
            <span className="text-accent">Production</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            Production <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">Capabilities</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Multiple high-throughput lines built for flexibility and scale — engineered to support your brand at every volume.
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
              Built for flexibility. Engineered for scale.
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              QUANTUM LEAP operates a diverse portfolio of production lines designed to support beverage brands across formats, volumes, and product categories — from PET bottling to UHT processing.
            </p>
            <p>
              Our infrastructure is continuously expanding to meet the growing demand for sustainable, high-volume beverage manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* LINES — interactive cards */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Our Production Lines</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Capabilities at a glance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {lines.map((line, i) => {
              const Icon = line.icon;
              const isSoon = line.status === "soon";
              return (
                <div
                  key={line.name}
                  className={`group relative bg-card rounded-3xl border border-border p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-primary/40 overflow-hidden ${i === 0 ? "lg:col-span-2" : ""}`}
                >
                  {/* corner glow */}
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition" />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${isSoon ? "bg-muted text-muted-foreground" : "bg-gradient-brand text-white"} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${isSoon ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"}`}>
                      {line.tag}
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-none">
                        {line.capacity}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">
                        {line.unit}
                      </span>
                    </div>
                  </div>

                  <h3 className="relative font-display text-xl font-bold text-foreground mb-3">{line.name}</h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">{line.body}</p>

                  <div className="relative flex flex-wrap gap-2 pt-4 border-t border-border">
                    {line.highlights.map((h) => (
                      <span key={h} className="text-xs text-foreground/80 bg-muted px-2.5 py-1 rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>
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
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Need a production partner that scales with you?</h3>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">From small batch trials to full-volume export production — we've built the lines for it.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition group"
              >
                Talk to our production team
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
