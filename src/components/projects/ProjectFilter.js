import React from "react";
import { motion } from "framer-motion";
import "./ProjectFilter.css";

const ProjectFilter = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="project-filter">
      <div className="container">
        <motion.div
          className="filter-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <button
              key={category.value}
              className={`filter-btn ${
                activeFilter === category.value ? "active" : ""
              }`}
              onClick={() => onFilterChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectFilter;
