import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        climatize: {
          blue: "#0070C8",
          darkBlue: "#075E91",
          lightBlue: "#EAF7FF",
          white: "#FBFBFB",
          gray: "#334155",
          softGray: "#F1F5F9",
          accent: "#F59E0B",
          accentDark: "#B45309",
          accentLight: "#FEF3C7",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 94, 145, 0.16)",
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "air-flow":
          "radial-gradient(circle at 15% 10%, rgba(12, 127, 193, 0.16), transparent 32%), radial-gradient(circle at 85% 18%, rgba(234, 247, 255, 0.95), transparent 28%), linear-gradient(135deg, #FBFBFB 0%, #EAF7FF 50%, #FBFBFB 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
