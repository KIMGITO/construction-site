import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="service-card-detailed"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="service-card-header">
        <div className="service-card-icon">{service.icon}</div>
        <h3>{service.title}</h3>
      </div>
      <p className="service-card-description">{service.description}</p>
      <ul className="service-card-features">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <Link to={`/services/${service.slug}`} className="service-card-link">
        Learn More →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
