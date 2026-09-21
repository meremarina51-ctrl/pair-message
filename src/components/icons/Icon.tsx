import type { LucideIconData, LucideIconNode } from "@lucide/icons";
import { createElement, type ReactNode, type SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  icon: LucideIconData;
  size?: number;
};

function renderNode([tag, { key, ...attrs }, children]: LucideIconNode): ReactNode {
  return createElement(tag, { key, ...attrs }, children?.map(renderNode));
}

/** Renders a Lucide icon from `@lucide/icons` (which ships icon data only). */
export function Icon({ icon, size = 16, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {icon.node.map(renderNode)}
    </svg>
  );
}
