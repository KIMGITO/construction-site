import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        url="/404"
        description="The page you're looking for doesn't exist. Return to Martine Construction homepage."
      />

      <motion.div
        className="not-found-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="not-found-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound;
