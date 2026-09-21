"use client";

import {
  ChevronLeft,
  ChevronRight,
  Globe,
  MapPin,
  TrainFront,
} from "@lucide/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fill } from "@/i18n/format";
import { Icon } from "./icons/Icon";

const ICON_PROPS = {
  size: 15,
  strokeWidth: 1.8,
  className: "shrink-0 text-accent-soft",
};

const ARROW_CLASS =
  "absolute top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-foreground/20 bg-background/55 text-foreground backdrop-blur-md transition-colors hover:bg-background/80";

/** A salon with every text already translated and formatted on the server. */
export type SalonView = {
  id: string;
  name: string;
  logo: string;
  /** Formatted starting price, e.g. "4 500 ₽". */
  price: string;
  body: string;
  address: string;
  metro: string;
  /** Bare domain, e.g. "www.example.ru". */
  website: string;
  photos: string[];
};

export type SalonLabels = {
  tabs: string;
  priceFrom: string;
  prevPhoto: string;
  nextPhoto: string;
  showPhoto: string;
  interior: string;
};

type Props = {
  salon: SalonView;
  labels: SalonLabels;
  panelId: string;
  tabId: string;
  active: boolean;
};

export function SalonPanel({ salon, labels, panelId, tabId, active }: Props) {
  const [index, setIndex] = useState(0);
  const thumbs = useRef<HTMLDivElement>(null);
  const total = salon.photos.length;

  const go = (next: number) => setIndex((next + total) % total);

  // Keep the current thumbnail centred without scrolling the page itself.
  useEffect(() => {
    const box = thumbs.current;
    const thumb = box?.children[index] as HTMLElement | undefined;
    if (!box || !thumb) return;
    box.scrollTo({
      left: thumb.offsetLeft - (box.clientWidth - thumb.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      className={`${
        active ? "grid" : "hidden"
      } gap-6 rounded-2xl border border-foreground/10 bg-[#180a0c]/55 p-3 md:p-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-8`}
    >
      <div className="min-w-0">
        <div className="relative aspect-16/11 overflow-hidden rounded-xl bg-[#231016]">
          <Image
            src={salon.photos[index]}
            alt={fill(labels.interior, { name: salon.name, n: index + 1 })}
            fill
            sizes="(min-width: 1300px) 700px, (min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            aria-label={labels.prevPhoto}
            onClick={() => go(index - 1)}
            className={`${ARROW_CLASS} left-3`}
          >
            <Icon icon={ChevronLeft} size={20} />
          </button>
          <button
            type="button"
            aria-label={labels.nextPhoto}
            onClick={() => go(index + 1)}
            className={`${ARROW_CLASS} right-3`}
          >
            <Icon icon={ChevronRight} size={20} />
          </button>
          <span className="absolute bottom-3 right-3 rounded-full bg-background/55 px-2.5 py-1 text-[11px] font-bold tabular-nums backdrop-blur-md">
            {index + 1} / {total}
          </span>
        </div>

        <div
          ref={thumbs}
          className="relative mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-color:rgb(245_236_234/0.3)_transparent] [scrollbar-width:thin]"
        >
          {salon.photos.map((photo, i) => (
            <button
              key={photo}
              type="button"
              aria-label={fill(labels.showPhoto, { n: i + 1 })}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                i === index
                  ? "border-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={photo}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:py-2">
        <h3 className="relative h-16 w-52">
          <Image
            src={salon.logo}
            alt={salon.name}
            fill
            sizes="208px"
            className="object-contain object-left"
          />
        </h3>

        <p className="mt-5 flex items-baseline gap-2">
          <span className="text-[13px] text-foreground/60">{labels.priceFrom}</span>
          <strong className="font-display text-4xl font-bold leading-none text-accent-soft lining-nums">
            {salon.price}
          </strong>
        </p>

        <p className="mb-6 mt-4 text-[13.5px] leading-[1.65] text-foreground/60">
          {salon.body}
        </p>

        <ul className="mt-auto flex flex-col gap-2.5 border-t border-foreground/10 pt-5 text-[13px] text-foreground/70">
          <li className="flex items-center gap-2.5">
            <Icon icon={MapPin} {...ICON_PROPS} />
            {salon.address}
          </li>
          <li className="flex items-center gap-2.5">
            <Icon icon={TrainFront} {...ICON_PROPS} />
            {salon.metro}
          </li>
          <li className="flex items-center gap-2.5">
            <Icon icon={Globe} {...ICON_PROPS} />
            <a
              href={`https://${salon.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-soft"
            >
              {salon.website}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
