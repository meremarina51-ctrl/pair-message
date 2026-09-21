export const locales = ["ru", "en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Value for the <html lang> attribute. */
export const htmlLang: Record<Locale, string> = {
  ru: "ru",
  en: "en",
  zh: "zh-CN",
};

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  ru: { short: "RU", name: "Русский" },
  en: { short: "EN", name: "English" },
  zh: { short: "中文", name: "中文" },
};

export const LOCALE_COOKIE = "NEXT_LOCALE";
