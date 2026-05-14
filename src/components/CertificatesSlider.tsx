import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import fda from "@/assets/certificates/fda.png";
import iso from "@/assets/certificates/iso-22000.png";
import halal from "@/assets/certificates/halal.png";
import fire from "@/assets/certificates/fire-safety.png";
import exporter from "@/assets/certificates/exporter-importer.png";
import electrical from "@/assets/certificates/electrical-inspection.png";

const certificates = [
  { src: fda, label: "FDA — Food Manufacturing Recommendation" },
  { src: iso, label: "ISO 22000:2018 — Food Safety Management" },
  { src: halal, label: "Halal Certification" },
  { src: fire, label: "Fire Safety Certification" },
  { src: exporter, label: "Exporter / Importer Registration" },
  { src: electrical, label: "Mechanical & Electrical Inspection" },
];

export function CertificatesSlider() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Certifications</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Trusted, certified, and compliant
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="px-12"
        >
          <CarouselContent>
            {certificates.map((c) => (
              <CarouselItem key={c.label} className="md:basis-1/2 lg:basis-1/3">
                <figure className="group">
                  <div className="relative rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] ring-1 ring-amber-200 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="rounded-md bg-white p-2 ring-1 ring-border">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm bg-white">
                        <img
                          src={c.src}
                          alt={c.label}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm font-medium text-foreground/80">
                    {c.label}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
