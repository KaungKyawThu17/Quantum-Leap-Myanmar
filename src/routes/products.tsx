import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, GlassWater, Package, Palette } from "lucide-react";
import plasticCapImg from "@/assets/optimized/pkg-plastic-cap-card.jpg";
import petBottleImg from "@/assets/optimized/pkg-pet-bottle-card.jpg";
import petPreformImg from "@/assets/optimized/pkg-pet-preform-card.jpg";
import aluminumCapImg from "@/assets/optimized/pkg-aluminum-cap-card.jpg";
import labelImg from "@/assets/optimized/pkg-label-card.jpg";
import prodElectrolyteImg from "@/assets/optimized/prod-electrolyte-card.jpg";
import prodFlavoredImg from "@/assets/optimized/prod-flavored-card.jpg";
import prodSoftDrinkImg from "@/assets/optimized/prod-soft-drink-card.jpg";
import prodTeaImg from "@/assets/optimized/prod-tea-card.jpg";
import prodFruitJuiceImg from "@/assets/optimized/prod-fruit-juice-card.jpg";
import prodEnergyImg from "@/assets/optimized/prod-energy-card.jpg";
import prodDairyImg from "@/assets/optimized/prod-dairy-card.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — QUANTUM LEAP" },
      {
        name: "description",
        content: "Packaging products and OEM beverage manufacturing services from QUANTUM LEAP.",
      },
    ],
  }),
  component: Products,
});

type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

type ProductCategory = "beverage" | "packaging";

type ProductCardData = {
  name: string;
  category: ProductCategory;
  image?: ImageAsset;
  desc: string;
  specs: string[];
  inquiryLabel: string;
  status?: string;
  items?: string[];
};

const gridImageSizes =
  "(min-width: 1280px) 405px, (min-width: 1024px) calc((100vw - 8rem) / 3), (min-width: 768px) calc((100vw - 5rem) / 2), calc(100vw - 2rem)";

const beverageProductMedia: ImageAsset[] = [
  { src: prodEnergyImg, width: 960, height: 480 },
  { src: prodSoftDrinkImg, width: 960, height: 640 },
  { src: prodFruitJuiceImg, width: 960, height: 538 },
  { src: prodElectrolyteImg, width: 960, height: 479 },
  { src: prodFlavoredImg, width: 960, height: 479 },
  { src: prodTeaImg, width: 960, height: 537 },
];

const upcomingProductMedia: ImageAsset[] = [{ src: prodDairyImg, width: 960, height: 641 }];

const packagingProductMedia: Array<ImageAsset | undefined> = [
  { src: plasticCapImg, width: 960, height: 640 },
  { src: petBottleImg, width: 960, height: 731 },
  { src: petPreformImg, width: 960, height: 598 },
  { src: aluminumCapImg, width: 960, height: 523 },
  { src: labelImg, width: 960, height: 547 },
  undefined,
];

const quickInquiryIcons = [GlassWater, Package] as const;

function getInquirySearch(product: Pick<ProductCardData, "category" | "name">) {
  return {
    category: product.category,
    product: product.name,
  };
}

