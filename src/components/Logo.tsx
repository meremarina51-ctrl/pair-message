type Props = {
  name: string;
  tagline: string;
  size?: "sm" | "lg";
};

export function Logo({ name, tagline, size = "lg" }: Props) {
  const large = size === "lg";

  return (
    <div className={`flex items-center ${large ? "gap-2 sm:gap-3" : "gap-2.5"}`}>
      {/* Two interlocked diamonds: a pair */}
      <span
        aria-hidden
        className={`flex items-center ${large ? "px-1.5" : "px-1"}`}
      >
        <span
          className={`rotate-45 rounded-xs bg-linear-to-br from-accent-soft to-accent ${
            large ? "size-4 shadow-[0_0_16px_var(--accent)]" : "size-3"
          }`}
        />
        <span
          className={`rotate-45 rounded-xs border-accent-soft ${
            large ? "-ml-2 size-3.5 border-[1.5px]" : "-ml-1.5 size-2.5 border"
          }`}
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold ${
            large ? "text-xl tracking-wide sm:text-2xl" : "text-lg"
          }`}
        >
          {name}
        </span>
        <span
          className={`font-bold uppercase text-accent-soft ${
            large
              ? "mt-1 text-[9px] tracking-[0.3em] sm:tracking-[0.5em]"
              : "mt-0.5 text-[7px] tracking-[0.45em]"
          }`}
        >
          {tagline}
        </span>
      </span>
    </div>
  );
}
