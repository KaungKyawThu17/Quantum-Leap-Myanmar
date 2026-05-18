import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import plasticCapImg from "@/assets/pkg-plastic-cap.webp";
import petBottleImg from "@/assets/pkg-pet-bottle.webp";
import petPreformImg from "@/assets/pkg-pet-preform.webp";
import aluminumCapImg from "@/assets/pkg-aluminum-cap.webp";
import labelImg from "@/assets/pkg-label.jpeg";
import prodElectrolyteImg from "@/assets/prod-electrolyte.webp";
import prodFlavoredImg from "@/assets/prod-flavored.webp";
import prodSoftDrinkImg from "@/assets/prod-soft-drink.webp";
import prodTeaImg from "@/assets/prod-tea.webp";
import prodFruitJuiceImg from "@/assets/prod-fruit-juice.webp";
import prodEnergyImg from "@/assets/prod-energy.webp";
import prodDairyImg from "@/assets/prod-dairy.webp";

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
  { name: "Energy Drinks", image: prodEnergyImg, desc: "Manufacturing solutions for high-performance energy beverages with customizable formulations, flavors, and packaging formats." },
  { name: "Soft Drinks", image: prodSoftDrinkImg, desc: "Carbonated and non-carbonated beverage production tailored for local and export market requirements." },
  { name: "Fruit Juices", image: prodFruitJuiceImg, desc: "Production of fruit juice beverages including orange, pineapple, cantaloupe, lychee, and customized formulations." },
  { name: "Electrolyte Beverages", image: prodElectrolyteImg, desc: "Functional hydration beverages manufactured with consistent quality and advanced processing systems." },
  { name: "Flavored Drinks", image: prodFlavoredImg, desc: "Innovative flavored beverages with nata de coco and fruit-based variations designed for evolving consumer preferences." },
  { name: "Tea & Functional", image: prodTeaImg, desc: "Tea-based and functional beverages for everyday wellness and performance." },
];

const upcoming = [
  { image: prodDairyImg, name: "Dairy Products", desc: "Soy milk and dairy products." },
];

const packagingProducts = [
  { title: "Plastic Cap", image: plasticCapImg, items: ["Beverage bottle caps", "Closure solutions for PET bottles"] },
  { title: "PET Bottle", image: petBottleImg, items: ["Hot-fill bottles", "Carbonated drink bottles", "Customized PET packaging"] },
  { title: "PET Preform", image: petPreformImg, items: ["PET preforms for bottle manufacturing", "Crystallized & non-crystallized preforms", "CSD (carbonated soft drink) preforms"] },
  { title: "Aluminum Cap", image: aluminumCapImg, items: ["Aluminum beverage closures", "Tamper-evident caps"] },
  { title: "Label", image: labelImg, items: ["Shrink sleeve labels", "Beverage packaging labels"] },
  { title: "Customized Services", items: ["OEM packaging development", "Custom bottle and cap design"] },
];

function Products() {
  return (
    <Layout>
      <PageHero eyebrow="Products" title="A complete beverage portfolio." subtitle="From energy and hydration to UHT and canning — the categories we manufacture today, and what's next." />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ name, desc, image }) => (
            <article key={name} className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition">
              {image && (
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img src={image} alt={name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              )}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
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
          <div className="grid gap-6 max-w-xl mx-auto">
            {upcoming.map(({ image, name, desc }) => (
              <div key={name} className="rounded-3xl bg-card border-2 border-dashed border-primary/30 overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-10">
                  <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
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
          {packagingProducts.map(({ title, items, image }) => (
            <article key={title} className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition">
              {image && (
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
