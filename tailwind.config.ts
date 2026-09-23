import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1712",
        parchment: "#EFE7D3",
        parchment2: "#E7DCC0",
        brass: "#A9793A",
        brassLight: "#C79A55",
        oxblood: "#6B2430",
        sage: "#4B5842",
        cream: "#F6F0E3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        wideish: "0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
