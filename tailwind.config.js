/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0B1120",      // Your Deep Navy Background
        lightText: "#94A3B8",      // Professional Slate Gray
        designColor: "#00D1FF",    // Your Cyan Tech Accent
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #050810, -10px -10px 19px #111a30",
        shadowTwo: "inset 21px 21px 41px #050810, inset -21px -21px 41px #111a30",
      },
    },
  },
  plugins: [],
};