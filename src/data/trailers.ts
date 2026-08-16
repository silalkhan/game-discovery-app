import type Trailer from "../entities/Trailer";

const trailers: Record<number, Trailer[]> = {
  1: [
    {
      id: 1,
      name: "GTA V Trailer",
      preview: "https://placehold.co/900x500?text=GTA+V+Trailer",
      data: {
        480: "https://www.w3schools.com/html/mov_bbb.mp4",
        max: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    },
  ],

  2: [
    {
      id: 2,
      name: "The Witcher 3 Trailer",
      preview: "https://placehold.co/900x500?text=Witcher+3+Trailer",
      data: {
        480: "https://www.w3schools.com/html/mov_bbb.mp4",
        max: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    },
  ],
};

export default trailers;