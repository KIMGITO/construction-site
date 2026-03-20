import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaTrophy, FaClock } from "react-icons/fa";
import "./StatsSection.css";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaBuilding />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <FaUsers />,
      value: "10+",
      label: "Team Members",
    },
    {
      icon: <FaTrophy />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <FaClock />,
      value: "100%",
      label: "On-Time Delivery",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
