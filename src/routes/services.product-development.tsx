import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/product-development")({
  head: () => ({ meta: [
    { title: "Product Development — Quantum Leap" },
    { name: "description", content: "Packaging solutions, formats, quality assurance, and export support for your beverage brand." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / Development"
      title="Product Development"
      subtitle="From packaging design to export-ready quality assurance."
      sections={[
        { heading: "Packaging Solutions", body: "Flexible packaging support including PET bottles, standing pouches, and future glass bottle manufacturing." },
        { heading: "Packaging Types", bullets: ["PET", "TR", "TBA"] },
        { heading: "Package Formats", bullets: ["PET — 250ml", "PET — 320ml", "PET — 500ml", "TR — multiple sizes", "TBA — multiple sizes"] },
        { heading: "Quality Assurance", body: "Strict quality control procedures supported by FDA compliance, Halal certification, and internationally recognized food safety standards." },
        { heading: "Export Support", body: "Operational support for local and international distribution requirements, including scalable production planning." },
      ]}
    />
  ),
});
