import { badgeConfig } from "@/data/games";

export default function Badge({ badge }) {
  if (!badge || !badgeConfig[badge]) return null;

  const { label, className } = badgeConfig[badge];

  return (
    <span
      className={`absolute left-2 top-2 z-10 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide shadow-sm ${className}`}
    >
      {label}
    </span>
  );
}
