import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundSrc,
  videoSrc,
  posterSrc,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  backgroundSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {backgroundSrc && (
        <img
          src={backgroundSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      )}
      {videoSrc && prefersReducedMotion && posterSrc && (
        <img
          src={posterSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {videoSrc && !prefersReducedMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/70 to-primary/65" />
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 md:py-28">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
