import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/remix/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@rr-consult/tailwind-mux-ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["synthwave"],
  },
} satisfies Config;
