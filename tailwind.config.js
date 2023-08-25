/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#181E4B",
        secondary: "#5E6282",
        orange: "#DF6951",
        beige: "#FFF1DA",
        // white: "#f3f3f3",
      },
    },
    dropShadow: {
      sm: "0 8px 8px rgba(223, 105, 81, 0.50)",
    },
  },
  plugins: [],
};
