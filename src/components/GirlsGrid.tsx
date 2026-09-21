"use client";

import { useState } from "react";
import { buttonClass } from "./Button";
import { GirlCard, type GirlCardData, type SliderLabels } from "./GirlCard";

type Props = {
  cards: GirlCardData[];
  visibleCount: number;
  showAllLabel: string;
  hideLabel: string;
  sliderLabels: SliderLabels;
};

export function GirlsGrid({
  cards,
  visibleCount,
  showAllLabel,
  hideLabel,
  sliderLabels,
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? cards : cards.slice(0, visibleCount);

  return (
    <>
      <ul className="mx-auto mb-9 grid max-w-md grid-cols-1 gap-4 sm:max-w-325 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {visible.map((card) => (
          <li key={card.id}>
            <GirlCard card={card} labels={sliderLabels} />
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((v) => !v)}
          className={buttonClass("outline")}
        >
          {showAll ? hideLabel : showAllLabel}
        </button>
      </div>
    </>
  );
}
