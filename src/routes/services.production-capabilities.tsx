import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import heroBg from "@/assets/pc-hero.webp";
import dualLineImg from "@/Dual_line.webp";
import petLineImg from "@/PET_Line.webp";
import pouchLineImg from "@/Pouch_Line.webp";
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

type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const productionStatIcons = [Gauge, Factory, Clock] as const;
const productionLineIcons = [
  Droplets,
  Layers,
  PackageOpen,
  Thermometer,
  Sparkles,
  Package,
] as const;
const productionLineMedia: Array<ImageAsset | undefined> = [
  { src: petLineImg, width: 3840, height: 2160, alt: "PET bottling production line" },
  { src: dualLineImg, width: 6597, height: 4398, alt: "Dual PET bottling production line" },
  { src: pouchLineImg, width: 3840, height: 2160, alt: "Standing pouch production line" },
  undefined,
  undefined,
  undefined,
];

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
    image: productionLineMedia[index],
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
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow ${line.image ? "" : "p-7 md:p-8"}`}
                >
                  {line.image && (
                    <div className="relative h-56 overflow-hidden bg-muted md:h-60">
                      <img
                        src={line.image.src}
                        alt={line.image.alt}
                        width={line.image.width}
                        height={line.image.height}
                        sizes="(min-width: 1024px) 405px, (min-width: 768px) calc(50vw - 3rem), calc(100vw - 2rem)"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                      <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-soft backdrop-blur-md">
                        {line.tag}
                      </span>
                    </div>
                  )}
                  <div
                    className={`relative flex flex-1 flex-col ${line.image ? "p-7 md:p-8" : ""}`}
                  >
                    {!line.image && (
                      <div className="relative mb-6 flex items-start justify-between">
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
                    )}

                    {line.image ? (
                      <div className="relative mb-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                        <h3 className="font-display text-2xl font-bold leading-tight text-foreground">
                          {line.name}
                        </h3>
                        <div className="w-fit rounded-2xl border border-border bg-muted/60 px-4 py-3 md:text-right">
                          <div className="font-display text-3xl font-extrabold leading-none text-foreground">
                            {line.capacity}
                          </div>
                          <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {line.unit}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}

                    <p
                      className={`relative text-muted-foreground text-sm leading-relaxed ${line.image ? "mb-6 min-h-16" : "mb-5"}`}
                    >
                      {line.body}
                    </p>

                    <div className="relative mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
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
