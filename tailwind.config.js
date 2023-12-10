/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        nahdaDef: {
          primary: "#B6BBC4",

          secondary: "#31304D",

          accent: "#4c00ff",

          neutral: "#040D20",

          "base-100": "#161A30",

          info: "#0079e6",

          success: "#00394d",

          warning: "#e700",

          error: "#fc003c",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};


// Second Choice color: #ffba73
