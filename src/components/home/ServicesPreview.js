import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { FaHardHat, FaBuilding, FaHome, FaPaintRoller } from "react-icons/fa";
import "./ServicesPreview.css";
import { services } from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Our Services</h2>
          <p>Comprehensive construction solutions tailored to your needs</p>
        </motion.div>

        <div className="services-grid">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
