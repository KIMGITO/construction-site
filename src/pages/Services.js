import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SEO from "../components/seo/SEO";
import "./Services.css";
import ServicesList from "components/services/ServicesList";
import { COMPANY } from "utils/constants";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Service images for each category
  const serviceImages = {
    "Affordable Home Construction": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7fa0c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Block Production": [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Roofing Installation & Repair": [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Plumbing & Electrical Services": [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Interior & Exterior Finishing": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Professional Painting Services": [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1562259949-8e76873d88c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1581092335443-2c8a3d7b7a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Home Renovation & Remodeling": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Landscaping Design & Installation": [
      "https://images.unsplash.com/photo-1558904541-efa843c96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Cabro Production & Installation": [
      "https://images.unsplash.com/photo-1558904541-efa843c96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7fa0c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
    "Wall Skimming & Plaster Finishing": [
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ],
  };

  const openModal = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const images = serviceImages[selectedService?.title] || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = serviceImages[selectedService?.title] || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <SEO
        title="Our Construction Services"
        url="/services"
        description={`${COMPANY.name} offers affordable home construction, premium blocks, roofing, plumbing, electrical, finishing, painting, renovation, landscaping, cabro, and skimming services.`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="services-page"
      >
        <div className="page-header">
          <h1>Our Construction Services</h1>
          <p>
            Building affordable homes that save you up to 30% on construction
            costs
          </p>
        </div>

        <section className="services-intro">
          <div className="container">
            <p>
              At {COMPANY.name}, we offer comprehensive construction services
              designed to save you money while delivering exceptional quality.
              From innovative interlocking blocks to complete home construction,
              our expert team ensures your dream home becomes reality. Save up
              to 30% on construction costs with our modern building solutions.
            </p>
          </div>
        </section>

        <section className="bg-primary-400/50">
          <ServicesList onServiceClick={openModal} />
        </section>

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

      {/* Service Modal with Image Preview */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-primary-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                <div className="relative bg-gray-900 h-64 md:h-auto">
                  <img
                    src={
                      serviceImages[selectedService.title]?.[
                        currentImageIndex
                      ] || selectedService.image
                    }
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Image Navigation Buttons */}
                  {serviceImages[selectedService.title]?.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-500/50 hover:bg-primary-900 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      >
                        <FaArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8  bg-primary-500/90 hover:bg-primary-900 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {serviceImages[selectedService.title]?.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-xs">
                      {currentImageIndex + 1} /{" "}
                      {serviceImages[selectedService.title]?.length}
                    </div>
                  )}
                </div>

                {/* Service Details Section */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-none">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary-500 text-3xl">
                      {React.createElement(selectedService.icon, {
                        className: "w-8 h-8",
                      })}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-primary font-bold text-secondary-500">
                      {selectedService.title}
                    </h2>
                  </div>

                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {selectedService.longDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-secondary-500 mb-3">
                      Key Features:
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-secondary-600"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-primary-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      to="/projects"
                      className="flex-1 border-2 border-primary-500 text-primary-500 text-center py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
