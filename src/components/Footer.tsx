import { navLinks } from "@/data/contacts";
import type { Locale } from "@/i18n/config";
import { fill } from "@/i18n/format";
import type { Dictionary } from "@/i18n/types";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { footer } = dict;

  return (
    <footer className="mt-22.5 border-t border-foreground/10 px-5 pb-10 pt-12 md:px-12">
      <div className="mx-auto mb-9 flex max-w-325 flex-wrap justify-between gap-10">
        <div className="max-w-85">
          <div className="mb-3">
            <Logo name={dict.brand.name} tagline={dict.brand.tagline} size="sm" />
          </div>
          <p className="text-[11.5px] leading-relaxed text-foreground/65">
            {fill(footer.disclaimer, { year: new Date().getFullYear() })}
          </p>
        </div>
        <nav aria-label={footer.nav} className="flex flex-col gap-2.5">
          {navLinks(locale).map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[12.5px] text-foreground/60 transition-colors hover:text-foreground"
            >
              {dict.nav[link.key]}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-325 items-center gap-3 border-t border-foreground/6 pt-6">
        <span className="rounded border border-foreground/25 px-1.75 py-0.5 text-[12px] font-bold">
          {footer.adults}
        </span>
        <span className="text-[12px] tracking-[0.04em] text-foreground/70">
          {footer.noIntim}
        </span>
      </div>
    </footer>
  );
}
