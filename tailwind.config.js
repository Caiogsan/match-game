/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backCard' : "url('/src/img/back.png')"
      },
      fontFamily: {
        'login': ['Amatic SC', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

