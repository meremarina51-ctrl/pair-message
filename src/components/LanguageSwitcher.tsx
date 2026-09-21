"use client";

import { Check, ChevronDown, Globe } from "@lucide/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { htmlLang, localeLabels, locales, type Locale } from "@/i18n/config";
import { rememberLocale } from "@/i18n/cookie";
import { Icon } from "./icons/Icon";

type Props = {
  locale: Locale;
  /** Accessible name of the switcher, e.g. "Language". */
  label: string;
};

export function LanguageSwitcher({ locale, label }: Props) {
  const [isOpen, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const choose = (next: Locale) => {
    rememberLocale(next);
    setOpen(false);
  };

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={label}
        className="flex cursor-pointer items-center gap-1.5 rounded-full border border-foreground/20 bg-[#180a0c]/55 py-2.5 pl-3.5 pr-3 text-[12px] font-bold uppercase tracking-[0.1em] text-foreground backdrop-blur-lg transition-colors hover:border-foreground/40"
      >
        <Icon icon={Globe} size={15} />
        {localeLabels[locale].short}
        <Icon
          icon={ChevronDown}
          size={14}
          className={`transition-transform duration-200 max-[400px]:hidden ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <ul
        className={`absolute right-0 top-full z-10 mt-2 min-w-40 rounded-xl border border-foreground/15 bg-[#180a0c]/90 p-1 backdrop-blur-xl transition-[opacity,translate] duration-200 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {locales.map((next) => {
          const isCurrent = next === locale;
          return (
            <li key={next}>
              <Link
                href={`/${next}`}
                scroll={false}
                lang={htmlLang[next]}
                hrefLang={htmlLang[next]}
                aria-current={isCurrent ? "true" : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => choose(next)}
                className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors hover:bg-foreground/10 ${
                  isCurrent ? "font-semibold text-accent-soft" : "text-foreground/85"
                }`}
              >
                {localeLabels[next].name}
                {isCurrent && <Icon icon={Check} size={15} />}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
