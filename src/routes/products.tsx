import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Zap, Droplets, Citrus, Leaf, Coffee, Milk, Sparkles, Factory, Circle, Package, Box, Tag, Layers } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Quantum Leap" },
      { name: "description", content: "Energy drinks, soft drinks, fruit juices, electrolyte beverages, flavored drinks, tea & functional beverages — manufactured at scale." },
    ],
  }),
  component: Products,
});

const products = [
  { icon: Zap, name: "Energy Drinks", desc: "Manufacturing solutions for high-performance energy beverages with customizable formulations, flavors, and packaging formats." },
  { icon: Droplets, name: "Soft Drinks", desc: "Carbonated and non-carbonated beverage production tailored for local and export market requirements." },
  { icon: Citrus, name: "Fruit Juices", desc: "Production of fruit juice beverages including orange, pineapple, cantaloupe, lychee, and customized formulations." },
  { icon: Leaf, name: "Electrolyte Beverages", desc: "Functional hydration beverages manufactured with consistent quality and advanced processing systems." },
  { icon: Sparkles, name: "Flavored Drinks", desc: "Innovative flavored beverages with nata de coco and fruit-based variations designed for evolving consumer preferences." },
  { icon: Coffee, name: "Tea & Functional", desc: "Tea-based and functional beverages for everyday wellness and performance." },
];

const upcoming = [
  { icon: Milk, name: "UHT Products", desc: "Future expansion into UHT soy milk, dairy beverages, tea beverages, and long-life juice products." },
  { icon: Factory, name: "CSD & Canning", desc: "High-speed carbonated soft drink and canning systems for large-scale beverage production." },
];

const packagingProducts = [
  {
    icon: Circle,
    title: "Plastic Cap",
    items: ["Beverage bottle caps", "Closure solutions for PET bottles"],
  },
  {
    icon: Package,
    title: "PET Bottle",
    items: ["Hot-fill bottles", "Carbonated drink bottles", "Customized PET packaging"],
  },
  {
    icon: Box,
    title: "PET Preform",
    items: ["PET preforms for bottle manufacturing", "Crystallized & non-crystallized preforms", "CSD (carbonated soft drink) preforms"],
  },
  {
    icon: Circle,
    title: "Metal Lug Cap",
    items: ["Twist-off metal caps", "Food jar closures"],
  },
  {
    icon: Circle,
    title: "Aluminum Cap",
    items: ["Aluminum beverage closures", "Tamper-evident caps"],
  },
  {
    icon: Tag,
    title: "Label",
    items: ["Shrink sleeve labels", "Beverage packaging labels"],
  },
  {
    icon: Layers,
    title: "Customized Services",
    items: ["OEM packaging development", "Custom bottle and cap design"],
  },
];

function Products() {
  return (
    <Layout>
      <PageHero eyebrow="Products" title="A complete beverage portfolio." subtitle="From energy and hydration to UHT and canning — the categories we manufacture today, and what's next." />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, name, desc }) => (
            <article key={name} className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-glow transition">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">Coming Soon</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Upcoming categories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcoming.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="rounded-3xl bg-card border-2 border-dashed border-primary/30 p-10">
                <Icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">Packaging</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Packaging Products</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packagingProducts.map(({ icon: Icon, title, items }) => (
            <article key={title} className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-glow transition">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
