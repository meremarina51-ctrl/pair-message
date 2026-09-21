import type { GirlId } from "@/data/girls";
import type { ProgramId } from "@/data/programs";
import type { SalonId } from "@/data/salons";

export type NavKey = "programs" | "girls" | "salons" | "book";

export type Dictionary = {
  meta: { title: string; description: string };
  brand: { name: string; tagline: string };
  nav: Record<NavKey, string>;
  common: { orderProgram: string };
  header: {
    orderCall: string;
    menu: string;
    close: string;
    mainNav: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    included: string;
    extra: string;
    sectionsNav: string;
  };
  programs: {
    label: string;
    /** "{n}" is the number of minutes. */
    minutes: string;
    items: Record<
      ProgramId,
      {
        title: string;
        description: string;
        /** How many girls take part, e.g. "2 girls". */
        girls?: string;
        /** What the program consists of; rendered in parentheses. */
        includes: string;
      }
    >;
  };
  girls: {
    label: string;
    showAll: string;
    hide: string;
    height: string;
    weight: string;
    breast: string;
    prevPhoto: string;
    nextPhoto: string;
    /** "{n}" is the photo number, "{total}" the number of photos. */
    photoOf: string;
    names: Record<GirlId, string>;
  };
  salons: {
    label: string;
    tabs: string;
    priceFrom: string;
    prevPhoto: string;
    nextPhoto: string;
    /** "{n}" is the photo number. */
    showPhoto: string;
    /** "{name}" and "{n}". */
    interior: string;
    items: Record<SalonId, { body: string; address: string; metro: string }>;
  };
  footer: {
    /** "{year}" is the current year. */
    disclaimer: string;
    nav: string;
    adults: string;
    noIntim: string;
  };
};
