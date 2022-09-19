/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "*.{html,js}",
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