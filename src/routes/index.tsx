import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroPosterImg from "@/assets/warehouse.webp";
import heroVideo from "@/assets/hero-video-cropped.mp4";
import factoryImg from "@/assets/optimized/warehouse-feature.jpg";
import splashImg from "@/assets/product-splash.jpg";
import plasticCapImg from "@/assets/optimized/pkg-plastic-cap-card.jpg";
import petBottleImg from "@/assets/pkg-pet-bottle.webp";
import petPreformImg from "@/assets/optimized/pkg-pet-preform-card.jpg";
import labelImg from "@/assets/optimized/pkg-label-card.jpg";
import prodEnergyImg from "@/energy-drinks.webp";
import prodSoftDrinkImg from "@/carbonated-soft-drinks.webp";
import prodFlavoredImg from "@/flavored-drinks.webp";
import prodTeaImg from "@/tea-functional-beverages.webp";
import prodDairyImg from "@/uht-products.webp";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import sevenGoLogo from "@/assets/7go.webp";
import isoPlusLogo from "@/assets/iso_plus.webp";
import burmaClubLogo from "@/assets/burmaclub.webp";
import pumaLogo from "@/assets/puma.webp";
import spiderLogo from "@/spider.webp";
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
          "Myanmar-based OEM beverage manufacturing with PET bottling, up to 24,000 bottles per hour, and FDA and Halal certified operations.",
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

const highlightIcons = [Factory, Boxes, Milk, Gauge, ShieldCheck, Beaker] as const;

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
  { name: "ISO +", image: { src: isoPlusLogo, width: 900, height: 900 } },
  { name: "Burma Club", image: { src: burmaClubLogo, width: 2484, height: 1758 } },
  { name: "Puma", image: { src: pumaLogo, width: 6240, height: 4415 } },
  { name: "Spider", image: { src: spiderLogo, width: 1600, height: 1600 } },
] as const;

const packagingProductMedia: Array<ImageAsset | undefined> = [
  { src: petBottleImg, width: 1920, height: 1463 },
  { src: plasticCapImg, width: 960, height: 640 },
  { src: petPreformImg, width: 960, height: 598 },
  { src: labelImg, width: 960, height: 547 },
  undefined,
];

const beverageProductMedia: ImageAsset[] = [
  { src: prodEnergyImg, width: 1448, height: 1086 },
  { src: prodSoftDrinkImg, width: 1448, height: 1086 },
  { src: prodFlavoredImg, width: 1448, height: 1086 },
  { src: prodTeaImg, width: 1448, height: 1086 },
  { src: prodDairyImg, width: 1448, height: 1086 },
];

const coreValueIcons = [Heart, Leaf, Globe, Lightbulb] as const;

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
  const { content } = useLanguage();
  const copy = content.home;

  if (cta) {
    return (
      <Link
        to="/contact"
        className="focus-ring group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-[border-color,box-shadow] duration-200"
      >
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-gradient-brand flex flex-col items-center justify-center text-white text-center px-6">
          <Sparkles className="h-10 w-10 mb-3 opacity-90" />
          <div className="font-display text-lg font-bold mb-1">{copy.customTitle}</div>
          <p className="text-sm text-white/85 leading-snug max-w-[14rem] mb-4">{copy.customBody}</p>
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
  const { content } = useLanguage();
  const copy = content.home;
  const localizedHighlights = copy.highlights.map((highlight, index) => ({
    ...highlight,
    icon: highlightIcons[index],
  }));
  const localizedPackagingProducts = copy.packagingProducts.map((product, index) => ({
    ...product,
    image: packagingProductMedia[index],
  }));
  const localizedBeverageProducts = copy.beverageProducts.map((product, index) => ({
    ...product,
    image: beverageProductMedia[index],
  }));
  const localizedCoreValues = copy.coreValues.map((value, index) => ({
    ...value,
    icon: coreValueIcons[index],
  }));
  const [category, setCategory] = useState<"packaging" | "beverage">("beverage");
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
              <Link
                to="/services/oem-manufacturing"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                {copy.exploreServices}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
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
              {copy.introTitleBefore}{" "}
              <span className="text-gradient">{copy.introTitleHighlight}</span>{" "}
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
                  key: "beverage",
                  label: copy.beverageTab,
                  sub: copy.beverageSub,
                  icon: GlassWater,
                  count: localizedBeverageProducts.length,
                },
                {
                  key: "packaging",
                  label: copy.packagingTab,
                  sub: copy.packagingSub,
                  icon: Package,
                  count: localizedPackagingProducts.length,
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
            {(category === "beverage" ? localizedBeverageProducts : localizedPackagingProducts).map(
              (p) => (
                <ProductCard key={p.name} product={p} />
              ),
            )}
          </div>
        </div>

        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/products"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition-colors duration-200"
          >
            {copy.viewAll} <ArrowRight className="h-4 w-4" />
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
