/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/ehga-tailwind/layouts/**/*.html',
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './static/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'audi-blue': '#1eaef7',
        'audi-blue-light': '#cff0ff',
        'audi-blue-lighter': '#e3f7ff',
        'audi-blue-dark': '#0062ba',
        'audi-blue-darker': '#022f51',
        'audi-purple': '#3f3161',
        'audi-yellow': '#ffda06',
        'audi-green': '#17c96b',
        'audi-red': '#e23b53'
      },
      fontFamily: {
        'din': ['DIN', 'sans-serif'],
        'din-bold': ['DIN-bold', 'sans-serif']
      },
      maxWidth: {
        '210px': '210px',
        '120px': '120px',
        '300px': '300px',
        '336px': '336px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}