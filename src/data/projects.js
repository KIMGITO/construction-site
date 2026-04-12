// projectData.js

const SHARED_BASE_URL = "https://www.youtube.com/embed/";
const SHARED_WATCH_URL = "https://www.youtube.com/watch?v=";

// Removed autoplay parameters since we're not embedding videos anymore
const VIDEO_PARAMS = "?rel=0&modestbranding=1";

// Higher quality thumbnail images with fallback
const getYouTubeThumbnail = (videoId, quality = "maxresdefault") => {
  // YouTube thumbnail URLs with different qualities
  const thumbnails = {
    maxresdefault: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    sddefault: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    hqdefault: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    mqdefault: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
  };

  // Return the requested quality, or fallback to hqdefault if maxres doesn't exist
  if (quality === "maxresdefault" && thumbnails.maxresdefault) {
    return thumbnails.maxresdefault;
  }

  return thumbnails[quality] || thumbnails.hqdefault;
};

// Alternative function that returns multiple image sources for progressive loading
export const getYouTubeThumbnailSet = (videoId) => {
  return {
    high: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    medium: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    low: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    fallback: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
  };
};

const contentMap = {
  1: {
    vid: "uhWpUaDQPNQ",
    desc: "A modern 3 bedroom house at Embu with just 20000 blocks & lightning construction speed.",
    shortDesc: "3 bedroom modern house in Embu",
  },
  2: {
    vid: "AKzLzqzW6iA",
    desc: "Amazing 2 bedrooms rental houses in Laikipia County built using interlocking blocks. Very smart and spacious rooms.",
    shortDesc: "2 bedroom rental houses in Laikipia",
  },
  3: {
    vid: "UX7RiN1khjg",
    desc: "17 bedsitters in a 50x100 Plot in Nyeri County. Perfect investment opportunity.",
    shortDesc: "17 bedsitters development in Nyeri",
  },
  4: {
    vid: "ORb8CnqHVTE",
    desc: "A complete 2 bedroom house in Kajiado using INTERLOCKING BLOCKS, only 1600 blocks consumed.",
    shortDesc: "2 bedroom eco-house in Kajiado",
  },
  5: {
    vid: "ZNs2idypWac",
    desc: "Construction of perimeter wall using INTERLOCKING BLOCKS in GILGIL. Done using colored Blocks.",
    shortDesc: "Colored block perimeter wall",
  },
  6: {
    vid: "Hyr0iJ7gcoU",
    desc: "INTERLOCKING BLOCKS to the world. It's cheap and affordable compared to any other stones.",
    shortDesc: "Affordable interlocking blocks",
  },
};

const baseProjects = [
  {
    id: 1,
    title: "Modern 3 Bedroom House",
    shortTitle: "3 Bedroom House",
    slug: "modern-3-bedroom",
    category: "Residential",
    // Use sddefault or hqdefault which are more reliable
    image: getYouTubeThumbnail("uhWpUaDQPNQ", "sddefault"),
    thumbnailSet: getYouTubeThumbnailSet("uhWpUaDQPNQ"),
  },
  {
    id: 2,
    title: "Commercial Rental Houses",
    shortTitle: "Rental Houses",
    slug: "nanyuki-2-bedroom-rental-houses",
    category: "Commercial",
    image: getYouTubeThumbnail("AKzLzqzW6iA", "sddefault"),
    thumbnailSet: getYouTubeThumbnailSet("AKzLzqzW6iA"),
  },
  {
    id: 3,
    title: "17 Bedsitters Development",
    shortTitle: "Bedsitters Project",
    slug: "bedsitters-rental-houses",
    category: "Commercial",
    image: getYouTubeThumbnail("UX7RiN1khjg", "sddefault"),
    thumbnailSet: getYouTubeThumbnailSet("UX7RiN1khjg"),
  },
  {
    id: 4,
    title: "Eco 2 Bedroom House",
    shortTitle: "2 Bedroom House",
    slug: "two-bedroom-in-kajiando",
    category: "Residential",
    image: getYouTubeThumbnail("ORb8CnqHVTE", "sddefault"),
    thumbnailSet: getYouTubeThumbnailSet("ORb8CnqHVTE"),
  },
  {
    id: 5,
    title: "Colored Block Wall",
    shortTitle: "Perimeter Wall",
    slug: "a-perimeter-wall",
    category: "Security",
    image: getYouTubeThumbnail("ZNs2idypWac", "sddefault"),
    thumbnailSet: getYouTubeThumbnailSet("ZNs2idypWac"),
  },
];

export const projects = baseProjects.map((project) => {
  const content = contentMap[project.id];
  return {
    ...project,
    description: content.desc,
    shortDescription: content.shortDesc,
    videoUrl: `${SHARED_BASE_URL}${content.vid}${VIDEO_PARAMS}`,
    videoOnYouTube: `${SHARED_WATCH_URL}${content.vid}`,
    videoId: content.vid,
    thumbnailFallback: getYouTubeThumbnail(content.vid, "hqdefault"),
  };
});
