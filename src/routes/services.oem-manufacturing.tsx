import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import {
  ArrowRight, MessagesSquare, FlaskConical, TestTube2, Package,
  Calculator, BadgeCheck, Factory, Truck,
} from "lucide-react";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({ meta: [
    { title: "OEM Manufacturing — Quantum Leap" },
    { name: "description", content: "Reliable beverage production for brands with their own formula. PET manufacturing from consultation to delivery." },
  ]}),
  component: OemManufacturing,
});

const steps = [
  { icon: MessagesSquare, title: "Consultation & Requirement Discussion", body: "Understanding the client's product concept, target market, packaging needs, and production requirements." },
  { icon: FlaskConical,   title: "Research & Formula Development",        body: "Developing customized beverage formulas and product samples based on the client's preferences." },
  { icon: TestTube2,      title: "Sampling & Product Testing",            body: "Conducting taste tests, quality checks, and product stability evaluations before approval." },
  { icon: Package,        title: "Packaging & Bottle Development",        body: "Designing or developing PET bottles, labels, caps, and carton packaging solutions." },
  { icon: Calculator,     title: "Costing & Quotation",                   body: "Preparing production costing, MOQ, timeline, and commercial proposal for client approval." },
  { icon: BadgeCheck,     title: "Regulatory & Certification Support",    body: "Supporting product registration, FDA compliance, Halal certification, and documentation processes." },
  { icon: Factory,        title: "Mass Production",                       body: "Executing large-scale production with controlled manufacturing and quality assurance procedures." },
  { icon: Truck,          title: "Packaging & Delivery",                  body: "Packing finished products and arranging delivery or export shipment to the client." },
];

function OemManufacturing() {
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
            <Link to="/services" className="hover:text-white transition">Services</Link>
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
              Reliable production for your beverage brand
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Our OEM Beverage Manufacturing service is designed for brands that already have their own product formula, brand concept, or packaging direction. Quantum Leap supports the manufacturing process by producing beverages according to agreed product specifications, quality standards, and production requirements.
            </p>
            <p>
              We help brand owners focus on sales, marketing, and distribution while our factory team handles professional beverage production with rigorous quality control measures.
            </p>
          </div>
        </div>
      </section>

      {/* S-CURVE JOURNEY */}
      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">PET Manufacturing</div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Our 8-Step Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A streamlined path from vision to shelf — engineered for quality at every stage.</p>
          </div>

          <div className="relative">
            {/* S-curve SVG path (desktop) */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 1800"
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
                   L 500 1760"
                fill="none"
                stroke="url(#oemPath)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 8"
              />
            </svg>

            <div className="space-y-10 md:space-y-16 relative">
              {steps.map((step, i) => {
                const Icon = step.icon;
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
                      <div className={`group bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-glow hover:border-primary/30 transition-all ${isLeft ? "" : "md:text-right"}`}>
                        <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-brand mb-4 group-hover:scale-110 transition ${isLeft ? "" : "md:ml-auto"}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
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
      </section>
    </Layout>
  );
}
