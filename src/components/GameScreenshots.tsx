import useScreenshots from "../hooks/useScreenShorts";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const screenshots = data?.results ?? [];

  if (screenshots.length === 0) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-2xl bg-gray-100 p-6 text-center dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">
          No screenshots available for this game.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {screenshots.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt="Game screenshot"
          className="w-full rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
