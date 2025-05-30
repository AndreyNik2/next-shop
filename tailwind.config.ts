import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e91e63", // Колір бренду Stylna Kachka
      },
    },
  },
  plugins: [],
};
export default config;
