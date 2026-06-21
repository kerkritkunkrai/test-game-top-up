import { getGameLogo } from "@/data/games";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

export default function GameCard({ game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md hover:shadow-primary/10"
    >
      <Badge badge={game.badge} />
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface p-3">
        <Image
          src={getGameLogo(game)}
          alt={game.fullName}
          fill
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 150px"
          className="rounded-3xl object-contain p-2 transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
          
        />
      </div>
      <div className="border-t border-border px-3 py-2.5 text-center">
        <p className="truncate text-sm font-semibold text-foreground">{game.name}</p>
        <p className="truncate text-xs text-muted">{game.fullName}</p>
      </div>
    </Link>
  );
}
