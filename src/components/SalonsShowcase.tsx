"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { SalonPanel, type SalonLabels, type SalonView } from "./SalonPanel";

type Props = {
  salons: SalonView[];
  labels: SalonLabels;
};

export function SalonsShowcase({ salons, labels }: Props) {
  const [active, setActive] = useState(0);

  const select = (i: number) => {
    setActive(i);
    document.getElementById(`salon-tab-${i}`)?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = salons.length - 1;
    if (e.key === "ArrowRight") select(active === last ? 0 : active + 1);
    else if (e.key === "ArrowLeft") select(active === 0 ? last : active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(last);
    else return;
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-325">
      <div
        role="tablist"
        aria-label={labels.tabs}
        onKeyDown={onKeyDown}
        className="-mx-5 mb-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        {salons.map((salon, i) => {
          const isActive = i === active;
          return (
            <button
              key={salon.id}
              type="button"
              role="tab"
              id={`salon-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`salon-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => {
                setActive(i);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={`relative h-16 w-36 shrink-0 cursor-pointer snap-start rounded-xl border transition-colors md:w-auto ${
                isActive
                  ? "border-accent bg-accent/10"
                  : "border-foreground/10 bg-[#180a0c]/55 hover:border-foreground/30"
              }`}
            >
              <span
                className={`absolute inset-3 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              >
                <Image
                  src={salon.logo}
                  alt={salon.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </span>
            </button>
          );
        })}
      </div>

      {salons.map((salon, i) => (
        <SalonPanel
          key={salon.id}
          salon={salon}
          labels={labels}
          active={i === active}
          panelId={`salon-panel-${i}`}
          tabId={`salon-tab-${i}`}
        />
      ))}
    </div>
  );
}
