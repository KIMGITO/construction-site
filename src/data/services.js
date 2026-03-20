import {
  FaBuilding,
  FaHome,
  FaPaintRoller,
  FaDraftingCompass,
  FaTools,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Commercial Construction",
    slug: "commercial-construction",
    icon: FaBuilding,
    description:
      "State-of-the-art commercial spaces built to impress and endure.",
    longDescription:
      "From office buildings to retail centers, we deliver commercial spaces that combine functionality with aesthetic appeal. Our team ensures projects are completed on time and within budget.",
    features: [
      "Office Buildings",
      "Retail Centers",
      "Industrial Facilities",
      "Medical Buildings",
      "Educational Institutions",
    ],
    image: "/images/services/commercial.jpg",
  },
  {
    id: 2,
    title: "Residential Building",
    slug: "residential-building",
    icon: FaHome,
    description: "Custom homes that reflect your unique style and needs.",
    longDescription:
      "We build dream homes that families will enjoy for generations. From modern masterpieces to traditional classics, every detail is crafted with care.",
    features: [
      "Custom Homes",
      "Townhouses",
      "Luxury Estates",
      "Multi-Family Units",
      "Sustainable Homes",
    ],
    image: "/images/services/residential.jpg",
  },
  // {
  //   id: 3,
  //   title: "Renovations",
  //   slug: "renovations",
  //   icon: FaHardHat,
  //   description:
  //     "Transform your existing space with our expert renovation services.",
  //   longDescription:
  //     "Breathe new life into older properties while maintaining structural integrity. We specialize in both residential and commercial renovations.",
  //   features: [
  //     "Home Additions",
  //     "Kitchen Remodeling",
  //     "Bathroom Renovations",
  //     "Basement Finishing",
  //     "Office Renovations",
  //   ],
  //   image: "/images/services/renovations.jpg",
  // },
  {
    id: 4,
    title: "Interior Finishing",
    slug: "interior-finishing",
    icon: FaPaintRoller,
    description: "Premium interior finishes that add elegance to every corner.",
    longDescription:
      "Our attention to detail ensures flawless results in every project. We use high-quality materials and expert techniques for stunning interiors.",
    features: [
      "Drywall Installation",
      "Painting & Texturing",
      "Trim & Molding",
      "Flooring",
      "Custom Cabinetry",
    ],
    image: "/images/services/interior.jpg",
  },
  {
    id: 5,
    title: "Design-Build",
    slug: "design-build",
    icon: FaDraftingCompass,
    description:
      "Integrated design and construction services for seamless project delivery.",
    longDescription:
      "Our design-build approach streamlines the construction process, saving time and reducing costs while ensuring your vision is realized.",
    features: [
      "Architectural Design",
      "3D Rendering",
      "Material Selection",
      "Permit Processing",
      "Value Engineering",
    ],
    image: "/images/services/design.jpg",
  },
  {
    id: 6,
    title: "Project Management",
    slug: "project-management",
    icon: FaTools,
    description:
      "Comprehensive project management ensuring your construction project runs smoothly.",
    longDescription:
      "From conception to completion, our experienced project managers oversee every detail, ensuring quality, timeline, and budget adherence.",
    features: [
      "Budget Management",
      "Schedule Coordination",
      "Quality Control",
      "Subcontractor Management",
      "Risk Assessment",
    ],
    image: "/images/services/management.jpg",
  },
];
