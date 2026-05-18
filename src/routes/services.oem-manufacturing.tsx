import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/welcome.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import {
  ArrowLeft, ArrowRight, Package, Container, Clock,
} from "lucide-react";
import step01 from "@/assets/oem-step-01-consultation.webp";
import step02 from "@/assets/oem-step-02-preform.webp";
import step03 from "@/assets/oem-step-03-blowing.webp";
import step04 from "@/assets/oem-step-04-water.webp";
import step05 from "@/assets/oem-step-05-rawmaterial.webp";
import step06 from "@/assets/oem-step-06-mixing.webp";
import step07 from "@/assets/oem-step-07-uht.webp";
import step08 from "@/assets/oem-step-08-filling.webp";
import step09 from "@/assets/oem-step-09-labelling.webp";
import step10 from "@/assets/oem-step-10-quality.webp";
import step11 from "@/assets/oem-step-11-storage.webp";
import step12 from "@/assets/oem-step-12-distribution.webp";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({ meta: [
    { title: "OEM Manufacturing — Quantum Leap" },
    { name: "description", content: "Reliable beverage production for brands with their own formula. PET manufacturing from consultation to delivery." },
  ]}),
  component: OemManufacturing,
});

const steps: { title: string; body: string; image?: string }[] = [
  { title: "Product Consultation & Packaging Development", image: step01, body: "We begin by understanding the customer's beverage category, target market, packaging requirements, bottle size, and branding objectives. Our team supports bottle design discussions, packaging structure planning, and production feasibility evaluation." },
  { title: "PET Preform Preparation", image: step02, body: "Food-grade PET preforms are prepared according to required bottle specifications including neck finish, bottle volume, and product compatibility to ensure consistent packaging quality and structural integrity." },
  { title: "Bottle Blowing Process", image: step03, body: "Using high-speed blowing systems, PET preforms are heated and stretch-blown into customized bottle shapes. This process ensures lightweight, durable, and high-quality beverage packaging suitable for multiple beverage categories." },
  { title: "Water Treatment System", image: step04, body: "Our water treatment systems utilize advanced purification technologies including multi-stage filtration, activated carbon treatment, and reverse osmosis systems to ensure product safety and beverage quality." },
  { title: "Raw Material Inspection", image: step05, body: "All raw materials, ingredients, packaging materials, and PET components undergo strict inspection procedures before entering the production process to maintain food safety and manufacturing consistency." },
  { title: "Beverage Mixing & Formulation", image: step06, body: "Sugar dissolving, powder blending, syrup preparation, and beverage formulation are controlled through standardized processing systems to ensure flavor consistency and product quality." },
  { title: "UHT Sterilization & Processing", image: step07, body: "Ultra-High Temperature (UHT) sterilization systems help ensure product safety, extended shelf life, and manufacturing stability while maintaining beverage taste and quality standards." },
  { title: "Filling & Capping", image: step08, body: "Quantum Leap utilizes integrated filling and capping systems designed for efficient and hygienic beverage production. Our automated systems support scalable production capacity with reduced operational contamination risks." },
  { title: "Labeling & Packaging", image: step09, body: "High-speed labeling systems apply customized labels and branding materials to finished products. Packaging options include shrink wrapping, carton packing, tray packing, and palletizing solutions." },
  { title: "Quality Control & Inspection", image: step10, body: "Strict quality control procedures are implemented throughout every production stage. Automated inspection systems and quality assurance teams monitor bottle integrity, filling accuracy, labeling quality, and packaging consistency." },
  { title: "Storage & Warehouse Management", image: step11, body: "Finished products are stored in controlled warehouse environments designed to support inventory management, product safety, and efficient distribution planning." },
  { title: "Logistics & Distribution Support", image: step12, body: "Quantum Leap supports local and export distribution requirements with scalable production planning and coordinated logistics support for OEM partners." },
];

function OemManufacturing() {
  const [tab, setTab] = useState<"pet" | "can">("pet");
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
            <span className="text-accent">OEM</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            OEM <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">Manufacturing</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            From concept to mass production, we provide the infrastructure and expertise to scale your beverage brand globally.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Your Trusted OEM Partner for Ready to Drink Beverages
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Quantum Leap provides integrated PET bottle manufacturing and beverage packaging solutions designed to support OEM and private label beverage brands. Our production systems support customized PET bottle development, high-speed bottling operations, labeling, and secondary packaging solutions to meet diverse market and product requirements.
            </p>
            <p>
              From bottle design and beverage formulation to filling and final packaging, Quantum Leap delivers scalable and efficient manufacturing services supported by advanced production technology and quality-focused operations.
            </p>
          </div>
        </div>
      </section>

      {/* MANUFACTURING TABS */}
      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Tab switcher */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div role="tablist" className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
              <button
                role="tab"
                aria-selected={tab === "pet"}
                onClick={() => setTab("pet")}
                className={`inline-flex items-center gap-2 rounded-full px-5 md:px-7 py-2.5 text-sm md:text-base font-semibold transition ${
                  tab === "pet"
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Package className="h-4 w-4" />
                PET Manufacturing
              </button>
              <button
                role="tab"
                aria-selected={tab === "can"}
                onClick={() => setTab("can")}
                className={`inline-flex items-center gap-2 rounded-full px-5 md:px-7 py-2.5 text-sm md:text-base font-semibold transition ${
                  tab === "can"
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Container className="h-4 w-4" />
                Can Manufacturing
                <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tab === "can" ? "bg-white/20 text-white" : "bg-accent/15 text-accent"}`}>Soon</span>
              </button>
            </div>
          </div>

          {tab === "pet" ? (
            <>
          <div className="text-center mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">PET Manufacturing</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Our 12-Step Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A streamlined path from vision to shelf — engineered for quality at every stage.</p>
          </div>

          <div className="relative">
            {/* S-curve SVG path (desktop) */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 2600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="oemPath" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d="M 500 40
                   C 800 140, 800 340, 500 440
                   C 200 540, 200 740, 500 840
                   C 800 940, 800 1140, 500 1240
                   C 200 1340, 200 1540, 500 1640
                   C 800 1740, 800 1940, 500 2040
                   C 200 2140, 200 2340, 500 2440
                   L 500 2560"
                fill="none"
                stroke="url(#oemPath)"
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
                          <div className="aspect-[16/9] overflow-hidden bg-muted">
                            <img
                              src={step.image}
                              alt={step.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
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
            </>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-3xl border border-border bg-card p-10 md:p-16 text-center overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <Container className="h-8 w-8" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                    <Clock className="h-3.5 w-3.5" /> Coming Soon
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">Can Manufacturing</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                    Quantum Leap is currently expanding its manufacturing capabilities with a future can production line designed to support both carbonated and non-carbonated beverages.
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                    The upcoming can manufacturing facility will focus on high-speed production efficiency, product quality consistency, and sustainable aluminum packaging solutions for evolving beverage market demands.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:scale-105 transition"
                  >
                    Register your interest <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
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
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to discuss your project?</h3>
              <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">Our team will guide you from initial enquiry to scaled production.</p>
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
        </div>
      </section>

      <CertificatesSlider />
    </Layout>
  );
}
