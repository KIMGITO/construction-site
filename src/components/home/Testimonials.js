import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Innovations Inc.",
      content:
        "Martine Construction delivered our new headquarters ahead of schedule and under budget. Their attention to detail and professional approach made the entire process seamless.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Our dream home became reality thanks to the amazing team at Martine. They listened to our ideas and added their expertise to create something truly special.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Brown",
      role: "Property Developer",
      content:
        "I've worked with many construction companies, but Martine stands out for their quality, reliability, and excellent communication. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>What Our Clients Say</h2>
          <p>Trusted by businesses and homeowners alike</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaQuoteRight className="quote-icon" />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
