import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { COMPANY, CONTACT, SERVICES_LIST } from "utils/constants";

const Footer = () => {
  return (
    <footer className="bg-secondary-500 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info Section */}
          <div>
            <h3 className="font-primary text-3xl mb-5 text-primary-500">
              {COMPANY.name}
            </h3>
            <p className="font-secondary leading-relaxed mb-5 text-gray-300">
              {COMPANY.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100079212934483"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@martinmukundi8397"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-primary text-xl mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary-500">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 no-underline transition-all duration-300 hover:text-primary-500 hover:pl-1.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 no-underline transition-all duration-300 hover:text-primary-500 hover:pl-1.5"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 no-underline transition-all duration-300 hover:text-primary-500 hover:pl-1.5"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 no-underline transition-all duration-300 hover:text-primary-500 hover:pl-1.5"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 no-underline transition-all duration-300 hover:text-primary-500 hover:pl-1.5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-primary text-xl mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary-500">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-gray-300">
              {SERVICES_LIST.map((service) => (
                <li>
                  {"✔ "}
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="font-primary text-xl mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    CONTACT.address.area
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT.address.full}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0" />
                <a
                  href={`tel:${CONTACT.phone.primary.replace(/\s/g, "")}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT.phone.primary}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="flex-shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT.phone.primary
                    .replace(/\s/g, "")
                    .replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT.phone.primary}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email.info}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT.email.info}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-5 border-t border-white/10 text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
