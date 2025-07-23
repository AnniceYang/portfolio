/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#0a0a23",
        darkSecondary: "#1f003b",
        neonPink: "#ff8fab",
        neonPurple: "#d16fff",
        lightBackground: "#fff5f8",
        textPrimary: "#4a4a4a",
        textSecondary: "#7a7a7a",
        accentPurple: "#7f5af0",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        scaleIn: "scaleIn 1.2s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
