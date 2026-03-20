import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card-detailed"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className={`project-card-overlay ${isHovered ? "active" : ""}`}>
          <span className="project-card-category">{project.category}</span>
          <h3>{project.title}</h3>
          <div className="project-card-meta">
            <span>
              <FaMapMarkerAlt /> {project.location}
            </span>
            <span>
              <FaCalendarAlt /> {project.year}
            </span>
          </div>
          <Link to={`/projects/${project.id}`} className="btn btn-small">
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
