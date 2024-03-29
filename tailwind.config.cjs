/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primarybg: "#131316"
      },
    },
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
