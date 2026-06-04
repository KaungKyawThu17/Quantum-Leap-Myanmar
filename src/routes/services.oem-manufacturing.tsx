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
      "Quantum Leap provides comprehensive OEM and ODM beverage manufacturing solutions designed to support brands at every stage of product development.",
      "Whether you have an existing product concept or require a fully customized beverage solution, our experienced team offers expertise in formulation development, packaging design, quality assurance, and large-scale manufacturing. Through our OEM service, we manufacture products according to your brand requirements and specifications, while our ODM service enables businesses to develop new beverage concepts from the ground up, including recipe creation, packaging development, product testing, and commercialization.",
      "With integrated production capabilities and strict quality control standards, Quantum Leap helps brands bring innovative, high-quality beverages to market efficiently and successfully.",
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
      "Quantum Leap သည် ထုတ်ကုန်ဖွံ့ဖြိုးတိုးတက်မှု၏ အဆင့်တိုင်းတွင် အမှတ်တံဆိပ်များကို ပံ့ပိုးရန် ဒီဇိုင်းထုတ်ထားသော ပြည့်စုံသော OEM နှင့် ODM အဖျော်ယမကာ ထုတ်လုပ်ရေး ဖြေရှင်းချက်များကို ပေးဆောင်ပါသည်။",
      "သင်သည် ရှိပြီးသား ထုတ်ကုန် အယူအဆတစ်ခုရှိသည်ဖြစ်စေ သို့မဟုတ် အပြည့်အဝ စိတ်ကြိုက်ပြင်ဆင်ထားသော အဖျော်ယမကာ ဖြေရှင်းချက်တစ်ခု လိုအပ်သည်ဖြစ်စေ ကျွန်ုပ်တို့၏ အတွေ့အကြုံရှိအဖွဲ့သည် ဖော်မြူလာ ဖွံ့ဖြိုးတိုးတက်မှု၊ ထုပ်ပိုးမှုဒီဇိုင်း၊ အရည်အသွေး အာမခံချက်နှင့် ကြီးမားသော ထုတ်လုပ်မှုတို့တွင် ကျွမ်းကျင်မှုကို ပေးဆောင်ပါသည်။",
      "ကျွန်ုပ်တို့၏ OEM ဝန်ဆောင်မှုမှတစ်ဆင့်၊ ကျွန်ုပ်တို့သည် သင်၏ အမှတ်တံဆိပ် လိုအပ်ချက်များနှင့် သတ်မှတ်ချက်များအရ ထုတ်ကုန်များကို ထုတ်လုပ်ပြီး ကျွန်ုပ်တို့၏ ODM ဝန်ဆောင်မှုသည် စီးပွားရေးလုပ်ငန်းများအား ချက်ပြုတ်နည်း ဖန်တီးခြင်း၊ ထုပ်ပိုးမှု ဖွံ့ဖြိုးတိုးတက်မှု၊ ထုတ်ကုန် စမ်းသပ်ခြင်းနှင့် စီးပွားဖြစ် ရောင်းဝယ်ခြင်း အပါအဝင် အခြေခံမှစတင်၍ အဖျော်ယမကာ အယူအဆအသစ်များကို တီထွင်နိုင်စေပါသည်။",
      "Quantum Leap သည် ပေါင်းစပ်ထုတ်လုပ်မှုစွမ်းရည်များနှင့် တင်းကျပ်သော အရည်အသွေးထိန်းချုပ်မှုစံနှုန်းများဖြင့် အမှတ်တံဆိပ်များအား ဆန်းသစ်တီထွင်ပြီး အရည်အသွေးမြင့် အဖျော်ယမကာများကို ဈေးကွက်သို့ ထိရောက်စွာနှင့် အောင်မြင်စွာ ယူဆောင်လာရန် ကူညီပေးနိုင်ပါသည်။",
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
