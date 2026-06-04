import { aboutContent } from "./about";
import { commonContent } from "./common";
import { contactContent } from "./contact";
import { faqContent } from "./faq";
import { homeContent } from "./home";
import { productsContent } from "./products";
import { servicesContent } from "./services";

export const i18nContent = {
  en: {
    common: commonContent.en,
    home: homeContent.en,
    about: aboutContent.en,
    products: productsContent.en,
    faq: faqContent.en,
    contact: contactContent.en,
    services: servicesContent.en,
  },
  my: {
    common: commonContent.my,
    home: homeContent.my,
    about: aboutContent.my,
    products: productsContent.my,
    faq: faqContent.my,
    contact: contactContent.my,
    services: servicesContent.my,
  },
} as const;

export type I18nContent = typeof i18nContent;
export type LocalizedContent = I18nContent[keyof I18nContent];
