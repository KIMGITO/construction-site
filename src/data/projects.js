// projectData.js

const SHARED_BASE_URL = "https://www.youtube.com/embed/";
const SHARED_WATCH_URL = "https://www.youtube.com/watch?v=";

const VIDEO_PARAMS =
  "?rel=0&autoplay=1&mute=1&loop=1&modestbranding=1&controls=0";

const contentMap = {
  1: {
    vid: "uhWpUaDQPNQ",
    desc: "A modern 3 bed room house at Embu with just 20000 blocks & a lightening construction speed.",
  },
  2: {
    vid: "AKzLzqzW6iA",
    desc: "Amazing,2 bedrooms rental houses in Laikipia County built using interlocking blocks. Very smart and spacious rooms.",
  },
  3: {
    vid: "UX7RiN1khjg",
    desc: "17 bedsitters in a 50x100Plot in Nyeri County ",
  },
  4: {
    vid: "ORb8CnqHVTE",
    desc: "A complete 2 bedroom house in Kajiado using INTERLOCKING BLOCKS,only 1600 blocks consumed.",
  },
  5: {
    vid: "ZNs2idypWac",
    desc: "Construction of perimeter wall using INTERLOCKING BLOCKS in GILGIL.Done using coloured Blocks",
  },
  6: {
    vid: "Hyr0iJ7gcoU",
    desc: "INTERLOCKING BLOCKS to the world.Its cheap and affordable compared to any other stones.",
  },
 
};

const baseProjects = [
  {
    id: 1,
    title: "Amazing 3 bedroom  2000blocks @ Embu ",
    slug: "modern-3-bedroom",
    category: "Residential",
    image:
      "https://i.ytimg.com/an_webp/uhWpUaDQPNQ/mqdefault_6s.webp?du=3000&sqp=CPCu6c4G&rs=AOn4CLBERWr-xHmosXtV8gIist_AUiyJiQ",
    // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    title: "2 Bedroom Commercial Houses",
    slug: "Nanyuki-2-bedroom-rental-houses",
    category: "Commercial",
    image:
      "https://i.ytimg.com/an_webp/AKzLzqzW6iA/mqdefault_6s.webp?du=3000&sqp=CPCu6c4G&rs=AOn4CLBIaneStANCEZ7guJRNft8-gDVxEw",
    // "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "17 Bedsitters rental  houses.",
    slug: "bedsitters-rental-houses",
    category: "Comercial",
    image:
      "https://i.ytimg.com/an_webp/UX7RiN1khjg/mqdefault_6s.webp?du=3000&sqp=CPDD6c4G&rs=AOn4CLA27I5s9mNRBgTJyoVFImktqEdhbQ",
  },
  {
    id: 4,
    title: "2 Bedroom in Kajiando",
    slug: "two-bedroom-in-kajiando",
    category: "Residential",
    image:
      "https://i.ytimg.com/an_webp/ORb8CnqHVTE/mqdefault_6s.webp?du=3000&sqp=COSW6c4G&rs=AOn4CLD9fAJpD51WCnk1YCgAoeHUO0i0Qg",
  },
  {
    id: 5,
    title: "Perimeter wall",
    slug: "a-perimeter-wall",
    category: "Security",
    image:
      "https://i.ytimg.com/an_webp/ZNs2idypWac/mqdefault_6s.webp?du=3000&sqp=CIva6c4G&rs=AOn4CLB7bI8K3FeRubiyQaXRkGNxN6lQMA",
    // "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1950&q=80",
  },
 
];

export const projects = baseProjects.map((project) => {
  const content = contentMap[project.id];
  return {
    ...project,
    description: content.desc,
    videoUrl: `${SHARED_BASE_URL}${content.vid}${VIDEO_PARAMS}&playlist=${content.vid}`,
    videoOnYouTube: `${SHARED_WATCH_URL}${content.vid}`,
    videoId: content.vid,
  };
});
