import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/production-capabilities")({
  head: () => ({ meta: [
    { title: "Production Capabilities — Quantum Leap" },
    { name: "description", content: "PET bottling, dual lines, standing pouches and UHT production capabilities up to 24,000 BPH." },
  ]}),
  component: () => (
    <ServicePage
      eyebrow="Services / Production"
      title="Production Capabilities"
      subtitle="Multiple high-throughput lines built for flexibility and scale."
      sections={[
        { heading: "PET Bottling Line", body: "High-speed PET bottling system producing 400 bottles per minute with Ultraclean Hot-Fill technology." },
        { heading: "Dual PET Bottling Line", body: "Dual-purpose bottling system producing 5,000 bottles per hour, supporting both PET and recyclable glass packaging." },
        { heading: "Standing Pouch Line", body: "Flexible packaging production line capable of filling 7,000 to 10,000 pouches per hour." },
        { heading: "UHT Production Line", body: "Advanced UHT beverage processing for dairy and non-dairy beverage products." },
        { heading: "Upcoming CSD & Canning", body: "Expansion into high-speed carbonated soft drink and canning systems for large-scale beverage production." },
      ]}
    />
  ),
});
