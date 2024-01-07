import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#f5f5f4", // stone-100
        black: "#0f172a", // slate-900
        primary: {
          DEFAULT: "#059669", // emerald-600
          dark: "#047857", // emerald-700
          light: "#10b981", // emerald-500
        },
        secondary: {
          DEFAULT: "#f59e0b", // amber-500
          light: "#fcd34d", // amber-300
        },
        warning: {
          DEFAULT: "#EF4444", // red-500
          light: "#F87171", // red-400
        },
      },
    },
  },
  plugins: [],
}
export default config
