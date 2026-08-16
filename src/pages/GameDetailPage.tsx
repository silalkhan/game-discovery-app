import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpendableText from "../components/ExpendableText";

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

  // Metacritic color based on score
  const metacriticColor =
    game.metacritic >= 90
      ? "text-green-500"
      : game.metacritic >= 70
        ? "text-yellow-500"
        : "text-red-500";

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
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">About the Game</h2>

          <ExpendableText>{game.description}</ExpendableText>
        </section>

        {/* Game Information */}
        <section>
          <h2 className="mb-5 text-2xl font-bold">Game Information</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Metacritic */}
            <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                Metacritic
              </h3>

              <p className={`text-3xl font-bold ${metacriticColor}`}>
                {game.metacritic}
              </p>
            </div>

            {/* Rating */}
            <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
              <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                Rating
              </h3>

              <p className="text-3xl font-bold">{game.rating_top} / 5</p>
            </div>

            {/* Platforms */}
            <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
              <h3 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                Platforms
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.parent_platforms.map(({ platform }) => (
                  <span
                    key={platform.id}
                    className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-800"
                  >
                    {platform.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Genres */}
            <div className="rounded-xl bg-white p-5 shadow dark:bg-gray-900">
              <h3 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                Genres
              </h3>

              <div className="flex flex-wrap gap-2">
                {game.genres.length > 0 ? (
                  game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {genre.name}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Not available
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Publishers */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Publishers</h2>

          <div className="flex flex-wrap gap-3">
            {game.publishers.length > 0 ? (
              game.publishers.map((publisher) => (
                <span
                  key={publisher.id}
                  className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium dark:bg-gray-800"
                >
                  {publisher.name}
                </span>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400">
                Publisher information not available
              </span>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameDetailPage;
