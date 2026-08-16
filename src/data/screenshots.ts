import type Screenshot from "../entities/Screenshot";

const screenshots: Record<number, Screenshot[]> = {
  1: [
    {
      id: 101,
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
    },
    {
      id: 102,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
    },
    {
      id: 103,
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
    },
  ],

  2: [
    {
      id: 201,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
    },
    {
      id: 202,
      image:
        "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 800,
    },
  ],
};

export default screenshots;