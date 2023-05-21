const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "6rem",
    //   },
    //   screens: {
    //     "2xl": "1360px",
    //   },
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-gold": "#f5bc51",
        "dark-gold": "#533519",
        "light-secondary": "#b18653",
        "dark-secondary": "#d5c5ae",
        // "primary-light": "rgb(247,248,252)",
        "primary-light": "#adcef3",
        primary: "#73a5d9",
        primary2: "#65c1e6",
        "primary-dark1": "#3782e6",
        "primary-dark2": "#4791de",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
