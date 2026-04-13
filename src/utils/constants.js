export const SITE_NAME = "Martine Construction";
export const SITE_URL =
  process.env.REACT_APP_SITE_URL || "https://martineconstruction.com";
export const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

export const PROJECT_CATEGORIES = [
  { value: "all", label: "All Projects" },
  { value: "commercial", label: "Commercial" },
  { value: "residential", label: "Residential" },
  { value: "renovation", label: "Renovations" },
];

export const SERVICE_TYPES = [
  { value: "commercial", label: "Commercial Construction" },
  { value: "residential", label: "Residential Building" },
  { value: "renovation", label: "Renovations" },
  { value: "interior", label: "Interior Finishing" },
  { value: "design", label: "Design-Build" },
  { value: "management", label: "Project Management" },
];

export const BUDGET_RANGES = [
  { value: "under100k", label: "Under $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "over1m", label: "Over $1,000,000" },
];

export const TIMELINES = [
  { value: "immediate", label: "Immediate" },
  { value: "1-3months", label: "1-3 months" },
  { value: "3-6months", label: "3-6 months" },
  { value: "6-12months", label: "6-12 months" },
  { value: "planning", label: "Just planning" },
];

// Company Info
export const COMPANY = {
  name: process.env.REACT_APP_COMPANY_NAME || "INTERLOCKING BLOCKS BUILDERS",
  tagline:
    process.env.REACT_APP_COMPANY_TAGLINE ||
    "Building futures, One block at a time",
  description:
    process.env.REACT_APP_COMPANY_DESCRIPTION ||
    "We build affordable, durable, and modern homes that help our clients save up to 30% on construction costs through innovative designs, efficient project management, timely delivery, and cost-effective building solutions.",
  founder: process.env.REACT_APP_COMPANY_FOUNDER || "Martin Mukundi Mbogo",
  established: process.env.REACT_APP_COMPANY_ESTABLISHED || "2020",
  yearsExperience: parseInt(process.env.REACT_APP_YEARS_EXPERIENCE) || 5,
  savingsPercentage: parseInt(process.env.REACT_APP_SAVINGS_PERCENTAGE) || 30,
  projectsCompleted: parseInt(process.env.REACT_APP_PROJECTS_COMPLETED) || 150,
};

// Contact Info
export const CONTACT = {
  phone: {
    primary: process.env.REACT_APP_PHONE_PRIMARY || "+254 740 074204",
    secondary: process.env.REACT_APP_PHONE_SECONDARY || "+254 740 074204",
    whatsapp: process.env.REACT_APP_WHATSAPP || "+254 740 074204",
  },
  email: {
    info: process.env.REACT_APP_EMAIL_INFO || "martinmukundi010@gmail.com",
    sales: process.env.REACT_APP_EMAIL_SALES || "martinmukundi010@gmail.com",
  },
  address: {
    street: process.env.REACT_APP_ADDRESS_STREET || "Thika Road",
    area: process.env.REACT_APP_ADDRESS_AREA || "Juja",
    city: process.env.REACT_APP_ADDRESS_CITY || "Juja",
    county: process.env.REACT_APP_ADDRESS_COUNTY || "Kiambu",
    country: process.env.REACT_APP_ADDRESS_COUNTRY || "Kenya",
    full: `${process.env.REACT_APP_ADDRESS_STREET || "Thika Road"}, ${
      process.env.REACT_APP_ADDRESS_AREA || "Juja"
    }, ${process.env.REACT_APP_ADDRESS_COUNTRY || "Kenya 🇰🇪"}`,
  },
};

// Social Media
export const SOCIAL = {
  facebook:
    process.env.REACT_APP_FACEBOOK_URL ||
    "https://www.facebook.com/profile.php?id=100071149261114",
  tiktok:
    process.env.REACT_APP_TIKTOK_URL || "https://www.tiktok.com/@eng.martin001",
  youtube:
    process.env.REACT_APP_YOUTUBE_URL ||
    "https://instagram.com/interlockingblocksbuilders",
  instagram:
    process.env.REACT_APP_INSTAGRAM_URL ||
    "https://instagram.com/interlockingblocksbuilders",
  handle: process.env.REACT_APP_SOCIAL_HANDLE || "INTERLOCKING BLOCKS BUILDERS",
};

// Business Hours
export const HOURS = {
  weekday:
    process.env.REACT_APP_HOURS_WEEKDAY || "Monday - Friday: 8:00 AM - 5:00 PM",
  saturday:
    process.env.REACT_APP_HOURS_SATURDAY || "Saturday: 8:00 AM - 5:00 PM",
  sunday: process.env.REACT_APP_HOURS_SUNDAY || " Closed",
};

// Services
export const SERVICES_LIST = (
  process.env.REACT_APP_SERVICES ||
  "Affordable home construction,Block production,Roofing installation and repair,Plumbing and electrical services,Interior and exterior finishing,Professional painting services,Home renovation and remodeling,Landscaping design and installation,Cabro production and installation,Wall skimming and plaster finishing"
).split(",");

// Team Members
// export const TEAM = {
//   ceo: process.env.REACT_APP_TEAM_CEO || "Martin Mukundi Mbogo",
//   blocksProduction:
//     process.env.REACT_APP_TEAM_BLOCKS_PRODUCTION || "Dennis Murimi",
//   assistant: process.env.REACT_APP_TEAM_ASSISTANT || "Daniel Simiyu",
//   secretary: process.env.REACT_APP_TEAM_SECRETARY || "Silvia Nyakio",
// };
export const TEAM = [
  {
    name: process.env.REACT_APP_TEAM_CEO_NAME || "Martin Mukundi",
    role: process.env.REACT_APP_TEAM_CEO_ROLE || "Founder & CEO",
    bio:
      process.env.REACT_APP_TEAM_CEO_BIO ||
      "Driven by a vision to make sustainable housing accessible, Martin founded Interlocking Blocks Builders to pioneer cost-effective, eco-friendly construction technology. With over five years of leadership in innovative building methods, he guides the firm’s strategic growth and commitment to engineering excellence.",
    image: process.env.REACT_APP_TEAM_CEO_IMAGE || null,
    initials: "MM",
  },
  {
    name: process.env.REACT_APP_TEAM_BLOCKS_PRODUCTION || "Peter Muriuki",
    role: "Head of Blocks Production",
    bio: "Peter bridges the gap between raw materials and structural integrity. He manages the precision manufacturing of our interlocking blocks, implementing rigorous quality control standards to ensure every unit delivers maximum durability and thermal efficiency for our clients' projects.",
    image: null,
    initials: "PM",
  },
  {
    name: process.env.REACT_APP_TEAM_ASSISTANT || "Daniel Simiyu",
    role: "Operations Assistant",
    bio: "The engine behind our daily workflows, Daniel specializes in logistical coordination and site readiness. By streamlining the movement of materials and manpower, he ensures that complex construction timelines remain on track and operational hurdles are cleared before they impact the bottom line.",
    image: null,
    initials: "DS",
  },
  {
    name: process.env.REACT_APP_TEAM_SECRETARY || "Silvia Nyakio",
    role: "Administrative Secretary",
    bio: "Silvia is the central hub of our client relations and corporate governance. She orchestrates the firm’s administrative ecosystem from documentation to seamless communication ensuring that every project is backed by organized, professional, and transparent management.",
    image: null,
    initials: "SN",
  },
];

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.9,
};

export const BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  desktop: 1024,
  large: 1200,
};
