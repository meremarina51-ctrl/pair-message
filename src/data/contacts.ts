import type { NavKey } from "@/i18n/types";

export const PHONE_DISPLAY = "+7 916 007-32-59";
export const PHONE_HREF = "tel:+79160073259";
export const WHATSAPP_HREF = "https://wa.clck.bar/79160073259";
export const TELEGRAM_HREF = "https://t.me/barbiespa69";

export const NAV_LINKS: { key: NavKey; href: string }[] = [
  { key: "programs", href: "#programs" },
  { key: "girls", href: "#girls" },
  { key: "salons", href: "#salons" },
  { key: "book", href: PHONE_HREF },
];
