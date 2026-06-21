import Badge from "@/components/Badge";
import { getGameLogo } from "@/data/games";
import Image from "next/image";
import Link from "next/link";
import { TopUpPackageGrid } from "@/components/TopUpPackageCard";
import UidForm from "@/components/UidForm";

export default function GameTopUpContent({ game, packageData }) {
  return (
    <div className="animate-fade-in">
      <nav className="mb-4 text-sm text-muted" aria-label="breadcrumb">
        <Link href="/" className="transition-colors hover:text-primary">
          หน้าหลัก
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{game.fullName}</span>
      </nav>

      <div className="mb-6 flex items-center gap-4 rounded-xl border border-border bg-surface-elevated p-4 sm:p-6">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface sm:h-20 sm:w-20">
          <Badge badge={game.badge} />
          <Image
            src={getGameLogo(game)}
            alt={game.fullName}
            fill
            sizes="80px"
            className="rounded-2xl object-contain p-2"
            priority
            
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">{game.fullName}</h1>
          <p className="text-sm text-muted">เติม{packageData.currencyName} — ส่งเข้าเกมอัตโนมัติ</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-8">
        <UidForm
          slug={game.slug}
          uidLabel={packageData.uidLabel}
          uidPlaceholder={packageData.uidPlaceholder}
          uidHelp={packageData.uidHelp}
        />

        <div className="rounded-xl border border-border bg-surface-elevated p-4 sm:p-6">
          <TopUpPackageGrid
            packages={packageData.packages}
            currencyName={packageData.currencyName}
            currencyIcon={packageData.currencyIcon}
          />
        </div>
      </div>
    </div>
  );
}
