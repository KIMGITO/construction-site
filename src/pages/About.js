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
        description="Learn about INTERLOCKING BLOCKS BUILDERS' journey since 2020, specializing in interlocking building technology, block production, roofing, plumbing, electrical, finishing, painting, renovation, landscaping, cabro, and skimming services."
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
                <h2>Our Story</h2>
                <p>
                  <span className="text-2xl font-primary">I</span>n 2020,
                  <span className="font-bold font-primary">
                    {" "}
                    {ceo.name}
                  </span>{" "}
                  was working as a helper on construction sites, carrying blocks
                  and mixing cement, learning the ropes of the building trade.
                  During this time, he discovered{" "}
                  <span className="font-semibold font-primary">
                    interlocking building technology
                  </span>{" "}
                  and saw its incredible potential for faster construction, less
                  material waste, and stronger structures that could save
                  homeowners up to{" "}
                  <span className="text-2xl font-semibold font-primary">
                    30%{" "}
                  </span>
                  on construction costs.
                </p>
                <p>
                  <span className="text-2xl font-primary">D</span>riven by this
                  vision, {ceo.name.split(" ")[0]} gathered a small team of
                  like-minded craftsmen who shared his passion for innovation.
                  Together, they started{" "}
                  <span className="font-bold font-primary">{COMPANY.name}</span>{" "}
                  with just a few projects and an unwavering commitment to{" "}
                  <span className="font-primary font-semibold">quality</span>.
                  Their goal was simple:
                  <span className="italic font-semibold font-primary ">
                    make quality housing affordable while delivering the best
                    possible results
                  </span>
                  .
                </p>
                <p>
                  <span className="text-2xl font-primary">W</span>hat began as a
                  small team has grown into one of the most
                  <span className="font-bold capitalize font-primary">
                    {" "}
                    trusted
                  </span>{" "}
                  construction companies. Today, we specialize in{" "}
                  <span className="font-primary text-[16px]">
                    interlocking building technology
                  </span>
                  , our signature method along with a full range of services
                  including{" "}
                  <span className="font-primary text-[14px] italic">
                    roofing, plumbing, electrical, finishing, painting,
                    renovation, landscaping, cabro installation, and wall
                    skimming{" "}
                  </span>
                  . This approach{" "}
                  <span className="underline font-semibold">saves time</span>,
                  <span className="underline font-semibold">
                    {" "}
                    reduces resources
                  </span>
                  , and{" "}
                  <span className="underline font-semibold">
                    delivers superior outcomes
                  </span>
                  . From affordable homes to commercial spaces, we've built a
                  reputation for excellence, reliability, and innovation that
                  puts our clients first.
                </p>
                <p>
                  Our team of skilled professionals continues to grow, but our
                  core values remain unchanged:{" "}
                  <span className="text-base font-semibold">
                    quality craftsmanship, integrity, and a commitment
                  </span>{" "}
                  to{" "}
                  <span className="text-primary-600 text-2xl font-primary font-semibold">
                    Building Futures, One Block at a Time...
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
                  src="https://images.unsplash.com/photo-1664972988916-da679f400f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGNvc3RydWN0aW9uJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt={`${COMPANY.name} team meeting`}
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
