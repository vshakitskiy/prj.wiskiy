import { type Config } from "tailwindcss"

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        psr: ["psr", "sans-serif"],
        polite: ["polite", "sans-serif"],
      },
    },
  },
} satisfies Config
