/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./build/*.html", "./build/*js"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
  },
  plugins: [],
}

