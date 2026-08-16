import { useQuery } from "@tanstack/react-query";
import screenshots from "../data/screenshots";

const useScreenshots = (gameId: number) => {
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      Promise.resolve({
        results: screenshots[gameId] ?? [],
      }),
  });
};

export default useScreenshots;