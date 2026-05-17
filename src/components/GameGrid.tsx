import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {/* Loading Spinner */}

      {error && <p>{error}</p>}
      <ul className=" border-dotted">
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
