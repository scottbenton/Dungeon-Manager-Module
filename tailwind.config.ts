import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        gray: colors.slate,
      },
      fontFamily: {
        title: ["Playfair Display Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
  important: "#dungeon-manager",
} satisfies Config;
