import GameCard from "./GameCard";

export default function GameSection({ category, games }) {
  if (!games.length) return null;

  return (
    <section id={category.anchor} className="scroll-mt-20">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">{category.title}</h2>
          <p className="mt-0.5 text-sm text-muted">{category.subtitle}</p>
        </div>
        <div className="hidden h-0.5 flex-1 bg-gradient-to-r from-primary to-transparent sm:block" />
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 sm:gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
