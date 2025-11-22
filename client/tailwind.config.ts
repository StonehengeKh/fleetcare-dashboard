import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0f1216",
          soft: "#12161c",
        },
        card: {
          DEFAULT: "#161a20",
          edge: "#1b212a",
        },
        ok: "#22c55e",
        due: "#fbbf24",
        over: "#ef4444",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.35)",
        card: "0 1px 0 0 #1b212a, 0 8px 30px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      backgroundImage: {
        "soft-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
