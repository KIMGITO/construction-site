import api from "./api";

export const projectService = {
  getProjects: async (params = {}) => {
    try {
      const response = await api.get("/projects", { params });
      return {
        success: true,
        data: response.data || response,
        pagination: response.pagination || null,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch projects",
        data: [],
      };
    }
  },

  getProjectBySlug: async (slug) => {
    try {
      const response = await api.get(`/projects/${slug}`);
      return {
        success: true,
        data: response.data || response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch project",
        data: null,
      };
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await api.get(`/projects/id/${id}`);
      return {
        success: true,
        data: response.data || response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch project",
        data: null,
      };
    }
  },

  getFeaturedProjects: async (limit = 3) => {
    try {
      const response = await api.get("/projects/featured", {
        params: { limit },
      });
      return {
        success: true,
        data: response.data || response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch featured projects",
        data: [],
      };
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get("/projects/categories");
      return {
        success: true,
        data: response.data || response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch categories",
        data: [],
      };
    }
  },

  searchProjects: async (query) => {
    try {
      const response = await api.get("/projects/search", {
        params: { q: query },
      });
      return {
        success: true,
        data: response.data || response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to search projects",
        data: [],
      };
    }
  },
};
