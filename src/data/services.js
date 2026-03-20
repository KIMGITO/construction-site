import {
  FaBuilding,
  FaPaintRoller,
  FaTools,
  FaHardHat,
  FaTruck,
  FaClipboardList,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Interlocking Building Construction",
    slug: "interlocking-building",
    icon: FaBuilding,
    description:
      "Modern interlocking block technology for stronger, faster, and more durable structures.",
    longDescription:
      "We specialize in innovative interlocking building technology that revolutionizes construction. Our interlocking blocks provide superior strength, faster construction time, better insulation, and reduced material waste. Perfect for residential homes, commercial buildings, and retaining walls.",
    features: [
      "Faster construction time",
      "Superior structural strength",
      "Better thermal insulation",
      "Reduced material waste",
      "Earthquake-resistant design",
      "Cost-effective building solution",
    ],
    image: "/images/services/interlocking.jpg",
  },
  {
    id: 2,
    title: "Construction Planning & Advisory",
    slug: "construction-planning",
    icon: FaClipboardList,
    description:
      "Expert guidance from concept to completion, ensuring your project's success.",
    longDescription:
      "Our planning and advisory services help you navigate every stage of your construction journey. From initial concept development to detailed project planning, we provide professional advice on design optimization, material selection, cost estimation, and construction methodology.",
    features: [
      "Project feasibility studies",
      "Budget planning and cost estimation",
      "Design optimization advice",
      "Material selection guidance",
      "Construction methodology consultation",
      "Permit and regulatory compliance",
    ],
    image: "/images/services/planning.jpg",
  },
  {
    id: 3,
    title: "Building Material Supply",
    slug: "material-supply",
    icon: FaTruck,
    description:
      "High-quality interlocking blocks and construction materials delivered to your site.",
    longDescription:
      "We supply premium interlocking blocks and all essential construction materials directly to your project site. Our supply chain ensures timely delivery of quality materials, helping you avoid delays and maintain construction momentum.",
    features: [
      "Premium interlocking blocks",
      "Cement and aggregates",
      "Steel reinforcement",
      "Roofing materials",
      "Plumbing and electrical supplies",
      "Timely delivery to site",
    ],
    image: "/images/services/supply.jpg",
  },
  {
    id: 4,
    title: "Construction Management & Oversight",
    slug: "construction-management",
    icon: FaTools,
    description:
      "Professional management ensuring quality, timeline, and budget adherence.",
    longDescription:
      "Our experienced construction managers oversee every aspect of your project. We coordinate workers, manage subcontractors, ensure quality control, monitor timelines, and keep your project on budget. You get peace of mind knowing your project is in expert hands.",
    features: [
      "Full project supervision",
      "Quality control and assurance",
      "Timeline management",
      "Budget monitoring",
      "Subcontractor coordination",
      "Regular progress reporting",
    ],
    image: "/images/services/management.jpg",
  },
  {
    id: 5,
    title: "Skilled Labor Supply",
    slug: "labor-supply",
    icon: FaHardHat,
    description:
      "Qualified and experienced workers for your construction needs.",
    longDescription:
      "We provide skilled and experienced construction workers trained in interlocking building techniques. Our workforce includes masons, carpenters, electricians, plumbers, and general laborers who are vetted, reliable, and committed to quality workmanship.",
    features: [
      "Skilled interlocking masons",
      "Certified electricians",
      "Licensed plumbers",
      "Experienced carpenters",
      "General laborers",
      "Safety-trained workforce",
    ],
    image: "/images/services/labor.jpg",
  },
  {
    id: 6,
    title: "Renovation & Remodeling",
    slug: "renovations",
    icon: FaPaintRoller,
    description:
      "Transform existing structures with our expert renovation services.",
    longDescription:
      "Whether it's a home addition, kitchen remodel, or complete property renovation, we breathe new life into existing structures. Our renovation services combine modern design with quality craftsmanship to transform your space.",
    features: [
      "Home additions",
      "Kitchen remodeling",
      "Bathroom renovations",
      "Commercial renovations",
      "Structural repairs",
      "Modern upgrades",
    ],
    image: "/images/services/renovations.jpg",
  },
];
