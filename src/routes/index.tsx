import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-factory.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import factoryImg from "@/assets/factory-aerial.jpg";
import splashImg from "@/assets/product-splash.jpg";
import {
  Factory, Beaker, ShieldCheck, Gauge, Boxes, Award,
  Zap, Coffee, Droplets, Leaf, Citrus, Milk, ArrowRight, CheckCircle2
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantum Leap — Myanmar's Next Generation OEM Beverage Partner" },
      { name: "description", content: "OEM & ODM beverage manufacturing in Myanmar. PET bottling up to 24,000 BPH, FDA & Halal certified, scalable production for local and international brands." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Factory, title: "OEM & ODM", desc: "End-to-end beverage manufacturing solutions" },
  { icon: Boxes, title: "PET & Glass", desc: "Current PET, future glass bottling capabilities" },
  { icon: Milk, title: "UHT Expansion", desc: "Advanced UHT production line coming soon" },
  { icon: Gauge, title: "24,000 BPH", desc: "Industry-leading hourly production capacity" },
  { icon: ShieldCheck, title: "FDA & Halal", desc: "Internationally certified safe operations" },
  { icon: Beaker, title: "Flexible Formats", desc: "Multiple packaging sizes and types" },
];

const products = [
  { icon: Zap, name: "Energy Drinks", color: "from-orange-500/20 to-yellow-500/10" },
  { icon: Droplets, name: "Soft Drinks", color: "from-cyan-500/20 to-blue-500/10" },
  { icon: Citrus, name: "Fruit Juices", color: "from-amber-500/20 to-orange-500/10" },
  { icon: Leaf, name: "Electrolyte", color: "from-emerald-500/20 to-teal-500/10" },
  { icon: Coffee, name: "Tea & Functional", color: "from-amber-700/20 to-yellow-700/10" },
  { icon: Milk, name: "UHT Dairy & Soy", color: "from-slate-300/30 to-blue-200/10" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src={heroVideo}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="absolute inset-0 bg-gradient-glow opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Now serving global beverage brands
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Myanmar's Next Generation{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">OEM Beverage</span>{" "}
              Partner
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              Quantum Leap is a Myanmar-based OEM beverage manufacturer specializing in PET bottling,
              beverage formulation, and scalable production solutions for local and international brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition">
                Start Your Brand <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/oem-manufacturing" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-white hover:bg-white/15 transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* INTRO */}
      <section className="pt-20 pb-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Who We Are</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              An <span className="text-gradient">integrated facility</span> built for the world's beverage brands.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Located on a 10-acre industrial campus in Yangon Industrial Park, Quantum Leap operates a fully integrated OEM beverage manufacturing facility. Our factory combines modern production technology, experienced operational management, and scalable infrastructure to deliver high-quality beverages across multiple categories.
            </p>
            <ul className="space-y-2 mb-8">
              {["Modern, automated production technology", "Experienced beverage operations team", "Scalable infrastructure for any brand size"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              Learn about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={factoryImg} alt="Quantum Leap factory" className="rounded-3xl shadow-soft w-full" loading="lazy" width={1600} height={1000} />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-glow border border-border max-w-xs hidden md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Yangon Industrial Park</div>
              <div className="font-display font-bold text-lg mt-1">10-Acre Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Key Highlights</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Capabilities at a glance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-7 hover:shadow-glow hover:border-primary/30 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Product Categories</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">From energy to UHT — we build the beverages people love.</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our facility supports a broad range of beverage categories with consistent quality, scalable batch sizes, and flexible packaging — ready for any brand vision.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(({ icon: Icon, name, color }) => (
            <div key={name} className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${color} p-6 aspect-[5/4] flex flex-col justify-between hover:shadow-soft transition`}>
              <Icon className="h-8 w-8 text-foreground/70" />
              <div className="font-display text-xl font-bold">{name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US + CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-hero overflow-hidden p-10 md:p-16 text-white">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <img src={splashImg} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] opacity-50 hidden md:block" loading="lazy" />
            <div className="relative max-w-2xl">
              <Award className="h-10 w-10 text-accent mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
                Start your beverage brand with Quantum Leap.
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Contact our OEM team today to discuss your beverage manufacturing requirements — we'll guide you from formula to finished product.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition">
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
