import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import pdHero1 from "@/assets/pd-hero-1.webp";
import pdHero2 from "@/assets/pd-hero-2.webp";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Boxes,
  Ruler,
  ShieldCheck,
  Beaker,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services/product-development")({
  head: () => ({
    meta: [
      { title: "ထုတ်ကုန်ဖွံ့ဖြိုးတိုးတက်မှု — QUANTUM LEAP" },
      {
        name: "description",
        content:
          "ဖော်မြူလာ၊ ထုပ်ပိုးမှု ပုံစံများ၊ အရည်အသွေး အာမခံချက်နှင့် ပို့ကုန် ပံ့ပိုးမှု။",
      },
    ],
  }),
  component: ProductDevelopment,
});

const packagingTypes = [
  {
    code: "PET",
    title: "PET ပုလင်းများ",
    body: "၁၉၀ မီလီလီတာ၊ ၂၅၀ မီလီလီတာ၊ ၃၂၀ မီလီလီတာ၊ ၅၀၀ မီလီလီတာ အပါအဝင် အမျိုးမျိုးသော ပုံစံများ။",
  },
  {
    code: "TBA",
    title: "TBA ထုပ်ပိုးမှု",
    body: "၁၂၅ မီလီလီတာ၊ ၂၀၀ မီလီလီတာ အပါအဝင် နို့ထွက်နှင့် အပင်အခြေခံအဖျော်ယမကာများအတွက် ထုပ်ပိုးမှု။",
  },
];

const formats = [
  { type: "PET", size: "190 ml" },
  { type: "PET", size: "250 ml" },
  { type: "PET", size: "320 ml" },
  { type: "PET", size: "500 ml" },
  { type: "TBA", size: "Multiple sizes" },
];

const pillars = [
  {
    icon: Beaker,
    eyebrow: "01 — ဖော်မြူလာ",
    title: "ဖော်မြူလာ",
    body: "အရသာပရိုဖိုင်၊ လုပ်ဆောင်နိုင်သောပါဝင်ပစ္စည်းများနှင့် ထုတ်ကုန်လိုအပ်ချက်များအပေါ် အခြေခံ၍ အရသာတသမတ်တည်းရှိမှု၊ တည်ငြိမ်မှုနှင့် အရည်အသွေးစံနှုန်းများကို သေချာစေရန် စိတ်ကြိုက်အဖျော်ယမကာချက်နည်း တီထွင်ခြင်း။",
  },
  {
    icon: Package,
    eyebrow: "02 — ထုပ်ပိုးမှု",
    title: "ထုပ်ပိုးမှု ပုံစံများ",
    body: "PET၊ TBA နှင့် အခြားထုပ်ပိုးမှုပုံစံများကို ထုတ်ကုန်အမျိုးအစား၊ အရွယ်အစားနှင့် ဈေးကွက်လိုအပ်ချက်အလိုက် ရွေးချယ်ပံ့ပိုးပေးခြင်း။",
  },
  {
    icon: ShieldCheck,
    eyebrow: "03 — အရည်အသွေး",
    title: "အရည်အသွေး အာမခံချက်",
    body: "FDA၊ ဟလာလ် (Halal) နှင့် နိုင်ငံတကာ အစားအသောက်ဘေးကင်းရေး စံနှုန်းများနှင့်အညီ တင်းကျပ်စွာ စစ်ဆေးခြင်း။",
  },
];

const englishPackagingTypes = [
  {
    code: "PET",
    title: "PET Bottles",
    body: "Lightweight, shatterproof, recyclable — ideal for water, juices, and functional drinks.",
  },
  {
    code: "TBA",
    title: "TBA Packaging",
    body: "Aseptic Tetra Brik packaging for long shelf-life dairy and plant-based drinks.",
  },
];

const englishFormats = [
  { type: "PET", size: "190 ml" },
  { type: "PET", size: "250 ml" },
  { type: "PET", size: "320 ml" },
  { type: "PET", size: "500 ml" },
  { type: "TBA", size: "Multiple sizes" },
];

const englishPillars = [
  {
    icon: Beaker,
    eyebrow: "01 — Formulation",
    title: "Formulation",
    body: "Custom beverage formulation tailored to your brand — from recipe development and ingredient sourcing to taste profiling and shelf-life testing.",
  },
  {
    icon: Package,
    eyebrow: "02 — Packaging",
    title: "Packaging Solutions",
    body: "Flexible packaging support including PET bottles, standing pouches, and future glass bottle manufacturing — engineered for shelf appeal and supply-chain efficiency.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "03 — Quality",
    title: "Quality Assurance",
    body: "Strict quality control procedures supported by FDA compliance, Halal certification, and internationally recognized food safety standards.",
  },
];

