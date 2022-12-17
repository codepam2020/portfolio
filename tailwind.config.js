/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%": {
            color: "#ff0000",
          },
          "16.666666%": {
            color: "#ffff00",
          },
          "33.333333%": {
            color: "#00ff00",
          },
          "49.999999%": {
            color: "#00ffff",
          },
          "66.666666%": {
            color: "#0000ff",
          },
          "83.333333%": {
            color: "#ff00ff",
          },
          "100%": {
            color: "#ff0000",
          },
        },
      },
      animation: {
        cchange: "colorChange 10s linear infinite",
      },
      minHeight: {
        40: "10rem",
        60: "15rem",
        80: "20rem",
      },
      colors: {
        mgb: "#1e1f26",
      },
    },
  },
  plugins: [],
};
