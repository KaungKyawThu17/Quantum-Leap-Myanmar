import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroPosterImg from "@/assets/warehouse.webp";
import heroVideo from "@/assets/hero-video-cropped.mp4";
import factoryImg from "@/assets/optimized/warehouse-feature.jpg";
import splashImg from "@/assets/product-splash.jpg";
import plasticCapImg from "@/assets/optimized/pkg-plastic-cap-card.jpg";
import petBottleImg from "@/assets/optimized/pkg-pet-bottle-card.jpg";
import petPreformImg from "@/assets/optimized/pkg-pet-preform-card.jpg";
import aluminumCapImg from "@/assets/optimized/pkg-aluminum-cap-card.jpg";
import labelImg from "@/assets/optimized/pkg-label-card.jpg";
import bevElectrolyteImg from "@/assets/optimized/prod-electrolyte-card.jpg";
import bevSoftDrinkImg from "@/assets/optimized/prod-soft-drink-card.jpg";
import bevFlavoredImg from "@/assets/optimized/prod-flavored-card.jpg";
import bevTeaImg from "@/assets/optimized/prod-tea-card.jpg";
import bevDairyImg from "@/assets/optimized/prod-dairy-card.jpg";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import sevenGoLogo from "@/assets/7go.webp";
import isoPlusLogo from "@/assets/ISO PLUS.webp";
import burmaClubLogo from "@/assets/burmaclub.webp";
import pumaLogo from "@/assets/puma.webp";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Factory,
  Beaker,
  ShieldCheck,
  Gauge,
  Boxes,
  Award,
  Milk,
  ArrowRight,
  CheckCircle2,
  Heart,
  Leaf,
  Globe,
  Lightbulb,
  Package,
  GlassWater,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QUANTUM LEAP — Myanmar's Next Generation OEM Beverage Partner" },
      {
        name: "description",
        content:
          "Myanmar-based OEM and ODM beverage manufacturing with PET bottling, up to 24,000 bottles per hour, and FDA and Halal certified operations.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: heroPosterImg }],
  }),
  component: Home,
});

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const HERO_VIDEO_DELAY_MS = 700;
const HERO_VIDEO_IDLE_TIMEOUT_MS = 1500;

const highlights = [
  { icon: Factory, title: "OEM နှင့် ODM", desc: "အဖျော်ယမကာ ထုတ်လုပ်မှု ဖြေရှင်းချက် အပြည့်အစုံ" },
  { icon: Boxes, title: "PET နှင့် ဖန်ပုလင်း", desc: "လက်ရှိ PET ထုတ်လုပ်မှုနှင့် နောင်တွင် ဖန်ပုလင်းစွမ်းရည် တိုးချဲ့မှု" },
  { icon: Milk, title: "UHT တိုးချဲ့မှု", desc: "အဆင့်မြင့် UHT ထုတ်လုပ်မှုစနစ် တိုးချဲ့မှု" },
  { icon: Gauge, title: "၂၄,၀၀၀ BPH", desc: "တစ်နာရီလျှင် ပုလင်းပေါင်း ၂၄,၀၀၀ အထိ ထုတ်လုပ်နိုင်စွမ်း" },
  { icon: ShieldCheck, title: "FDA နှင့် Halal", desc: "အသိအမှတ်ပြုထားသော ဘေးကင်းရေးလုပ်ငန်းစဉ်များ" },
  { icon: Beaker, title: "ပြောင်းလွယ်ပြင်လွယ် ထုပ်ပိုးမှု", desc: "ထုပ်ပိုးမှုပုံစံနှင့် အရွယ်အစားများစွာ ပံ့ပိုးနိုင်မှု" },
];

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type Product = {
  name: string;
  image?: ImageAsset;
  cta?: boolean;
  badge?: string;
};

const productCardSizes = [
  "(min-width: 1280px) 405px",
  "(min-width: 768px) calc((100vw - 5rem) / 3)",
  "(min-width: 640px) calc((100vw - 3rem) / 2)",
  "calc(100vw - 2rem)",
].join(", ");

