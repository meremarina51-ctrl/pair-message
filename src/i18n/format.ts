import type { Locale } from "./config";

const numberLocale: Record<Locale, string> = {
  ru: "ru-RU",
  en: "en-US",
  zh: "zh-CN",
};

/** Replaces `{name}` placeholders in a dictionary string. */
export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export function formatNumber(locale: Locale, value: number) {
  return new Intl.NumberFormat(numberLocale[locale]).format(value);
}

export function formatPrice(locale: Locale, value: number) {
  return `${formatNumber(locale, value)} ₽`;
}

export function formatAge(locale: Locale, age: number) {
  if (locale === "en") return `${age} y.o.`;
  if (locale === "zh") return `${age}岁`;

  const lastTwo = age % 100;
  const last = age % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return `${age} лет`;
  if (last === 1) return `${age} год`;
  if (last >= 2 && last <= 4) return `${age} года`;
  return `${age} лет`;
}
