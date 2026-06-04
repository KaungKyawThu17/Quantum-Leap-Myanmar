import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import heroBg from "@/assets/pc-hero.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  ArrowRight,
  Droplets,
  Layers,
  PackageOpen,
  Thermometer,
  Sparkles,
  Package,
  Gauge,
  Clock,
  Factory,
} from "lucide-react";

export const Route = createFileRoute("/services/production-capabilities")({
  head: () => ({
    meta: [
      { title: "Production Capabilities — QUANTUM LEAP" },
      {
        name: "description",
        content:
          "PET bottling, dual-purpose PET bottling, standing pouch, and UHT production lines.",
      },
    ],
  }),
  component: ProductionCapabilities,
});

const heroSlides = [{ src: heroBg, width: 1562, height: 878 }];

const productionStatIcons = [Gauge, Factory, Clock] as const;
const productionLineIcons = [
  Droplets,
  Layers,
  PackageOpen,
  Thermometer,
  Sparkles,
  Package,
] as const;

function ProductionCapabilities() {
  const { content } = useLanguage();
  const copy = content.services.production;
  const localizedStats = copy.stats.map((stat, index) => ({
    ...stat,
    icon: productionStatIcons[index],
  }));
  const localizedLines = copy.lines.map((line, index) => ({
    ...line,
    icon: productionLineIcons[index],
  }));

  return (
    <Layout>
      <ServiceMediaHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        highlight={copy.highlight}
        subtitle={copy.subtitle}
        slides={heroSlides}
      />

      {/* STATS STRIP */}
      <section className="relative -mt-12 z-20 mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {localizedStats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-card border border-border rounded-2xl p-6 shadow-glow flex items-center gap-4"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-foreground leading-none">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {copy.introTitle}
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>{copy.intro1}</p>
            <p>{copy.intro2}</p>
          </div>
        </div>
      </section>

      {/* LINES — interactive cards */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent-text font-semibold mb-3">
              {copy.linesEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
              {copy.linesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {localizedLines.map((line, i) => {
              const Icon = line.icon;
              const isSoon = line.status === "soon";
              const isFuture = line.status === "future";
              return (
                <div
                  key={line.name}
                  className={`group relative bg-card rounded-3xl border border-border p-7 md:p-8 transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-1 hover:shadow-glow hover:border-primary/40 overflow-hidden ${i === 0 ? "lg:col-span-2" : ""}`}
                >
                  <div className="relative flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${isSoon ? "bg-accent/10 text-accent-text" : isFuture ? "bg-muted text-muted-foreground" : "bg-gradient-brand text-white"} motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${isSoon ? "bg-accent/15 text-accent-text" : isFuture ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}
                    >
                      {line.tag}
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-none">
                        {line.capacity}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">
                        {line.unit}
                      </span>
                    </div>
                  </div>

                  <h3 className="relative font-display text-xl font-bold text-foreground mb-3">
                    {line.name}
                  </h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">
                    {line.body}
                  </p>

                  <div className="relative flex flex-wrap gap-2 pt-4 border-t border-border">
                    {line.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-foreground/80 bg-muted px-2.5 py-1 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-hero rounded-3xl overflow-hidden text-white shadow-glow">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative z-10 min-h-[380px] md:min-h-[440px] flex items-center">
              <img
                src={welcomeImg}
                alt="QUANTUM LEAP team welcome"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
                sizes="(min-width: 1280px) 1024px, calc(100vw - 2rem)"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
              <div className="absolute inset-0 bg-gradient-glow opacity-60" />
              <div className="relative w-full p-10 md:p-16 text-center md:text-left max-w-2xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {copy.ctaTitle}
                </h3>
                <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">{copy.ctaBody}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition-colors duration-200 group"
                >
                  {copy.ctaButton}
                  <ArrowRight className="h-5 w-5 motion-safe:group-hover:translate-x-1 motion-safe:transition-transform motion-safe:duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificatesSlider />
    </Layout>
  );
}
