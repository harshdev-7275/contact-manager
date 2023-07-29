/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:"#5A59595",
        yellow: "#FFEAAE",
        "dark-yellow": "#FCAA3F",
        orange:"#F6820c",

      }
    },
  },
  plugins: [],
}