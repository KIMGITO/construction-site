/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf6ed",
          100: "#f5edd9",
          200: "#ebdbb3",
          300: "#e1c98d",
          400: "#d7b767",
          500: "#c9a959", // Your primary color
          600: "#b8943f",
          700: "#8a6f2f",
          800: "#5c4a1f",
          900: "#2e2510",
        },
        secondary: {
          50: "#eef2f5",
          100: "#dde4eb",
          200: "#bbc9d7",
          300: "#99aec3",
          400: "#7793af",
          500: "#2c3e50", // Your secondary color
          600: "#233240",
          700: "#1a2530",
          800: "#121920",
          900: "#090c10",
        },
        accent: {
          500: "#e74c3c",
        },
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-up": "scaleUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
