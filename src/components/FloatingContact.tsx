"use client";

import { MessageCircle, Phone, X } from "@lucide/icons";
import { useEffect, useRef, useState } from "react";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  TELEGRAM_HREF,
  WHATSAPP_HREF,
} from "@/data/contacts";
import type { Dictionary } from "@/i18n/types";
import { TelegramIcon, WhatsAppIcon } from "./icons/BrandIcons";
import { Icon } from "./icons/Icon";

const ICON_SWAP =
  "absolute inset-0 transition-[opacity,rotate,scale] duration-300 motion-reduce:transition-none";

export function FloatingContact({ labels }: { labels: Dictionary["widget"] }) {
  const [isOpen, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Top to bottom; the last one sits next to the button and is the primary channel.
  const actions = [
    {
      key: "call",
      href: PHONE_HREF,
      label: labels.call,
      hint: PHONE_DISPLAY,
      external: false,
      circle: "text-accent-soft group-hover:bg-accent group-hover:text-[#150708]",
      icon: <Icon icon={Phone} size={20} />,
    },
    {
      key: "telegram",
      href: TELEGRAM_HREF,
      label: "Telegram",
      hint: null,
      external: true,
      circle: "text-[#26A5E4]",
      icon: <TelegramIcon className="size-7" />,
    },
    {
      key: "whatsapp",
      href: WHATSAPP_HREF,
      label: "WhatsApp",
      hint: null,
      external: true,
      circle: "text-[#25D366]",
      icon: <WhatsAppIcon className="size-7" />,
    },
  ];

  return (
    <div
      ref={root}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-30 md:bottom-8 md:right-8"
    >
      <ul
        id="floating-contact"
        inert={!isOpen}
        className="absolute bottom-full right-0 mb-3 flex flex-col items-end gap-3"
      >
        {actions.map((action, i) => {
          // Items nearest to the button appear first when opening.
          const step = actions.length - 1 - i;
          return (
            <li
              key={action.key}
              style={{ transitionDelay: isOpen ? `${step * 60}ms` : "0ms" }}
              className={`transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <a
                href={action.href}
                onClick={() => setOpen(false)}
                {...(action.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center gap-3"
              >
                <span className="flex flex-col whitespace-nowrap rounded-full border border-foreground/15 bg-[#180a0c]/85 px-4 py-2 leading-tight shadow-lg backdrop-blur-lg transition-colors group-hover:border-accent/70">
                  <span className="text-[13px] font-semibold">{action.label}</span>
                  {action.hint && (
                    <span className="text-[11px] tabular-nums text-foreground/60">{action.hint}</span>
                  )}
                </span>
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-[#180a0c]/85 shadow-lg backdrop-blur-lg transition-colors group-hover:border-accent/70 ${action.circle}`}
                >
                  {action.icon}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="floating-contact"
        aria-label={isOpen ? labels.close : labels.open}
        className="relative flex size-14 cursor-pointer items-center justify-center rounded-full bg-accent text-[#150708] shadow-[0_8px_30px_rgb(224_41_63/0.45)] transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
      >
        {!isOpen && (
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-accent opacity-40 motion-safe:animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]"
          />
        )}
        <span className="relative size-6">
          <Icon
            icon={MessageCircle}
            size={24}
            className={`${ICON_SWAP} ${isOpen ? "rotate-90 scale-50 opacity-0" : ""}`}
          />
          <Icon
            icon={X}
            size={24}
            className={`${ICON_SWAP} ${isOpen ? "" : "-rotate-90 scale-50 opacity-0"}`}
          />
        </span>
      </button>
    </div>
  );
}
