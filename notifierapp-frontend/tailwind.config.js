// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        "primary": "#010101",
        "secondary": "#191919",
        "tertiary": "#161616",
        "primary-blue": "#1890ff",
        "white": "#ffffff",
      },
    },
  },
  plugins: [],
};
