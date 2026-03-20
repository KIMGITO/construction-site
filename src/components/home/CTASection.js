import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Start Your Construction Project?</h2>
          <p>
            Let's discuss your vision and bring it to life with our expertise
          </p>
          <div className="cta-buttons flex justify-between">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Free Consultation
            </Link>
            <Link to="/projects" className="btn btn-secondary btn-large">
              View Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
