const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F3F4ED",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
