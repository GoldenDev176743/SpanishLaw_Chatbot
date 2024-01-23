import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        oswald: ["var(--font-oswald)"],
        open_sans: ["var(--font-open_sans)"],
        playpen_sans: ["var(--font-playpen_sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
