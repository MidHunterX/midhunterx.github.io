import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./constituents/**/*.{js,ts,jsx,tsx,mdx}",
    "./world/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // enable dark mode via class strategy
  // darkMode: 'class',
  // The selector strategy replaced the class strategy in Tailwind CSS v3.4.1.
  // tailwindcss.com/docs/dark-mode
  darkMode: 'selector',

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
