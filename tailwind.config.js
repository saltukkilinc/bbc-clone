/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': "600px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
    },
    extend: {
      screens: {
        'cs1': "650px",
        'cs2': "720px",
        'cs3': "800px",
        'cs4': "900px",
        'cs5': "1008px",
        'cs6': "1280px",
      },
      boxShadow: {
        'img': 'inset 0px -100px 80px 0px rgba(0,0,0,0.75)',
      },
      colors: {
        bbcBlue: "#47a1d8",
        bbcGreen: "#589e50",
        bbcPurple: "#362e67",
        bbcRed: "#ff0000",
        bbcYellow: "#ffff00",
        bbcPink: "#ff00ff",
        heading: "#4a4a4a"
      }
    },
  },
  plugins: [],
};


