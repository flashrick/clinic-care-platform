/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        ink: "#111A1F",
        slate: "#1D2D35",
        mint: "#6FF6C7",
        clay: "#F16E44",
        sand: "#F7F1E7",
      },
      boxShadow: {
        panel: "0 18px 40px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
