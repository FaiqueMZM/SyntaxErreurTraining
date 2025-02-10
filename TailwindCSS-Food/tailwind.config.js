/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

