import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import qlFullVideo from "@/assets/QL_FullVideo.mp4";
import oemStep01ConsultationImg from "@/assets/optimized/oem-step-01-consultation-card.jpg";
import oemStep06MixingImg from "@/assets/optimized/oem-step-06-mixing-card.jpg";
import oemStep08FillingImg from "@/assets/optimized/oem-step-08-filling-card.jpg";
import oemStep10QualityImg from "@/assets/optimized/oem-step-10-quality-card.jpg";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import { absoluteUrl, serializeJsonLd, SITE_URL } from "@/lib/seo";
import { ArrowRight, Beaker, Gauge, Package, PlayCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({
    meta: [
      { title: "OEM Beverage Manufacturing in Myanmar | QUANTUM LEAP" },
      {
        name: "description",
        content:
          "OEM beverage manufacturing in Myanmar for ready-to-drink brands. Formulation, PET bottling, quality control and scalable production up to 24,000 bottles/hour.",
      },
      { property: "og:title", content: "OEM Beverage Manufacturing in Myanmar | QUANTUM LEAP" },
      {
        property: "og:description",
        content:
          "Formulation, PET bottling, quality control, and scalable OEM beverage production for local and international brands.",
      },
      { property: "og:image", content: absoluteUrl(oemStep01ConsultationImg) },
      { property: "og:image:width", content: "960" },
      { property: "og:image:height", content: "540" },
      { name: "twitter:title", content: "OEM Beverage Manufacturing in Myanmar | QUANTUM LEAP" },
      {
        name: "twitter:description",
        content:
          "Formulation, PET bottling, quality control, and scalable OEM beverage production for local and international brands.",
      },
      { name: "twitter:image", content: absoluteUrl(oemStep01ConsultationImg) },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: serializeJsonLd({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/services/oem-manufacturing#service`,
          name: "OEM Beverage Manufacturing",
          serviceType: "OEM beverage manufacturing",
          description:
            "End-to-end OEM beverage manufacturing covering formulation, packaging coordination, PET bottling, quality control, and scalable production.",
          url: absoluteUrl("/services/oem-manufacturing"),
          image: absoluteUrl(oemStep01ConsultationImg),
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: ["Myanmar", "International"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "OEM Beverage Manufacturing Services",
            itemListElement: [
              "Beverage formulation",
              "Packaging coordination",
              "PET bottling",
              "Quality assurance",
              "Scalable beverage production",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
  component: OemManufacturing,
});

const heroSlides = [
  { src: oemStep01ConsultationImg, width: 960, height: 540 },
  { src: oemStep06MixingImg, width: 960, height: 540 },
  { src: oemStep08FillingImg, width: 960, height: 539 },
  { src: oemStep10QualityImg, width: 960, height: 540 },
] as const;

const capabilityCards = [
  { icon: Beaker, to: "/services/product-development" },
  { icon: Package, to: "/products" },
  { icon: Gauge, to: "/services/production-capabilities" },
  { icon: ShieldCheck, to: "/services/factory-facilities" },
] as const;

function OemManufacturing() {
  const { content } = useLanguage();
  const copy = content.services.oem;

  return (
    <Layout>
      <ServiceMediaHero
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        highlight={copy.heroHighlight}
        subtitle={copy.heroSubtitle}
        slides={[...heroSlides]}
      />

      {/* INTRO */}
      <section className="py-20 md:py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {copy.introTitle}
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-accent" />
          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
            {copy.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-4 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {copy.capabilitiesEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {copy.capabilitiesTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {copy.capabilitiesBody}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {copy.capabilities.map((capability, index) => {
              const card = capabilityCards[index] ?? capabilityCards[0];
              const Icon = card.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{capability.body}</p>
                  <Link
                    to={card.to}
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md font-semibold text-primary hover:text-primary/80"
                  >
                    {capability.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANUFACTURING VIDEO */}
      <section className="bg-muted/35 px-4 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-xl text-center md:text-left">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-soft">
                <PlayCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                {copy.videoLabel}
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl xl:text-5xl">
                {copy.videoTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground md:mx-0">
                {copy.videoBody}
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] border border-border bg-background p-3 shadow-glow">
                <div className="overflow-hidden rounded-[1.35rem] bg-black">
                  <video
                    className="aspect-video w-full bg-black object-cover"
                    controls
                    playsInline
                    preload="none"
                    poster={welcomeImg}
                    aria-label={copy.videoLabel}
                  >
                    <source src={qlFullVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-white shadow-glow">
            <img
              src={welcomeImg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              sizes="(min-width: 1280px) 1024px, calc(100vw - 2rem)"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-primary/85 to-primary/70" />
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative px-8 py-12 text-center md:px-14 md:py-16">
              <div className="mx-auto max-w-2xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-5">
                  {copy.ctaTitle}
                </h3>
                <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
                  {copy.ctaBody}
                </p>
                <Link
                  to="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-bold text-lg transition-colors duration-200 group"
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
