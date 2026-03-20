import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      <SEO url="/" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyChooseUs />
        <ServicesPreview />
        <FeaturedProjects />
        {/* <Testimonials /> */}
        <CTASection />
      </motion.div>
    </>
  );
};

export default Home;