function ProductInquiryCard({
  product,
  variant = "default",
}: {
  product: ProductCardData;
  variant?: "default" | "dashed";
}) {
  const { content } = useLanguage();
  const copy = content.products;

  return (
    <Link
      to="/contact"
      search={getInquirySearch(product)}
      aria-label={`${product.inquiryLabel} ${copy.ariaFor} ${product.name}`}
      className={`focus-ring group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-[border-color,box-shadow,transform] duration-200 hover:border-primary/40 hover:shadow-glow motion-safe:hover:-translate-y-0.5 ${
        variant === "dashed" ? "border-dashed border-primary/30" : "border-border"
      }`}
    >
      <article className="flex h-full flex-col">
        {product.image ? (
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <img
              src={product.image.src}
              alt={product.name}
              className="h-full w-full object-cover motion-safe:group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500"
              loading="lazy"
              decoding="async"
              width={product.image.width}
              height={product.image.height}
              sizes={gridImageSizes}
            />
            {product.status && (
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-sm">
                {product.status}
              </span>
            )}
          </div>
        ) : (
          <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-brand">
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">
                {copy.tailored}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
              {copy.categoryLabels[product.category]}
            </span>
            {product.status && (
              <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-text">
                {product.status}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">{product.name}</h3>
          <p className="text-muted-foreground leading-relaxed">{product.desc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.specs.map((spec) => (
              <span
                key={spec}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {spec}
              </span>
            ))}
          </div>

          {product.items && (
            <ul className="mt-5 space-y-2">
              {product.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <span className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors duration-200 group-hover:bg-primary">
            {product.inquiryLabel}
            <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

function Products() {
  const { content } = useLanguage();
  const copy = content.products;
  const localizedBeverageProducts = copy.beverageProducts.map((product, index) => ({
    ...product,
    image: beverageProductMedia[index],
  }));
  const localizedUpcoming = copy.upcoming.map((product, index) => ({
    ...product,
    image: upcomingProductMedia[index],
  }));
  const localizedPackagingProducts = copy.packagingProducts.map((product, index) => ({
    ...product,
    image: packagingProductMedia[index],
  }));
  const localizedQuickInquiries = copy.quickInquiries.map((inquiry, index) => ({
    ...inquiry,
    icon: quickInquiryIcons[index],
  }));
  const [activeNav, setActiveNav] = useState<ProductCategory>(() => {
    if (typeof window !== "undefined" && window.location.hash === "#packaging") {
      return "packaging";
    }

    return "beverage";
  });

  return (
    <Layout>
      <PageHero eyebrow={copy.products} title={copy.heroTitle} subtitle={copy.heroSubtitle} />

      <nav className="sticky top-24 md:top-32 z-40 border-y border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 lg:px-8">
          <div className="grid w-full max-w-md grid-cols-2 gap-1.5 rounded-2xl border border-border bg-muted/60 p-1.5 sm:w-fit sm:max-w-none sm:rounded-full">
            {(
              [
                {
                  key: "beverage",
                  href: "#beverages",
                  label: copy.beverages,
                  sub: copy.beverageSub,
                  icon: GlassWater,
                  count: localizedBeverageProducts.length,
                },
                {
                  key: "packaging",
                  href: "#packaging",
                  label: copy.packaging,
                  sub: copy.packagingSub,
                  icon: Package,
                  count: localizedPackagingProducts.length,
                },
              ] as const
            ).map(({ key, href, label, sub, icon: Icon, count }) => {
              const active = activeNav === key;

              return (
                <a
                  key={key}
                  href={href}
                  onClick={() => setActiveNav(key)}
                  className={`focus-ring relative flex min-h-11 items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 text-left transition-[background-color,color,box-shadow] duration-200 sm:rounded-full sm:px-6 ${
                    active
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                      {label}
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                          active
                            ? "bg-background/20 text-background"
                            : "bg-foreground/15 text-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                    <span
                      className={`hidden text-[10px] sm:block ${
                        active ? "text-background/70" : "text-muted-foreground/80"
                      }`}
                    >
                      {sub}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          <Link
            to="/contact"
            search={{ category: "beverage", product: copy.productInquiry }}
            className="focus-ring hidden min-h-11 items-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors duration-200 hover:bg-primary sm:inline-flex md:hidden"
          >
            {copy.quote}
          </Link>
        </div>
      </nav>

      <section className="border-b border-border bg-card/60 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 rounded-3xl border border-border bg-background p-5 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-7">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {copy.briefEyebrow}
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight">{copy.briefTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.briefBody}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {localizedQuickInquiries.map(({ category, product, title, body, icon: Icon }) => (
                <Link
                  key={category}
                  to="/contact"
                  search={{ category, product }}
                  className="focus-ring group flex min-h-32 items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {copy.openInquiry}
                      <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="beverages"
        className="py-20 mx-auto max-w-7xl px-4 lg:px-8 scroll-mt-52 md:scroll-mt-60"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">
            {copy.beverages}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">{copy.beverageTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedBeverageProducts.map((product) => (
            <ProductInquiryCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">
              {copy.comingSoon}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
              {copy.upcomingTitle}
            </h2>
          </div>
          <div className="grid gap-6 max-w-xl mx-auto">
            {localizedUpcoming.map((product) => (
              <ProductInquiryCard key={product.name} product={product} variant="dashed" />
            ))}
          </div>
        </div>
      </section>

      <section
        id="packaging"
        className="py-20 mx-auto max-w-7xl px-4 lg:px-8 scroll-mt-52 md:scroll-mt-60"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">
            {copy.packaging}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            {copy.packagingTitle}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedPackagingProducts.map((product) => (
            <ProductInquiryCard key={product.name} product={product} />
          ))}
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
              <div className="relative w-full p-10 md:p-16 text-center md:text-left max-w-2xl">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {copy.ctaTitle}
                </h3>
                <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">{copy.ctaBody}</p>
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
    </Layout>
  );
}
