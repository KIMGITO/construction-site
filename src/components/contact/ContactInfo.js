import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactInfo.css";
import { CONTACT, HOURS } from "utils/constants";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: [`${CONTACT.address.full}`],
      link: "https://www.google.com/maps/place/Juja/@-1.1352471,36.4933926,88245m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182f4616a21d035d:0xd46c6efa3589f45f!8m2!3d-1.1018224!4d37.0144027!16s%2Fm%2F0j26w1m!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: [`Primary: ${CONTACT.phone.primary}`],
      link: `tel${CONTACT.phone.primary}`,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: [`${CONTACT.email.info}`],
      link: `mailto:${CONTACT.email.info}`,
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: [
        HOURS.weekday,
        HOURS.saturday,
        HOURS.sunday
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
