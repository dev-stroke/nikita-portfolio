/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        light: "#f9f9f9",
        text: "#ffffff",
        muted: "#999999",
        border: "#2a2a2a",
        accent: {
          DEFAULT: "#a8efff",
          soft: "rgba(168,239,255,0.1)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
