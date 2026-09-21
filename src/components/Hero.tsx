import Image from "next/image";
import { NAV_LINKS, WHATSAPP_HREF } from "@/data/contacts";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { ButtonLink } from "./Button";
import { Header } from "./Header";

type Props = { locale: Locale; dict: Dictionary };

export function Hero({ locale, dict }: Props) {
  const { hero } = dict;

  return (
    <section className="relative flex min-h-180 items-center overflow-hidden md:h-195">
      <div className="absolute inset-[-4%] motion-safe:animate-kenburns">
        <Image
          src="/hero.avif"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>
      <div className="absolute inset-0 bg-background/55 md:bg-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(13_7_9/0.94)_0%,rgb(13_7_9/0.4)_45%,rgb(13_7_9/0.2)_100%)]" />

      <Header
        locale={locale}
        brand={dict.brand}
        nav={dict.nav}
        labels={dict.header}
      />

      <div className="relative z-10 max-w-160 px-5 pb-16 pt-28 md:px-12 md:py-0">
        <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent-soft">
          {hero.eyebrow}
        </span>
        <h1 className="mb-5 mt-4 text-balance font-display text-[40px] font-bold leading-[1.1] md:text-[50px]">
          {hero.title}
        </h1>
        <p className="mb-6.5 text-sm leading-relaxed text-foreground/65">
          {hero.included}
        </p>
        <p className="mb-7.5 text-[13px] leading-relaxed text-foreground/65">
          {hero.extra}
        </p>
        <ButtonLink href={WHATSAPP_HREF}>{dict.common.orderProgram}</ButtonLink>
      </div>

      <nav
        aria-label={hero.sectionsNav}
        className="absolute bottom-10 left-12 z-10 hidden items-center gap-4.5 md:flex"
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.key}
            href={link.href}
            className={`flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors hover:text-foreground ${
              i === 0 ? "text-accent-soft" : "text-foreground/65"
            }`}
          >
            <span aria-hidden className="size-0.75 rounded-full bg-current" />
            {dict.nav[link.key]}
          </a>
        ))}
      </nav>
    </section>
  );
}