const trustedBrandLogos = [
  { name: "7go", image: { src: sevenGoLogo, width: 225, height: 225 } },
  { name: "ISO Plus", image: { src: isoPlusLogo, width: 1600, height: 1049 } },
  { name: "Burma Club", image: { src: burmaClubLogo, width: 2484, height: 1758 } },
  { name: "Puma", image: { src: pumaLogo, width: 6240, height: 4415 } },
] as const;

const packagingProducts: Product[] = [
  { name: "PET ပုလင်းများ", image: { src: petBottleImg, width: 960, height: 731 } },
  { name: "ပလတ်စတစ် ပုလင်းအဖုံးများ", image: { src: plasticCapImg, width: 960, height: 640 } },
  { name: "PET ပုလင်းလောင်းများ", image: { src: petPreformImg, width: 960, height: 598 } },
  { name: "အလူမီနီယမ် အဖုံးများ", image: { src: aluminumCapImg, width: 960, height: 523 } },
  { name: "တံဆိပ်များ", image: { src: labelImg, width: 960, height: 547 } },
  { name: "စိတ်ကြိုက်ဝန်ဆောင်မှုများ", cta: true },
];

const beverageProducts: Product[] = [
  { name: "အားဖြည့်နှင့် ဓာတ်ဆားရည်", image: { src: bevElectrolyteImg, width: 960, height: 479 } },
  { name: "အချိုရည်နှင့် CSD", image: { src: bevSoftDrinkImg, width: 960, height: 640 } },
  { name: "သစ်သီးဖျော်ရည်နှင့် အရသာပါ အချိုရည်များ", image: { src: bevFlavoredImg, width: 960, height: 479 } },
  { name: "လက်ဖက်ရည်နှင့် အကျိုးပြု အဖျော်ယမကာများ", image: { src: bevTeaImg, width: 960, height: 537 } },
  {
    name: "UHT နို့နှင့် ပဲနို့",
    image: { src: bevDairyImg, width: 960, height: 641 },
    badge: "မကြာမီလာမည်",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "ဝန်ထမ်းကောင်းကျိုး",
    desc: "ကျွန်ုပ်တို့၏ အောင်မြင်မှု၏ မောင်းနှင်အားအဖြစ် ကျွန်ုပ်တို့၏လူများကို တန်ဖိုးထားပါသည်။ Quantum Leap သည် ဘေးကင်းရေး၊ လေးစားမှု၊ အဖွဲ့လိုက်လုပ်ဆောင်မှုနှင့် ပရော်ဖက်ရှင်နယ်တိုးတက်မှုကို ဦးစားပေးသည့် အပြုသဘောဆောင်သော အလုပ်ခွင်ယဉ်ကျေးမှုကို မြှင့်တင်ပေးပါသည်။",
  },
  {
    icon: Leaf,
    title: "ပတ်ဝန်းကျင်ဆိုင်ရာ တာဝန်ယူမှု",
    desc: "ရေရှည်တည်တံ့မှုကို ကျွန်ုပ်တို့၏ လုပ်ငန်းလည်ပတ်မှုများတွင် ပေါင်းစပ်ထားသည်။ ထိရောက်သော အရင်းအမြစ်စီမံခန့်ခွဲမှုနှင့် တာဝန်ယူမှုရှိသော ထုပ်ပိုးမှုဖြေရှင်းချက်များမှတစ်ဆင့် ပတ်ဝန်းကျင်ဆိုင်ရာ သက်ရောက်မှုကို လျှော့ချရန် ထုတ်လုပ်မှုလုပ်ငန်းစဉ်များကို အဆက်မပြတ် တိုးတက်အောင် လုပ်ဆောင်ပါသည်။",
  },
  {
    icon: Globe,
    title: "လူမှုအသိုင်းအဝိုင်းနှင့် လူမှုရေးဆိုင်ရာ တာဝန်ယူမှု",
    desc: "Quantum Leap သည် ကျင့်ဝတ်ဆိုင်ရာ စီးပွားရေးလုပ်ဆောင်မှုများကို ထိန်းသိမ်းခြင်း၊ ဒေသခံလူမှုအသိုင်းအဝိုင်းများကို ပံ့ပိုးပေးခြင်းနှင့် ဖောက်သည်များ၊ အကျိုးတူပါဝင်သူများနှင့် ယုံကြည်စိတ်ချရသော မိတ်ဖက်များ ဖန်တီးခြင်းဖြင့် လူ့အဖွဲ့အစည်းအတွက် အဓိပ္ပာယ်ရှိသော ပံ့ပိုးမှုများ တည်ဆောက်ခြင်းကို ယုံကြည်ပါသည်။",
  },
  {
    icon: Lightbulb,
    title: "ဆန်းသစ်တီထွင်မှုနှင့် ထုပ်ပိုးမှု ဖွံ့ဖြိုးတိုးတက်ရေး",
    desc: "အဆင့်မြင့် ထုတ်လုပ်မှုစွမ်းရည်များဖြင့် Quantum Leap သည် မတူညီသော အဖျော်ယမကာအမျိုးအစားများနှင့် ပြောင်းလဲနေသော စားသုံးသူဝယ်လိုအားများကို ပံ့ပိုးရန် စိတ်ကြိုက် PET ပုလင်းများ၊ အဖုံးများနှင့် ထုပ်ပိုးမှုဖြေရှင်းချက်များကို တီထွင်ပါသည်။",
  },
];

