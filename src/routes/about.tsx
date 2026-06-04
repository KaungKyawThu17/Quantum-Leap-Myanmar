import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import aboutHeroImg from "@/assets/optimized/about-hero.webp";
import factoryImg from "@/assets/optimized/warehouse-feature.jpg";
import boardDirectorImg from "@/assets/alvin.webp";
import teamAlvinImg from "@/assets/optimized/team-alvin-cutout.webp";
import teamMrGoiImg from "@/assets/optimized/team-mr-goi-cutout.webp";
import teamUZawZawImg from "@/assets/optimized/team-u-zaw-zaw-cutout.webp";
import { Target, Eye, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About QUANTUM LEAP — Beverage Manufacturing" },
      {
        name: "description",
        content:
          "QUANTUM LEAP is a next-generation beverage manufacturing company focused on OEM and ODM beverage production.",
      },
    ],
  }),
  component: About,
});

const team = [
  {
    image: teamAlvinImg,
    imageWidth: 510,
    imageHeight: 720,
  },
  {
    image: teamMrGoiImg,
    imageWidth: 392,
    imageHeight: 720,
  },
  {
    image: teamUZawZawImg,
    imageWidth: 374,
    imageHeight: 720,
  },
] as const;

const cardIcons = [Eye, Target] as const;

function About() {
  const { content } = useLanguage();
  const copy = content.about;
  const boardParagraphs = copy.boardBody.split(/\n\s*\n/);

  return (
    <Layout>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        backgroundSrc={aboutHeroImg}
      />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={factoryImg}
            alt={copy.imageAlt}
            className="rounded-3xl shadow-soft"
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 50vw, calc(100vw - 2rem)"
          />
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              {copy.overviewEyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">
              {copy.overviewTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{copy.overview1}</p>
            <p className="text-muted-foreground leading-relaxed">{copy.overview2}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          {copy.cards.map(({ title, body }, index) => {
            const Icon = cardIcons[index];
            return (
              <div
                key={title}
                className="rounded-3xl bg-card border border-border p-10 hover:shadow-glow transition-shadow duration-200"
              >
                <Icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-14 mx-auto max-w-7xl px-4 md:py-20 lg:px-8">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 text-center">
          {copy.boardEyebrow}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
          {copy.boardTitle}
        </h2>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center rounded-3xl bg-gradient-brand text-white p-6 sm:p-8 md:p-12 shadow-glow">
          <div>
            <Quote className="h-9 w-9 md:h-12 md:w-12 text-white/40 mb-4 md:mb-6" />
            <div className="space-y-4 text-sm leading-7 text-white/90 md:space-y-5 md:text-base md:leading-relaxed">
              {boardParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src={boardDirectorImg}
              alt={copy.directorAlt}
              className="w-52 sm:w-60 md:w-72 lg:w-80 aspect-[4/5] object-cover rounded-2xl shadow-soft border-4 border-white/20"
              loading="lazy"
              decoding="async"
              width={739}
              height={990}
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 16rem"
            />
            <div className="mt-4 text-center lg:text-left">
              <div className="font-display text-lg font-bold">{copy.team[0].name}</div>
              <div className="text-sm text-white/70">{copy.team[0].role}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            {copy.leadershipEyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{copy.leadershipTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => {
            const m = copy.team[index];
            const cropToHalfBody = index > 0;
            return (
              <div
                key={m.name}
                className="rounded-3xl bg-card border border-border p-8 pt-6 text-center"
              >
                <div
                  className={`mx-auto mb-6 flex h-60 w-full justify-center sm:h-64 ${
                    cropToHalfBody ? "items-start overflow-hidden" : "items-end overflow-visible"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={`${m.name}, ${m.role}`}
                    className={`w-auto max-w-full object-contain drop-shadow-[0_18px_24px_rgba(15,23,42,0.22)] ${
                      cropToHalfBody ? "h-[200%] object-top" : "h-full"
                    }`}
                    loading="lazy"
                    decoding="async"
                    width={member.imageWidth}
                    height={member.imageHeight}
                    sizes="(min-width: 768px) 16rem, 14rem"
                  />
                </div>
                <div className="font-display text-xl font-bold">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
