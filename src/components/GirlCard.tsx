"use client";

import { ChevronLeft, ChevronRight } from "@lucide/icons";
import Image from "next/image";
import { useRef, useState } from "react";
import { fill } from "@/i18n/format";
import { Icon } from "./icons/Icon";

export type GirlCardData = {
  id: string;
  name: string;
  /** Already formatted, e.g. "25 лет". */
  age: string;
  /** Slides; the first photo is the cover. */
  photos: string[];
  stats: { label: string; value: string }[];
};

export type SliderLabels = {
  prev: string;
  next: string;
  /** "{n}" is the photo number, "{total}" the number of photos. */
  photoOf: string;
};

const ARROW_CLASS =
  "pointer-events-none absolute top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/20 bg-background/55 text-foreground opacity-0 backdrop-blur-md transition-[opacity,background-color] hover:bg-background/80 focus-visible:pointer-events-auto focus-visible:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100";

export function GirlCard({ card, labels }: { card: GirlCardData; labels: SliderLabels }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // Only photos near the ones already seen are mounted, so the page does not fetch every slide up front.
  const [range, setRange] = useState({ lo: 0, hi: 1 });

  const total = card.photos.length;
  const hasMany = total > 1;

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(next);
    setRange((r) =>
      next - 1 >= r.lo && next + 1 <= r.hi
        ? r
        : { lo: Math.min(r.lo, next - 1), hi: Math.max(r.hi, next + 1) },
    );
  };

  const goTo = (target: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: ((target + total) % total) * el.clientWidth, behavior: "smooth" });
  };

  return (
    <article
      aria-roledescription="carousel"
      aria-label={card.name}
      className="group relative aspect-3/4 overflow-hidden rounded-xl bg-[#231016] ring-1 ring-foreground/10"
    >
      <div
        ref={track}
        onScroll={onScroll}
        tabIndex={hasMany ? 0 : undefined}
        className="absolute inset-0 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {card.photos.map((photo, i) => (
          <div
            key={photo}
            role="group"
            aria-roledescription="slide"
            aria-label={fill(labels.photoOf, { n: i + 1, total })}
            className="relative h-full w-full shrink-0 snap-center"
          >
            {i >= range.lo && i <= range.hi && (
              <Image
                src={photo}
                alt={`${card.name}, ${fill(labels.photoOf, { n: i + 1, total })}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover object-[50%_20%]"
              />
            )}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

      <span className="absolute left-2.5 top-2.5 rounded-full bg-background/55 px-2.5 py-1 text-[11px] font-bold backdrop-blur-md lg:left-3 lg:top-3">
        {card.age}
      </span>

      {hasMany && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-3 flex -translate-x-1/2 gap-1 rounded-full bg-background/55 px-2 py-2 backdrop-blur-md lg:top-3.5"
          >
            {card.photos.map((photo, i) => (
              <span
                key={photo}
                className={`size-1.5 rounded-full transition-colors ${
                  i === index ? "bg-foreground" : "bg-foreground/35"
                }`}
              />
            ))}
          </span>
          <button
            type="button"
            aria-label={labels.prev}
            onClick={() => goTo(index - 1)}
            className={`${ARROW_CLASS} left-2`}
          >
            <Icon icon={ChevronLeft} size={18} />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            onClick={() => goTo(index + 1)}
            className={`${ARROW_CLASS} right-2`}
          >
            <Icon icon={ChevronRight} size={18} />
          </button>
        </>
      )}

      <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-lg border border-foreground/15 bg-background/45 px-3 py-2 backdrop-blur-md transition-colors duration-300 group-hover:border-accent/70 lg:inset-x-3 lg:bottom-3 lg:px-3.5 lg:py-2.5">
        <h3 className="font-display text-2xl font-bold leading-none sm:text-lg lg:text-2xl">
          {card.name}
        </h3>
        <dl className="mt-2 grid grid-cols-3 divide-x divide-foreground/15 text-center">
          {card.stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col-reverse gap-px">
              <dt className="text-[10px] uppercase tracking-widest text-accent-soft sm:text-[9px] lg:text-[10px]">
                {label}
              </dt>
              <dd className="text-base font-bold tabular-nums sm:text-sm lg:text-base">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
