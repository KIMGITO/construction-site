import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";
import "./About.css";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        url="/about"
        description="Learn about Martine Construction's 25+ year history, our mission, values, and the expert team behind our successful construction projects."
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="about-page"
      >
        <div className="page-header">
          <h1>About Martine Construction</h1>
          <p>Building excellence with integrity and innovation since 1995</p>
        </div>

        <section className="about-story">
          <div className="container">
            <div className="story-content">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="story-text"
              >
                <h2>Our Story</h2>
                <p>
                  Founded in 1995 by John Martine, Martine Construction has
                  grown from a small family business into one of the region's
                  most trusted construction companies. Our journey began with a
                  simple mission: to build structures that stand the test of
                  time while exceeding client expectations.
                </p>
                <p>
                  Today, we continue that mission with every project, combining
                  traditional craftsmanship with modern innovation. Our team of
                  skilled professionals brings decades of combined experience to
                  every construction site, ensuring that each project receives
                  the attention to detail it deserves.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="story-image"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Martine Construction team"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <StatsSection />
        <ValuesSection />
        <TeamSection />
      </motion.div>
    </>
  );
};

export default About;
