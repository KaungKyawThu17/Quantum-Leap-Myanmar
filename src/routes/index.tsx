import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-factory.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import factoryImg from "@/assets/warehouse.webp";
import splashImg from "@/assets/product-splash.jpg";
import plasticCapImg from "@/assets/pkg-plastic-cap.webp";
import petBottleImg from "@/assets/pkg-pet-bottle.webp";
import petPreformImg from "@/assets/pkg-pet-preform.webp";
import aluminumCapImg from "@/assets/pkg-aluminum-cap.webp";
import labelImg from "@/assets/pkg-label.jpeg";
import bevElectrolyteImg from "@/assets/bev-electrolyte.webp";
import bevSoftDrinkImg from "@/assets/bev-soft-drink.webp";
import bevFlavoredImg from "@/assets/bev-flavored.webp";
import bevTeaImg from "@/assets/bev-tea.webp";
import bevDairyImg from "@/assets/bev-dairy.webp";
import { useState } from "react";
import {
  Factory, Beaker, ShieldCheck, Gauge, Boxes, Award,
  Milk, ArrowRight, CheckCircle2, Heart, Leaf, Globe, Lightbulb, Package, GlassWater
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

const packagingProducts = [
  { name: "Plastic Cap", image: plasticCapImg },
  { name: "PET Bottle", image: petBottleImg },
  { name: "PET Preform", image: petPreformImg },
  { name: "Aluminum Cap", image: aluminumCapImg },
  { name: "Label", image: labelImg },
  { name: "Customized Services", image: undefined },
];

const beverageProducts = [
  { name: "Energy Drinks / Electrolyte Beverages", image: bevElectrolyteImg },
  { name: "Soft Drinks / Carbonated Beverages", image: bevSoftDrinkImg },
  { name: "Fruit Juices / Flavored Drinks", image: bevFlavoredImg },
  { name: "Tea & Functional Beverages", image: bevTeaImg },
  { name: "Dairy & Soy Milk (Coming in 2026)", image: bevDairyImg },
];

const coreValues = [
  {
    icon: Heart,
    title: "Employee Well-Being",
    desc: "We value our people as the driving force behind our success. Quantum Leap promotes a positive workplace culture that prioritizes safety, respect, teamwork, and professional growth.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Sustainability is integrated into our operations. We continuously improve our manufacturing processes to reduce environmental impact through efficient resource management and responsible packaging solutions.",
  },
  {
    icon: Globe,
    title: "Community & Social Responsibility",
    desc: "Quantum Leap believes in building meaningful contributions to society by maintaining ethical business practices, supporting local communities, and creating trusted partnerships with customers and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Packaging Development",
    desc: "With advanced manufacturing capabilities, Quantum Leap develops customized PET bottles, closures, and packaging solutions designed to support diverse beverage categories and evolving consumer demands.",
  },
];

function Home() {
  const [category, setCategory] = useState<"packaging" | "beverage">("packaging");
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Product Categories</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Packaging and beverages under one roof.</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From PET bottles and caps to finished beverages — we supply the complete manufacturing and packaging ecosystem your brand needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-full bg-muted/60 w-fit mx-auto">
          <button
            onClick={() => setCategory("packaging")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              category === "packaging" ? "bg-foreground text-background shadow-soft" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Package className="h-4 w-4" />
            Packaging
            <span className="text-xs opacity-70">· {packagingProducts.length}</span>
          </button>
          <button
            onClick={() => setCategory("beverage")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              category === "beverage" ? "bg-foreground text-background shadow-soft" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <GlassWater className="h-4 w-4" />
            Beverage OEM
            <span className="text-xs opacity-70">· {beverageProducts.length}</span>
          </button>
        </div>

        {category === "packaging" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {packagingProducts.map(({ name, image }) => (
              <Link
                key={name}
                to="/products"
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition"
              >
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  {image ? (
                    <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-brand text-white">
                      <Package className="h-10 w-10" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-display text-sm md:text-base font-semibold">{name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {beverageProducts.map(({ name, image }) => (
              <Link
                key={name}
                to="/products"
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition"
              >
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white gap-2">
                    <span className="font-display text-sm md:text-base font-semibold leading-tight">{name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Core Values</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">What drives everything we do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-8 hover:shadow-glow hover:border-primary/30 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Why Choose Us</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              Myanmar's premier <span className="text-gradient">OEM partner</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Quantum Leap is strategically positioned to become Myanmar's premier OEM beverage manufacturing partner. Our modernized facility, scalable production systems, and investment in advanced manufacturing technologies allow us to support both emerging and established beverage brands with efficiency, consistency, and reliability.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-40" />
            <div className="relative">
              <div className="grid gap-6">
                {["Modernized facility with 24,000 BPH capacity", "Scalable production systems for any brand size", "Advanced manufacturing technologies", "FDA & Halal certified operations", "End-to-end OEM & ODM solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
