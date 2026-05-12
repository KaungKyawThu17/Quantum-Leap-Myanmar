import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({ meta: [
    { title: "OEM Manufacturing — Quantum Leap" },
    { name: "description", content: "Reliable beverage production for brands with their own formula. PET manufacturing from consultation to delivery." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / OEM"
      title="OEM Manufacturing"
      subtitle="Reliable production for your beverage brand."
      intro="Our OEM Beverage Manufacturing service is designed for brands that already have their own product formula, brand concept, or packaging direction. Quantum Leap supports the manufacturing process by producing beverages according to agreed product specifications, quality standards, and production requirements — so brand owners can focus on sales, marketing, and distribution."
      sections={[
        { heading: "PET Manufacturing — Our 8-Step Process", items: [
          { title: "Consultation & Requirement Discussion", body: "Understanding the client's product concept, target market, packaging needs, and production requirements." },
          { title: "Research & Formula Development", body: "Developing customized beverage formulas and product samples based on the client's preferences." },
          { title: "Sampling & Product Testing", body: "Conducting taste tests, quality checks, and product stability evaluations before approval." },
          { title: "Packaging & Bottle Development", body: "Designing or developing PET bottles, labels, caps, and carton packaging solutions." },
          { title: "Costing & Quotation", body: "Preparing production costing, MOQ, timeline, and commercial proposal for client approval." },
          { title: "Regulatory & Certification Support", body: "Supporting product registration, FDA compliance, Halal certification, and documentation processes." },
          { title: "Mass Production", body: "Executing large-scale production with controlled manufacturing and quality assurance procedures." },
          { title: "Packaging & Delivery", body: "Packing finished products and arranging delivery or export shipment to the client." },
        ]},
      ]}
    />
  ),
});
