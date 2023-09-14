/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        work: ["Work Sans", "sans"],
        syne: ["Syne", "sans"],
      },
    },
  },
  plugins: [],
};
