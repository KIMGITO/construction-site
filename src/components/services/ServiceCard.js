import React from "react";
import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({ service, index, onClick }) => {
 

  return (
    <motion.div
      className="service-card-detailed group cursor-pointer"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="service-card-header">
          
          <h3 className="text-xl font-primary font-bold text-secondary-500 group-hover:text-primary-900 transition-colors">
            {service.title}
          </h3>
        </div>
        <p className="service-card-description text-secondary-400 mt-2">
          {service.description}
        </p>
        <div className="mt-4">
          <span className="text-primary-500 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn More →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
