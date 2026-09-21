import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ru: () => import("./dictionaries/ru").then((m) => m.ru),
  en: () => import("./dictionaries/en").then((m) => m.en),
  zh: () => import("./dictionaries/zh").then((m) => m.zh),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
