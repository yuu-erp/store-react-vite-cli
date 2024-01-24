/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./packages/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "hiiii": "var(--color-bar)"
      }
    },
  },
  plugins: [],
}