import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/odm-solutions")({
  head: () => ({ meta: [
    { title: "ODM Solutions — Quantum Leap" },
    { name: "description", content: "From product idea to market-ready beverage. Formula, packaging design, and quality control." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / ODM"
      title="ODM Solutions"
      subtitle="From product idea to market-ready beverage."
      intro="Our ODM Beverage Solution is suitable for brands that want to create a new beverage product but need support with product direction, packaging format, production feasibility, and manufacturing planning. Quantum Leap works with brand partners to develop a practical beverage concept that fits market needs, factory capability, and commercial production planning."
      sections={[
        { heading: "Formula • Packaging Design • Quality Control", items: [
          { title: "Product Selection", body: "Choosing from the factory's existing beverage formulas and product categories." },
          { title: "Packaging & Branding Selection", body: "Selecting bottle types, packaging options, and customizing labels with the client's brand identity." },
          { title: "Sample Confirmation", body: "Reviewing and approving product samples, packaging, and final artwork before production." },
          { title: "Costing & Production Planning", body: "Confirming pricing, MOQ, lead time, and production schedule." },
          { title: "Regulatory Documentation", body: "Preparing necessary certifications and product compliance documents for distribution." },
          { title: "Mass Production", body: "Producing the selected beverage products using existing manufacturing systems and formulas." },
          { title: "Delivery & Distribution", body: "Delivering completed products to warehouses, distributors, or export channels." },
        ]},
      ]}
    />
  ),
});
