import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import factoryImg from "@/assets/optimized/warehouse-feature.jpg";
import boardDirectorImg from "@/assets/alvin.webp";
import { Target, Eye, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ကျွန်ုပ်တို့အကြောင်း — QUANTUM LEAP Beverage Manufacturing" },
      {
        name: "description",
        content:
          "Quantum Leap သည် OEM နှင့် ODM အဖျော်ယမကာ ထုတ်လုပ်မှုအပေါ် အဓိကထားသည့် မျိုးဆက်သစ် အဖျော်ယမကာ ထုတ်လုပ်ရေး ကုမ္ပဏီတစ်ခု ဖြစ်ပါသည်။",
      },
    ],
  }),
  component: About,
});

const team = [
  {
    en: { name: "Ko Alvin Aung Zin", role: "Managing Director" },
    my: { name: "ကိုအယ်လ်ဗင်အောင်ဇင်", role: "စီမံခန့်ခွဲမှု ဒါရိုက်တာ" },
  },
  {
    en: { name: "Mr Goi Mui Yong", role: "Factory Director" },
    my: { name: "Mr Goi Mui Yong", role: "စက်ရုံ ဒါရိုက်တာ" },
  },
  {
    en: { name: "U Zaw Zaw", role: "Plant Manager" },
    my: { name: "ဦးဇော်ဇော်", role: "စက်ရုံ မန်နေဂျာ" },
  },
];

const aboutCopy = {
  en: {
    eyebrow: "About Us",
    heroTitle: "Building Myanmar's premier beverage manufacturing platform.",
    heroSubtitle:
      "From Kaung Htet Myanmar Manufacturing to QUANTUM LEAP — a new chapter of scale, technology, and global ambition.",
    imageAlt: "Factory",
    overviewEyebrow: "Company Overview",
    overviewTitle: "A next-generation beverage manufacturer.",
    overview1:
      "QUANTUM LEAP is focused on OEM and ODM beverage production. Formerly operating as Kaung Htet Myanmar Manufacturing, the facility previously produced recognized beverage brands such as Pokka Orange and Sponsor Energy.",
    overview2:
      "Following acquisition in 2025, QUANTUM LEAP has expanded operations to support products including 7go, Spider, ISO Plus, and Burma Club Whisky.",
    cards: [
      {
        icon: Eye,
        title: "Our Vision",
        body: "To be Myanmar's premier OEM Champion, offering comprehensive and scalable beverage manufacturing solutions for emerging and established brands.",
      },
      {
        icon: Target,
        title: "Our Mission",
        body: "To provide high-quality beverage manufacturing solutions through advanced technology, operational excellence, and strong partnerships while maintaining international food safety and quality standards.",
      },
    ],
    boardEyebrow: "Message from the Board",
    boardTitle: "A welcome from our Board of Directors",
    boardBody:
      `Welcome to our OEM Beverage company.

At Quantum Leap Co. Ltd, we are driven by a strong commitment to quality, innovation, and long-term sustainable growth. We strive to produce high-quality beverages that meet international standards while serving the evolving needs of consumers across diverse markets.

Our vision extends beyond manufacturing. We aim to build trusted brands, develop meaningful partnerships, and create long-term value through continuous investment in modern technology, operational excellence, product development, and human capital. We are committed to becoming a respected and forward-thinking beverage manufacturer in the industry.

We firmly believe that sustainable success is built upon integrity, innovation, and strong relationships with our customers, employees, suppliers, and business partners. The trust and support we receive from all stakeholders continue to inspire us to improve and grow every day.

As we move forward, we remain dedicated to maintaining the highest standards of product safety, quality assurance, and responsible business practices. Together with our management team and employees, we will continue working passionately to deliver products that consumers can enjoy with confidence.

We sincerely thank all our customers, partners, and stakeholders for being part of our journey and look forward to achieving greater success together.`,
    directorAlt: "Ko Alvin Aung Zin, Managing Director",
    leadershipEyebrow: "Leadership",
    leadershipTitle: "Meet our key management team",
  },
  my: {
    eyebrow: "ကျွန်ုပ်တို့အကြောင်း",
    heroTitle: "မြန်မာနိုင်ငံ၏ ထိပ်တန်း အဖျော်ယမကာ ထုတ်လုပ်ရေး ပလက်ဖောင်းကို တည်ဆောက်နေပါသည်။",
    heroSubtitle:
      "Kaung Htet Myanmar Manufacturing မှ QUANTUM LEAP သို့ ပြောင်းလဲလာသော စကေး၊ နည်းပညာနှင့် နိုင်ငံတကာ မျှော်မှန်းချက်များ၏ အခန်းသစ်။",
    imageAlt: "စက်ရုံ",
    overviewEyebrow: "ကုမ္ပဏီ အကျဉ်းချုပ်",
    overviewTitle: "မျိုးဆက်သစ် အဖျော်ယမကာ ထုတ်လုပ်ရေး ကုမ္ပဏီ။",
    overview1:
      "Quantum Leap သည် OEM နှင့် ODM အဖျော်ယမကာ ထုတ်လုပ်မှုအပေါ် အဓိကထားသည့် မျိုးဆက်သစ် အဖျော်ယမကာ ထုတ်လုပ်ရေး ကုမ္ပဏီတစ်ခု ဖြစ်ပါသည်။ ယခင်က Kaung Htet Myanmar Manufacturing အမည်ဖြင့် လုပ်ကိုင်ခဲ့စဉ်က Pokka Orange နှင့် Sponsor အားဖြည့်အချိုရည် ကဲ့သို့သော လူသိများသည့် အမှတ်တံဆိပ်များကို ထုတ်လုပ်ခဲ့ပါသည်။",
    overview2:
      "၂၀၂၅ ခုနှစ်တွင် လုပ်ငန်းလွှဲပြောင်းရယူပြီးနောက် Quantum Leap သည် လက်ရှိ 7go, Spider, ISO Plus နှင့် Burma Club Whisky အစရှိသည့် ထုတ်ကုန်များကို တာဝန်ယူပြီး ထုတ်လုပ်မှုများကို တိုးချဲ့နိုင်ရန် စီစဉ်နေပါသည်။",
    cards: [
      {
        icon: Eye,
        title: "မျှော်မှန်းချက်",
        body: "ပေါ်ထွက်လာမည့် အမှတ်တံဆိပ်များနှင့် ရှိနှင့်ပြီးသား အမှတ်တံဆိပ်များအတွက် ဘက်စုံလွှမ်းခြုံပြီး စကေးချဲ့နိုင်သော အဖျော်ယမကာ ထုတ်လုပ်မှုဆိုင်ရာ ဖြေရှင်းချက်များကို ပေးစွမ်းနိုင်သည့် မြန်မာနိုင်ငံ၏ ထိပ်တန်း OEM ချန်ပီယံ ဖြစ်လာရန်မှာ ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်ဖြစ်ပါသည်။",
      },
      {
        icon: Target,
        title: "ရည်မှန်းချက်",
        body: "အဆင့်မြင့်နည်းပညာ၊ လုပ်ငန်းကျွမ်းကျင်မှုနှင့် ခိုင်မာသော မိတ်ဖက်ဆက်ဆံရေးတို့မှတစ်ဆင့် နိုင်ငံတကာ အစားအသောက်ဘေးကင်းလုံခြုံရေးနှင့် အရည်အသွေးစံနှုန်းများကို ထိန်းသိမ်းရင်း အရည်အသွေးမြင့် အဖျော်ယမကာ ထုတ်လုပ်မှု ဖြေရှင်းချက်များကို ပေးဆောင်ရန်သာဖြစ်သည်။",
      },
    ],
    boardEyebrow: "ဒါရိုက်တာအဖွဲ့၏ သဝဏ်လွှာ",
    boardTitle: "ဒါရိုက်တာအဖွဲ့မှ ကြိုဆိုစကား",
    boardBody:
      "Quantum Leap Co. Ltd တွင် ကျွန်ုပ်တို့သည် အရည်အသွေး၊ တီထွင်ဆန်းသစ်မှုနှင့် ရေရှည်တည်တံ့သော တိုးတက်မှုအပေါ် ခိုင်မာစွာ ကတိကဝတ်ပြုထားပါသည်။ ကျွန်ုပ်တို့သည် နိုင်ငံတကာစံနှုန်းမီ အရည်အသွေးမြင့် အဖျော်ယမကာများကို ထုတ်လုပ်ရန် ကြိုးပမ်းနေပါသည်။ ခေတ်မီနည်းပညာ၊ လုပ်ငန်းလည်ပတ်မှု ကောင်းမွန်မှုနှင့် လူသားအရင်းအမြစ်များတွင် ဆက်လက်ရင်းနှီးမြှုပ်နှံခြင်းဖြင့် ယုံကြည်စိတ်ချရသော မိတ်ဖက်အဖြစ် ရပ်တည်သွားမည်ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ ခရီးလမ်းတွင် ပါဝင်ကြသူအားလုံးကို ကျေးဇူးတင်ရှိပြီး အတူတကွ ပိုမိုကြီးမားသော အောင်မြင်မှုများ ရရှိရန် မျှော်လင့်ပါသည်။",
    directorAlt: "ကိုအယ်လ်ဗင်အောင်ဇင်၊ စီမံခန့်ခွဲမှု ဒါရိုက်တာ",
    leadershipEyebrow: "အဓိက စီမံခန့်ခွဲမှုအဖွဲ့",
    leadershipTitle: "ကျွန်ုပ်တို့၏ အဓိက စီမံခန့်ခွဲမှုအဖွဲ့",
  },
} as const;

