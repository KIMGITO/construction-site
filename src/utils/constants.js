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

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/martineconstruction",
  instagram: "https://instagram.com/martineconstruction",
  linkedin: "https://linkedin.com/company/martineconstruction",
  twitter: "https://twitter.com/martineconst",
};

export const CONTACT_INFO = {
  address: "123 Construction Avenue, Building City, ST 12345",
  phone: "+1-555-123-4567",
  email: "info@martineconstruction.com",
  hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
};

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
