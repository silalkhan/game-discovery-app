import trailers from "../data/trailers";

const useTrailers = (gameId: number) => {
  return {
    data: {
      results: trailers[gameId] || [],
    },
    error: null,
    isLoading: false,
  };
};

export default useTrailers;