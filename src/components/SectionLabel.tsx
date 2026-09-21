import type { PropsWithChildren } from "react";

export function SectionLabel({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-11 text-center text-[13px] font-bold uppercase tracking-[0.26em] text-accent-soft">
      {children}
    </h2>
  );
}
