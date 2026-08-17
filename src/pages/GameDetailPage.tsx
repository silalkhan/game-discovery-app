import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpendableText from "../components/ExpendableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  // Loading
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-black">
        {/* Spinner */}
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500"
          aria-label="Loading"
        />

        {/* Loading Text */}
        <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Loading game...
        </p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-black">
        <p className="rounded-xl bg-white px-8 py-6 text-center text-xl font-semibold text-red-500 shadow-lg dark:bg-gray-900">
          Something went wrong while loading the game.
        </p>
      </div>
    );
  }

  // Game not found
  if (!game) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-black">
        <p className="rounded-xl bg-white px-8 py-6 text-center text-xl font-semibold text-red-500 shadow-lg dark:bg-gray-900">
          Game not found.
        </p>
      </div>
    );
  }

  // Metacritic color
  const metacriticColor =
    game.metacritic >= 90
      ? "text-green-500"
      : game.metacritic >= 70
        ? "text-yellow-500"
        : "text-red-500";

  // Metacritic background
  const metacriticBg =
    game.metacritic >= 90
      ? "bg-green-500/10 ring-green-500/20"
      : game.metacritic >= 70
        ? "bg-yellow-500/10 ring-yellow-500/20"
        : "bg-red-500/10 ring-red-500/20";

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-gray-900 sm:px-6 sm:py-10 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={game.background_image}
            alt={game.name}
            className="h-64 w-full object-cover sm:h-80 md:h-100 lg:h-112.5"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          {/* Game Title */}
          <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-10">
            <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {game.name}
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Left Column */}
          <div>
            {/* Description */}
            <section>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                About the Game
              </h2>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6 dark:bg-gray-900 dark:ring-gray-800">
                <ExpendableText>{game.description}</ExpendableText>
              </div>
            </section>

            {/* Trailer */}
            <section className="mt-10">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Game Trailer
              </h2>

              <div className="overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-gray-200 dark:ring-gray-800">
                <GameTrailer gameId={game.id} />
              </div>
            </section>

            {/* Screenshots */}
            <section className="mt-10">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Screenshots
              </h2>

              <GameScreenshots gameId={game.id} />
            </section>
          </div>

          {/* Right Column */}
          <aside>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Game Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Metacritic */}
              <div
                className={`rounded-2xl p-5 shadow-sm ring-1 ${metacriticBg}`}
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Metacritic Score
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <span
                    className={`text-4xl font-extrabold ${metacriticColor}`}
                  >
                    {game.metacritic}
                  </span>

                  <span
                    className={`rounded-full bg-white/70 px-3 py-1 text-xs font-semibold ${metacriticColor} dark:bg-black/30`}
                  >
                    {game.metacritic >= 90
                      ? "Excellent"
                      : game.metacritic >= 70
                        ? "Good"
                        : "Mixed"}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Rating
                </p>

                <p className="mt-2 text-3xl font-extrabold">
                  {game.rating_top}
                  <span className="text-lg font-medium text-gray-400">
                    {" "}
                    / 5
                  </span>
                </p>
              </div>

              {/* Platforms */}
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Platforms
                </p>

                <div className="flex flex-wrap gap-2">
                  {game.parent_platforms.map(({ platform }) => (
                    <span
                      key={platform.id}
                      className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Genres */}
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Genres
                </p>

                <div className="flex flex-wrap gap-2">
                  {game.genres.length > 0 ? (
                    game.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
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

              {/* Publishers */}
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Publishers
                </p>

                <div className="flex flex-wrap gap-2">
                  {game.publishers.length > 0 ? (
                    game.publishers.map((publisher) => (
                      <span
                        key={publisher.id}
                        className="rounded-lg bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
                      >
                        {publisher.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Publisher information not available
                    </span>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default GameDetailPage;
