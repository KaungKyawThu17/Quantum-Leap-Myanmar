import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/certifications")({
  head: () => ({ meta: [
    { title: "Certifications — Quantum Leap" },
    { name: "description", content: "FDA, Halal, ISO 22000, HACCP, GMP & GHP and additional operational certifications." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / Compliance"
      title="Certifications"
      subtitle="Operating to international food safety and manufacturing standards."
      sections={[
        { heading: "Operational Certifications", bullets: [
          "FDA Manufacturing License",
          "Halal Certification",
          "Import & Export Registration",
          "Ministry of Industry Registration",
          "Fire Safety Certification",
          "Mechanical & Electrical Inspection Certifications",
        ]},
        { heading: "Food Safety Standards", bullets: ["ISO 22000", "HACCP", "GMP & GHP"] },
      ]}
    />
  ),
});
