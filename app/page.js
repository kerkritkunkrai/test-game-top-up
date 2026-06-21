import BannerCarousel from "@/components/BannerCarousel";
import GameSection from "@/components/GameSection";
import { banners } from "@/data/banners";
import { gameCategories, getGamesByCategory } from "@/data/games";
import { siteConfig } from "@/data/nav";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("newGames");
  const topUpCards = getGamesByCategory("topUpCards");

  return (
    <div className="pb-12">
      <div className="py-4 sm:py-6">
        <BannerCarousel banners={banners} />
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:space-y-12 sm:px-6">
        <div className="animate-fade-in text-center sm:text-left">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">เลือกเกมที่ต้องการเติม</h2>
          <p className="mt-1 text-sm text-muted sm:text-base">{siteConfig.tagline}</p>
        </div>

        <GameSection category={gameCategories.popular} games={popularGames} />
        <GameSection category={gameCategories.newGames} games={newGames} />
        <GameSection category={gameCategories.topUpCards} games={topUpCards} />
      </div>
    </div>
  );
}