const englishHighlights = [
  { icon: Factory, title: "OEM & ODM", desc: "End-to-end beverage manufacturing solutions" },
  { icon: Boxes, title: "PET & Glass", desc: "Current PET, future glass bottling capabilities" },
  { icon: Milk, title: "UHT Expansion", desc: "Advanced UHT production line coming soon" },
  { icon: Gauge, title: "24,000 BPH", desc: "Industry-leading hourly production capacity" },
  { icon: ShieldCheck, title: "FDA & Halal", desc: "Internationally certified safe operations" },
  { icon: Beaker, title: "Flexible Formats", desc: "Multiple packaging sizes and types" },
];

const englishPackagingProducts: Product[] = [
  { name: "PET Bottle", image: { src: petBottleImg, width: 960, height: 731 } },
  { name: "Plastic Cap", image: { src: plasticCapImg, width: 960, height: 640 } },
  { name: "PET Preform", image: { src: petPreformImg, width: 960, height: 598 } },
  { name: "Aluminum Cap", image: { src: aluminumCapImg, width: 960, height: 523 } },
  { name: "Label", image: { src: labelImg, width: 960, height: 547 } },
  { name: "Customized Services", cta: true },
];

const englishBeverageProducts: Product[] = [
  { name: "Energy & Electrolyte", image: { src: bevElectrolyteImg, width: 960, height: 479 } },
  { name: "Soft & Carbonated", image: { src: bevSoftDrinkImg, width: 960, height: 640 } },
  { name: "Juice & Flavored", image: { src: bevFlavoredImg, width: 960, height: 479 } },
  { name: "Tea & Functional", image: { src: bevTeaImg, width: 960, height: 537 } },
  {
    name: "Dairy & Soy Milk",
    image: { src: bevDairyImg, width: 960, height: 641 },
    badge: "Coming Soon",
  },
];

const englishCoreValues = [
  {
    icon: Heart,
    title: "Employee Well-Being",
    desc: "We value our people as the driving force behind our success. QUANTUM LEAP promotes a positive workplace culture that prioritizes safety, respect, teamwork, and professional growth.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Sustainability is integrated into our operations. We continuously improve our manufacturing processes to reduce environmental impact through efficient resource management and responsible packaging solutions.",
  },
  {
    icon: Globe,
    title: "Community & Social Responsibility",
    desc: "QUANTUM LEAP believes in building meaningful contributions to society by maintaining ethical business practices, supporting local communities, and creating trusted partnerships with customers and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Packaging Development",
    desc: "With advanced manufacturing capabilities, QUANTUM LEAP develops customized PET bottles, closures, and packaging solutions designed to support diverse beverage categories and evolving consumer demands.",
  },
];

