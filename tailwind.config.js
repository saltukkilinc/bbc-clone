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
        'img': 'rgba(0, 0, 0, 0.5) 0px -50px 80px 0px inset',
      }
    },
  },
  plugins: [],
};


