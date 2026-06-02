import type { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatefromIconList from "./PlatefromIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div
      className="
        rounded-lg
        overflow-hidden
        shadow-lg
        bg-white
        dark:bg-black
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          <PlatefromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>

        {/* Game Title */}
        <h2
          className="
            text-xl
            font-bold
            text-gray-800
            dark:text-white
          "
        >
          {game.name}
        </h2>
        <Emoji rating={game.rating_top} />
      </div>
    </div>
  );
}

export default GameCard;
