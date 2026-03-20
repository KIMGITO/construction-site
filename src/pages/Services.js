import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import ServicesList from "../components/services/ServicesList";
import { services } from "../data/services";
import "./Services.css";

const Services = () => {
  return (
    <>
      <SEO
        title="Our Construction Services"
        url="/services"
        description="Explore Martine Construction's comprehensive services: commercial construction, residential building, renovations, interior finishing, design-build, and project management."
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="services-page"
      >
        <div className="page-header">
          <h1>Our Construction Services</h1>
          <p>Comprehensive construction solutions tailored to your needs</p>
        </div>

        <section className="services-intro">
          <div className="container">
            <p>
              At Martin Construction, we offer a full range of construction
              services to meet all your building needs. From concept to
              completion, our experienced team delivers quality craftsmanship
              and exceptional results. Whether you're planning a commercial
              development or renovating your home, we have the expertise to
              bring your vision to life.
            </p>
          </div>
        </section>

        <ServicesList />

        <section className="services-cta">
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and estimate</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Request a Quote
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Services;
