import type Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatefromIconList from "./PlatefromIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-lg
        bg-white
        shadow-lg
        transition-transform
        duration-300
        hover:scale-105
        dark:bg-black
      "
    >
      {/* Game Image */}
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        {/* Platforms + Critic Score */}
        <div className="mb-3 flex items-center justify-between">
          <PlatefromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>

        {/* Game Title + Emoji */}
        <div className="flex min-h-14 items-start gap-2">
          <Link
            to={`/games/${game.slug}`}
            className="
              line-clamp-2
              flex-1
              text-xl
              font-bold
              leading-7
              text-gray-800
              transition-colors
              hover:text-blue-600
              dark:text-white
              dark:hover:text-blue-400
            "
          >
            {game.name}
          </Link>

          <div className="shrink-0 pt-1">
            <Emoji rating={game.rating_top} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
