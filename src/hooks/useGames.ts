//here creating custom hooks for fetching games
/**
import type { GameQuery } from "../App";
import useData from "./useData";
//import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; //whole numbr
  //rating: number; //floating numbr
  //rating emojis according to rating top so remove rating.
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platform: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );

export default useGames;
 */
//Here we do refactor useGames hook into reactQuery

import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { FetchResponse } from "../services/api-client";

import type { Platform } from "./usePlatforms"; // we use common interface everyWhere
import ApiClient from "../services/api-client";
/** 
 * We should remove this interface.
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
  */

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
//Then create new apiClient here for working with genres
/*const apiClient = new ApiClient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    //   queryFn: () =>
    //     apiClient
    //       .get<FetchResponse<Game>>("/games", {
    //         params: {
    //           genres: gameQuery.genre?.id,
    //           //solve bug where platform playstation cannot show
    //           parent_platforms: gameQuery.platform?.id,
    //           ordering: gameQuery.sortOrder,
    //           search: gameQuery.searchText,
    //         },
    //       })
    //       .then((res) => res.data),
    //update version
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          //solve bug where platform playstation cannot show
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
*/
//Now use infiniteQuries so when you implement infiniteQuries so we replace useQuery to useInfiniteQuery

const apiClient = new ApiClient<Game>("/games");
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    //next we queryFn recevied  pageNumbr as parameter
    initialPageParam: 1, //provides the first page number.
    queryFn: (
      { pageParam }, //receives whatever page number React Query wants to fetch.
    ) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,// when calling the backend only pass in genreId
          //solve bug where platform playstation cannot show
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          // so the rawgAPI using a queryParameter called page also page_size and we should pass page paramter to backend
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24hr
  });

export default useGames;
