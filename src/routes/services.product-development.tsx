import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import pdHero1 from "@/assets/pd-hero-1.webp";
import pdHero2 from "@/assets/pd-hero-2.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Package, Boxes, Ruler, ShieldCheck, Beaker, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/product-development")({
  head: () => ({
    meta: [
      { title: "Product Development — QUANTUM LEAP" },
      {
        name: "description",
        content:
          "Formulation, packaging formats, quality assurance, and export support for beverage brands.",
      },
    ],
  }),
  component: ProductDevelopment,
});

const heroSlides = [
  { src: pdHero1, width: 1920, height: 1080 },
  { src: pdHero2, width: 1920, height: 1080 },
];

const pillarIcons = [Beaker, Package, ShieldCheck] as const;

function ProductDevelopment() {
  const { content } = useLanguage();
  const copy = content.services.development;
  const localizedPillars = copy.pillars.map((pillar, index) => ({
    ...pillar,
    icon: pillarIcons[index],
  }));
  const localizedPackagingTypes = copy.packagingTypes;
  const localizedFormats = copy.formats;

  return (
    <Layout>
      <ServiceMediaHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        highlight={copy.highlight}
        subtitle={copy.subtitle}
        slides={heroSlides}
        chips={[...copy.chips]}
      />

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

      {/* PILLARS */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent-text font-semibold mb-3">
              {copy.pillarsEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
              {copy.pillarsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {localizedPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-card rounded-3xl border border-border p-7 md:p-8 transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-1 hover:shadow-glow hover:border-primary/40 overflow-hidden"
                >
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand text-white mb-5 motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                      {p.eyebrow}
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGING TYPES + FORMATS */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Types */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-accent-text font-semibold mb-3">
              {copy.typesEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-8">
              {copy.typesTitle}
            </h2>
            <div className="space-y-4">
              {localizedPackagingTypes.map((t) => (
                <div
                  key={t.code}
                  className="group flex gap-5 rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-primary/40 hover:shadow-glow transition-[border-color,box-shadow] duration-200"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-xl bg-gradient-brand text-white font-display font-extrabold text-lg md:text-xl motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-200">
                    {t.code}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {t.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="text-xs uppercase tracking-widest text-accent-text font-semibold mb-3">
                {copy.formatsEyebrow}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Ruler className="h-6 w-6 text-primary" /> {copy.formatsTitle}
              </h3>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {localizedFormats.map((f, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-4 ${i !== 0 ? "border-t border-border" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <Boxes className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">{f.type}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{f.size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent-text flex-shrink-0 mt-0.5" />
                <span>{copy.note}</span>
              </div>
            </div>
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