const homeText = {
  en: {
    customTitle: "Need something custom?",
    customBody: "Bespoke bottles, caps & labels engineered to your brand.",
    customCta: "Let's talk",
    eyebrow: "Now serving global beverage brands",
    heroPrefix: "Myanmar's Next Generation",
    heroHighlight: "OEM Beverage",
    heroSuffix: "Partner",
    heroBody:
      "QUANTUM LEAP is a Myanmar-based OEM beverage manufacturer specializing in PET bottling, beverage formulation, and scalable production solutions for local and international brands.",
    quote: "Request a Quotation",
    exploreProducts: "Explore Products",
    proof1: "FDA & Halal Certified",
    proof2: "24,000 BPH Capacity",
    proof3: "10-Acre Facility",
    stats: [
      { value: "10", suffix: "acre", label: "Integrated facility" },
      { value: "24K", suffix: "BPH", label: "Production capacity" },
      { value: "5+", suffix: "brands", label: "Produced for partners" },
      { value: "3", suffix: "certs", label: "FDA · Halal · ISO" },
    ],
    brandStrip: "Trusted by leading beverage brands",
    introEyebrow: "Who We Are",
    introTitleBefore: "An",
    introTitleHighlight: "integrated facility",
    introTitleAfter: "built for the world's beverage brands.",
    introBody:
      "Located on a 10-acre industrial campus in Yangon Industrial Park, QUANTUM LEAP operates a fully integrated OEM beverage manufacturing facility. Our factory combines modern production technology, experienced operational management, and scalable infrastructure to deliver high-quality beverages across multiple categories.",
    introBullets: [
      "Modern, automated production technology",
      "Experienced beverage operations team",
      "Scalable infrastructure for any brand size",
    ],
    learn: "Learn about us",
    campus: "10-Acre Campus",
    highlightsEyebrow: "Key Highlights",
    highlightsTitle: "Capabilities at a glance",
    productEyebrow: "Product Categories",
    productTitle: "Packaging and beverages under one roof.",
    productBody:
      "From PET bottles and caps to finished beverages — we supply the complete manufacturing and packaging ecosystem your brand needs.",
    packagingTab: "Packaging",
    packagingSub: "Caps · Bottles · Labels",
    beverageTab: "Beverages",
    beverageSub: "Energy · Soft · Tea · Dairy",
    viewAll: "View all products",
    valuesEyebrow: "Our Core Values",
    valuesTitle: "What drives everything we do",
    whyEyebrow: "Why Choose Us",
    whyTitleBefore: "Myanmar's premier",
    whyTitleHighlight: "OEM partner",
    whyBody:
      "QUANTUM LEAP is strategically positioned to become Myanmar's premier OEM beverage manufacturing partner. Our modernized facility, scalable production systems, and investment in advanced manufacturing technologies allow us to support both emerging and established beverage brands with efficiency, consistency, and reliability.",
    whyBullets: [
      "Modernized facility with 24,000 BPH capacity",
      "Scalable production systems for any brand size",
      "Advanced manufacturing technologies",
      "FDA & Halal certified operations",
      "End-to-end OEM & ODM solutions",
    ],
    ctaTitle: "Start your beverage brand with QUANTUM LEAP.",
    ctaBody:
      "Contact our OEM team today to discuss your beverage manufacturing requirements — we'll guide you from formula to finished product.",
    ctaButton: "Talk to our team",
  },
  my: {
    customTitle: "စိတ်ကြိုက်ဝန်ဆောင်မှု လိုအပ်ပါသလား?",
    customBody: "သင့်အမှတ်တံဆိပ်အတွက် ပုလင်း၊ အဖုံးနှင့် တံဆိပ်များကို စိတ်ကြိုက် ဖန်တီးပေးပါသည်။",
    customCta: "ဆွေးနွေးရန်",
    eyebrow: "ပြည်တွင်းပြည်ပ အဖျော်ယမကာ အမှတ်တံဆိပ်များအတွက်",
    heroPrefix: "မြန်မာနိုင်ငံ၏ မျိုးဆက်သစ်",
    heroHighlight: "OEM အဖျော်ယမကာ",
    heroSuffix: "ထုတ်လုပ်မှု မိတ်ဖက်",
    heroBody:
      "Quantum Leap သည် မြန်မာနိုင်ငံအခြေစိုက် OEM အဖျော်ယမကာ ထုတ်လုပ်သူဖြစ်ပြီး PET ပုလင်းသွတ်ခြင်း၊ အဖျော်ယမကာ ဖော်စပ်ခြင်းနှင့် ပြည်တွင်းပြည်ပ အဖျော်ယမကာ အမှတ်တံဆိပ်များအတွက် စကေးချဲ့ထုတ်လုပ်နိုင်သော ဖြေရှင်းချက်များကို အထူးပြု လုပ်ဆောင်ပေးနေပါသည်။",
    quote: "ဈေးနှုန်း မေးမြန်းရန်",
    exploreProducts: "ထုတ်ကုန်များ ကြည့်ရန်",
    proof1: "FDA နှင့် Halal အသိအမှတ်ပြု",
    proof2: "၂၄,၀၀၀ BPH ထုတ်လုပ်နိုင်စွမ်း",
    proof3: "၁၀ ဧက စက်မှုဝန်း",
    stats: [
      { value: "၁၀", suffix: "ဧက", label: "စက်မှုဝန်း" },
      { value: "၂၄K", suffix: "BPH", label: "ထုတ်လုပ်နိုင်စွမ်း" },
      { value: "၅+", suffix: "brands", label: "မိတ်ဖက်အမှတ်တံဆိပ်များ" },
      { value: "၃", suffix: "certs", label: "FDA · Halal · ISO" },
    ],
    brandStrip: "ဦးဆောင် အဖျော်ယမကာ အမှတ်တံဆိပ်များ၏ ယုံကြည်မှု",
    introEyebrow: "ကျွန်ုပ်တို့အကြောင်း",
    introTitleBefore: "ပြည်တွင်းနှင့် နိုင်ငံတကာ အမှတ်တံဆိပ်များအတွက် တည်ဆောက်ထားသော",
    introTitleHighlight: "အဆင့်မြင့် OEM စက်ရုံ",
    introTitleAfter: "။",
    introBody:
      "ကျွန်ုပ်တို့ Quantum Leap သည် ရန်ကုန်စက်မှုဇုန်ရှိ ၁၀ ဧက ကျယ်ဝန်းသော စက်မှုဝန်းအတွင်း တည်ရှိပြီး၊ ပြည်တွင်းနှင့် နိုင်ငံတကာ အဖျော်ယမကာ အမှတ်တံဆိပ်များကို ပံ့ပိုးပေးနိုင်ရန် အဆင့်မြင့် OEM စက်ရုံအဖြစ် လည်ပတ်နေပါသည်။ ကျွန်ုပ်တို့၏ စက်ရုံသည် ခေတ်မီထုတ်လုပ်မှု နည်းပညာ၊ အတွေ့အကြုံရှိသော စီမံခန့်ခွဲမှုနှင့် အကြီးစား အခြေခံအဆောက်အအုံများ ပေါင်းစပ်ကာ အရည်အသွေးမြင့် ထုတ်ကုန်များကို အမျိုးအစားအလိုက် ထုတ်လုပ်ပေးနေပါသည်။",
    introBullets: [
      "ခေတ်မီ အလိုအလျောက် ထုတ်လုပ်မှု နည်းပညာ",
      "အတွေ့အကြုံရှိသော အဖျော်ယမကာ လုပ်ငန်းအဖွဲ့",
      "အမှတ်တံဆိပ်အရွယ်အစားအလိုက် စကေးချဲ့နိုင်သော အခြေခံအဆောက်အအုံ",
    ],
    learn: "ကျွန်ုပ်တို့အကြောင်း လေ့လာရန်",
    campus: "၁၀ ဧက စက်မှုဝန်း",
    highlightsEyebrow: "အဓိက ထူးခြားချက်များ",
    highlightsTitle: "စွမ်းဆောင်ရည်များ အကျဉ်းချုပ်",
    productEyebrow: "ထုတ်ကုန်အမျိုးအစားများ",
    productTitle: "ထုပ်ပိုးမှုနှင့် အဖျော်ယမကာများကို တစ်နေရာတည်းတွင် ပံ့ပိုးပေးပါသည်။",
    productBody:
      "PET ပုလင်းများ၊ အဖုံးများမှ စ၍ အသင့်သောက် အဖျော်ယမကာများအထိ သင့်အမှတ်တံဆိပ်အတွက် လိုအပ်သော ထုတ်လုပ်မှုနှင့် ထုပ်ပိုးမှုစနစ်ကို အပြည့်အဝ ပံ့ပိုးပေးပါသည်။",
    packagingTab: "ထုပ်ပိုးမှု",
    packagingSub: "အဖုံး · ပုလင်း · တံဆိပ်",
    beverageTab: "အဖျော်ယမကာ",
    beverageSub: "အားဖြည့် · အချိုရည် · လက်ဖက်ရည် · နို့",
    viewAll: "ထုတ်ကုန်အားလုံး ကြည့်ရန်",
    valuesEyebrow: "Quantum Leap ကတိကဝတ်",
    valuesTitle: "ကျွန်ုပ်တို့၏ လုပ်ဆောင်ချက်များ",
    whyEyebrow: "ကျွန်ုပ်တို့ကို ရွေးချယ်သင့်သည့် အကြောင်းအရင်း",
    whyTitleBefore: "မြန်မာနိုင်ငံ၏ ထိပ်တန်း",
    whyTitleHighlight: "OEM မိတ်ဖက်",
    whyBody:
      "Quantum Leap သည် မြန်မာနိုင်ငံ၏ ထိပ်တန်း OEM အဖျော်ယမကာ ထုတ်လုပ်မှုမိတ်ဖက်ဖြစ်လာရန် မဟာဗျူဟာကျကျ အနေအထားတွင် ရှိနေသည်။ ကျွန်ုပ်တို့၏ ခေတ်မီစက်ရုံ၊ တိုးချဲ့နိုင်သော ထုတ်လုပ်မှုစနစ်များနှင့် အဆင့်မြင့်ထုတ်လုပ်မှုနည်းပညာများတွင် ရင်းနှီးမြှုပ်နှံမှုများက ပေါ်ထွက်လာသောနှင့် တည်ထောင်ပြီးသား အဖျော်ယမကာအမှတ်တံဆိပ်နှစ်မျိုးလုံးကို ထိရောက်မှု၊ တသမတ်တည်းရှိမှုနှင့် ယုံကြည်စိတ်ချရမှုဖြင့် ပံ့ပိုးနိုင်စေပါသည်။",
    whyBullets: [
      "တစ်နာရီလျှင် ပုလင်း ၂၄,၀၀၀ ထုတ်လုပ်နိုင်သော ခေတ်မီစက်ရုံ",
      "အမှတ်တံဆိပ်အရွယ်အစားအလိုက် စကေးချဲ့နိုင်သော ထုတ်လုပ်မှုစနစ်များ",
      "အဆင့်မြင့် ထုတ်လုပ်မှု နည်းပညာများ",
      "FDA နှင့် Halal အသိအမှတ်ပြု လုပ်ငန်းစဉ်များ",
      "အစအဆုံး OEM နှင့် ODM ဖြေရှင်းချက်များ",
    ],
    ctaTitle: "Quantum Leap ဖြင့် သင့်ရဲ့အဖျော်ယမကာအမှတ်တံဆိပ်ကို စတင်လိုက်ပါ။",
    ctaBody:
      "သင့်ရဲ့အဖျော်ယမကာထုတ်လုပ်မှုလိုအပ်ချက်တွေကို ဆွေးနွေးဖို့ ဒီနေ့ပဲ ကျွန်ုပ်တို့ရဲ့ OEM အဖွဲ့ကို ဆက်သွယ်လိုက်ပါ။",
    ctaButton: "ကျွန်ုပ်တို့အဖွဲ့နှင့် ဆွေးနွေးရန်",
  },
} as const;

