/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#09172f",
        ink: "#14213d",
        cream: "#f8f3e8",
        paper: "#fffaf0",
        gold: "#f5bf2f",
        goldDark: "#d99612",
        success: "#2f9e68"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(9, 23, 47, 0.12)",
        glow: "0 18px 35px rgba(245, 191, 47, 0.28)"
      }
    }
  },
  plugins: []
};
