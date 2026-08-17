import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const trailer = data?.results[0];

  if (!trailer) {
    return (
      <div className="flex min-h-50 items-center justify-center rounded-2xl bg-gray-100 p-6 text-center dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">
          No trailer available for this game.
        </p>
      </div>
    );
  }

  return (
    <video
      src={trailer.data[480]}
      poster={trailer.preview}
      controls
      className="aspect-video w-full object-cover"
    />
  );
};

export default GameTrailer;
