import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-factory.jpg";
import heroVideo from "@/assets/hero-video-cropped.mp4";
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
import welcomeImg from "@/assets/welcome.webp";
import { useState, useRef, useEffect } from "react";
import {
  Factory, Beaker, ShieldCheck, Gauge, Boxes, Award,
  Milk, ArrowRight, CheckCircle2, Heart, Leaf, Globe, Lightbulb, Package, GlassWater, Sparkles
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QUANTUM LEAP — Myanmar's Next Generation OEM Beverage Partner" },
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

type Product = {
  name: string;
  image?: string;
  cta?: boolean;
  badge?: string;
};

const packagingProducts: Product[] = [
  { name: "PET Bottle", image: petBottleImg },
  { name: "Plastic Cap", image: plasticCapImg },
  { name: "PET Preform", image: petPreformImg },
  { name: "Aluminum Cap", image: aluminumCapImg },
  { name: "Label", image: labelImg },
  { name: "Customized Services", cta: true },
];

const beverageProducts: Product[] = [
  { name: "Energy & Electrolyte", image: bevElectrolyteImg },
  { name: "Soft & Carbonated", image: bevSoftDrinkImg },
  { name: "Juice & Flavored", image: bevFlavoredImg },
  { name: "Tea & Functional", image: bevTeaImg },
  { name: "Dairy & Soy Milk", image: bevDairyImg, badge: "Coming Soon" },
];

const coreValues = [
  {
    icon: Heart,
    title: "Employee Well-Being",
    desc: "We value our people as the driving force behind our success. QUANTUM LEAP promotes a positive workplace culture that prioritizes safety, respect, teamwork, and professional growth.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Sustainability is integrated into our operations. We continuously improve our manufacturing processes to reduce environmental impact through efficient resource management and responsible packaging solutions.",
  },
  {
    icon: Globe,
    title: "Community & Social Responsibility",
    desc: "QUANTUM LEAP believes in building meaningful contributions to society by maintaining ethical business practices, supporting local communities, and creating trusted partnerships with customers and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Packaging Development",
    desc: "With advanced manufacturing capabilities, QUANTUM LEAP develops customized PET bottles, closures, and packaging solutions designed to support diverse beverage categories and evolving consumer demands.",
  },
];

function ProductCard({ product }: { product: Product }) {
  const { name, image, cta, badge } = product;

  if (cta) {
    return (
      <Link
        to="/contact"
        className="group shrink-0 snap-start w-[78%] sm:w-[55%] md:w-auto rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all"
      >
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-gradient-brand flex flex-col items-center justify-center text-white text-center px-6">
          <Sparkles className="h-10 w-10 mb-3 opacity-90" />
          <div className="font-display text-lg font-bold mb-1">Need something custom?</div>
          <p className="text-sm text-white/85 leading-snug max-w-[14rem] mb-4">Bespoke bottles, caps & labels engineered to your brand.</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-foreground text-xs font-semibold px-3.5 py-1.5">
            Let's talk <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/products"
      className="group shrink-0 snap-start w-[78%] sm:w-[55%] md:w-auto rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-brand text-white">
            <Package className="h-10 w-10" />
          </div>
        )}
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-accent text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-base md:text-lg font-bold">{name}</h3>
      </div>
    </Link>
  );
}


