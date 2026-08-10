import type { Game } from "../hooks/useGames";

const games: Game[] = [
  {
    id: 1,
    name: "Grand Theft Auto V",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 97,
    rating_top: 5,
  },

  {
    id: 2,
    name: "The Witcher 3: Wild Hunt",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 92,
    rating_top: 5,
  },

  {
    id: 3,
    name: "God of War",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    parent_platforms: [
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 4, name: "PC", slug: "pc" } },
    ],
    metacritic: 94,
    rating_top: 5,
  },

  {
    id: 4,
    name: "Minecraft",
    background_image:
      "https://placehold.co/900x500/1e293b/ffffff?text=Minecraft",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
    ],
    metacritic: 93,
    rating_top: 5,
  },

  {
    id: 5,
    name: "Red Dead Redemption 2",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 97,
    rating_top: 5,
  },

  {
    id: 6,
    name: "Cyberpunk 2077",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 86,
    rating_top: 4,
  },

  {
    id: 7,
    name: "Elden Ring",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 96,
    rating_top: 5,
  },

  {
    id: 8,
    name: "Hogwarts Legacy",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 84,
    rating_top: 4,
  },

  {
    id: 9,
    name: "Marvel's Spider-Man Remastered",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    parent_platforms: [
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 4, name: "PC", slug: "pc" } },
    ],
    metacritic: 87,
    rating_top: 4,
  },

  {
    id: 10,
    name: "Forza Horizon 5",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    parent_platforms: [
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 4, name: "PC", slug: "pc" } },
    ],
    metacritic: 92,
    rating_top: 5,
  },

  {
    id: 11,
    name: "Hades",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 93,
    rating_top: 5,
  },

  {
    id: 12,
    name: "Resident Evil Village",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 84,
    rating_top: 4,
  },

  {
    id: 13,
    name: "Assassin's Creed Valhalla",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 80,
    rating_top: 4,
  },

  {
    id: 14,
    name: "Rocket League",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 86,
    rating_top: 4,
  },

  {
    id: 15,
    name: "DOOM Eternal",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 88,
    rating_top: 4,
  },

  {
    id: 16,
    name: "Horizon Zero Dawn",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
    ],
    metacritic: 84,
    rating_top: 4,
  },

  {
    id: 17,
    name: "Death Stranding",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1190460/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
    ],
    metacritic: 86,
    rating_top: 4,
  },

  {
    id: 18,
    name: "Sekiro: Shadows Die Twice",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 90,
    rating_top: 5,
  },

  {
    id: 19,
    name: "Resident Evil 4",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 93,
    rating_top: 5,
  },

  {
    id: 20,
    name: "Baldur's Gate 3",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 96,
    rating_top: 5,
  },

  {
    id: 21,
    name: "Portal 2",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    parent_platforms: [{ platform: { id: 4, name: "PC", slug: "pc" } }],
    metacritic: 95,
    rating_top: 5,
  },

  {
    id: 22,
    name: "Dying Light",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/239140/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 74,
    rating_top: 4,
  },

  {
    id: 23,
    name: "Control",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 82,
    rating_top: 4,
  },

  {
    id: 24,
    name: "Hollow Knight",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 87,
    rating_top: 5,
  },

  {
    id: 25,
    name: "Stardew Valley",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    parent_platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 1, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    metacritic: 89,
    rating_top: 5,
  },
];

export default games;