const developmentCopy = {
  en: {
    eyebrow: "Product Development",
    title: "Product",
    highlight: "Development",
    subtitle:
      "From custom formulation to packaging-ready quality assurance — built for brands that want to innovate fast and scale with confidence.",
    chips: ["Formulation", "Packaging", "Quality assurance"],
    introTitle: "Formulation, packaging, and quality — all under one roof.",
    intro1:
      "QUANTUM LEAP supports your brand from initial formulation concept to finished, shelf-ready product — combining custom recipes with flexible packaging and rigorous quality assurance.",
    intro2:
      "Whether you launch with PET bottles or aseptic cartons, our team helps you develop the right formulation, select the right format, and secure the certifications your market demands.",
    pillarsEyebrow: "Three Pillars",
    pillarsTitle: "Built for formulation, packaging, and quality",
    typesEyebrow: "Packaging Types",
    typesTitle: "Two formats, infinite possibilities",
    formatsEyebrow: "Available Formats",
    formatsTitle: "Sizes & SKUs",
    note: "Custom sizes available on request — talk to our team about your SKU plan.",
    ctaTitle: "Got a packaging or format challenge?",
    ctaBody: "From PET bottles to aseptic cartons — let's pick the right format for your launch.",
    ctaButton: "Talk to our development team",
  },
  my: {
    eyebrow: "ထုတ်ကုန်ဖွံ့ဖြိုးတိုးတက်မှု",
    title: "ထုတ်ကုန်",
    highlight: "ဖွံ့ဖြိုးတိုးတက်မှု",
    subtitle:
      "ဖော်မြူလာ၊ ထုပ်ပိုးမှု ပုံစံများနှင့် အရည်အသွေး အာမခံချက်များဖြင့် သင့်အမှတ်တံဆိပ်ကို ထုတ်လုပ်ရန်အသင့်ဖြစ်အောင် ပံ့ပိုးပေးပါသည်။",
    chips: ["ဖော်မြူလာ", "ထုပ်ပိုးမှု", "အရည်အသွေး အာမခံချက်"],
    introTitle: "ဖော်မြူလာ၊ ထုပ်ပိုးမှုနှင့် အရည်အသွေးကို တစ်နေရာတည်းတွင် ပံ့ပိုးပေးပါသည်။",
    intro1:
      "Quantum Leap သည် ဖော်မြူလာသဘောတရားမှစ၍ စျေးကွက်တင်ရန်အသင့်ဖြစ်သော ထုတ်ကုန်အထိ စိတ်ကြိုက်ချက်နည်း၊ ပြောင်းလွယ်ပြင်လွယ် ထုပ်ပိုးမှုနှင့် တင်းကျပ်သော အရည်အသွေးအာမခံချက်များဖြင့် ပံ့ပိုးပေးပါသည်။",
    intro2:
      "PET ပုလင်းများ သို့မဟုတ် TBA ထုပ်ပိုးမှုပုံစံများဖြင့် စတင်လိုသည်ဖြစ်စေ သင့်တော်သော ဖော်မြူလာ၊ ထုပ်ပိုးမှုပုံစံနှင့် ဈေးကွက်လိုအပ်သော စံနှုန်းများကို ရွေးချယ်နိုင်ရန် ကျွန်ုပ်တို့အဖွဲ့က ကူညီပေးပါသည်။",
    pillarsEyebrow: "အဓိက ပံ့ပိုးမှုများ",
    pillarsTitle: "ဖော်မြူလာ၊ ထုပ်ပိုးမှုနှင့် အရည်အသွေးအတွက် တည်ဆောက်ထားပါသည်",
    typesEyebrow: "ထုပ်ပိုးမှု ပုံစံများ",
    typesTitle: "ထုတ်ကုန်လိုအပ်ချက်အလိုက် ပြောင်းလွယ်ပြင်လွယ်ရှိသော ပုံစံများ",
    formatsEyebrow: "ရရှိနိုင်သော အရွယ်အစားများ",
    formatsTitle: "အရွယ်အစားနှင့် SKU များ",
    note: "စိတ်ကြိုက်အရွယ်အစားများအတွက် သင့် SKU အစီအစဉ်ကို ကျွန်ုပ်တို့အဖွဲ့နှင့် ဆွေးနွေးနိုင်ပါသည်။",
    ctaTitle: "ထုပ်ပိုးမှု သို့မဟုတ် format ဆိုင်ရာ စိန်ခေါ်မှု ရှိပါသလား?",
    ctaBody:
      "PET ပုလင်းများမှ TBA ထုပ်ပိုးမှုအထိ သင့်ထုတ်ကုန်စတင်မှုအတွက် သင့်တော်သော ပုံစံကို ရွေးချယ်နိုင်ရန် ဆွေးနွေးကြပါစို့။",
    ctaButton: "ဖွံ့ဖြိုးတိုးတက်မှုအဖွဲ့နှင့် ဆွေးနွေးရန်",
  },
} as const;

const heroSlides = [
  { src: pdHero1, width: 1920, height: 1080 },
  { src: pdHero2, width: 1920, height: 1080 },
];

function ProductDevelopment() {
  const { lang } = useLanguage();
  const copy = developmentCopy[lang];
  const localizedPillars = lang === "en" ? englishPillars : pillars;
  const localizedPackagingTypes = lang === "en" ? englishPackagingTypes : packagingTypes;
  const localizedFormats = lang === "en" ? englishFormats : formats;

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
                <span>
                  {copy.note}
                </span>
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
