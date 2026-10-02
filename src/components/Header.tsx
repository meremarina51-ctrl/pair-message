"use client";

import { Menu, X } from "@lucide/icons";
import { useEffect, useRef, useState } from "react";
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from "@/data/contacts";
import type { Locale } from "@/i18n/config";
import type { Dictionary, NavKey } from "@/i18n/types";
import { ButtonLink } from "./Button";
import { Icon } from "./icons/Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const ITEM_BASE =
  "transition-[opacity,translate,color] duration-500 ease-out motion-reduce:transition-none";

type Props = {
  locale: Locale;
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  labels: Dictionary["header"];
  current?: NavKey;
};

export function Header({ locale, brand, nav, labels, current }: Props) {
  const links = navLinks(locale);
  const [isOpen, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Move focus into the menu when it opens and back to the trigger when it closes.
  useEffect(() => {
    if (isOpen !== wasOpen.current) {
      (isOpen ? closeButton : openButton).current?.focus();
    }
    wasOpen.current = isOpen;
  }, [isOpen]);

  // Items slide in one after another when opening, and leave together when closing.
  const itemStyle = (step: number) => ({
    transitionDelay: isOpen ? `${120 + step * 70}ms` : "0ms",
  });
  const itemState = isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0";

  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-6 md:px-12 md:py-7.5">
      <Logo name={brand.name} tagline={brand.tagline} />

      <nav
        aria-label={labels.mainNav}
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-foreground/15 bg-[#180a0c]/55 p-1 backdrop-blur-lg xl:flex"
      >
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            aria-current={link.key === current ? "page" : undefined}
            className="rounded-full px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground/75 transition-colors hover:bg-foreground/10 hover:text-foreground aria-[current=page]:bg-foreground/10 aria-[current=page]:text-accent-soft 2xl:px-4"
          >
            {nav[link.key]}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 md:gap-5.5">
        <a
          href={PHONE_HREF}
          className="hidden text-[13px] font-semibold tabular-nums text-foreground/85 hover:text-accent-soft lg:inline xl:hidden 2xl:inline"
        >
          {PHONE_DISPLAY}
        </a>
        <ButtonLink href={PHONE_HREF} className="max-sm:hidden">
          {labels.orderCall}
        </ButtonLink>
        <LanguageSwitcher locale={locale} label={labels.language} />
        <button
          ref={openButton}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={labels.menu}
          className="flex cursor-pointer items-center gap-2.5 rounded-full border border-foreground/20 bg-[#180a0c]/55 px-3 py-2.5 text-foreground sm:pl-5 sm:pr-4.5 backdrop-blur-lg transition-colors hover:border-foreground/40 xl:hidden"
        >
          <span className="hidden text-[12px] font-bold uppercase tracking-[0.12em] sm:inline">
            {labels.menu}
          </span>
          <Icon icon={Menu} size={18} />
        </button>
      </div>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={labels.menu}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-0 z-50 flex flex-col bg-background/90 px-5 py-6 backdrop-blur-xl motion-reduce:transition-none md:px-12 md:py-7.5 ${
          // Visible right away on open (so focus can move in); hidden only after the fade-out.
          isOpen
            ? "visible opacity-100 [transition:opacity_500ms_ease-out,visibility_0s]"
            : "invisible opacity-0 [transition:opacity_500ms_ease-out,visibility_0s_linear_500ms]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo name={brand.name} tagline={brand.tagline} />
          <button
            ref={closeButton}
            type="button"
            onClick={() => setOpen(false)}
            className="flex cursor-pointer items-center gap-2.5 rounded-full border border-foreground/20 py-2.5 pl-5 pr-4.5 text-[12px] font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-foreground/40"
          >
            {labels.close}
            <Icon icon={X} size={18} />
          </button>
        </div>

        <nav className="my-auto flex flex-col gap-5 py-10">
          {links.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={link.key === current ? "page" : undefined}
              style={itemStyle(i)}
              className={`font-display text-4xl font-bold hover:text-accent-soft aria-[current=page]:text-accent-soft md:text-5xl ${ITEM_BASE} ${itemState}`}
            >
              {nav[link.key]}
            </a>
          ))}
        </nav>

        <div
          style={itemStyle(links.length)}
          className={`flex flex-wrap items-center gap-5 ${ITEM_BASE} ${itemState}`}
        >
          <a
            href={PHONE_HREF}
            className="text-sm font-semibold tabular-nums text-foreground/85 hover:text-accent-soft"
          >
            {PHONE_DISPLAY}
          </a>
          <ButtonLink href={PHONE_HREF}>{labels.orderCall}</ButtonLink>
        </div>
      </div>
    </header>
  );
}
