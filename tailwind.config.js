/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'light-blue': '#E1EFEF',
      'medium-blue': '#D1E0E0',
      'dark-purple': '#1A1921',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      zinc: colors.zinc,
      cyan: colors.cyan
    },
    fontFamily: {
      'number': ['Poppins', 'sans-serif']
    },
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif']
      },
      strokeWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}

