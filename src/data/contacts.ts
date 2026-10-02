import type { Locale } from "@/i18n/config";
import type { NavKey } from "@/i18n/types";

export const PHONE_DISPLAY = "+7 916 007-32-59";
export const PHONE_HREF = "tel:+79160073259";
export const WHATSAPP_HREF = "https://wa.clck.bar/79160073259";
export const TELEGRAM_HREF = "https://t.me/barbiespa69";

export const navLinks = (locale: Locale): { key: NavKey; href: string }[] => [
  { key: "programs", href: `/${locale}#programs` },
  { key: "girls", href: `/${locale}#girls` },
  { key: "salons", href: `/${locale}#salons` },
  { key: "vacancies", href: `/${locale}/vacancies` },
  { key: "book", href: PHONE_HREF },
];
