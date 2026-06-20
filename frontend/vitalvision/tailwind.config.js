/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070D1A",
          900: "#0B1120",
          800: "#0F1929",
          700: "#152236",
          600: "#1A2740",
          500: "#1E304D",
          400: "#243A5C",
        },
        clinical: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          green: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};