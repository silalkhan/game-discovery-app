import useScreenshots from "../hooks/useScreenShorts";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results.length) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-bold sm:text-3xl">Screenshots</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {data.results.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt="Game screenshot"
            className="aspect-video w-full rounded-xl object-cover shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default GameScreenshots;
