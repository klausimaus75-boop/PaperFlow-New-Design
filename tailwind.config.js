/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#24101f",
        ink: "#3a1b35",
        cream: "#f7efe8",
        paper: "#fff9f3",
        gold: "#c89b4f",
        goldDark: "#94692c",
        success: "#8d8f68",
        lavender: "#cbb8d6",
        bloom: "#6f3c64"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(36, 16, 31, 0.11)",
        glow: "0 18px 35px rgba(200, 155, 79, 0.26)"
      }
    }
  },
  plugins: []
};
