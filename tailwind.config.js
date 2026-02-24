/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffcc00",
        dark: "#121212",
        "dark-lighter": "#1e1e1e",
      },
    },
  },
  plugins: [],
}
