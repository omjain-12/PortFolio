import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1120",
        foreground: "#e2e8f0",
        muted: "#94a3b8",
        panel: "#111a2e",
        border: "rgba(148, 163, 184, 0.22)",
        accentFrom: "#3b82f6",
        accentVia: "#8b5cf6",
        accentTo: "#22d3ee",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(148, 163, 184, 0.14), 0 28px 55px -30px rgba(0, 0, 0, 0.75)",
        cardHover:
          "0 0 0 1px rgba(59, 130, 246, 0.42), 0 30px 60px -30px rgba(139, 92, 246, 0.28)",
        glow: "0 0 0 1px rgba(34, 211, 238, 0.28), 0 0 36px rgba(59, 130, 246, 0.2)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(92deg, #3b82f6 0%, #8b5cf6 55%, #22d3ee 100%)",
        "panel-gradient": "linear-gradient(160deg, rgba(17,26,46,0.88) 0%, rgba(15,23,42,0.66) 100%)",
      },
      maxWidth: {
        content: "76rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;