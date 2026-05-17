import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import {
  ArrowLeft, ArrowRight, Sparkles, Package, CheckCircle2,
  Calculator, BadgeCheck, Factory, Truck,
} from "lucide-react";
import productSelectionImg from "@/assets/odm-product-selection.webp";
import brandSelectImg from "@/assets/odm-brand-select.webp";
import sampleConfirmImg from "@/assets/odm-sample-confirm.webp";
import massProductionImg from "@/assets/odm-mass-production.webp";
import deliveryImg from "@/assets/odm-delivery.webp";
import costingImg from "@/assets/odm-costing.webp";
import regulatoryImg from "@/assets/odm-regulatory.webp";

export const Route = createFileRoute("/services/odm-solutions")({
  head: () => ({ meta: [
    { title: "ODM Solutions — Quantum Leap" },
    { name: "description", content: "From product idea to market-ready beverage. Formula, packaging design, and quality control." },
  ]}),
  component: OdmSolutions,
});

const steps = [
  { icon: Sparkles,    title: "Product Selection",              body: "Choosing from the factory's existing beverage formulas and product categories.", image: productSelectionImg },
  { icon: Package,     title: "Packaging & Branding Selection", body: "Selecting bottle types, packaging options, and customizing labels with the client's brand identity.", image: brandSelectImg },
  { icon: CheckCircle2,title: "Sample Confirmation",            body: "Reviewing and approving product samples, packaging, and final artwork before production.", image: sampleConfirmImg },
  { icon: Calculator,  title: "Costing & Production Planning",  body: "Confirming pricing, MOQ, lead time, and production schedule.", image: costingImg },
  { icon: BadgeCheck,  title: "Regulatory Documentation",       body: "Preparing necessary certifications and product compliance documents for distribution.", image: regulatoryImg },
  { icon: Factory,     title: "Mass Production",                body: "Producing the selected beverage products using existing manufacturing systems and formulas.", image: massProductionImg },
  { icon: Truck,       title: "Delivery & Distribution",        body: "Delivering completed products to warehouses, distributors, or export channels.", image: deliveryImg },
];

function OdmSolutions() {
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
            <span className="text-accent">ODM</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            ODM <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            From product idea to market-ready beverage — formula, packaging design, and quality control under one roof.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              From product idea to market-ready beverage
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Our ODM Beverage Solution is suitable for brands that want to create a new beverage product but need support with product direction, packaging format, production feasibility, and manufacturing planning.
            </p>
            <p>
              Quantum Leap can work together with brand partners to develop a practical beverage concept that fits market needs, factory capability, packaging requirements, and commercial production planning.
            </p>
          </div>
        </div>
      </section>

      {/* S-CURVE JOURNEY */}
      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Formula • Packaging • QC</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Our 7-Step Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A guided path from concept to commercial launch — engineered for brands building something new.</p>
          </div>

          <div className="relative">
            {/* S-curve SVG path (desktop) */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 1600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="odmPath" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d="M 500 40
                   C 800 140, 800 340, 500 440
                   C 200 540, 200 740, 500 840
                   C 800 940, 800 1140, 500 1240
                   L 500 1560"
                fill="none"
                stroke="url(#odmPath)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 8"
              />
            </svg>

            <div className="space-y-10 md:space-y-16 relative">
              {steps.map((step, i) => {
                
                const isLeft = i % 2 === 0;
                const isAccent = i === 0 || i === steps.length - 1;
                return (
                  <div
                    key={step.title}
                    className={`relative md:flex items-center ${isLeft ? "" : "md:flex-row-reverse"}`}
                  >
                    <div className={`md:w-1/2 hidden md:block ${isLeft ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}>
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest ${isAccent ? "text-accent" : "text-primary"}`}>
                        Phase {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg shadow-glow ring-8 ring-muted/40 ${
                        isAccent
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}>
                        {i + 1}
                      </div>
                    </div>

                    <div className={`md:w-1/2 mt-4 md:mt-0 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                      <div className={`group bg-card rounded-2xl border border-border shadow-sm hover:shadow-glow hover:border-primary/30 transition-all overflow-hidden ${isLeft ? "" : "md:text-right"}`}>
                        {step.image && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                          </div>
                        )}
                        <div className="p-6 md:p-8">
                          <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-hero rounded-3xl overflow-hidden p-10 md:p-16 text-center text-white shadow-glow">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to develop your beverage?</h3>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">Our team will guide you from concept to commercial launch.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition group"
              >
                Contact our team
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CertificatesSlider />
    </Layout>
  );
}
