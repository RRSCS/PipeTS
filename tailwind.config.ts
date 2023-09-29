import type { Config } from "tailwindcss";

export default {
  content: ["./src/remix/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
  },
} satisfies Config;
