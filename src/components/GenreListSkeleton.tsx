function GenreListSkeleton() {
  return (
    <ul className="space-y-3 animate-pulse">
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index} className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700" />
          <div className="h-5 w-24 rounded bg-gray-300 dark:bg-gray-700" />
        </li>
      ))}
    </ul>
  );
}

export default GenreListSkeleton;
