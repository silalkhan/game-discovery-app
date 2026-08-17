//Create this file only for mock Data.....

import type { Platform } from "../hooks/usePlatforms";

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: {
//     platform: Platform;
//   }[];
//   metacritic: number;
//   rating_top: number;
// }
//for description..
// Create this file only for mock data.



export default interface Game {
  id: number;
  name: string;
  background_image: string;
  description: string;

  parent_platforms: {
    platform: Platform;
  }[];

  metacritic: number;
  rating_top: number;

  genres: {
    id: number;
    name: string;
  }[];

  publishers: {
    id: number;
    name: string;
  }[];
}
