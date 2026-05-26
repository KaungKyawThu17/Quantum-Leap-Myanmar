import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServiceMediaHero } from "@/components/ServiceMediaHero";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import factoryHero1 from "@/assets/factory-hero-1.webp";
import factoryHero2 from "@/assets/factory-hero-2.webp";
import factoryHero3 from "@/assets/factory-hero-3.webp";
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
import type { LucideIcon } from "lucide-react";
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
      { title: "စက်ရုံနှင့် အခြေခံအဆောက်အအုံများ — QUANTUM LEAP" },
      {
        name: "description",
        content:
          "၁၀ ဧက စက်မှုဝန်း၊ ထုတ်လုပ်မှု စက်ကိရိယာများ၊ အထောက်အကူပြု စနစ်များ၊ အအေးခန်းနှင့် ကုန်လှောင်ရုံများ။",
      },
    ],
  }),
  component: FactoryFacilities,
});

const stats = [
  { icon: MapPin, value: "၁၀", label: "ဧက စက်မှုဝန်း" },
  { icon: Gauge, value: "၂၆K", label: "ပုလင်းမှုတ်စက် / နာရီ" },
  { icon: Snowflake, value: "၅၈t", label: "အအေးခန်း သိုလှောင်နိုင်စွမ်း" },
];

const heroSlides = [
  { src: factoryHero1, width: 1483, height: 834 },
  { src: factoryHero2, width: 1483, height: 834 },
  { src: factoryHero3, width: 1408, height: 792 },
];

type FacilityItem = {
  icon: LucideIcon;
  label: string;
  detail: string;
  image?: string;
  imageAlt?: string;
};

type FacilityGroup = {
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  items: FacilityItem[];
};

const groups: FacilityGroup[] = [
  {
    title: "ထုတ်လုပ်မှု စက်ကိရိယာများ",
    eyebrow: "01 — ထုတ်လုပ်မှု",
    icon: Building2,
    items: [
      {
        icon: Wind,
        label: "ပုလင်းမှုတ်စက်",
        detail: "တစ်နာရီလျှင် ပုလင်း ၂၆,၀၀၀",
        image: productionBlowingImg,
        imageAlt: "PET ပုလင်းမှုတ်စက်",
      },
      {
        icon: Droplets,
        label: "ပုလင်းသွတ်စက်",
        detail: "တစ်နာရီလျှင် ပုလင်း ၂၄,၀၀၀",
        image: productionFillingCapacityImg,
        imageAlt: "မြန်နှုန်းမြင့် အဖျော်ယမကာ ပုလင်းသွတ်လိုင်း",
      },
      {
        icon: Gauge,
        label: "Monoblock Filling System",
        detail: "ဆေးကြောခြင်း၊ ဖြည့်ခြင်း၊ အဖုံးပိတ်ခြင်း ပေါင်းစပ်စနစ်",
        image: productionMonoblockFillingImg,
        imageAlt: "Monoblock rinse fill cap system",
      },
      {
        icon: Snowflake,
        label: "Tunnel Cooling System",
        detail: "ဖြည့်ပြီးနောက် အပူချိန်ထိန်းချုပ်မှု",
        image: productionTunnelCoolingImg,
        imageAlt: "Tunnel cooling system",
      },
      {
        icon: Tag,
        label: "အလိုအလျောက် တံဆိပ်ကပ်စက်",
        detail: "မြန်နှုန်းမြင့် တံဆိပ်ကပ်စနစ်",
        image: productionAutoLabellingImg,
        imageAlt: "အလိုအလျောက် တံဆိပ်ကပ်စက်",
      },
      {
        icon: PackageOpen,
        label: "Shrink Wrapping နှင့် Packing",
        detail: "နောက်ဆုံးထုပ်ပိုးမှုစနစ်",
        image: productionWrappingImg,
        imageAlt: "Shrink wrapping နှင့် packing စက်ကိရိယာ",
      },
    ],
  },
  {
    title: "အထောက်အကူပြု စနစ်များ",
    eyebrow: "02 — Utilities",
    icon: Zap,
    items: [
      {
        icon: Zap,
        label: "၂၅၀၀ KVA ထရန်စဖော်မာ",
        detail: "တည်ငြိမ်သော လျှပ်စစ်အခြေခံအဆောက်အအုံ",
        image: utilityTransformersImg,
        imageAlt: "၂၅၀၀ KVA ထရန်စဖော်မာ စနစ်",
      },
      {
        icon: Fuel,
        label: "CAT ဂျင်နရေတာများ",
        detail: "အရေးပေါ် လျှပ်စစ်ပံ့ပိုးမှု",
        image: utilityGeneratorImg,
        imageAlt: "CAT ဂျင်နရေတာ စနစ်",
      },
      {
        icon: Wind,
        label: "Air Compressors",
        detail: "ဖိအားမြင့် pneumatic ပံ့ပိုးမှု",
        image: utilityAirCompressorImg,
        imageAlt: "Air compressor အထောက်အကူပြု စနစ်",
      },
      {
        icon: Fuel,
        label: "ဒီဇယ်ဘွိုင်လာ စနစ်များ",
        detail: "ထုတ်လုပ်မှုအတွက် steam ထုတ်လုပ်မှု",
        image: utilityBoilerImg,
        imageAlt: "ဒီဇယ်ဘွိုင်လာ စနစ်",
      },
      {
        icon: Recycle,
        label: "ရေဆိုးသန့်စင်ခြင်း",
        detail: "စက်မှုလုပ်ငန်းသုံး ရေဆိုးသန့်စင်ခြင်းနှင့် ပတ်ဝန်းကျင်သန့်စင်ခြင်းစနစ်",
        image: utilityWastewaterImg,
        imageAlt: "ရေဆိုးသန့်စင်ခြင်း စနစ်",
      },
    ],
  },
  {
    title: "အအေးခန်း သိုလှောင်ရုံ",
    eyebrow: "03 — Cold Chain",
    icon: Snowflake,
    items: [
      { icon: Snowflake, label: "အေးခဲသိုလှောင်မှု", detail: "၃၉ တန် သိုလှောင်နိုင်စွမ်း" },
      { icon: Snowflake, label: "အအေးခန်း", detail: "၁၉ တန် သိုလှောင်နိုင်စွမ်း" },
    ],
  },
];

