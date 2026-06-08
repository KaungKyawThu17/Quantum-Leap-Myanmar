import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import qlFullVideo from "@/assets/QL_FullVideo.mp4";
import oemStep01ConsultationImg from "@/assets/oem-step-01-consultation.webp";
import oemStep02PreformImg from "@/assets/oem-step-02-preform.webp";
import oemStep03BlowingImg from "@/assets/oem-step-03-blowing.webp";
import oemStep04WaterImg from "@/assets/oem-step-04-water.webp";
import oemStep05RawMaterialImg from "@/assets/oem-step-05-rawmaterial.webp";
import oemStep06MixingImg from "@/assets/oem-step-06-mixing.webp";
import oemStep07UhtImg from "@/assets/oem-step-07-uht.webp";
import oemStep08FillingImg from "@/assets/oem-step-08-filling.webp";
import oemStep09LabellingImg from "@/assets/oem-step-09-labelling.webp";
import oemStep10QualityImg from "@/assets/oem-step-10-quality.webp";
import oemStep11StorageImg from "@/assets/oem-step-11-storage.webp";
import oemStep12DistributionImg from "@/assets/oem-step-12-distribution.webp";
import oemCostingQuotationImg from "@/assets/oem-costing-quotation.webp";
import oemResearchFormulaImg from "@/assets/oem-research-formula.webp";
import oemPackagingBottleImg from "@/assets/oem-packaging-bottle.webp";
import oemProductTestingImg from "@/assets/oem-product-testing.webp";
import oemMassProductionImg from "@/assets/oem-mass-production.webp";
import oemRegulatoryImg from "@/assets/oem-regulatory.webp";
import oemPackagingDeliveryImg from "@/assets/oem-packaging-delivery.webp";
import odmProductSelectionImg from "@/assets/odm-product-selection.webp";
import odmBrandSelectImg from "@/assets/odm-brand-select.webp";
import odmSampleConfirmImg from "@/assets/odm-sample-confirm.webp";
import odmCostingImg from "@/assets/odm-costing.webp";
import odmMassProductionImg from "@/assets/odm-mass-production.webp";
import odmRegulatoryImg from "@/assets/odm-regulatory.webp";
import odmDeliveryImg from "@/assets/odm-delivery.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({
    meta: [
      { title: "OEM Manufacturing — QUANTUM LEAP" },
      {
        name: "description",
        content: "A trusted OEM manufacturing partner for ready-to-drink beverages.",
      },
    ],
  }),
  component: OemManufacturing,
});

const heroSlides = [
  { src: oemStep01ConsultationImg, width: 1920, height: 1080 },
  { src: oemStep02PreformImg, width: 1920, height: 1080 },
  { src: oemStep03BlowingImg, width: 1483, height: 834 },
  { src: oemStep04WaterImg, width: 1270, height: 714 },
  { src: oemStep05RawMaterialImg, width: 1920, height: 1080 },
  { src: oemStep06MixingImg, width: 1337, height: 752 },
  { src: oemStep07UhtImg, width: 1408, height: 792 },
  { src: oemStep08FillingImg, width: 1270, height: 714 },
  { src: oemStep09LabellingImg, width: 1645, height: 925 },
  { src: oemStep10QualityImg, width: 1408, height: 792 },
  { src: oemStep11StorageImg, width: 1483, height: 834 },
  { src: oemStep12DistributionImg, width: 1920, height: 1080 },
  { src: oemResearchFormulaImg, width: 1920, height: 1080 },
  { src: oemPackagingBottleImg, width: 1920, height: 1080 },
  { src: oemProductTestingImg, width: 1920, height: 1080 },
  { src: oemCostingQuotationImg, width: 1920, height: 1080 },
  { src: oemMassProductionImg, width: 1408, height: 792 },
  { src: oemRegulatoryImg, width: 1920, height: 1080 },
  { src: oemPackagingDeliveryImg, width: 1920, height: 1080 },
  { src: odmProductSelectionImg, width: 1408, height: 792 },
  { src: odmBrandSelectImg, width: 1920, height: 1080 },
  { src: odmSampleConfirmImg, width: 1408, height: 792 },
  { src: odmCostingImg, width: 1920, height: 1080 },
  { src: odmMassProductionImg, width: 1920, height: 1080 },
  { src: odmRegulatoryImg, width: 1920, height: 1080 },
  { src: odmDeliveryImg, width: 1920, height: 1080 },
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
                    preload="metadata"
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
