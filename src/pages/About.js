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
        description="Learn about Martin Construction's journey since 2020, specializing in interlocking building technology, traditional block construction, and renovation services."
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="about-page"
      >
        <div className="page-header">
          <h1>About Martin Construction</h1>
          <p>Building with innovation, interlocking since 2020</p>
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
                  Founded in 2020 by Martin Mukundi, Martin Construction began
                  as a small family business with a revolutionary vision: to
                  transform construction through innovative interlocking
                  building technology. Starting with just a handful of projects
                  and a passion for quality, we quickly earned a reputation for
                  delivering stronger, faster, and more sustainable structures.
                </p>
                <p>
                  Our journey began with a simple mission: to build structures
                  that stand the test of time while exceeding client
                  expectations. Through our specialized interlocking building
                  system, we've revolutionized the way homes, commercial spaces,
                  and retaining walls are constructed in our region.
                </p>
                <p>
                  Today, we continue that mission with every project, combining
                  cutting-edge interlocking technology with traditional
                  craftsmanship. Our team of skilled professionals has grown
                  from a small family operation to one of the region's most
                  trusted construction companies, specializing in interlocking
                  building while also mastering traditional block construction
                  and renovation services.
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
                  src="https://images.unsplash.com/photo-1664972988916-da679f400f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGNvc3RydWN0aW9uJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Martin Construction team with interlocking building project"
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