const englishStats = [
  { icon: MapPin, value: "10", label: "Acre integrated campus" },
  { icon: Gauge, value: "26K", label: "Bottles/hr blowing capacity" },
  { icon: Snowflake, value: "58t", label: "Cold storage capacity" },
];

const englishGroups: FacilityGroup[] = [
  {
    title: "Production Equipment",
    eyebrow: "01 — Production",
    icon: Building2,
    items: [
      { icon: Wind, label: "Blowing Machine", detail: "26,000 bottles / hour", image: productionBlowingImg, imageAlt: "PET bottle blowing machine" },
      { icon: Droplets, label: "Filling Capacity", detail: "24,000 bottles / hour", image: productionFillingCapacityImg, imageAlt: "High-speed beverage filling line" },
      { icon: Gauge, label: "Monoblock Filling System", detail: "Integrated rinse-fill-cap", image: productionMonoblockFillingImg, imageAlt: "Monoblock rinse fill cap system" },
      { icon: Snowflake, label: "Tunnel Cooling System", detail: "Post-fill thermal control", image: productionTunnelCoolingImg, imageAlt: "Tunnel cooling system" },
      { icon: Tag, label: "Automatic Labeling", detail: "High-speed label application", image: productionAutoLabellingImg, imageAlt: "Automatic labeling machine" },
      { icon: PackageOpen, label: "Shrink Wrapping & Packing", detail: "End-of-line packaging", image: productionWrappingImg, imageAlt: "Shrink wrapping and packing equipment" },
    ],
  },
  {
    title: "Utility Systems",
    eyebrow: "02 — Utilities",
    icon: Zap,
    items: [
      { icon: Zap, label: "2500 KVA Transformers", detail: "Stable power infrastructure", image: utilityTransformersImg, imageAlt: "Outdoor 2500 KVA transformer utility system" },
      { icon: Fuel, label: "CAT Generators", detail: "Continuous backup power", image: utilityGeneratorImg, imageAlt: "CAT generator backup power system" },
      { icon: Wind, label: "Air Compressors", detail: "High-pressure pneumatic supply", image: utilityAirCompressorImg, imageAlt: "Factory air compressor utility system" },
      { icon: Fuel, label: "Diesel Boiler Systems", detail: "Process steam generation", image: utilityBoilerImg, imageAlt: "Diesel boiler system for process steam generation" },
      { icon: Recycle, label: "Wastewater Treatment", detail: "Industrial wastewater purification and environmental treatment system", image: utilityWastewaterImg, imageAlt: "Industrial wastewater treatment utility system" },
    ],
  },
  {
    title: "Cold Storage",
    eyebrow: "03 — Cold Chain",
    icon: Snowflake,
    items: [
      { icon: Snowflake, label: "Frozen Storage", detail: "39 tons capacity" },
      { icon: Snowflake, label: "Chill Room", detail: "19 tons capacity" },
    ],
  },
];

