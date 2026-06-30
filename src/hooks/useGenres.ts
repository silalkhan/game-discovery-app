// I want to modified genres hook and use reactQuery fetch the data from the backend

/*
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
*/

import { useQuery } from "@tanstack/react-query";
//import genres from "../data/genres";
import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";
import genres from "../data/genres";// static data

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
/**The object that have returns from hook is three properties this object have same shape as QueryObjects we get from reactQuery
  //const useGenres = () => ({ data: genres, isLoading: false, error: null })
* so replace this object call to useQuery
 */
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    //here we aspect that a fetchResponse type genre we don't need to here arry here so here arry is already compare to result property of fetch responsive 
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    //now here we will apply staleTime becoz a list of genres are never changes  for now i want to set this 24hours
    staleTime: 24 * 60 * 60 * 1000,//24hrs
    // so next thing we can do here initialData so we don't have to go backend data show the user a spinner and skeleton we set the initail data to static data we laod on the top
    //initialData: genres,
    //another we have two options one
    initialData:{count:genres.length,results:genres}
    // after this we cannot see the spinner or skeleton of genre list becoz the data already in the cache

  });

export default useGenres;
