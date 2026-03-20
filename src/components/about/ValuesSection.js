import React from "react";
import { motion } from "framer-motion";
import { FaGem, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import "./ValuesSection.css";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaGem />,
      title: "Quality Craftsmanship",
      description:
        "We never compromise on quality, using only the best materials and techniques to ensure lasting results that exceed industry standards.",
      points: [
        "Premium materials",
        "Expert workmanship",
        "Rigorous quality control",
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
        "Embracing new technologies and methods to deliver better, more efficient results while maintaining traditional craftsmanship.",
      points: [
        "Modern techniques",
        "Sustainable practices",
        "Continuous improvement",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      description:
        "Maintaining the highest safety standards on every project, protecting our team, clients, and the community.",
      points: ["OSHA compliant", "Regular training", "Safety audits"],
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
          <p>The principles that guide everything we do</p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
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
