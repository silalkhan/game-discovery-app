import games from "../data/games";

const useGame = (id: number) => {
  const game = games.find((game) => game.id === id);

  return {
    data: game,
  };
};

export default useGame;