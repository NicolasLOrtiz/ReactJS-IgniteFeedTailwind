/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brand-300": "#00b37e",
        "brand-500": "#00875f",
      },
      gridTemplateColumns: {
        feed: "256px 1fr",
      },
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
