/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2D1B14',
        latte: '#E3D5CA',
        caramel: '#C9A876'
      }
    },
  },
  plugins: [],
}
