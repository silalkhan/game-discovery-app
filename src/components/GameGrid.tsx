import React from "react";
//import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";
//import type { Genre } from "../hooks/useGenres";

import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";

// interface Props {
//   gameQuery: GameQuery;

//   //remove..
//   //selectedGenre: Genre | null;
//   //selectedPlatform: Platform | null;
// }

// function GameGrid({ gameQuery }: Props) {
//   const {
//     data,
//     error,
//     isLoading,
//     //here usegame can return inifiniteQuries has we learn  useInfiniteQuries have extra  functions we used here
//     //isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useGames(gameQuery);
//   //Grid skeleton
//   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   //Grid
//   if (error)
//     return <p className="text-red-500 text-center mb-4">{error.message}</p>;
//   const fetchedGamesCount =
//     // in each iteration we have to count page then added to total
//     data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; // here we give default value || 0

//   return (
//     <InfiniteScroll
//       hasMore={!!hasNextPage} // if we have  undefined converted to boolean should apply double explantion !!
//       dataLength={fetchedGamesCount}
//       next={() => fetchNextPage()}
//       loader={
//         <div className="flex justify-center py-6">
//           <div
//             className="
//         w-8 h-8
//         border-4
//         border-gray-300
//         border-t-blue-600
//         rounded-full
//         animate-spin
//       "
//           />
//         </div>
//       }
//     >
//       <div
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-6
//           p-4
//         "
//       >
//         {isLoading &&
//           skeletons.map((skeleton) => (
//             <GameCardContainer key={skeleton}>
//               <GameCardSkeleton />
//             </GameCardContainer>
//           ))}
//         {data?.pages.map((page, index) => (
//           <React.Fragment key={index}>
//             {page.results.map((game) => (
//               <GameCardContainer key={game.id}>
//                 <GameCard game={game} />
//               </GameCardContainer>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </InfiniteScroll>
//   );
// }

// export default GameGrid;
//Becoz of using infiniteScrolling we removed loadMore and Loading... button
// {hasNextPage && (
//   <div className="flex justify-start mt-8 px-4">
//     <button
//       onClick={() => fetchNextPage()}
//       disabled={isFetchingNextPage}
//       className="
//   w-full
//   sm:w-auto
//   max-w-xs
//   px-6
//   py-3
//   rounded-lg
//   bg-blue-600
//   text-white
//   font-medium
//   hover:bg-blue-700
//   active:scale-95
//   transition-all
//   duration-200
//   disabled:opacity-50
//   disabled:cursor-not-allowed
// "
//     >
//       {isFetchingNextPage ? "Loading..." : "Load More"}
//     </button>
//   </div>
// )}
// {
//Map each page in react fragment
//implement loadMore and Loading... button
//Removed
/* {data?.results.map((game) => (
  <GameCardContainer key={game.id}>
    <GameCard game={game} />
  </GameCardContainer>
))} */
// }

//Managing state by using zustand.... so removing props... also same do in useGames() hook visit this file and see...

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    //here usegame can return inifiniteQuries has we learn  useInfiniteQuries have extra  functions we used here
    //isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  //Grid skeleton
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Grid
  if (error) return <p className="text-red-500 text-center mb-4">{error}</p>;
  const fetchedGamesCount =
    // in each iteration we have to count page then added to total
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; // here we give default value || 0

  return (
    <InfiniteScroll
      hasMore={!!hasNextPage} // if we have  undefined converted to boolean should apply double explantion !!
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      loader={
        <div className="flex justify-center py-6">
          <div
            className="
        w-8 h-8
        border-4
        border-gray-300
        border-t-blue-600
        rounded-full
        animate-spin
      "
          />
        </div>
      }
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          p-4
        "
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default GameGrid;
