/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#08111d",
        ink: "#111827",
        cream: "#f5ecdf",
        paper: "#fff8ee",
        gold: "#d7aa63",
        goldDark: "#a97837",
        success: "#b7c097",
        lavender: "#d8b7b5",
        bloom: "#c88f86",
        charcoal: "#15171a"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(8, 17, 29, 0.16)",
        glow: "0 18px 35px rgba(215, 170, 99, 0.28)"
      }
    }
  },
  plugins: []
};
