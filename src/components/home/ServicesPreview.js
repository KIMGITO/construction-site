import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "data/services";

const ServicesPreview = () => {
  const previewServices = services.slice(0, 3);

  return (
    <section className="services-preview py-20 bg-secondary-50">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-secondary-500 mb-4 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary-500"></span>
          </h2>
          <p className="text-lg text-secondary-400">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-secondary-600/60 group-hover:bg-secondary-600/70 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center text-center text-white min-h-[320px] justify-center">
                <div className="service-icon text-5xl mb-4 text-primary-500 transition-transform duration-300 group-hover:scale-110">
                  {React.createElement(service.icon, {
                    className: "w-12 h-12",
                  })}
                </div>
                <h3 className="text-xl font-primary font-bold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/services`}
                  className="mt-4 inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors duration-300 text-sm font-semibold"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
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
          <Link to="/services" className="btn btn-primary inline-block">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
