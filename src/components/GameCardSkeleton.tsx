const GameCardSkeleton = () => {
  return (
    <div
      className="
        rounded-lg
        overflow-hidden
        shadow-lg
        bg-white
        dark:bg-gray-800
        animate-pulse
      "
    >
      {/* Image skeleton */}
      <div className="w-full h-52 bg-gray-300 dark:bg-gray-700" />

      <div className="p-4 space-y-3">
        {/* top row (icons + score) */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* title */}
        <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
