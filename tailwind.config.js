/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      primary: {
        300: "#dfa087",
        400: "#db9478",
        500: "#d7896a",
        600: "#c17b5f",
      },
      slate: {
        300: "#5A7B99",
        400: "#506D88",
        500: "#466076",
        600: "#3C5266",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
