// data/heroSlides.js - Updated with optimized images

import { getOptimizedImage } from '../utils/imageOptimizer';

export const heroSlides = [
  {
    id: 1,
    bgImage: getOptimizedImage("https://res.cloudinary.com/dhekeyvop/image/upload/v1775901638/IMG-20260408-WA0045_wzorqv.jpg", { width: 1920 }),
    title: "Build Smart, Save Big",
    subtitle: "Save up to 30% on construction costs",
    description:
      "INTERLOCKING BLOCKS BUILDERS delivers affordable homes using innovative interlocking technology. Build stronger, faster, and smarter while saving your pocket by 30%.",
    primaryCTA: { text: "View Our Work", link: "/projects" },
    secondaryCTA: { text: "Get Free Quote", link: "/contact" },
    overlay: "from-secondary-900/90 to-primary-500/80",
    tag: "1. The Foundation",
  },
  {
    id: 2,
    bgImage: getOptimizedImage(
      "https://res.cloudinary.com/dhekeyvop/image/upload/e_gen_background_replace:prompt_a%20paved%20background%0A/worker-builds-cinder-block-wall-new-home_odfol6.png",
      { width: 1920 }
    ),
    title: "Premium Interlocking Blocks",
    subtitle: "Colored & non-colored options available",
    description:
      "Our high-quality interlocking blocks come in various colors and finishes. No plastering needed - build beautiful, durable walls that stand the test of time with superior strength.",
    primaryCTA: { text: "View Blocks", link: "/services/block-production" },
    secondaryCTA: { text: "Order Now", link: "/contact" },
    overlay: "from-secondary-900/85 to-primary-600/75",
    tag: "2. Wall Construction",
  },
  {
    id: 3,
    bgImage: getOptimizedImage(
      "https://res.cloudinary.com/dhekeyvop/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1775901642/IMG-20260408-WA0007_imatoq.jpg",
      { width: 1920 }
    ),
    title: "Expert Roofing Services",
    subtitle: "Professional installation & repair",
    description:
      "From new roof installations to repairs and maintenance, our roofing experts ensure your home stays protected with quality materials and proven techniques that last for years.",
    primaryCTA: { text: "Roofing Services", link: "/services/roofing" },
    secondaryCTA: { text: "Get Quote", link: "/contact" },
    overlay: "from-secondary-900/80 to-primary-600/70",
    tag: "3. Roofing",
  },
  {
    id: 4,
    bgImage: getOptimizedImage(
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      { width: 1920 }
    ),
    title: "Plumbing & Electrical Installation",
    subtitle: "Certified professionals for safe installations",
    description:
      "Our certified plumbers and electricians ensure all installations meet safety standards. Reliable, efficient solutions for your home or business wiring and water systems.",
    primaryCTA: {
      text: "Plumbing Services",
      link: "/services/plumbing-electrical",
    },
    secondaryCTA: {
      text: "Electrical Services",
      link: "/services/plumbing-electrical",
    },
    overlay: "from-secondary-900/85 to-primary-500/75",
    tag: "4. Interior Systems",
  },
  {
    id: 5,
    bgImage: getOptimizedImage(
      "https://images.unsplash.com/photo-1765371514211-9b93c204bb81?w=1920&h=1080&fit=crop&auto=format&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdhbGwlMjBmaW5pc2h8ZW58MHx8MHx8fDA%3D",
      { width: 1920 }
    ),
    title: "Wall Skimming & Plastering",
    subtitle: "Smooth, flawless walls",
    description:
      "Achieve perfectly smooth walls with our expert skimming services. The perfect foundation for painting, creating professional-grade surfaces throughout your home.",
    primaryCTA: { text: "Skimming Services", link: "/services/skimming" },
    secondaryCTA: { text: "Get Quote", link: "/contact" },
    overlay: "from-secondary-900/85 to-primary-600/70",
    tag: "5. Wall Finishing",
  },
  {
    id: 6,
    bgImage: getOptimizedImage(
      "https://res.cloudinary.com/dhekeyvop/image/upload/w_1920,h_1080,c_fill/v1775907742/close-up-hand-painting-wall-with-roller_rmnmfj.jpg",
      { width: 1920 }
    ),
    title: "Professional Painting",
    subtitle: "Bring color to life with flawless finishes",
    description:
      "Our professional painters deliver immaculate results with premium paints. From interior walls to exterior facades, we ensure smooth, even coverage.",
    primaryCTA: { text: "Painting Services", link: "/services/painting" },
    secondaryCTA: { text: "Color Consultation", link: "/contact" },
    overlay: "from-secondary-900/90 to-primary-500/80",
    tag: "6. Painting",
  },
  {
    id: 7,
    bgImage: getOptimizedImage(
      "https://images.unsplash.com/photo-1763462980602-07eb86874ac4?w=1920&h=1080&fit=crop&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGF2aW5nJTIwc3RvbmVzfGVufDB8fDB8fHww",
      { width: 1920 }
    ),
    title: "Landscaping & Cabro installation",
    subtitle: "Beautiful outdoor spaces",
    description:
      "Transform your compound with professional landscaping and cabro paving. From gardens to driveways, we create stunning outdoor spaces that enhance property value.",
    primaryCTA: { text: "Landscaping", link: "/services/landscaping" },
    secondaryCTA: { text: "Cabro Paving", link: "/services/cabro" },
    overlay: "from-secondary-900/90 to-primary-500/80",
    tag: "7. Exteriors",
  },
  {
    id: 8,
    bgImage: getOptimizedImage(
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      { width: 1920 }
    ),
    title: "Renovation Experts",
    subtitle: "Transform your existing space",
    description:
      "Breathe new life into your home with our comprehensive renovation services. Kitchen makeovers, bathroom upgrades, or complete home transformations.",
    primaryCTA: { text: "Renovation Services", link: "/services/renovation" },
    secondaryCTA: { text: "Get Consultation", link: "/contact" },
    overlay: "from-secondary-900/85 to-primary-600/75",
    tag: "Maintenance",
  },
  {
    id: 9,
    bgImage: getOptimizedImage(
      "https://res.cloudinary.com/dhekeyvop/image/upload/w_1920,h_1080,f_auto,c_fill/v1775901628/IMG-20260408-WA0025_orvuxn.jpg",
      { width: 1920 }
    ),
    title: "Your Dream Home Awaits",
    subtitle: "Ready to move in or lease",
    description:
      "From affordable homes to luxury finishes, we deliver quality and innovation. Save 30% on your next building project with our interlocking technology.",
    primaryCTA: { text: "Start Your Project", link: "/contact" },
    secondaryCTA: { text: "View Portfolio", link: "/projects" },
    overlay: "from-secondary-900/90 to-primary-600/80",
    tag: "Completed Home",
  },
];