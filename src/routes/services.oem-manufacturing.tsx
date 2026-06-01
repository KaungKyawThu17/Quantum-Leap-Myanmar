import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import welcomeImg from "@/assets/optimized/welcome-feature.jpg";
import { CertificatesSlider } from "@/components/CertificatesSlider";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/oem-manufacturing")({
  head: () => ({
    meta: [
      { title: "OEM and ODM Manufacturing — QUANTUM LEAP" },
      {
        name: "description",
        content: "A trusted OEM and ODM manufacturing partner for ready-to-drink beverages.",
      },
    ],
  }),
  component: OemManufacturing,
});

const oemCopy = {
  en: {
    heroTitle: "OEM and ODM",
    heroHighlight: "Manufacturing",
    heroSubtitle:
      "From concept to mass production, we provide the infrastructure and expertise to scale your beverage brand globally.",
    introTitle: "Your Trusted OEM and ODM Partner for Ready to Drink Beverages",
    introParagraphs: [
      "QUANTUM LEAP provides integrated PET bottle manufacturing and beverage packaging solutions designed to support OEM and private label beverage brands. Our production systems support customized PET bottle development, high-speed bottling operations, labeling, and secondary packaging solutions to meet diverse market and product requirements.",
      "From bottle design and beverage formulation to filling and final packaging, QUANTUM LEAP delivers scalable and efficient manufacturing services supported by advanced production technology and quality-focused operations.",
    ],
    ctaTitle: "Ready to discuss your project?",
    ctaBody: "Our team will guide you from initial enquiry to scaled production.",
    ctaButton: "Contact our team",
  },
  my: {
    heroTitle: "OEM နှင့် ODM",
    heroHighlight: "ထုတ်လုပ်မှု",
    heroSubtitle:
      "ထုတ်ကုန်သဘောတရားမှ အစုလိုက်အပြုံလိုက်ထုတ်လုပ်မှုအထိ သင့်အဖျော်ယမကာအမှတ်တံဆိပ်ကို စကေးချဲ့နိုင်ရန် လိုအပ်သော အခြေခံအဆောက်အအုံနှင့် ကျွမ်းကျင်မှုများကို ပံ့ပိုးပေးပါသည်။",
    introTitle: "အသင့်သောက် အဖျော်ယမကာများအတွက် သင့်ယုံကြည်စိတ်ချရသော OEM နှင့် ODM မိတ်ဖက်",
    introParagraphs: [
      "Quantum Leap သည် OEM နှင့် ပုဂ္ဂလိကတံဆိပ်ပါ အဖျော်ယမကာအမှတ်တံဆိပ်များကို ပံ့ပိုးရန် ဒီဇိုင်းထုတ်ထားသော ပေါင်းစပ် PET ပုလင်းထုတ်လုပ်ခြင်းနှင့် အဖျော်ယမကာထုပ်ပိုးမှုဖြေရှင်းချက်များကို ပံ့ပိုးပေးပါသည်။",
      "ကျွန်ုပ်တို့၏ ထုတ်လုပ်မှုစနစ်များသည် စိတ်ကြိုက် PET ပုလင်းဖွံ့ဖြိုးတိုးတက်မှု၊ မြန်နှုန်းမြင့်ပုလင်းသွင်းခြင်းလုပ်ငန်းများ၊ တံဆိပ်ကပ်ခြင်းနှင့် ဒုတိယထုပ်ပိုးမှု ဖြေရှင်းချက်များကို ကွဲပြားသောစျေးကွက်နှင့် ထုတ်ကုန်လိုအပ်ချက်များနှင့် ကိုက်ညီစေရန် ပံ့ပိုးပေးပါသည်။",
    ],
    ctaTitle: "သင့်စီမံကိန်းကို ဆွေးနွေးရန် အသင့်ဖြစ်ပါသလား?",
    ctaBody: "စတင်စုံစမ်းမှုမှ စကေးချဲ့ထုတ်လုပ်မှုအထိ ကျွန်ုပ်တို့အဖွဲ့က လမ်းညွှန်ပေးပါမည်။",
    ctaButton: "ကျွန်ုပ်တို့အဖွဲ့ကို ဆက်သွယ်ရန်",
  },
} as const;

function OemManufacturing() {
  const { lang } = useLanguage();
  const copy = oemCopy[lang];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[480px] flex items-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl bg-accent/40" />
          <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full blur-3xl bg-primary/40" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-[-12deg] translate-x-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-20 w-full">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] max-w-3xl">
            {copy.heroTitle}{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-200 bg-clip-text text-transparent">
              {copy.heroHighlight}
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {copy.heroSubtitle}
          </p>
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
            {copy.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
