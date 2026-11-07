import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          light: "#e8c84a",
          dark: "#997819",
          muted: "#b8960c",
        },
        dark: {
          DEFAULT: "#07090d",
          surface: "#0f1218",
          card: "#131720",
          border: "#1a1f2e",
          hover: "#1e2436",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4af37, #997819)",
        "gold-gradient-h": "linear-gradient(90deg, #d4af37, #f0d060, #997819)",
        "dark-gradient": "linear-gradient(180deg, #07090d 0%, #0f1218 100%)",
      },
      animation: {
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-2%, -1%)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 16px rgba(212, 175, 55, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        gold: "0 0 20px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 0 40px rgba(212, 175, 55, 0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
