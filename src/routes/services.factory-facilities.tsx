import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/factory-facilities")({
  head: () => ({ meta: [
    { title: "Factory & Facilities — Quantum Leap" },
    { name: "description", content: "10-acre campus with advanced production equipment, utilities, cold storage and warehousing." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / Facilities"
      title="Factory & Facilities"
      subtitle="Advanced processing and filling systems engineered for large-scale beverage production."
      sections={[
        { heading: "Production Equipment", bullets: [
          "Blowing Machine — 26,000 bottles/hour",
          "Filling Capacity — 24,000 bottles/hour",
          "Monoblock Filling System",
          "Tunnel Cooling System",
          "Automatic Labeling Machines",
          "Shrink Wrapping & Packing Systems",
        ]},
        { heading: "Utility Systems", bullets: [
          "2500 KVA transformers",
          "CAT generators",
          "High-pressure air compressors",
          "Diesel boiler systems",
        ]},
        { heading: "Cold Storage", bullets: ["Frozen storage — 39 tons", "Chill room — 19 tons"] },
        { heading: "Warehouse Facilities", body: "Dedicated raw material, packaging, and spare parts storage areas designed to support efficient production flow and inventory management." },
      ]}
    />
  ),
});
