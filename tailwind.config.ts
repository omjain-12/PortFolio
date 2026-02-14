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
        background: "#0f172a",
        foreground: "#e2e8f0",
        muted: "#94a3b8",
        panel: "#111b32",
        border: "rgba(148, 163, 184, 0.2)",
        accentFrom: "#ff4b2b",
        accentTo: "#ff8a3d",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(148, 163, 184, 0.15), 0 20px 45px -25px rgba(0, 0, 0, 0.55)",
        cardHover:
          "0 0 0 1px rgba(255, 75, 43, 0.5), 0 24px 50px -25px rgba(255, 75, 43, 0.3)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #ff4b2b 0%, #ff8a3d 100%)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;