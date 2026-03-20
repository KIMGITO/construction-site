import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: ["123 Construction Avenue", "Building City, ST 12345"],
      link: "https://maps.google.com/?q=123+Construction+Avenue+Building+City+ST+12345",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568"],
      link: "tel:+15551234567",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: [
        "info@martineconstruction.com",
        "projects@martineconstruction.com",
      ],
      link: "mailto:info@martineconstruction.com",
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      link: null,
    },
  ];

  return (
    <motion.div
      className="contact-info-section"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Have a project in mind? We'd love to hear about it. Contact us today for
        a free consultation and estimate.
      </p>

      <div className="info-items">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            className="info-item"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="info-icon">{item.icon}</div>
            <div className="info-content">
              <h3>{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  className="info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title === "Visit Us"
                    ? "Get Directions"
                    : "Click to Contact"}{" "}
                  →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
