/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C134F",
        secondary: "#1D267D",
        third: "#5C469C",
        forth: "#D4ADFC",
      },
    },
  },
  plugins: [],
};
