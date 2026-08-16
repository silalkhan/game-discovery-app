import type { Game } from "../entities/Game";

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
    description:
      "Grand Theft Auto V is an open-world action-adventure game set in the fictional state of San Andreas. Players follow three criminals whose lives become connected through dangerous heists, missions, and criminal activities.",
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
    description:
      "The Witcher 3: Wild Hunt is an open-world role-playing game following Geralt of Rivia, a monster hunter searching for his adopted daughter while facing wars, dangerous creatures, and difficult choices.",
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
    description:
      "God of War follows Kratos and his young son Atreus as they journey through the dangerous world of Norse mythology. Together they face powerful enemies while learning about family, loss, and responsibility.",
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
    description:
      "Minecraft is a sandbox game where players explore procedurally generated worlds, collect resources, build structures, craft items, and survive against dangerous creatures.",
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
    description:
      "Red Dead Redemption 2 is an open-world western adventure following Arthur Morgan and the Van der Linde gang. Players explore the American frontier while surviving missions, conflicts, and the decline of the outlaw era.",
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
    description:
      "Cyberpunk 2077 is an open-world action RPG set in Night City, a futuristic metropolis controlled by corporations and gangs. Players control V, a mercenary searching for a mysterious implant that could change their life.",
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
    description:
      "Elden Ring is an open-world action RPG set in the mysterious Lands Between. Players explore a vast world, fight powerful enemies and bosses, discover hidden areas, and create their own character and playstyle.",
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
    description:
      "Hogwarts Legacy is an open-world action RPG set in the Wizarding World during the 1800s. Players create a student, attend Hogwarts, learn magical abilities, explore the surrounding world, and uncover an ancient mystery.",
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
    description:
      "Marvel's Spider-Man Remastered is an action-adventure game where players control Peter Parker as Spider-Man. Swing across New York City, fight criminals, complete missions, and protect the city from dangerous threats.",
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
    description:
      "Forza Horizon 5 is an open-world racing game set across a fictionalized version of Mexico. Players drive a large collection of cars, compete in races, explore the world, and customize their vehicles.",
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
    description:
      "Hades is a fast-paced action roguelike game where Zagreus, the son of Hades, attempts to escape the Underworld. Players battle through changing environments while gaining new abilities and uncovering the story of the gods.",
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
    description:
      "Resident Evil Village is a survival horror game following Ethan Winters as he searches for his kidnapped daughter in a mysterious European village filled with terrifying creatures and dangerous enemies.",
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
    description:
      "Assassin's Creed Valhalla follows Eivor, a Viking warrior who leads their clan from Norway to England. Players explore the world, raid settlements, build alliances, and take part in conflicts between kingdoms.",
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
    description:
      "Rocket League combines football with rocket-powered cars. Players compete in fast matches where they drive, jump, boost, and perform aerial moves to score goals against the opposing team.",
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
    description:
      "DOOM Eternal is a fast-paced first-person shooter where players take control of the Doom Slayer and fight armies of demons. The game focuses on aggressive combat, powerful weapons, movement, and resource management.",
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
    description:
      "Horizon Zero Dawn is an open-world action RPG following Aloy, a young hunter living in a world dominated by mysterious machines. She explores the wilderness, hunts machines, and discovers the secrets of her world.",
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
    description:
      "Death Stranding is an unusual action game set in a world separated by a mysterious catastrophe. Players control Sam Porter Bridges as he travels across dangerous landscapes and reconnects isolated communities.",
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
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game set in a fictionalized version of 16th-century Japan. Players control a shinobi who uses precise sword combat, stealth, and special abilities to defeat challenging enemies.",
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
    description:
      "Resident Evil 4 follows Leon S. Kennedy as he travels to a remote European village to rescue the president's daughter. Players fight infected enemies, solve puzzles, manage resources, and uncover a dangerous conspiracy.",
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
    description:
      "Baldur's Gate 3 is a fantasy role-playing game based on Dungeons & Dragons. Players create a character, explore a large world, form a party, make important choices, and battle enemies using turn-based combat.",
  },

  {
    id: 21,
    name: "Portal 2",
    background_image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    parent_platforms: [{ platform: { id: 4, name: "PC", slug: "pc" } }],
    metacritic: 95,
    rating_top: 5,
    description:
      "Portal 2 is a puzzle-platform game where players use the Portal Gun to create linked portals and solve challenging test chambers. The game combines physics-based puzzles with a humorous story and memorable characters.",
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
    description:
      "Dying Light is an open-world survival action game set in a city overrun by zombies. Players use parkour to move through the environment, search for supplies, complete missions, and survive increasingly dangerous nights.",
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
    description:
      "Control is a supernatural action-adventure game following Jesse Faden as she explores a mysterious government building affected by strange paranormal forces. Players use weapons and supernatural abilities to uncover the building's secrets.",
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
    description:
      "Hollow Knight is a challenging 2D action-adventure game set in the mysterious underground kingdom of Hallownest. Players explore interconnected areas, fight strange creatures, discover secrets, and face powerful bosses.",
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
    description:
      "Stardew Valley is a farming and life simulation game where players inherit an old farm and work to restore it. Players can grow crops, raise animals, explore mines, build relationships, and become part of the local community.",
  },
];

export default games;