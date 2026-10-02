import type { GirlId } from "@/data/girls";
import type { ProgramId } from "@/data/programs";
import type { SalonId } from "@/data/salons";

export type NavKey = "programs" | "girls" | "salons" | "vacancies" | "book";

export type ApplicationField = "name" | "phone" | "email" | "role" | "about" | "consent";

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
    minutes: string;
    items: Record<
      ProgramId,
      {
        title: string;
        description: string;
        girls?: string;
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
    photoOf: string;
    names: Record<GirlId, string>;
  };
  salons: {
    label: string;
    tabs: string;
    priceFrom: string;
    prevPhoto: string;
    nextPhoto: string;
    showPhoto: string;
    interior: string;
    items: Record<SalonId, { body: string; address: string; metro: string }>;
  };
  vacancies: {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      labels: Record<ApplicationField, string>;
      placeholders: Record<"name" | "phone" | "email" | "role" | "about", string>;
      optional: string;
      submit: string;
      sending: string;
    };
    errors: {
      required: string;
      phone: string;
      email: string;
      consent: string;
      tooLong: string;
      send: string;
    };
    success: { title: string; text: string; again: string };
  };
  widget: { open: string; close: string; call: string };
  footer: {
    disclaimer: string;
    nav: string;
    adults: string;
    noIntim: string;
  };
};
