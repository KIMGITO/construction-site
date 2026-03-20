import api from "./api";

export const contactService = {
  submitContact: async (data) => {
    try {
      const response = await api.post("/contact", data);
      return {
        success: true,
        data: response,
        message: "Message sent successfully",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to send message",
      };
    }
  },

  getFAQs: async () => {
    try {
      const response = await api.get("/faqs");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch FAQs",
        data: [],
      };
    }
  },

  getOfficeHours: async () => {
    try {
      const response = await api.get("/office-hours");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch office hours",
        data: null,
      };
    }
  },

  subscribeNewsletter: async (email) => {
    try {
      const response = await api.post("/newsletter/subscribe", { email });
      return {
        success: true,
        message: "Successfully subscribed to newsletter",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to subscribe",
      };
    }
  },
};
