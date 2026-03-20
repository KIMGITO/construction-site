export const validators = {
  required: (value) => {
    if (!value || value.trim() === "") {
      return "This field is required";
    }
    return null;
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  },

  phone: (value) => {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ""))) {
      return "Please enter a valid phone number";
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return null;
  },

  url: (value) => {
    try {
      new URL(value);
      return null;
    } catch {
      return "Please enter a valid URL";
    }
  },

  number: (value) => {
    if (isNaN(value) || value === "") {
      return "Please enter a valid number";
    }
    return null;
  },

  match: (fieldName, compareValue) => (value) => {
    if (value !== compareValue) {
      return `Must match ${fieldName}`;
    }
    return null;
  },
};

export const validateForm = (data, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = data[field] || "";

    fieldRules.forEach((rule) => {
      const error = rule(value);
      if (error && !errors[field]) {
        errors[field] = error;
      }
    });
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
