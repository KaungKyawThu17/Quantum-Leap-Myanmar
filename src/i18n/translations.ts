export type Lang = "en" | "my";

export const translations = {
  en: {
    "nav.language": "Language",

    "contact.meta.title": "Contact Us — QUANTUM LEAP",
    "contact.meta.description": "Get in touch with our OEM beverage manufacturing team in Yangon, Myanmar.",

    "contact.hero.eyebrow": "Contact",
    "contact.hero.title": "Let's build your next beverage brand.",
    "contact.hero.subtitle": "For OEM beverage partnerships and manufacturing enquiries, contact our business development team.",

    "contact.card.company.title": "QUANTUM LEAP Beverage Mfg.",
    "contact.card.company.line1": "A next-generation OEM & ODM beverage manufacturer based in Yangon.",

    "contact.card.visit.title": "Visit our factory",
    "contact.card.visit.line1": "No.351–352, No.3 High Road,",
    "contact.card.visit.line2": "R-11 Mingalardon Garden City,",
    "contact.card.visit.line3": "Yangon Industrial Zone (3),",
    "contact.card.visit.line4": "Mingalardon Township, Yangon, Myanmar",

    "contact.card.call.title": "Call us",
    "contact.card.email.title": "Email",

    "contact.form.title": "Send us a message",
    "contact.form.subtitle": "We typically respond within 1 business day.",
    "contact.form.thanks": "Thank you — your message has been received. Our team will be in touch shortly.",
    "contact.form.name": "Name",
    "contact.form.company": "Company",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.service": "Service interest",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",

    "contact.service.oem": "OEM Manufacturing",
    "contact.service.odm": "ODM Solutions",
    "contact.service.production": "Production Capabilities",
    "contact.service.other": "Other",

    "contact.map.title": "QUANTUM LEAP factory location",
  },
  my: {
    "nav.language": "ဘာသာစကား",

    "contact.meta.title": "ဆက်သွယ်ရန် — QUANTUM LEAP",
    "contact.meta.description": "ရန်ကုန်အခြေစိုက် OEM အချိုရည်ထုတ်လုပ်ရေးအဖွဲ့နှင့် ဆက်သွယ်ပါ။",

    "contact.hero.eyebrow": "ဆက်သွယ်ရန်",
    "contact.hero.title": "သင်၏နောက်ထပ်အချိုရည်အမှတ်တံဆိပ်ကို အတူတကွတည်ဆောက်ကြရအောင်။",
    "contact.hero.subtitle": "OEM အချိုရည် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ထုတ်လုပ်ရေးဆိုင်ရာ မေးမြန်းမှုများအတွက် ကျွန်ုပ်တို့၏ စီးပွားရေးဖွံ့ဖြိုးတိုးတက်မှု အဖွဲ့ထံ ဆက်သွယ်ပါ။",

    "contact.card.company.title": "QUANTUM LEAP အချိုရည် ထုတ်လုပ်ရေး",
    "contact.card.company.line1": "ရန်ကုန်အခြေစိုက် နောက်ဆုံးပေါ် OEM နှင့် ODM အချိုရည် ထုတ်လုပ်သူ။",

    "contact.card.visit.title": "ကျွန်ုပ်တို့၏စက်ရုံသို့ လာရောက်လည်ပတ်ပါ",
    "contact.card.visit.line1": "အမှတ် ၃၅၁–၃၅၂၊ အမှတ်(၃) လမ်းမကြီး၊",
    "contact.card.visit.line2": "R-11 မင်္ဂလာဒုံ ဂါးဒင်းစီးတီး၊",
    "contact.card.visit.line3": "ရန်ကုန်စက်မှုဇုန် (၃)၊",
    "contact.card.visit.line4": "မင်္ဂလာဒုံမြို့နယ်၊ ရန်ကုန်၊ မြန်မာ",

    "contact.card.call.title": "ဖုန်းခေါ်ဆိုရန်",
    "contact.card.email.title": "အီးမေးလ်",

    "contact.form.title": "သတင်းစကား ပေးပို့ပါ",
    "contact.form.subtitle": "ပုံမှန်အားဖြင့် ၁ ရက်အတွင်း ပြန်လည်ဖြေကြားပါသည်။",
    "contact.form.thanks": "ကျေးဇူးတင်ပါသည် — သင်၏သတင်းစကားကို လက်ခံရရှိပါပြီ။ ကျွန်ုပ်တို့အဖွဲ့မှ မကြာမီ ဆက်သွယ်ပါမည်။",
    "contact.form.name": "အမည်",
    "contact.form.company": "ကုမ္ပဏီ",
    "contact.form.email": "အီးမေးလ်",
    "contact.form.phone": "ဖုန်းနံပါတ်",
    "contact.form.service": "စိတ်ဝင်စားသော ဝန်ဆောင်မှု",
    "contact.form.message": "သတင်းစကား",
    "contact.form.submit": "ပေးပို့မည်",

    "contact.service.oem": "OEM ထုတ်လုပ်ရေး",
    "contact.service.odm": "ODM ဖြေရှင်းချက်များ",
    "contact.service.production": "ထုတ်လုပ်မှု စွမ်းရည်",
    "contact.service.other": "အခြား",

    "contact.map.title": "QUANTUM LEAP စက်ရုံတည်နေရာ",
  },
} as const;

export type TranslationKey = keyof typeof translations["en"];
