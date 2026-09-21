import { girls, VISIBLE_GIRLS } from "@/data/girls";
import type { Locale } from "@/i18n/config";
import { formatAge, formatNumber } from "@/i18n/format";
import type { Dictionary } from "@/i18n/types";
import { GirlsGrid } from "./GirlsGrid";
import { SectionLabel } from "./SectionLabel";

type Props = { locale: Locale; dict: Dictionary };

export function Girls({ locale, dict }: Props) {
  const { girls: t } = dict;

  // Everything is translated and formatted here, so the client grid only gets plain strings.
  const cards = girls.map((girl) => ({
    id: girl.id,
    name: t.names[girl.id],
    age: formatAge(locale, girl.age),
    photos: [...girl.photos],
    stats: [
      { label: t.height, value: formatNumber(locale, girl.height) },
      { label: t.weight, value: formatNumber(locale, girl.weight) },
      { label: t.breast, value: formatNumber(locale, girl.breast) },
    ],
  }));

  return (
    <section
      id="girls"
      className="motif mt-22 scroll-mt-6 bg-surface px-5 py-18 md:px-12"
    >
      <SectionLabel>{t.label}</SectionLabel>
      <GirlsGrid
        cards={cards}
        visibleCount={VISIBLE_GIRLS}
        showAllLabel={t.showAll}
        hideLabel={t.hide}
        sliderLabels={{ prev: t.prevPhoto, next: t.nextPhoto, photoOf: t.photoOf }}
      />
    </section>
  );
}
