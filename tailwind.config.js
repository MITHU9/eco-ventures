/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        snow: "snow 10s linear infinite",
      },
      keyframes: {
        snow: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      colors: {
        blue: {
          100: "#ebf8ff",
          400: "#63b3ed",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