function About() {
  const { lang } = useLanguage();
  const copy = aboutCopy[lang];

  return (
    <Layout>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
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
          {copy.cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl bg-card border border-border p-10 hover:shadow-glow transition-shadow duration-200"
            >
              <Icon className="h-10 w-10 text-primary mb-5" />
              <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 text-center">
          {copy.boardEyebrow}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          {copy.boardTitle}
        </h2>
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center rounded-3xl bg-gradient-brand text-white p-8 md:p-12 shadow-glow">
          <div>
            <Quote className="h-12 w-12 text-white/40 mb-6" />
            <div className="space-y-5 text-white/90 leading-relaxed">
              <p>{copy.boardBody}</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src={boardDirectorImg}
              alt={copy.directorAlt}
              className="w-64 md:w-72 lg:w-80 aspect-[4/5] object-cover rounded-2xl shadow-soft border-4 border-white/20"
              loading="lazy"
              decoding="async"
              width={739}
              height={990}
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 16rem"
            />
            <div className="mt-4 text-center lg:text-left">
              <div className="font-display text-lg font-bold">{team[0][lang].name}</div>
              <div className="text-sm text-white/70">{team[0][lang].role}</div>
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
          {team.map((member) => {
            const m = member[lang];
            return (
            <div
              key={m.name}
              className="rounded-3xl bg-card border border-border p-8 text-center hover:shadow-glow transition-shadow duration-200"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display text-3xl font-bold mb-5">
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
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
