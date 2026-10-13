import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        brand: {
          red: {
            DEFAULT: "#E50914",
            hover: "#CC0812",
          },
          green: {
            DEFAULT: "#5CB811",
            hover: "#4E9D0E",
          },
          black: "#0A0A0A",
        },
        studio: {
          bg: "#FFFFFF",
          muted: "#F7F7F8",
          subtle: "#EFEFF1",
          border: "#E5E5E7",
          dark: "#141416",
        },
      },
      letterSpacing: {
        widest: "0.2em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
} satisfies Config;
