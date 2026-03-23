import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaClock, FaUsers, FaLeaf } from "react-icons/fa";
import "./WhyChooseUs.css";
import { COMPANY } from "utils/constants";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaMedal />,
      title: "5+ Years Experience",
      description:
        "Years of proven expertise in delivering quality construction projects.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "We respect your timeline and deliver projects as scheduled.",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your project success.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Building",
      description: "Eco-friendly practices and materials for a greener future.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Why Choose {COMPANY.name}?</h2>
          <p>We deliver excellence through experience and dedication</p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.slice(0,3).map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;