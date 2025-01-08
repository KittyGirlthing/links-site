//tailwind.config.js
const colors  = require('tailwindcss/colors')
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './pages/*.md'
  ],
  theme: {
    extend: {
      colors: {},
      borderWidth: {
        '3': '3px',
      },
      screens: {
        "2xl": '1920px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}