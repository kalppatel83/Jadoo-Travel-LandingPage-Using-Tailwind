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
        offWhite: "#f5f5f5",
        customBlack: "#080809",
        purple: "#8A79DF",
        lightBlue: "#59B1E6",
        pinkish: "#DFD7F9",
        lightOrange: "#FF946D",
      },
    },
    dropShadow: {
      sm: "0 8px 8px rgba(223, 105, 81, 0.50)",
    },
    boxShadow: {
      lg: "10px 0px 10px 0px rgba(89, 177, 230, 1)",
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
    },
    blur: {
      "3xl": "130px",
    },
    lineHeight: {
      12: "4rem",
    },
  },
  plugins: [],
};
