import GameTopUpContent from "@/components/GameTopUpContent";
import { getGameBySlug } from "@/data/games";
import { getPackagesBySlug } from "@/data/packages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { games } = await import("@/data/games");
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) return { title: "ไม่พบเกม" };

  return {
    title: `เติม ${game.fullName}`,
    description: `เติมเงิน ${game.fullName} รวดเร็ว ปลอดภัย ที่ Inblackm Termgame`,
  };
}

export default async function GamePage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const packageData = getPackagesBySlug(slug);

  if (!game || !packageData) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
      <GameTopUpContent game={game} packageData={packageData} />
    </div>
  );
}
