import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";
import { COMPANY, TEAM } from "../utils/constants";
import "./About.css";

const About = () => {
  // Get CEO details from TEAM array
  const ceo = TEAM.find((member) => member.role === "Founder & CEO") || TEAM[0];

  return (
    <>
      <SEO
        title="About Us"
        url="/about"
        description={`Learn about ${COMPANY.name} journey since its inception, specializing in interlocking building technology, roofing, plumbing, electrical, and full construction services led by ${ceo.name}.`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="about-page"
      >
        <div className="page-header">
          <h1>About {COMPANY.name}</h1>
          <p>{COMPANY.tagline}</p>
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
                <h2>Our Journey</h2>

                {/* Section 1: Education & Foundation */}
                <p>
                  <span className="text-2xl font-primary">T</span>he foundation
                  of
                  <span className="font-bold font-primary">
                    {" "}
                    {COMPANY.name}
                  </span>{" "}
                  began in 2018.
                  <span className="first-letter:font-bold first-letter:text-3xl ">
                    {" "}
                    {ceo.name}
                  </span>{" "}
                  started his technical journey at{" "}
                  <span className="font-semibold">Nyeri Technical</span>, where
                  he immersed himself in the engineering principles that govern
                  modern structures. This academic foundation provided the "why"
                  behind every block and beam we place today.
                </p>

                {/* Section 2: On-site Experience */}
                <p>
                  <span className="text-2xl font-primary ml-6">B</span>y 2020, theory
                  met reality. Martin took to the field as a helper on
                  construction sites, mixing cement, carrying blocks, and
                  mastering the building trade from the ground up. It was during
                  these long hours on site that he discovered{" "}
                  <span className="font-semibold font-primary text-primary-600">
                    Interlocking Building Technology
                  </span>
                  . He saw its potential to revolutionize the industry by
                  offering faster construction and stronger structures that
                  could save homeowners up to{" "}
                  <span className="font-bold text-xl font-primary">30%</span> on
                  construction costs.
                </p>

                {/* Section 3: Professional Growth & Company Launch */}
                <p >
                  <span className="text-2xl font-primary ml-6">M</span>artin’s vision
                  was fully realized during his time at the{" "}
                  <span className="font-semibold">Kenya Project Company</span>.
                  There, he gained specialized skills in international building
                  standards and innovative masonry. Armed with this expertise,
                  he founded{" "}
                  <span className="font-bold font-primary">{COMPANY.name}</span>
                  . What began as a small, dedicated team of craftsmen has grown
                  into a trusted leader in
                  <span className="italic">
                    {" "}
                    interlocking technology, roofing, plumbing, electrical
                    systems, and landscaping.
                  </span>
                </p>

                {/* Section 4: Mission & Values */}
                <p>
                  Today, our reputation is built on{" "}
                  <span className=" font-semibold">
                    excellence and reliability
                  </span>
                  . From affordable housing to complex commercial spaces, our
                  core values remain unchanged: quality craftsmanship, absolute
                  integrity, and a commitment to
                  <span className="border-l-4 border-black pl-4 bg-black/40 text-2xl font-primary font-semibold block mt-4">
                    Building Futures, One Block at a Time.
                  </span>
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
                  src="https://images.unsplash.com/photo-1664972988916-da679f400f2b?w=500&auto=format&fit=crop&q=60"
                  alt={`${COMPANY.name} team on site`}
                  loading="lazy"
                  className="rounded-lg shadow-xl"
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
