import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add timestamp to prevent caching
    if (config.method === "get") {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.code === "ECONNABORTED") {
      return Promise.reject({ message: "Request timeout. Please try again." });
    }

    if (error.response) {
      const { status, data } = error.response;

      // Handle 401 Unauthorized
      if (status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      // Handle 403 Forbidden
      if (status === 403) {
        console.error("Access forbidden");
      }

      // Handle 404 Not Found
      if (status === 404) {
        console.error("Resource not found");
      }

      // Handle 500 Server Error
      if (status >= 500) {
        console.error("Server error");
      }

      return Promise.reject(data || { message: "An error occurred" });
    }

    if (error.request) {
      return Promise.reject({
        message: "Network error. Please check your connection.",
      });
    }

    return Promise.reject({ message: error.message || "An error occurred" });
  }
);

export default api;