const preloadedProductImages = new Set<string>();

function preloadProductImages(products: Product[]) {
  if (typeof window === "undefined") return;

  for (const { image } of products) {
    if (!image || preloadedProductImages.has(image.src)) continue;

    preloadedProductImages.add(image.src);
    const img = new Image();
    img.decoding = "async";
    img.src = image.src;
  }
}

function useDeferredHeroVideo() {
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);

  useEffect(() => {
    const idleWindow = window as WindowWithIdleCallback;
    let cancelled = false;
    let cancelIdleCallback: (() => void) | undefined;

    const loadHeroVideo = () => {
      if (!cancelled) {
        setShouldLoadHeroVideo(true);
      }
    };

    const delayId = window.setTimeout(() => {
      if (idleWindow.requestIdleCallback) {
        const idleId = idleWindow.requestIdleCallback(loadHeroVideo, {
          timeout: HERO_VIDEO_IDLE_TIMEOUT_MS,
        });

        cancelIdleCallback = () => {
          idleWindow.cancelIdleCallback?.(idleId);
        };
        return;
      }

      loadHeroVideo();
    }, HERO_VIDEO_DELAY_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(delayId);
      cancelIdleCallback?.();
    };
  }, []);

  return shouldLoadHeroVideo;
}

function ProductCard({ product }: { product: Product }) {
  const { name, image, cta, badge } = product;
  const { lang } = useLanguage();
  const copy = homeText[lang];

  if (cta) {
    return (
      <Link
        to="/contact"
        className="focus-ring group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-[border-color,box-shadow] duration-200"
      >
          <div className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-gradient-brand flex flex-col items-center justify-center text-white text-center px-6">
            <Sparkles className="h-10 w-10 mb-3 opacity-90" />
          <div className="font-display text-lg font-bold mb-1">{copy.customTitle}</div>
          <p className="text-sm text-white/85 leading-snug max-w-[14rem] mb-4">
            {copy.customBody}
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-foreground text-xs font-semibold px-3.5 py-1.5">
            {copy.customCta} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/products"
      className="focus-ring group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-[border-color,box-shadow] duration-200"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image.src}
            alt={name}
            width={image.width}
            height={image.height}
            sizes={productCardSizes}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-brand text-white">
            <Package className="h-10 w-10" />
          </div>
        )}
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-base md:text-lg font-bold">{name}</h3>
      </div>
    </Link>
  );
}