const facilityCopy = {
  en: {
    eyebrow: "Factory & Facilities",
    title: "Factory",
    highlight: "& Facilities",
    subtitle:
      "A 10-acre integrated campus engineered for large-scale beverage production — from blowing to bottling, cold chain to warehouse.",
    introTitle: "Inside our integrated manufacturing campus.",
    intro1:
      "Our 10-acre facility brings every stage of beverage production under one roof — from preform blowing and high-speed filling to cold storage and outbound logistics.",
    intro2:
      "The site is designed for resilience: redundant utilities, dedicated warehousing, and modular floor space ready to scale with your brand.",
    storageEyebrow: "04 — Storage",
    warehouseTitle: "Warehouse Facilities",
    warehouseBody:
      "Dedicated raw material, packaging, and spare parts storage areas designed to support efficient production flow and inventory management.",
    warehouseItems: [
      { icon: Warehouse, label: "Raw Material" },
      { icon: PackageOpen, label: "Packaging" },
      { icon: Ruler, label: "Spare Parts" },
    ],
    ctaTitle: "Want a tour of the campus?",
    ctaBody: "Book a visit or request a virtual walkthrough of our 10-acre facility.",
    ctaButton: "Schedule a facility tour",
  },
  my: {
    eyebrow: "စက်ရုံနှင့် အခြေခံအဆောက်အအုံများ",
    title: "စက်ရုံနှင့်",
    highlight: "အခြေခံအဆောက်အအုံများ",
    subtitle:
      "ပုလင်းမှုတ်ခြင်းမှ ပုလင်းသွတ်ခြင်း၊ အအေးခန်းမှ ကုန်လှောင်ရုံအထိ အကြီးစား အဖျော်ယမကာထုတ်လုပ်မှုအတွက် တည်ဆောက်ထားသော ၁၀ ဧက စက်မှုဝန်း။",
    introTitle: "ကျွန်ုပ်တို့၏ ပေါင်းစည်းထားသော ထုတ်လုပ်ရေး စက်မှုဝန်း။",
    intro1:
      "ကျွန်ုပ်တို့၏ ၁၀ ဧက စက်ရုံသည် preform blowing၊ မြန်နှုန်းမြင့် filling၊ အအေးခန်းသိုလှောင်မှုနှင့် ထောက်ပံ့ပို့ဆောင်ရေးအထိ အဖျော်ယမကာထုတ်လုပ်မှု အဆင့်တိုင်းကို တစ်နေရာတည်းတွင် ပေါင်းစည်းထားပါသည်။",
    intro2:
      "အထောက်အကူပြုစနစ်များ၊ သီးသန့်ကုန်လှောင်ရုံများနှင့် စကေးချဲ့နိုင်သော ထုတ်လုပ်ရေးနေရာများဖြင့် သင့်အမှတ်တံဆိပ်ကို ယုံကြည်စိတ်ချစွာ ပံ့ပိုးနိုင်ရန် ဒီဇိုင်းထုတ်ထားပါသည်။",
    storageEyebrow: "04 — သိုလှောင်ရုံ",
    warehouseTitle: "ကုန်လှောင်ရုံ",
    warehouseBody:
      "ကုန်ကြမ်းနှင့် ထုပ်ပိုးပစ္စည်းများအတွက် သီးသန့်နေရာများ၊ spare parts သိုလှောင်ရုံများဖြင့် ထုတ်လုပ်မှုစီးဆင်းမှုနှင့် inventory စီမံခန့်ခွဲမှုကို ထိရောက်စွာ ပံ့ပိုးပေးပါသည်။",
    warehouseItems: [
      { icon: Warehouse, label: "ကုန်ကြမ်း" },
      { icon: PackageOpen, label: "ထုပ်ပိုးပစ္စည်း" },
      { icon: Ruler, label: "Spare Parts" },
    ],
    ctaTitle: "စက်မှုဝန်းကို လေ့လာလိုပါသလား?",
    ctaBody:
      "ကျွန်ုပ်တို့၏ ၁၀ ဧက စက်ရုံသို့ လာရောက်လည်ပတ်ရန် သို့မဟုတ် virtual walkthrough တောင်းဆိုရန် ဆက်သွယ်နိုင်ပါသည်။",
    ctaButton: "စက်ရုံလည်ပတ်ရန် စီစဉ်ပါ",
  },
} as const;

function FactoryFacilities() {
  const { lang } = useLanguage();
  const copy = facilityCopy[lang];
  const localizedStats = lang === "en" ? englishStats : stats;
  const localizedGroups = lang === "en" ? englishGroups : groups;

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
        <div className="relative grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-lg p-8 md:p-12 overflow-hidden">
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent-text mb-3">
              {copy.storageEyebrow}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {copy.warehouseTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {copy.warehouseBody}
            </p>
          </div>
          <div className="relative grid grid-cols-3 gap-4">
            {copy.warehouseItems.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.label}
                  className="rounded-2xl bg-muted/60 border border-border p-5 text-center"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-brand text-white mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">{w.label}</div>
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
