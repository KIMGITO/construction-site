import {
  FaBuilding,
  FaPaintRoller,
  FaTools,
  FaRulerCombined,
  FaHome,
  FaWater,
  FaSwatchbook,
  FaTree,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Affordable Home Construction",
    slug: "affordable-home-construction",
    icon: FaHome,
    description:
      "Quality homes built with interlocking technology that save you up to 30% on construction costs.",
    longDescription:
      "We specialize in building affordable homes using innovative interlocking block technology. This modern approach reduces construction time, material waste, and overall costs while delivering superior strength and durability. Perfect for homeowners looking to maximize value without compromising quality.",
    features: [
      "Save up to 30% on construction costs",
      "Faster completion time",
      "Superior structural strength",
      "Better thermal insulation",
      "Earthquake-resistant design",
      "Custom designs to fit your budget",
    ],
    image:
      "https://res.cloudinary.com/dhekeyvop/image/upload/v1775901634/IMG-20260408-WA0035_xrlron.jpg",
  },
  {
    id: 2,
    title: "Block Production",
    slug: "block-production",
    icon: FaBuilding,
    description:
      "Premium quality interlocking blocks available in both colored and non-colored finishes.",
    longDescription:
      "We manufacture high-quality interlocking blocks using the finest materials. Our blocks come in various colors and finishes, allowing you to create beautiful, durable structures without the need for additional plastering. Perfect for walls, pavements, and landscaping features.",
    features: [
      "Colored interlocking blocks",
      "Non-colored standard blocks",
      "Custom colors available",
      "High compressive strength",
      "Precision manufacturing",
      "Eco-friendly production process",
    ],
    image:
      "https://images.unsplash.com/photo-1716839134585-04345d8c7c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWludGVybG9ja2luZyUyMGJyaWNrc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Roofing Installation & Repair",
    slug: "roofing",
    icon: FaRulerCombined,
    description:
      "Expert roofing services using quality materials for lasting protection and style.",
    longDescription:
      "Our roofing specialists provide professional installation and repair services for all types of roofs. Whether you need a new roof for your home or commercial building, we use high-quality materials and proven techniques to ensure durability, weather resistance, and aesthetic appeal.",
    features: [
      "New roof installation",
      "Roof repair and maintenance",
      "Roof inspection services",
      "Various roofing materials",
      "Leak detection and repair",
      "Emergency roof services",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1683140940649-71864ae8156e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Plumbing & Electrical Services",
    slug: "plumbing-electrical",
    icon: FaWater,
    description:
      "Professional plumbing and electrical installations for safe, efficient systems.",
    longDescription:
      "Our certified plumbers and electricians ensure that all your installations meet safety standards and function flawlessly. From new construction wiring to plumbing fixture installations, we provide comprehensive services backed by years of experience.",
    features: [
      "Complete plumbing installation",
      "Electrical wiring and panels",
      "Water heating systems",
      "Lighting installation",
      "Leak detection and repair",
      "Safety inspection and certification",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 5,
    title: "Interior & Exterior Finishing",
    slug: "finishing",
    icon: FaPaintRoller,
    description:
      "Beautiful finishes that transform your space into something extraordinary.",
    longDescription:
      "Our finishing services add the final touches that make your home truly special. We specialize in both interior and exterior finishes using high-quality materials and expert techniques to create stunning results that last.",
    features: [
      "Wall skimming and plastering",
      "Ceiling installation",
      "Flooring solutions",
      "Tile installation",
      "Cabinetry and shelving",
      "Decorative moldings",
    ],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 6,
    title: "Professional Painting Services",
    slug: "painting",
    icon: FaSwatchbook,
    description:
      "Expert painting that brings color and life to your walls with flawless finishes.",
    longDescription:
      "Our professional painters deliver immaculate results using premium paints and proven techniques. Whether interior or exterior, residential or commercial, we ensure smooth, even coverage and lasting beauty that transforms your space.",
    features: [
      "Interior painting",
      "Exterior painting",
      "Decorative finishes",
      "Wallpaper installation",
      "Texture painting",
      "Color consultation services",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 7,
    title: "Home Renovation & Remodeling",
    slug: "renovation",
    icon: FaTools,
    description:
      "Transform your existing space with our expert renovation and remodeling services.",
    longDescription:
      "Breathe new life into your home with our comprehensive renovation services. From kitchen makeovers to complete home transformations, we handle every aspect with attention to detail and respect for your existing structure.",
    features: [
      "Kitchen remodeling",
      "Bathroom renovations",
      "Room additions",
      "Basement finishing",
      "Structural repairs",
      "Modern upgrades",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 8,
    title: "Landscaping Design & Installation",
    slug: "landscaping",
    icon: FaTree,
    description:
      "Beautiful outdoor spaces that complement your home and enhance your property.",
    longDescription:
      "Our landscaping services transform your outdoor spaces into beautiful, functional areas. From garden design to complete landscape installation, we create outdoor environments that reflect your style and enhance your property's value.",
    features: [
      "Garden design and installation",
      "Lawn establishment",
      "Tree and shrub planting",
      "Water features",
      "Outdoor lighting",
      "Irrigation systems",
    ],
    image:
      "https://images.unsplash.com/photo-1558904541-efa843c96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 9,
    title: "Cabro Production & Installation",
    slug: "cabro",
    icon: FaBuilding,
    description:
      "High-quality cabro paving blocks for driveways, walkways, and outdoor spaces.",
    longDescription:
      "We produce and install premium cabro paving blocks that add elegance and durability to your outdoor spaces. Perfect for driveways, walkways, patios, and commercial areas, our cabro blocks come in various shapes and colors to suit your design needs.",
    features: [
      "Quality cabro block production",
      "Professional installation",
      "Various colors and patterns",
      "Driveway paving",
      "Walkway installation",
      "Commercial paving solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1558904541-efa843c96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 10,
    title: "Wall Skimming & Plaster Finishing",
    slug: "skimming",
    icon: FaPaintRoller,
    description:
      "Smooth, flawless walls with our expert skimming and plaster finishing services.",
    longDescription:
      "Our skimming and plaster finishing services create the perfect foundation for painting and decorating. We achieve smooth, level surfaces that enhance the beauty of your interior spaces and provide a professional finish for all wall types.",
    features: [
      "Wall skimming and smoothing",
      "Plaster finishing",
      "Crack repair",
      "Surface preparation",
      "Cornice installation",
      "Decorative plasterwork",
    ],
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];
