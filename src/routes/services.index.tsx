import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-factory.jpg";
import { Factory, Beaker, Building2, Boxes, Lightbulb, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — QUANTUM LEAP" },
      { name: "description", content: "Complete OEM and ODM beverage manufacturing services from product concept to full-scale production." },
    ],
  }),
  component: Services,
});

const featuredServices = [
  { icon: Boxes, to: "/services/oem-manufacturing", title: "OEM Manufacturing", desc: "Production from your existing formula and brand." },
  { icon: Lightbulb, to: "/services/odm-solutions", title: "ODM Solutions", desc: "Develop a new beverage from concept to market-ready product." },
];

const otherServices = [
  { icon: Factory, to: "/services/production-capabilities", title: "Production Capabilities", desc: "PET bottling, dual lines, standing pouches, and UHT — at scale." },
  { icon: Beaker, to: "/services/product-development", title: "Product Development", desc: "Packaging, formats, and quality assurance from idea to shelf." },
  { icon: Building2, to: "/services/factory-facilities", title: "Factory & Facilities", desc: "Inside our 10-acre integrated manufacturing campus." },
];

function ServiceCard({ icon: Icon, to, title, desc }: { icon: typeof Factory; to: string; title: string; desc: string }) {
  return (
    <Link to={to} className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-glow transition flex flex-col items-center text-center">
      <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Services"
        title="OEM and ODM beverage manufacturing — end to end."
        subtitle="QUANTUM LEAP provides complete OEM and ODM beverage manufacturing solutions designed to support beverage brands from product concept to full-scale production."
        posterSrc={heroImg}
      />
      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {featuredServices.map((s) => <ServiceCard key={s.to} {...s} />)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((s) => <ServiceCard key={s.to} {...s} />)}
        </div>
      </section>
      <CertificatesSlider />
    </Layout>
  );
}
