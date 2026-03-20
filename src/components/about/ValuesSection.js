import React from "react";
import { motion } from "framer-motion";
import { FaGem, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import "./ValuesSection.css";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaGem />,
      title: "Interlocking Excellence",
      description:
        "We specialize in innovative interlocking building technology that delivers superior strength, faster construction, and enhanced durability for every project.",
      points: [
        "Precision engineering",
        "Faster completion",
        "Superior strength",
      ],
    },
    {
      icon: <FaHandshake />,
      title: "Integrity & Transparency",
      description:
        "Honest communication and transparent practices in everything we do, from detailed estimates to regular project updates.",
      points: ["Clear communication", "Fair pricing", "No hidden costs"],
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation & Excellence",
      description:
        "Embracing cutting-edge interlocking technology while maintaining traditional craftsmanship standards.",
      points: [
        "Interlocking systems",
        "Sustainable practices",
        "Continuous improvement",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      description:
        "Maintaining the highest safety standards on every project, protecting our team, clients, and the community.",
      points: ["Safety certified", "Regular training", "Quality assurance"],
    },
  ];

  return (
    <section className="values-section">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Our Core Values</h2>
          <p>The principles that guide our interlocking building expertise</p>
        </motion.div>

        <div className="values-grid">
          {values.slice(0,3).map((value, index) => (
            <motion.div
              key={index}
              className="value-card-detailed"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <ul className="value-points">
                {value.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
