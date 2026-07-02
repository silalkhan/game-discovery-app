//I want to modified genres hook and use reactQuery fetch the data from the backend do as you do for useGenre and genreList

/**
 * 
import useData from "./useData";

interface Platforms{
    id:number;
    name:string;
    slug: string;
}

const usePlatforms = () => useData<Platforms>('/platforms/lists/parents')

export default usePlatforms
*/

//Refactors PlateFrom hook use reatQuery fetch data from backend

import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
//import apiClient from "../services/api-client";
//import type { FetchResponse } from "../services/api-client";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
//Then create new apiClient here for working with genres
const apiClient = new ApiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //     .then((res) => res.data),
    queryFn:apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
