import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactService } from "../../services/contactService";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
    errors: {},
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (formStatus.errors[name]) {
      setFormStatus((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fix the errors below",
        errors,
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending your message...",
      errors: {},
    });

    try {
      const response = await contactService.submitContact(formData);

      if (response.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! We'll contact you within 24 hours.",
          errors: {},
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          budget: "",
          timeline: "",
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again.",
        errors: {},
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="contact-form-container"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={formStatus.errors.name ? "error" : ""}
            placeholder="John Doe"
          />
          {formStatus.errors.name && (
            <span className="error-message">{formStatus.errors.name}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formStatus.errors.email ? "error" : ""}
              placeholder="john@example.com"
            />
            {formStatus.errors.email && (
              <span className="error-message">{formStatus.errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={formStatus.errors.phone ? "error" : ""}
              placeholder="(555) 123-4567"
            />
            {formStatus.errors.phone && (
              <span className="error-message">{formStatus.errors.phone}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select project type</option>
            <option value="commercial">Commercial Construction</option>
            <option value="residential">Residential Building</option>
            <option value="renovation">Renovation</option>
            <option value="interior">Interior Finishing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget</option>
              <option value="under100k">Under $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k-500k">$250,000 - $500,000</option>
              <option value="500k-1m">$500,000 - $1,000,000</option>
              <option value="over1m">Over $1,000,000</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="timeline">Timeline</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6-12months">6-12 months</option>
              <option value="planning">Just planning</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={formStatus.errors.message ? "error" : ""}
            rows="5"
            placeholder="Tell us about your project..."
          ></textarea>
          {formStatus.errors.message && (
            <span className="error-message">{formStatus.errors.message}</span>
          )}
        </div>

        {formStatus.submitted && (
          <div
            className={`form-message ${
              formStatus.success
                ? "success"
                : formStatus.errors
                ? "error"
                : "info"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p className="form-note">* Required fields</p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