function Home() {
  const [category, setCategory] = useState<"packaging" | "beverage">("packaging");
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover bg-foreground"
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
              QUANTUM LEAP is a Myanmar-based OEM beverage manufacturer specializing in PET bottling,
              beverage formulation, and scalable production solutions for local and international brands.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition">
                Request a Quotation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                Explore Products
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> FDA & Halal Certified</span>
              <span className="inline-flex items-center gap-1.5"><Gauge className="h-4 w-4 text-accent" /> 24,000 BPH Capacity</span>
              <span className="inline-flex items-center gap-1.5"><Factory className="h-4 w-4 text-accent" /> 10-Acre Facility</span>
            </div>
          </div>
        </div>

      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10", suffix: "acre", label: "Integrated facility" },
            { value: "24K", suffix: "BPH", label: "Production capacity" },
            { value: "5+", suffix: "brands", label: "Produced for partners" },
            { value: "3", suffix: "certs", label: "FDA · Halal · ISO" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {s.value}<span className="text-primary text-lg ml-1">{s.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="py-10 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-5">
            Trusted by leading beverage brands
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg md:text-xl font-bold text-foreground/60">
            <span className="hover:text-foreground transition">Pokka Orange</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-foreground transition">Sponsor Energy</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-foreground transition">7go</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-foreground transition">Spider</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-foreground transition">ISO Plus</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-foreground transition">Burma Club</span>
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
              Located on a 10-acre industrial campus in Yangon Industrial Park, QUANTUM LEAP operates a fully integrated OEM beverage manufacturing facility. Our factory combines modern production technology, experienced operational management, and scalable infrastructure to deliver high-quality beverages across multiple categories.
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
            <img src={factoryImg} alt="QUANTUM LEAP factory" className="rounded-3xl shadow-soft w-full" loading="lazy" width={1600} height={1000} />
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
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Product Categories</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Packaging and beverages under one roof.</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From PET bottles and caps to finished beverages — we supply the complete manufacturing and packaging ecosystem your brand needs.
          </p>
        </div>

        {/* Sticky segmented control */}
        <div className="sticky top-24 md:top-32 z-20 -mx-4 px-4 lg:mx-0 lg:px-0 py-3 mb-6 bg-background/85 backdrop-blur-md">
          <div className="mx-auto w-full sm:w-fit grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-muted/60 border border-border">
            {([
              { key: "packaging", label: "Packaging", sub: "Caps · Bottles · Labels", icon: Package, count: packagingProducts.length },
              { key: "beverage", label: "Beverages", sub: "Energy · Soft · Tea · Dairy", icon: GlassWater, count: beverageProducts.length },
            ] as const).map(({ key, label, sub, icon: Icon, count }) => {
              const active = category === key;
              return (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className={`relative flex items-center justify-center gap-2.5 rounded-xl sm:rounded-full px-4 sm:px-6 py-2.5 text-left transition ${
                    active ? "bg-foreground text-background shadow-soft" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold inline-flex items-center gap-1.5">
                      {label}
                      <span className={`text-[10px] rounded-full px-1.5 py-0.5 font-bold ${active ? "bg-background/20 text-background" : "bg-foreground/15 text-foreground"}`}>
                        {count}
                      </span>
                    </span>
                    <span className={`text-[10px] hidden sm:block ${active ? "text-background/70" : "text-muted-foreground/80"}`}>{sub}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards: horizontal snap-carousel on mobile, grid w/ spotlight on desktop */}
        <div className="relative animate-fade-in" key={category}>
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-hide">
            {(category === "packaging" ? packagingProducts : beverageProducts).map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground hover:bg-muted/60 transition">
            Request a quotation
          </Link>
        </div>
      </section>

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
              QUANTUM LEAP is strategically positioned to become Myanmar's premier OEM beverage manufacturing partner. Our modernized facility, scalable production systems, and investment in advanced manufacturing technologies allow us to support both emerging and established beverage brands with efficiency, consistency, and reliability.
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
          <div className="relative rounded-3xl bg-gradient-hero overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <img src={splashImg} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] opacity-20 hidden md:block" loading="lazy" />
            <div className="relative z-10 min-h-[440px] md:min-h-[520px] flex items-center">
              <img src={welcomeImg} alt="QUANTUM LEAP team welcome" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
              <div className="absolute inset-0 bg-gradient-glow opacity-60" />
              <div className="relative w-full p-10 md:p-16 max-w-2xl">
                <Award className="h-10 w-10 text-accent mb-6" />
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  Start your beverage brand with QUANTUM LEAP.
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
        </div>
      </section>
    </Layout>
  );
}
