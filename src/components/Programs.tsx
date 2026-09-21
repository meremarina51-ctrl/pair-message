import Image from "next/image";
import { programs } from "@/data/programs";
import type { Locale } from "@/i18n/config";
import { fill, formatPrice } from "@/i18n/format";
import type { Dictionary } from "@/i18n/types";
import { SectionLabel } from "./SectionLabel";

type Props = { locale: Locale; dict: Dictionary };

export function Programs({ locale, dict }: Props) {
  return (
    <section id="programs" className="scroll-mt-6 px-5 pt-22 md:px-12">
      <SectionLabel>{dict.programs.label}</SectionLabel>
      <div className="mx-auto flex max-w-325 flex-col gap-6">
        {programs.map((program) => {
          const text = dict.programs.items[program.id];

          return (
            <article
              key={program.id}
              className="grid overflow-hidden rounded-[10px] border border-foreground/10 bg-[#180a0c]/55 backdrop-blur-lg md:grid-cols-[360px_1fr]"
            >
              <div className="relative min-h-65">
                <Image
                  src={program.image}
                  alt={text.title}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid items-center gap-6 p-6 md:px-10 md:py-8.5 lg:grid-cols-[1fr_auto] lg:gap-7.5">
                <div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-accent-soft">
                    {text.title}
                  </h3>
                  <p className="max-w-[56ch] text-[13.5px] leading-relaxed text-foreground/60">
                    {text.description}
                  </p>
                  <p className="mt-3 max-w-[56ch] text-[12.5px] leading-relaxed text-foreground/50">
                    {text.girls && (
                      <strong className="font-semibold text-foreground/75">
                        {text.girls}.{" "}
                      </strong>
                    )}
                    ({text.includes})
                  </p>
                </div>
                <div className="flex items-baseline gap-4 whitespace-nowrap lg:block lg:border-l lg:border-foreground/15 lg:pl-6 lg:text-center">
                  <div className="text-[13px] text-foreground/65">
                    {fill(dict.programs.minutes, { n: program.minutes })}
                  </div>
                  <div className="text-[15px] font-bold lg:mt-1">
                    {formatPrice(locale, program.price)}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
