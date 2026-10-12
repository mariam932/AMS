import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "var(--color-gold)",
          soft: "var(--color-gold-soft)",
          deep: "var(--color-gold-deep)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          elevated: "var(--color-ink-elevated)",
        },
        cream: "var(--color-cream)",
        sand: "var(--color-sand)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 18px 50px rgba(255, 190, 123, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      maxWidth: {
        site: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
