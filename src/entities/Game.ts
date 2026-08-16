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
export interface Game {
  id: number;
  name: string;
  background_image: string;
  description: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  rating_top: number;
}export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

