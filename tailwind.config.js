/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'uber': "url('/src/assets/img/bguber.png')",
        'city': "url('/src/assets/img/bg-city.png')",
      }
    },
  },
  plugins: [],
}

