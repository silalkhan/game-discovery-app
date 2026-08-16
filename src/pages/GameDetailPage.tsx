import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { id } = useParams();

  const { data: game } = useGame(Number(id));

  if (!game) {
    return (
      <p className="p-10 text-center text-2xl font-semibold text-red-500">
        Game not found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Hero Image */}
        <img
          src={game.background_image}
          alt={game.name}
          className="mb-8 h-75 w-full rounded-2xl object-cover shadow-lg md:h-112.5"
        />

        {/* Game Name */}
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">{game.name}</h1>

        {/* Description */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">About the Game</h2>

          <p className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {game.description}
          </p>
        </section>

        {/* Information */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Metacritic */}
          <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
            <h3 className="mb-2 text-sm font-medium text-gray-500">
              Metacritic
            </h3>

            <p className="text-3xl font-bold text-green-500">
              {game.metacritic}
            </p>
          </div>

          {/* Rating */}
          <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
            <h3 className="mb-2 text-sm font-medium text-gray-500">Rating</h3>

            <p className="text-3xl font-bold">{game.rating_top} / 5</p>
          </div>
        </div>

        {/* Platforms */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Platforms</h2>

          <div className="flex flex-wrap gap-3">
            {game.parent_platforms.map(({ platform }) => (
              <span
                key={platform.id}
                className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium dark:bg-gray-800"
              >
                {platform.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameDetailPage;