function Home() {
  const { lang } = useLanguage();
  const copy = homeText[lang];
  const localizedHighlights = lang === "en" ? englishHighlights : highlights;
  const localizedPackagingProducts = lang === "en" ? englishPackagingProducts : packagingProducts;
  const localizedBeverageProducts = lang === "en" ? englishBeverageProducts : beverageProducts;
  const localizedCoreValues = lang === "en" ? englishCoreValues : coreValues;
  const [category, setCategory] = useState<"packaging" | "beverage">("packaging");
  const shouldLoadHeroVideo = useDeferredHeroVideo();
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <img
          src={heroPosterImg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          sizes="100vw"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover bg-foreground"
        />
        {shouldLoadHeroVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover bg-foreground"
            poster={heroPosterImg}
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
              {copy.eyebrow}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              {copy.heroPrefix}{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">
                {copy.heroHighlight}
              </span>{" "}
              {copy.heroSuffix}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              {copy.heroBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow motion-safe:hover:scale-105 transition-[box-shadow,transform] duration-200"
              >
                {copy.quote} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                {copy.exploreProducts}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> {copy.proof1}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Gauge className="h-4 w-4 text-accent" /> {copy.proof2}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Factory className="h-4 w-4 text-accent" /> {copy.proof3}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {copy.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {s.value}
                <span className="text-primary text-lg ml-1">{s.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="py-10 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-5">
            {copy.brandStrip}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {trustedBrandLogos.map((brand, index) => (
              <figure
                key={brand.name}
                className="brand-bubble group flex flex-col items-center gap-3"
                style={{ animationDelay: `${index * 220}ms` }}
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-white p-2 shadow-soft ring-4 ring-background transition-[box-shadow,transform,border-color] duration-200 group-hover:border-primary/40 group-hover:shadow-glow motion-safe:group-hover:-translate-y-1 md:h-24 md:w-24">
                  <img
                    src={brand.image.src}
                    alt={brand.name}
                    width={brand.image.width}
                    height={brand.image.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>
                <figcaption className="font-display text-sm font-bold text-foreground/70 transition-colors duration-200 group-hover:text-foreground">
                  {brand.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-20 pb-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.introEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {copy.introTitleBefore} <span className="text-gradient">{copy.introTitleHighlight}</span>{" "}
              {copy.introTitleAfter}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{copy.introBody}</p>
            <ul className="space-y-2 mb-8">
              {copy.introBullets.map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary hover:gap-3 transition-[gap,color] duration-200"
            >
              {copy.learn} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={factoryImg}
              alt="QUANTUM LEAP factory"
              className="rounded-3xl shadow-soft w-full"
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              sizes="(min-width: 1024px) 50vw, calc(100vw - 2rem)"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-glow border border-border max-w-xs hidden md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Yangon Industrial Park
              </div>
              <div className="font-display font-bold text-lg mt-1">{copy.campus}</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.highlightsEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{copy.highlightsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {localizedHighlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-7 hover:shadow-glow hover:border-primary/30 transition-[border-color,box-shadow] duration-200"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.productEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              {copy.productTitle}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">{copy.productBody}</p>
        </div>

        {/* Sticky segmented control */}
        <div className="sticky top-24 md:top-32 z-20 -mx-4 px-4 lg:mx-0 lg:px-0 py-3 mb-6 bg-background/85 backdrop-blur-md">
          <div className="mx-auto w-full sm:w-fit grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-muted/60 border border-border">
            {(
              [
                {
                  key: "packaging",
                  label: copy.packagingTab,
                  sub: copy.packagingSub,
                  icon: Package,
                  count: localizedPackagingProducts.length,
                },
                {
                  key: "beverage",
                  label: copy.beverageTab,
                  sub: copy.beverageSub,
                  icon: GlassWater,
                  count: localizedBeverageProducts.length,
                },
              ] as const
            ).map(({ key, label, sub, icon: Icon, count }) => {
              const active = category === key;
              const products =
                key === "packaging" ? localizedPackagingProducts : localizedBeverageProducts;
              return (
                <button
                  key={key}
                  onPointerEnter={() => preloadProductImages(products)}
                  onFocus={() => preloadProductImages(products)}
                  onClick={() => {
                    preloadProductImages(products);
                    setCategory(key);
                  }}
                  className={`focus-ring relative flex min-h-11 items-center justify-center gap-2.5 rounded-xl sm:rounded-full px-4 sm:px-6 py-2.5 text-left transition-[background-color,color,box-shadow] duration-200 ${
                    active
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold inline-flex items-center gap-1.5">
                      {label}
                      <span
                        className={`text-[10px] rounded-full px-1.5 py-0.5 font-bold ${active ? "bg-background/20 text-background" : "bg-foreground/15 text-foreground"}`}
                      >
                        {count}
                      </span>
                    </span>
                    <span
                      className={`text-[10px] hidden sm:block ${active ? "text-background/70" : "text-muted-foreground/80"}`}
                    >
                      {sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product cards */}
        <div className="relative motion-safe:animate-fade-in" key={category}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(category === "packaging" ? localizedPackagingProducts : localizedBeverageProducts).map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/products"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition-colors duration-200"
          >
            {copy.viewAll} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground hover:bg-muted/60 transition-colors duration-200"
          >
            {copy.quote}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.valuesEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{copy.valuesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {localizedCoreValues.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-8 hover:shadow-glow hover:border-primary/30 transition-[border-color,box-shadow] duration-200"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-200">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.whyEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              {copy.whyTitleBefore} <span className="text-gradient">{copy.whyTitleHighlight}</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{copy.whyBody}</p>
          </div>
          <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-40" />
            <div className="relative">
              <div className="grid gap-6">
                {copy.whyBullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US + CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-hero overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <img
              src={splashImg}
              alt=""
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] opacity-20 hidden md:block"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1400}
              sizes="40vw"
            />
            <div className="relative z-10 min-h-[440px] md:min-h-[520px] flex items-center">
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
              <div className="relative w-full p-10 md:p-16 max-w-2xl">
                <Award className="h-10 w-10 text-accent mb-6" />
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  {copy.ctaTitle}
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">{copy.ctaBody}</p>
                <Link
                  to="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3.5 font-semibold shadow-glow motion-safe:hover:scale-105 transition-[box-shadow,transform] duration-200"
                >
                  {copy.ctaButton} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
