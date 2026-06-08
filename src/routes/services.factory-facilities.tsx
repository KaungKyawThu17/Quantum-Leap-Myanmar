import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import factoryHero1 from "@/assets/factory-hero-1.webp";
import factoryHero2 from "@/assets/factory-hero-2.webp";
import factoryHero3 from "@/assets/factory-hero-3.webp";
import freezerRoomImg from "@/assets/optimized/freezer-room-card.webp";
import coolRoomImg from "@/assets/optimized/cool-room-card.webp";
import productionBlowingImg from "@/assets/optimized/production-tunnel-cooling-card.jpg";
import productionFillingCapacityImg from "@/assets/optimized/production-filling-capacity-card.jpg";
import productionMonoblockFillingImg from "@/assets/optimized/production-monoblock-filling-card.jpg";
import productionTunnelCoolingImg from "@/assets/optimized/odm-mass-production-card.jpg";
import productionAutoLabellingImg from "@/assets/optimized/production-auto-labelling-card.jpg";
import productionWrappingImg from "@/assets/optimized/production-wrapping-card.jpg";
import utilityWastewaterImg from "@/assets/optimized/utility-wastewater-card.jpg";
import utilityAirCompressorImg from "@/assets/optimized/utility-air-compressor-card.jpg";
import utilityBoilerImg from "@/assets/optimized/utility-boiler-card.jpg";
import utilityGeneratorImg from "@/assets/optimized/utility-generator-card.jpg";
import utilityTransformersImg from "@/assets/optimized/utility-transformers-card.jpg";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  ArrowRight,
  Wind,
  Droplets,
  Tag,
  PackageOpen,
  Snowflake,
  Zap,
  Fuel,
  Gauge,
  Warehouse,
  Building2,
  MapPin,
  Ruler,
  Recycle,
} from "lucide-react";

export const Route = createFileRoute("/services/factory-facilities")({
  head: () => ({
    meta: [
      { title: "Factory & Facilities — QUANTUM LEAP" },
      {
        name: "description",
        content:
          "A 10-acre industrial campus with production equipment, utility systems, cold storage, and warehouse facilities.",
      },
    ],
  }),
  component: FactoryFacilities,
});

const heroSlides = [
  { src: factoryHero1, width: 1483, height: 834 },
  { src: factoryHero2, width: 1483, height: 834 },
  { src: factoryHero3, width: 1408, height: 792 },
];

const facilityStatIcons = [MapPin, Gauge] as const;

const facilityGroupAssets = [
  {
    icon: Building2,
    items: [
      { icon: Wind, image: productionBlowingImg },
      { icon: Droplets, image: productionFillingCapacityImg },
      { icon: Gauge, image: productionMonoblockFillingImg },
      { icon: Snowflake, image: productionTunnelCoolingImg },
      { icon: Tag, image: productionAutoLabellingImg },
      { icon: PackageOpen, image: productionWrappingImg },
    ],
  },
  {
    icon: Zap,
    items: [
      { icon: Zap, image: utilityTransformersImg },
      { icon: Fuel, image: utilityGeneratorImg },
      { icon: Wind, image: utilityAirCompressorImg },
      { icon: Fuel, image: utilityBoilerImg },
      { icon: Recycle, image: utilityWastewaterImg },
    ],
  },
  {
    icon: Snowflake,
    items: [
      { icon: Snowflake, image: freezerRoomImg },
      { icon: Snowflake, image: coolRoomImg },
    ],
  },
] as const;

const warehouseIcons = [Warehouse, PackageOpen, Ruler] as const;

function FactoryFacilities() {
  const { content } = useLanguage();
  const copy = content.services.facilities;
  const localizedStats = copy.stats.map((stat, index) => ({
    ...stat,
    icon: facilityStatIcons[index],
  }));
  const localizedGroups = copy.groups.map((group, groupIndex) => {
    const groupAssets = facilityGroupAssets[groupIndex];

    return {
      ...group,
      icon: groupAssets.icon,
      items: group.items.map((item, itemIndex) => ({
        ...item,
        ...groupAssets.items[itemIndex],
      })),
    };
  });

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
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
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

      {/* FACILITY GROUPS */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12 md:space-y-16">
          {localizedGroups.map((g) => {
            const GIcon = g.icon;
            return (
              <div key={g.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-brand text-white">
                    <GIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {g.eyebrow}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
                      {g.title}
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {g.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <div
                        key={it.label}
                        className={`group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-glow motion-safe:hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-200 ${
                          it.image ? "" : "p-6"
                        }`}
                      >
                        {it.image ? (
                          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                            <img
                              src={it.image}
                              alt={it.imageAlt ?? it.label}
                              className="h-full w-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              decoding="async"
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
                            <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow-lg">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>
                        ) : null}
                        <div className={it.image ? "p-5" : ""}>
                          <div className="flex items-start gap-4">
                            {!it.image ? (
                              <div className="flex-shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-brand group-hover:text-white transition-[background-color,color] duration-200">
                                <Icon className="h-5 w-5" />
                              </div>
                            ) : null}
                            <div>
                              <h4 className="font-display text-base font-bold text-foreground mb-1">
                                {it.label}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {it.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WAREHOUSE — feature row */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative grid min-h-[430px] items-center overflow-hidden rounded-lg border border-border bg-foreground p-8 text-white shadow-soft md:p-12 lg:grid-cols-2 lg:gap-10">
          <img
            src={factoryHero2}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={1483}
            height={834}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/68 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
              {copy.storageEyebrow}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              {copy.warehouseTitle}
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">{copy.warehouseBody}</p>
          </div>
          <div className="relative grid grid-cols-3 gap-4">
            {copy.warehouseItems.map((label, index) => {
              const Icon = warehouseIcons[index];
              return (
                <div
                  key={label}
                  className="rounded-2xl border border-white/15 bg-white/12 p-5 text-center shadow-soft backdrop-blur-md"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-brand text-white mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-sm text-white">{label}</div>
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
