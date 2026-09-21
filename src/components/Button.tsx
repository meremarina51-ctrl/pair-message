import type { PropsWithChildren } from "react";

type Variant = "solid" | "outline";

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-full font-bold transition-colors";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent px-7 py-[13px] text-[13.5px] tracking-[0.03em] text-[#150708] hover:bg-accent-soft",
  outline:
    "border border-accent bg-transparent px-[30px] py-3 text-xs uppercase tracking-[0.08em] text-accent-soft hover:bg-accent/15",
};

export function buttonClass(variant: Variant = "solid", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

interface IProps {
  href: string;
  variant?: Variant;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "solid",
  className,
  children,
}: PropsWithChildren<IProps>) {
  // External links (e.g. WhatsApp) open in a new tab; tel: and #anchors stay in place.
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={buttonClass(variant, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
