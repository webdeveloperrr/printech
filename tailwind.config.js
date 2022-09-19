/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#06165d",
        "main-yellow": "#f8c619",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}