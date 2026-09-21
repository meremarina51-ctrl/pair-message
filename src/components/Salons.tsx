import { WHATSAPP_HREF } from "@/data/contacts";
import { salons } from "@/data/salons";
import type { Locale } from "@/i18n/config";
import { formatPrice } from "@/i18n/format";
import type { Dictionary } from "@/i18n/types";
import { ButtonLink } from "./Button";
import type { SalonView } from "./SalonPanel";
import { SalonsShowcase } from "./SalonsShowcase";
import { SectionLabel } from "./SectionLabel";

type Props = { locale: Locale; dict: Dictionary };

export function Salons({ locale, dict }: Props) {
  const { salons: t } = dict;

  const items: SalonView[] = salons.map((salon) => ({
    id: salon.id,
    name: salon.name,
    logo: salon.logo,
    price: formatPrice(locale, salon.price),
    website: salon.website,
    photos: [...salon.photos],
    ...t.items[salon.id],
  }));

  return (
    <section id="salons" className="scroll-mt-6 px-5 pt-22 md:px-12">
      <SectionLabel>{t.label}</SectionLabel>
      <SalonsShowcase
        salons={items}
        labels={{
          tabs: t.tabs,
          priceFrom: t.priceFrom,
          prevPhoto: t.prevPhoto,
          nextPhoto: t.nextPhoto,
          showPhoto: t.showPhoto,
          interior: t.interior,
        }}
      />
      <div className="mt-16 text-center">
        <ButtonLink href={WHATSAPP_HREF}>{dict.common.orderProgram}</ButtonLink>
      </div>
    </section>
  );
}
